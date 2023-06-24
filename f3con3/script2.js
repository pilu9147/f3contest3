let name = document.getElementById("fname")
let email = document.getElementById("inf-email")
let password = document.getElementById("inf-pass")
let signup = document.getElementById("signup")
let profile = document.getElementById("profile")
let logout = document.getElementById("logout-btn")


let info = JSON.parse(localStorage.getItem('info'));
console.log(info);
if(info.token) {
   name.innerText = info.name;
    email.innerText = info.email;
    password.innerText = info.password;
    profile.href = "http://127.0.0.1:5500/f3con3/profile.html"
} 
else {
 signup.href = "http://127.0.0.1:5500/f3con3/index.html"
}
 
logout.addEventListener('click',()=>{
  localStorage.removeItem("info")
  navigateToProfile()
  
})

function navigateToProfile(){
// window.location.pathname


// video_id: video_id
let linkItem = document.createElement("a");
linkItem.href = "http://127.0.0.1:5500/f3con3/index.html"
linkItem.target = "_blank" ;
linkItem.click();
}