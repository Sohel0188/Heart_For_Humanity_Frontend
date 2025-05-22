// fetch("https://heart-for-humanity.vercel.app/campain/all_capain/")
// .then(res=>res.json())
// .then(data=>{
//     // console.log(data);
    
//     data.forEach(element => {
//         let raised_money_in_parcent = (element.raised_price*100)/element.goal_price;
//         let infloor = Math.floor(raised_money_in_parcent)
//         // console.log(raised_money_in_parcent);
//         // console.log(infloor);
//         const parents = document.getElementById('cause-carousel');
//         const div = document.createElement("div")
//         div.classList.add('cause-block-one');
//         div.innerHTML=`
                        
//                         <div class="inner-box">
//                             <div class="image"><a href="cause-details.html?slug=${element.campain_slug}"><img src="${element.image}" alt=""></a></div>
//                             <div class="lower-content">
//                                 <h4><a href="cause-details.html?slug=${element.campain_slug}">${element.campain_title}</a></h4>
//                                 <div class="category"><a href="#">${element.category_name}</a></div>
//                                 <div class="text short-details">${element.short_details}</div>
//                                 <div class="info-box">
//                                     <a href="#"><span>Raised:</span>৳ ${element.raised_price}</a>
//                                     <a href="#"><span>Goal:</span>৳ ${element.goal_price}</a>
//                                 </div>
//                                 <!--Progress Levels-->
//                                 <div class="progress-levels">
                                            
//                                     <!--Skill Box-->
//                                     <div class="progress-box wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1500ms">
//                                         <div class="inner">
//                                             <div class="bar">
//                                                 <div class="bar-innner"><div class="bar-fill" data-percent="${infloor}"><div class="percent"></div></div></div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div class="bottom-content">
//                                     <div class="link-btn"><a href="cause-details.html?${element.campain_slug}" class="theme-btn btn-style-one donate-box-btn" onclick="getID(${element.id})"><span>Donate Now</span></a></div>
//                                     <div class="share-icon post-share-icon d-none">
//                                         <div class="share-btn"><i class="flaticon-share"></i></div>
//                                         <ul>
//                                             <li><a href="#"><span class="fa fa-facebook"></span></a></li>
//                                             <li><a href="#"><span class="fa fa-google-plus"></span></a></li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
                    
//         `
//         parents.appendChild(div);
//     });
// })
document.addEventListener("DOMContentLoaded", function () {
    fetch("https://heart-for-humanity.vercel.app/campain/all_capain/")
        .then(res => res.json())
        .then(data => {
            const parents = document.getElementById('cause-carousel');

            // Clear previous items safely
            parents.innerHTML = "";

            data.forEach(element => {
                let raised_money_in_percent = (element.raised_price * 100) / element.goal_price;
                let infloor = Math.floor(raised_money_in_percent);

                const div = document.createElement("div");
                div.classList.add('cause-block-one', 'item'); // 'item' class is required for Owl Carousel
                div.innerHTML = `
                    <div class="inner-box">
                        <div class="image"><a href="cause-details.html?slug=${element.campain_slug}"><img src="${element.image}" alt=""></a></div>
                        <div class="lower-content">
                            <h4><a href="cause-details.html?slug=${element.campain_slug}">${element.campain_title}</a></h4>
                            <div class="category"><a href="#">${element.category_name}</a></div>
                            <div class="text short-details">${element.short_details}</div>
                            <div class="info-box">
                                <a href="#"><span>Raised:</span>৳ ${element.raised_price}</a>
                                <a href="#"><span>Goal:</span>৳ ${element.goal_price}</a>
                            </div>
                            <div class="progress-levels">
                                <div class="progress-box">
                                    <div class="inner">
                                        <div class="bar">
                                            <div class="bar-inner">
                                                <div class="bar-fill" style="width: ${infloor}%;"><div class="percent">${infloor}%</div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="bottom-content">
                                <div class="link-btn">
                                    <a href="cause-details.html?slug=${element.campain_slug}" class="theme-btn btn-style-one donate-box-btn">
                                        <span>Donate Now</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>`;

                parents.appendChild(div);
            });

            // Wait for DOM update before initializing Owl Carousel
            setTimeout(() => {
                $(".cause-carousel").owlCarousel({
                    loop: true,
                    margin: 0,
                    nav: true,
                    dots: false,
                    autoplay: true,
                    responsive: {
                        0: { items: 1 },
                        600: { items: 2 },
                        1000: { items: 3 }
                    }
                });
            }, 300); // Short delay to ensure elements are added before initializing

        })
        .catch(error => console.error("Error loading data:", error));
});

fetch("https://heart-for-humanity.vercel.app/events/all_events/")
.then(res=>res.json())
.then(data=>{
    // console.log(data);
    
    data.forEach(element => {
    const inputDate = element.event_data;

        const dateParts = inputDate.split("-");
        const year = parseInt(dateParts[2], 10);
        const month = parseInt(dateParts[1], 10) - 1;
        const day = parseInt(dateParts[0], 10);
        const dateObject = new Date(year, month, day);
        const dayNumber = dateObject.getDate();
        const monthName = dateObject.toLocaleString('default', { month: 'long' });
        const parents = document.getElementById('event-carousel');
        const div = document.createElement("div")
        div.classList.add('event-block-one');
        div.innerHTML=`
                <div class="inner-box">
                                        <div class="image"><img src="${element.event_image}" alt=""></div>
                                        <div class="lower-content">
                                            <div class="date">
                                                <h1>${dayNumber}</h1>
                                                <div class="text"><span>${monthName}</span> <br>${element.event_start_time}</div>
                                            </div>
                                            <h4><a href="event-details.html?id=${element.id}">${element.title}</a></h4>
                                            <div class="location"><span class="flaticon-point"></span>${element.location}</div>
                                        </div>
                                        <div class="link-btn"><a href="event-details.html?id=${element.id}"><span class="flaticon-next"></span>Join With Us</a></div>
                                    </div>        
                    
        `
        parents.appendChild(div);
    });
})


fetch("https://heart-for-humanity.vercel.app/blog/all_blog/")
.then(res=>res.json())
.then(data=>{
    // console.log(data);
    
    data.forEach(element => {
        const inputDate = element.created_date
        const dateObject = new Date(inputDate);

        const formattedDate = dateObject.toLocaleString('en-US', {
        month: 'short', 
        day: 'numeric', 
        year: 'numeric', 
        });
        const parents = document.getElementById('blog-grid');
        const div = document.createElement("div")
        div.classList.add('col-lg-3' ,'col-md-6', 'news-block-one');
        div.innerHTML=`                        
                        <div class="inner-box wow fadeInUp" data-wow-delay="200ms">
                        <div class="category"><a href="#">${element.category_name}</a></div>
                        <div class="image">
                            <a href="blog-details.html?id=${element.id}"><img src="${element.post_image}" alt=""></a>
                            <div class="post-meta-info">
                                <a href="#"><span class="flaticon-eye"></span>21</a>
                                <a href="#"><span class="flaticon-comment"></span>08</a>
                            </div>
                        </div>
                        <div class="lower-content">
                            <div class="date">${formattedDate}</div>
                            <h4><a href="blog-details.html?id=${element.id}">${element.post_title}</a></h4>
                            <div class="text short-details">${element.post_description}</div>
                            <br>
                            <div class="link-btn"><a href="blog-details.html?id=${element.id}"><span class="flaticon-next"></span>Read More</a></div>
                        </div>
                    </div>
                    
        `
        parents.appendChild(div);
    });
})

function getID(id){
    document.getElementById("campain_id").value = id
}

// function getIDinOnclick(id){
//     document.getElementById("donate_now_details").setAttribute("data-selected-id", id);
// }

// const donet=(event)=>{    
//     event.preventDefault();
//     // const param = new URLSearchParams(window.location.search).get("id");
//     // console.log(param);
//     const name = document.getElementById("donar_name").value;
//     const email = document.getElementById("donar_email").value;
//     const phone = document.getElementById("donar_phone").value;
//     const amount = document.getElementById("other-amount").value;
//     const campaign = document.getElementById("campain_id").value;
//     const user = localStorage.getItem("user_id");
    

//     // const customer = localStorage.getItem("user_id");
//     // console.log(customer);
//     const info = {
//         name : name,
//         email : email,
//         phone : phone,
//         amount : amount,
//         user : user,
//         campaign : campaign,
//     };

//     console.log(info);
//     fetch("https://heart-for-humanity.vercel.app/campain/donetion/", {
//       method: "POST",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify(info),
//     })
//       .then((res) => res.json())
//       .then((data) => {        
//         console.log(data);
        
//       });
// };
const donet = (event) => {    
    event.preventDefault();

    // Get input values
    const name = document.getElementById("donar_name").value;
    const email = document.getElementById("donar_email").value;
    const phone = document.getElementById("donar_phone").value;
    const amount = document.getElementById("other-amount").value;
    const campaign = document.getElementById("campain_id").value;
    const user = localStorage.getItem("user_id");

    const info = {
        name: name,
        email: email,
        phone: phone,
        amount: amount,
        user: user,
        campaign: campaign,
    };

    console.log(info);

    fetch("https://heart-for-humanity.vercel.app/campain/donetion/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(info),
    })
    .then((res) => res.json())
    .then((data) => {        
        console.log(data);
        const donation_id = data.id;
        console.log(donation_id);
        // Show success message
        const successMessage = document.getElementById("success-message");
        successMessage.innerText = "Donation Successful! Thank you!";
        successMessage.classList.add("show-message"); // Add class for visibility
        // Add class to donate popup
        document.querySelector(".donate-popup").classList.add("active");
        // Clear input fields
        document.getElementById("donar_name").value = "";
        document.getElementById("donar_email").value = "";
        document.getElementById("donar_phone").value = "";
        document.getElementById("other-amount").value = "";

        // Hide message after 3 seconds
        setTimeout(() => {
            successMessage.classList.remove("show-message");
            successMessage.innerText="";
            document.querySelector(".donate-popup").classList.remove("popup-visible");
            // window.location.reload();
            window.location.href = `https://http://127.0.0.1:8000/campain/payment/`;
        }, 2000);


    })
    .catch((error) => {
        console.error("Error:", error);
        alert("Something went wrong. Please try again.");
    });
};


// fetch("https://heart-for-humanity.vercel.app/account/list/")
// .then(res=>res.json())
// .then(data=>{
//     data.forEach(element => {
        
//         const parents = document.getElementById('donar-list');
//         const div = document.createElement("div")
//         div.classList.add('col-md-4', 'donor-block');
//         div.innerHTML=`
//             <div class="inner-box wow fadeInUp" data-wow-delay="200ms">
//                 <div class="top-content">
//                     <div class="image">
//                         <img src="${element.profile_image}" alt="">
//                         <div class="overlay">
//                             <div class="icon"><a href="#"><span class="fa fa-twitter"></span></a></div>
//                         </div>
//                     </div>
//                         <h4></h4>
//                         <div class="location">${element.username}</div>
//                         </div>
//                         <div class="bottom-content">
//                         <div class="text">Donation</div>
//                     <div class="price">৳ ${element.total_donet_amount} <span></span></div>
//                 </div>
//             </div>     
//         `
//         parents.appendChild(div);
//     });
// })
fetch("https://heart-for-humanity.vercel.app/account/list/")
.then(res => res.json())
.then(data => {
    const parents = document.getElementById('donar-list');
    parents.innerHTML = "";

    data.forEach(element => {
        parents.innerHTML += `
            <div class="col-md-4 donor-block">
                <div class="inner-box wow fadeInUp" data-wow-delay="200ms">
                    <div class="top-content">
                        <div class="image">
                            <img class ="donar-image" src="${element.profile_image}" alt="">
                            <div class="overlay">
                                <div class="icon"><a href="#"><span class="fa fa-twitter"></span></a></div>
                            </div>
                        </div>
                        <h4></h4>
                        <div class="location">${element.username}</div>
                    </div>
                    <div class="bottom-content">
                        <div class="text">Donation</div>
                        <div class="price">৳ ${element.total_donet_amount} <span></span></div>
                    </div>
                </div>
            </div>
        `;
    });
})
.catch(error => console.error("Error fetching data:", error));