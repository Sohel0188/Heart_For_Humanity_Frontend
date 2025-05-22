const getValue = (id) => {
    const value = document.getElementById(id).value.trim();
    return value;
}
const clearForm = () => {
    document.getElementById("user_name").value = "";
    document.getElementById("first_name").value = "";
    document.getElementById("last_name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirm_password").value = "";
    
};

const handleRegistration = (event) => {
    event.preventDefault();
    const username = getValue("user_name");
    const first_name = getValue("first_name");
    const last_name = getValue("last_name");
    const email = getValue("email");
    const password = getValue("password");
    const confirm_password = getValue("confirm_password");
    
    const info = {
        username,
        first_name,
        last_name,
        email,
        password,
        confirm_password, 
    };

    console.log(info);

    if (password === confirm_password) {
        if (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)) {
            document.getElementById("registration_button").innerHTML = "Loding....";
            fetch("https://heart-for-humanity.vercel.app/account/register/", {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(info),
            })

                .then((res) => res.json())
                .then((data) => {
                    document.getElementById('error').innerText = data;
                    document.getElementById("registration_button").innerHTML = 'Register';
                    clearForm();
                });
        } else {
            document.getElementById("error").innerText =
                "Password must contain at least eight characters, including one letter, one number, and one special character.";
        }

    } else {

        document.getElementById("error").innerText = "Password Dosn't Match";
    };

    console.log(info);
};

// const handleLogin = (event) => {
//     event.preventDefault();
//     const username = getValue("user_name");
//     const password = getValue("password");
//     const value = {
//         username,
//         password,
//     };
//     console.log(value);
//     document.getElementById("login-button").innerHTML = "Loding....";
//     fetch("https://heart-for-humanity.vercel.app/account/login/", {
//         method: 'POST',
//         headers: {"Content-Type": "application/json"},
//         // body: JSON.stringify({ username:'username', password:'password' }),
//         body: JSON.stringify(value),
//     })
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//             if (data.token && data.user_id) {
//                 localStorage.setItem("token", data.token);
//                 localStorage.setItem("user_id", data.user_id);
//                 window.location.href = data.redirect_url;
//             }
//             else if (data.error) {
//                 document.getElementById('error').innerText = data.error;
//             }
//         });
// }
const handleLogin = async (event) => {
    event.preventDefault();
    const username = getValue("user_name");
    const password = getValue("password");
    const loginButton = document.getElementById("login-button");

    // Set loading state
    loginButton.innerHTML = "Loading...";

    const value = { username, password };
    console.log(value);

    try {
        const response = await fetch("http://127.0.0.1:8000/account/login/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(value),
        });

        const data = await response.json();
        console.log(data);

        if (data.token && data.user_id) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("user_id", data.user_id);
            window.location.href = data.redirect_url;
        } else {
            document.getElementById("error").innerText = data.error || "Login failed!";
        }
    } catch (error) {
        console.error("Network Error:", error);
        document.getElementById("error").innerText = "Something went wrong. Please try again.";
    } finally {
        // Reset button text
        loginButton.innerHTML = "Login";
    }
};


function user_profile() {
   
    const user = localStorage.getItem("user_id");
    fetch(`https://heart-for-humanity.vercel.app/account/list/${user}/`)
        .then((res) => res.json())
        .then((data) => {

            console.log(data.title);
            document.getElementById("profile-image").src = data.profile_image;
            document.getElementById("user-name").innerText = data.username;
            document.getElementById("user-phone").innerText = data.phone;
            document.getElementById("donate-amount").innerText = data.total_donet_amount;
            document.getElementById("event_start_time").innerText = data.event_start_time;
            document.getElementById("event_end_time").innerText = data.event_end_time;
            document.getElementById("description").innerText = data.event_description;
            
            document.getElementById("price").innerText = data.ticket_price;

        });
}

user_profile();

function donationHistory(){
    const user_id = localStorage.getItem("user_id");
    console.log(user_id)
    let id=1;
    fetch(`https://heart-for-humanity.vercel.app/campain/donetion/?user=${user_id}`)
    .then(res=>res.json())
    .then(data=>{
        data.forEach(element => {
        const parents = document.getElementById('donation-history');
        const tr = document.createElement("tr")
        tr.innerHTML=`
                      <td>${id++}</td>
                      <td>${element.campaign_title}</td>
                      
                      <td> <span>${element.amount}</span><span> Taka</span></td>
                `
            parents.appendChild(tr);
        })
    });
    
} 

donationHistory()