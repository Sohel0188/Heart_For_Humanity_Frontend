const handlelogOut = () => {

  const token = localStorage.getItem("token");
  console.log(token)

  fetch("https://heart-for-humanity.vercel.app/account/logout/", {
      method: "POST",
      headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "application/json",
      },
  })
      .then((res) => res.json())
      .then((data) => {
          console.log(data);
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          localStorage.removeItem("user_id");
          window.location.href = "https://heart-for-humanity-frontend.vercel.app/"

      });
};


fetch("header.html")
.then(res=>res.text())
.then(data=>{
  document.getElementById("header").innerHTML=data;
  const user = localStorage.getItem("user_id");
  if(user!=null){
      document.getElementById('login-register').className = "d-none";
      document.getElementById('profile-after-login').className = "d-flex";
  }else{
      document.getElementById('login-register').className = "d-flex";
      document.getElementById('profile-after-login').className = "d-none";
  }

})

fetch("footer.html")
.then(res=>res.text())
.then(data=>{
  document.getElementById("footer").innerHTML=data;
})


