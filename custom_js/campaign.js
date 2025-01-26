fetch("http://127.0.0.1:8000/campain/all_capain/")
.then(res=>res.json())
.then(data=>{
    console.log(data);
    
    data.forEach(element => {
        let raised_money_in_parcent = (element.raised_price*100)/element.goal_price;
        let infloor = Math.floor(raised_money_in_parcent)
        console.log(raised_money_in_parcent);
        console.log(infloor);
        const parents = document.getElementById('cause-cards');
        const div = document.createElement("div")
        div.classList.add('cause-block-four','style-two', 'col-lg-4','col-md-6');
        div.innerHTML=`
                        <div class="inner-box">
                            <div class="image">                                
                                <img src="${element.image}" alt="">
                                <div class="overlay"><a href="#" class="donate-box-btn">Donate Now</a></div>
                            </div>
                            <div class="lower-content">
                                <div class="wrapper-box">
                                    <a href="">
                                 
                                    <h4><a href="cause-details.html?${element.campain_slug}">${element.campain_title}</a></h4>
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
