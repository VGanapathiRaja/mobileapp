let clickmenu = document.getElementById("menuclick");
let barmenu = document.getElementById("menubar");

clickmenu.addEventListener("click",()=>{
    barmenu.classList.toggle("show");

    if(barmenu.classList.contains("show")){
        clickmenu.classList.remove("bx-menu");
        clickmenu.classList.add("bx-x")
    }
    else{
         clickmenu.classList.add("bx-menu");
        clickmenu.classList.remove("bx-x")
    }
});


const mydata = document.getElementById("myform");
mydata.addEventListener("submit",(action)=>{
    action.preventDefault();

    let clinetName = document.getElementById("username").value.trim();
    let clinetEmail = document.getElementById("useremail").value.trim();
    let clinetPhone = document.getElementById("userphone").value.trim();
    let clinetDate = document.getElementById("userdate").value.trim();
    let clinetFeedback = document.getElementById("comments").value.trim();


    let isFill =true;
    let Nameerror = document.getElementById("errorName");
    let Emailerror = document.getElementById("errorEmail");
    let Phoneerror = document.getElementById("errorPhone");
    let Dateerror = document.getElementById("errorDate");
    let commentserror = document.getElementById("errorFeed");
    "useStrict"
    if(!clinetName){
        Nameerror.textContent ="Please fill the username Data";
        isFill=false;
    }
    "useStrict"
    let emailtest= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if(!clinetEmail){
        Emailerror.textContent ="Please fill the Email Data";
        isFill=false;
    }
    else if(!emailtest.test(clinetEmail)){
        Emailerror.textContent ="Please fill the valid Email Data";
        isFill=false;
    }

     let phoneltest= /^[6-9]\d{9}$/;
     if(!clinetPhone){
        Phoneerror.textContent ="Please fill the phone number Data";
        isFill=false;
    }
    else if(!phoneltest.test(clinetPhone)){
         Phoneerror.textContent ="Please fill the phone number Data";
        isFill=false;
    }

     if(!clinetDate){
        Dateerror.textContent ="Please fill the phone date Data";
        isFill=false;
    }

    if(!clinetFeedback){
        commentserror.textContent ="Please fill the phone Feed back Data";
        isFill=false;
    }

    // if(!clinetName === ""){
    //     alert("please fil the data");
    // }

    if(isFill){
        alert("User data submitted")
        console.log(clinetName);
        console.log(clinetEmail);
        console.log(clinetPhone);
        console.log(clinetDate);
        console.log(clinetFeedback);
    }

    mydata.reset();
});

