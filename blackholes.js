var imgarray = ["0.jpg","1.jpg","2.jpg","3.jpg"]
var indexVal = 0
function inc()
{
    indexVal++;
    if(indexVal>=imgarray.length)
    {
        indexVal=0;
        document.getElementById("header").style.backgroundImage = "url(../astro/asset/images/blackholes/"+imgarray[indexVal]+")"   
    }
    else
    {
        document.getElementById("header").style.backgroundImage = "url(../astro/asset/images/blackholes/"+imgarray[indexVal]+")"
    }
}
function dec()
{
    indexVal--;
    if(indexVal<0)
    {
        indexVal=3;
        document.getElementById("header").style.backgroundImage = "url(../astro/asset/images/blackholes/"+imgarray[indexVal]+")"
    }
    else
    {
        document.getElementById("header").style.backgroundImage = "url(../astro/asset/images/blackholes/"+imgarray[indexVal]+")"
    }
}
var images = document.getElementsByClassName("a")
for(i = 0;i<=images.length;i++)
{
    images[i].setAttribute("src","../astro/asset/images/blackholes/"+i+".jpg")
}
function openimg(pic,name,info)
{
    document.getElementById("subwindow").removeAttribute("style")
    document.getElementById("subimage").src='../astro/asset/images/blackholes/'+pic+".jpg"
    document.getElementById("imageheading").innerHTML=name;
    document.getElementById("imgpara").innerHTML=info;

}
function closeimg()
{
    document.getElementById("subwindow").setAttribute("style","display:none")
}