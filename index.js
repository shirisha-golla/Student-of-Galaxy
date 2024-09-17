var emailId = "manga@gmail.com"
var password = "manga123456"
var emailId1 = "siri@gmail.com"
var password1 = "siri123456"
var emailId2 = "anusha@gmail.com"
var password2 = "anusha123456"
var emailId3 = "rohit@gmail.com"
var password3 = "rohit123456"
function accesstopage()
{
    var userId = document.getElementById("useremail").value
    var userpass = document.getElementById("userpass").value
    if(userId==emailId && userpass==password || userId==emailId1 && userpass==password1
         || userId==emailId2 && userpass==password2 || userId==emailId3 && userpass==password3)
    {
        var fom = document.forms
        console.log(fom)
        fom[0].action="./html/Homepage.html"
        fom[0].elements[2].type="submit"
    }
    else if(userId!=emailId && userpass==password || userId!=emailId1 && userpass==password1
        || userId!=emailId2 && userpass==password2 || userId!=emailId3 && userpass==password3)
    {
        document.getElementById("status").innerHTML="Email is wrong"
        document.getElementById("emaildiv").style.borderColor="red"
        document.getElementById("passdiv").style.borderColor="royalblue"
        document.body.style.backgroundImage="linear-gradient(90deg,red,purple)"
        
    }
    else if(userId==emailId && userpass!=password || userId==emailId1 && userpass!=password1
        || userId==emailId2 && userpass!=password2 || userId==emailId3 && userpass!=password3)
    {
        document.getElementById("status").innerHTML="Password is wrong"
        document.getElementById("passdiv").style.borderColor="red"
        document.getElementById("emaildiv").style.borderColor="royalblue"
        document.body.style.backgroundImage="linear-gradient(90deg,rgb(237, 18, 55),red)"
        
    }
    else{
        document.getElementById("status").innerHTML="Email and Password is wrong"
        document.getElementById("passdiv").style.borderColor="red"
        document.getElementById("emaildiv").style.borderColor="red"
        document.body.style.backgroundImage="linear-gradient(90deg,red,red)"
    }
}
function visiblepass()
{
    var fom = document.forms
    fom[0].elements[1].type="text"
    document.getElementById("visible").style.transform="rotateY(360deg)"
    document.getElementById("visible").style.transition="transform 0.3s"
    var img = document.images
    img[0].src="./astro/asset/logo/openeye.png"
}
function invisiblepass()
{
    var fom = document.forms
    fom[0].elements[1].type="password"
    var img = document.images
    img[0].src="./astro/asset/logo/closewye.png"
    document.getElementById("visible").style.transform="rotateY(-360deg)"
    document.getElementById("visible").style.transition="transform 0.3s"
}