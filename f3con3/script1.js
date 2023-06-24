
let signup = document.getElementById("submit-btn")
let note = document.getElementById("note")
let sign = document.getElementById("signup")
let profile = document.getElementById("profile")

signup.addEventListener('click', (event) => {
    let fname = document.getElementById("name").value
    let mail = document.getElementById("mail").value
    let pass = document.getElementById("pass").value
    let repass = document.getElementById("repass").value
    if (fname === "" || mail === "" || pass === "" || repass === "") {
        note.innerText = "Error : All the fields are mandatory"
        note.style.color = "red"
    }
    else {
        note.innerText = "Successfully Signed Up!"
        note.style.color = "green"
    }
    let user = {
        name: fname,
        email: mail,
        password: pass,
        checkpass: repass,
        token: generateAccessToken()
    }
    localStorage.setItem("info",JSON.stringify(user))
    event.preventDefault()
    navigateToProfile(user.token)
})
function generateAccessToken() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let accessToken = '';

    for (let i = 0; i < 16; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        accessToken += characters.charAt(randomIndex);
    }
    return accessToken;
}
// profile.addEventListener('click',()=>{
//     let user = JSON.parse(localStorage.getItem('info'));
//     if(user.token) {
//     profile.href = "http://127.0.0.1:5500/f3con3/profile.html"
//     }
// })    
function navigateToProfile(token){
// window.location.pathname

if(token){
// video_id: video_id
let linkItem = document.createElement("a");
linkItem.href = "http://127.0.0.1:5500/f3con3/profile.html"
linkItem.target = "_blank" ;
linkItem.click();
}
else {
alert("error cant redirect")
}
}