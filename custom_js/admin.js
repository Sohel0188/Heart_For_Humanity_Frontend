// const loadCategory = () => {
//     fetch(`https://heart-for-humanity.vercel.app/campain/category/`)
//       .then((res) => res.json())
//       .then((data) => {
//         data.forEach((item) => {
//           const parent = document.getElementById("select_category");
//           const option = document.createElement("option");
//           option.value = item.id;
//           option.innerText = item.category_name;
//           parent.appendChild(option);
//         });
//         console.log(data);
//       });
//   };
// loadCategory();

fetch("https://heart-for-humanity.vercel.app/campain/category/")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        let id=1;
        data.forEach(element => {
            const parents = document.getElementById('couses_catagory_data');
            const div = document.createElement("tr")
            div.innerHTML = `
                        <td>${id++}</td>
                        <td>${element.title}</td>
                        <td><img src="${element.image}" width="50" alt="image"></td>
                         <td><button type="info" class="btn btn-success">Edit</button></td>
                        
        `
            parents.appendChild(div);
        });
    });


fetch("https://heart-for-humanity.vercel.app/blog/blog_category/")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        let id=1;
        data.forEach(element => {
            const parents = document.getElementById('blog_catagory_data');
            const div = document.createElement("tr")
            div.innerHTML = `
                        <td>${id++}</td>
                        <td>${element.category_name}</td>
                        <td><img src="${element.category_image}" width="50" alt="image"></td>
                         <td><button type="info" class="btn btn-success">Edit</button></td>
                        
        `
            parents.appendChild(div);
        });
    });

fetch("https://heart-for-humanity.vercel.app/campain/all_capain/")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        let id=1;
        data.forEach(element => {
            const parents = document.getElementById('all_couses');
            const div = document.createElement("tr")
            div.innerHTML = `
                        <td>${id++}</td>
                        <td>${element.campain_title}</td>
                        <td>${element.category_name}</td>
                        <td>${element.goal_price}</td>
                        <td>${element.raised_price}</td>
                        <td><button type="info" class="btn btn-success">Edit</button></td>
                        
        `
            parents.appendChild(div);
        });
    });

fetch("https://heart-for-humanity.vercel.app/blog/all_blog/")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        let id=1;
        data.forEach(element => {
            const parents = document.getElementById('all_blog_data');
            const div = document.createElement("tr")
            div.innerHTML = `
                         <td>${id++}</td>
                        <td>${element.post_title}</td>
                        <td>${element.category_name}</td>
                        <td><img src="${element.post_image}" width="50" alt="image"></td>

                        <td><button type="info" class="btn btn-success">Edit</button></td>
                        
        `
            parents.appendChild(div);
        });
    });

fetch("https://heart-for-humanity.vercel.app/events/all_events/")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        let id=1;
        data.forEach(element => {
            const parents = document.getElementById('all_events_data');
            const div = document.createElement("tr")
            div.innerHTML = `
                         <td>${id++}</td>
                        <td>${element.title}</td>
                        <td>${element.event_data}</td>
                        <td>${element.event_start_time}</td>
                        <td>${element.location}</td>
                        <td>${element.ticket_price}</td>
                      

                        <td><button type="info" class="btn btn-success">Edit</button></td>
                        
        `
            parents.appendChild(div);
        });
    });

fetch("https://heart-for-humanity.vercel.app/events/booking/")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        let id=1;
        data.forEach(element => {
            const parents = document.getElementById('all_events_booking');
            const div = document.createElement("tr")
            div.innerHTML = `
                         <td>${id++}</td>
                        <td>${element.name}</td>
                        <td>${element.email}</td>
                        <td>${element.phone}</td>
                        <td>${element.event}</td>
                        
        `
            parents.appendChild(div);
        });
    });

fetch("https://heart-for-humanity.vercel.app/campain/donetion/")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        let id=1;
        data.forEach(element => {
            const parents = document.getElementById('donation-history');
            const div = document.createElement("tr")
            div.innerHTML = `
                         <td>${id++}</td>
                        <td>${element.name}</td>
                        <td>${element.email}</td>
                        <td>${element.phone}</td>
                        <td>${element.amount}</td>
                        <td>${element.campaign_title}</td>
                      

                        
        `
            parents.appendChild(div);
        });
    });
