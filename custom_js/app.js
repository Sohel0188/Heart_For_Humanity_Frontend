fetch("http://127.0.0.1:8000/campain/all_capain/")
.then(res=>res.json())
.then(data=>{
    console.log(data);
    
    data.forEach(element => {
        let raised_money_in_parcent = (element.raised_price*100)/element.goal_price;
        let infloor = Math.floor(raised_money_in_parcent)
        console.log(raised_money_in_parcent);
        console.log(infloor);
        const parents = document.getElementById('cause-carousel');
        const div = document.createElement("div")
        div.classList.add('cause-block-one');
        div.innerHTML=`
                        
                        <div class="inner-box">
                            <div class="image"><a href="cause-details.html"><img src="${element.image}" alt=""></a></div>
                            <div class="lower-content">
                                <h4><a href="cause-details.html">${element.campain_title}</a></h4>
                                <div class="category"><a href="#">${element.category_name}</a></div>
                                <div class="text short-details">${element.short_details}</div>
                                <div class="info-box">
                                    <a href="#"><span>Raised:</span>৳ ${element.raised_price}</a>
                                    <a href="#"><span>Goal:</span>৳ ${element.goal_price}</a>
                                </div>
                                <!--Progress Levels-->
                                <div class="progress-levels">
                                            
                                    <!--Skill Box-->
                                    <div class="progress-box wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1500ms">
                                        <div class="inner">
                                            <div class="bar">
                                                <div class="bar-innner"><div class="bar-fill" data-percent="${infloor}"><div class="percent"></div></div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="bottom-content">
                                    <div class="link-btn"><a href="cause-details.html" class="theme-btn btn-style-one donate-box-btn"><span>Donate Now</span></a></div>
                                    <div class="share-icon post-share-icon d-none">
                                        <div class="share-btn"><i class="flaticon-share"></i></div>
                                        <ul>
                                            <li><a href="#"><span class="fa fa-facebook"></span></a></li>
                                            <li><a href="#"><span class="fa fa-google-plus"></span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
        `
        parents.appendChild(div);
    });
})

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
                                            <h4><a href="event-details.html">${element.title}</a></h4>
                                            <div class="location"><span class="flaticon-point"></span>${element.location}</div>
                                        </div>
                                        <div class="link-btn"><a href="#"><span class="flaticon-next"></span>Join With Us</a></div>
                                    </div>        
                    
        `
        parents.appendChild(div);
    });
})


fetch("http://127.0.0.1:8000/blog/all_blog/")
.then(res=>res.json())
.then(data=>{
    console.log(data);
    
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
                            <a href="blog-details.html"><img src="${element.post_image}" alt=""></a>
                            <div class="post-meta-info">
                                <a href="#"><span class="flaticon-eye"></span>21</a>
                                <a href="#"><span class="flaticon-comment"></span>08</a>
                            </div>
                        </div>
                        <div class="lower-content">
                            <div class="date">${formattedDate}</div>
                            <h4><a href="blog-details.html">${element.post_title}</a></h4>
                            <div class="text short-details">${element.post_description}</div>
                            <br>
                            <div class="link-btn"><a href="#"><span class="flaticon-next"></span>Read More</a></div>

                            
                        </div>
                    </div>
                    
        `
        parents.appendChild(div);
    });
})
