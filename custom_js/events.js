
fetch("https://heart-for-humanity.vercel.app/events/all_events/")
.then(res=>res.json())
.then(data=>{
    console.log(data);
    data.forEach(element => {
        const inputDate = element.event_data;
        const dateParts = inputDate.split("-");
        const year = parseInt(dateParts[2], 10);
        const month = parseInt(dateParts[1], 10) - 1;
        const day = parseInt(dateParts[0], 10);
        const dateObject = new Date(year, month, day);
        const dayNumber = dateObject.getDate();
        const monthName = dateObject.toLocaleString('default', { month: 'long' });
            
        const parents = document.getElementById('event-grid');
        const div = document.createElement("div")
        div.classList.add('event-block-one', 'col-lg-4', 'col-md-6');
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
                <div class="link-btn"><a href="#"><span class="flaticon-next"></span>Join With Us</a></div>
            </div>        
        `
        parents.appendChild(div);
    });
})

function singleEvents() {
    const param = new URLSearchParams(window.location.search).get("id");
    fetch(`https://heart-for-humanity.vercel.app/events/all_events/${param}/`)
        .then((res) => res.json())
        .then((data) => {

            console.log(data.title);

            document.getElementById("event-title").innerText = data.title;
            document.getElementById("where").innerText = data.location;
            document.getElementById("when").innerText = data.event_data;
            document.getElementById("event_start_time").innerText = data.event_start_time;
            document.getElementById("event_end_time").innerText = data.event_end_time;
            document.getElementById("description").innerText = data.event_description;
            document.getElementById("event-image").src = data.event_image;
            document.getElementById("price").innerText = data.ticket_price;

        });
}

singleEvents();

const bookEventTicket=(event)=>{    
    event.preventDefault();
    const param = new URLSearchParams(window.location.search).get("id");
    console.log(param);
    const name = document.getElementById("booking-form-name").value;
    const email = document.getElementById("booking-form-email").value;
    const phone = document.getElementById("booking-form-phone").value;

    // const customer = localStorage.getItem("user_id");
    // console.log(customer);
    const info = {
      name: name,
      email : email,
      phone : phone,
      event : param,
    };
    console.log(info);
    fetch("https://heart-for-humanity.vercel.app/events/booking/", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {        
        console.log(data);
      });
};
