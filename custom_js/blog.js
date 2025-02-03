fetch("https://heart-for-humanity.vercel.app/blog/all_blog/")
    .then(res => res.json())
    .then(data => {
        console.log(data);

        data.forEach(element => {
            const inputDate = element.created_date
            const dateObject = new Date(inputDate);

            const formattedDate = dateObject.toLocaleString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
            });
            const parents = document.getElementById('all-blog-grid');
            const div = document.createElement("div")
            div.classList.add('col-lg-4', 'col-md-6', 'news-block-two', 'style-three');
            div.innerHTML = `
                        
                        <div class="inner-box wow fadeInUp" data-wow-delay="200ms">
                        <div class="category"><a href="">${element.category_name}</a></div>
                        <div class="image">
                            <a href="blog-details.html?id=${element.id}"> <img src="${element.post_image}" alt=""></a>
                            
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

function singleBlog() {
    const param = new URLSearchParams(window.location.search).get("id");
    fetch(`https://heart-for-humanity.vercel.app/blog/all_blog/${param}/`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data.post_title);
            const inputDate = data.created_date
            const dateObject = new Date(inputDate);
            const formattedDate = dateObject.toLocaleString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
            });
            console.log(formattedDate);
            document.getElementById("post-title").innerText = data.post_title;
            document.getElementById("post-title-mid").innerText = data.post_title;
            document.getElementById("post-date").innerText = formattedDate;
            document.getElementById("post-category").innerText = data.category_name;
            document.getElementById("post-image").src = data.post_image;
            document.getElementById("post-details").innerText = data.post_description;

        });
}

fetch("https://heart-for-humanity.vercel.app/blog/blog_category/")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(element => {
            const parents = document.getElementById('post-categories');
            const div = document.createElement("li")
            div.innerHTML = `
        <div class="wrapper-box">
            <div class="image">
                <img class="postcategoryimage" src="${element.category_image}" alt="">
            </div>
                <a href="blog.html?id=${element.id}">${element.category_name}</a>
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
        const parents = document.getElementById('event-in-blog-page');
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

function PostComment() {
    const param = new URLSearchParams(window.location.search).get("id");
    fetch(`https://heart-for-humanity.vercel.app/blog/blog_comments/?post=${param}`)
        .then((res) => res.json())
        .then(data => {
            console.log(data);
            data.forEach(element => {
                console.log(element.comment)
                const parents = document.getElementById('post-comment');
                const div = document.createElement("div")
                div.classList.add('comment-box');
                div.innerHTML = `
                        <div class="comment">
                            <div class="author-thumb"><img
                                    src="${element.commenter_image}" alt=""></div>
                            <div class="comment-inner">
                                <div class="comment-info">${element.commenter_name}</div>
                                <div class="text">${element.comment}</div>
                                
                            </div>
                        </div>    
                `
                parents.appendChild(div);
            });
        })
        
}

const takeComment=(event)=>{  
    event.preventDefault();
    const param = new URLSearchParams(window.location.search).get("id");
    const comments = document.getElementById("your-comment").value;
    const user = localStorage.getItem("user_id");
    const info = {
        
        post:param,
        commenter:user,
        comment:comments,
    };
    console.log(info);
    
    fetch(`https://heart-for-humanity.vercel.app/blog/blog_comments/`,{
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(info),
    })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     window.location.reload();
    //     console.log(data);
    //   });
  };



PostComment();
singleBlog();

