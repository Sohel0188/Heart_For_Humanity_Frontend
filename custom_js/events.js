
fetch("http://127.0.0.1:8000/events/all_events/")
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
                        <h4><a href="event-details.html">${element.title}</a></h4>
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
    fetch(`http://127.0.0.1:8000/events/all_events/${param}/`)
        .then((res) => res.json())
        .then((data) => {

            console.log(formattedDate);
            document.getElementById("post-title").innerText = data.post_title;
            document.getElementById("post-title-mid").innerText = data.post_title;
            document.getElementById("post-date").innerText = formattedDate;
            document.getElementById("post-category").innerText = data.category_name;
            document.getElementById("post-image").src = data.post_image;
            document.getElementById("post-details").innerText = data.post_description;

        });
}