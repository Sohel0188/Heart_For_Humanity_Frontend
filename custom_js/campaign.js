fetch("http://127.0.0.1:8000/campain/all_capain/")
.then(res=>res.json())
.then(data=>{
    console.log("hello");
    console.log(data);
    data.forEach(element => {
        console.log(element.campain_title)
    });
})
