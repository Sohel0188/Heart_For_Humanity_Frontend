fetch("https://heart-for-humanity.vercel.app/campain/all_capain/")
    .then(res => res.json())
    .then(data => {
        console.log(data);

        data.forEach(element => {
            let raised_money_in_parcent = (element.raised_price * 100) / element.goal_price;
            let infloor = Math.floor(raised_money_in_parcent)
            console.log(raised_money_in_parcent);
            console.log(infloor);
            const parents = document.getElementById('cause-cards');
            const div = document.createElement("div")
            div.classList.add('cause-block-four', 'style-two', 'col-lg-4', 'col-md-6');
            div.innerHTML = `
            <div class="inner-box">
                <div class="image">                                
                    <img class="event-image" src="${element.image}" alt="">
                    <div class="overlay event-image-overlay"><a href="#" class="donate-box-btn">Donate Now</a></div>
                </div>
                <div class="lower-content">
                    <div class="wrapper-box">
                        <a href="">
                        
                        <h4><a href="cause-details.html?slug=${element.campain_slug}">${element.campain_title}</a></h4>
                        <div class="text">${element.short_details}</div>
                        <div class="info-box">
                            <div class="raised">
                                <a href="#"><span>Raised:</span> ৳ ${element.raised_price}</a>
                            </div>
                            <div class="count-box">
                                <span class="count-text" data-speed="3000" data-stop="${infloor}">0</span><span class="affix">%</span>
                            </div>
                            <div class="goal">
                                <a href="#"><span>Goal:</span> ৳ ${element.goal_price}</a>
                            </div>                                        
                        </div>
                    </div>
                </div>
            </div>
                    
        `
            parents.appendChild(div);
        });
    })

// ==========single causes=============//

function singleCauses() {
    const param = new URLSearchParams(window.location.search).get("slug");

    fetch(`https://heart-for-humanity.vercel.app/campain/all_capain/${param}/`)
        .then((res) => res.json())
        .then((data) => {
            let raised_money_in_parcent = (data.raised_price * 100) / data.goal_price;
            let infloor = Math.floor(raised_money_in_parcent)
            console.log(raised_money_in_parcent);
            console.log(infloor);
            console.log(data.campain_title);
            document.getElementById("cause-title").innerText = data.campain_title;
            document.getElementById("raised-donation").innerText = data.raised_price;
            document.getElementById("goal-donation").innerText = data.goal_price;
            document.getElementById("count-text-parcent").setAttribute("data-stop", infloor);
            document.getElementById("dial").setAttribute("value", infloor);
            document.getElementById("cause-image").src = data.image;
            document.getElementById("cause-description").innerText = data.details;
            // document.getElementById("donate_now_details").value = data.id;
            document.getElementById("donate_now_details").setAttribute("data-selected-id", data.id);
            
        });
}


function donateForCampaign(id){
    // console.log(id)
    var campaignId = document.getElementById("donate_now_details").getAttribute("data-selected-id");
    console.log(campaignId);
    document.getElementById("campain_id").value = campaignId

}

fetch("https://heart-for-humanity.vercel.app/campain/category/")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(element => {
            const parents = document.getElementById('cause-categories');
            const div = document.createElement("li")
            div.innerHTML = `
        <div class="wrapper-box">
            <div class="image">
                <img class="categoryimage" src="${element.image}" alt="">
            </div>
                <a href="causes.html?id=${element.id}">${element.title}</a>
        </div>

        `
            parents.appendChild(div);
        });
    })



fetch("https://heart-for-humanity.vercel.app/events/all_events/")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(element => {
            const parents = document.getElementById('event-in-cause-page');
            const div = document.createElement("div")
            div.classList.add('sidebar-widget', 'event-widget');
            div.innerHTML = `
            <div class="event-item">
                <div class="image"><img class="event-short-image" src="${element.event_image}" alt=""></div>
                <div class="content">
                    <div class="date">${element.event_data} <span>${element.event_start_time}</span></div>
                    <h5><a href="event-details.html?id=${element.id}">${element.title}</a></h5>
                </div>
            </div>         
        `
            parents.appendChild(div);
        });
    })



function donationHistory(){
    const user = localStorage.getItem('user_id')
    
    fetch(`http://127.0.0.1:8000/campain/donetion/?user=${user}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(element => {
            const parents = document.getElementById('event-in-cause-page');
            const div = document.createElement("div")
            div.classList.add('sidebar-widget', 'event-widget');
            div.innerHTML = `
            <div class="event-item">
                <div class="image"><img class="event-short-image" src="${element.event_image}" alt=""></div>
                <div class="content">
                    <div class="date">${element.event_data} <span>${element.event_start_time}</span></div>
                    <h5><a href="event-details.html?id=${element.id}">${element.title}</a></h5>
                </div>
            </div>         
        `
            parents.appendChild(div);
        });
    })

}









singleCauses();

