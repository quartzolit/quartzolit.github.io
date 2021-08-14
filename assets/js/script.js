//Initial Data
let total = gallery.length;
let left = false;
let right = false;
let flag=false;

let currentId = parseInt(document.querySelector(".foto_2").getAttribute("data-value"))

checkId(currentId)

//Listeners
document.querySelectorAll("nav ul li a").forEach(e=>{
    e.addEventListener('click', clickHandler)
})

document.querySelectorAll(".buttons").forEach(e=>{
    e.addEventListener('click',galleryHandler)
})

document.querySelector(".menu").addEventListener('click', showMenu)


//functions

function clickHandler(e){

    e.preventDefault()


    let id = e.target.getAttribute("href")

    document.querySelector(id).scrollIntoView({
        behavior: "smooth"
    })
}

function galleryHandler(e){    

    let currentTarget = e.target.getAttribute("data-Value")

    if (right === true && currentTarget === "right")
    {
        currentId = currentId + 1

        document.querySelector(".foto_1").setAttribute("data-value", `${currentId-1}`)
        document.querySelector(".foto_2").setAttribute("data-value", `${currentId}`)

        if(currentId < total-1){
            document.querySelector(".foto_3").setAttribute("data-value", `${currentId+1}`)
            document.querySelector(".foto_3").style.opacity="1"
        }
        else{
            
            document.querySelector(".foto_3").style.opacity=0
        }

        imageCall()
        if (currentId>0){
            document.querySelector(".foto_1").style.opacity="1"
        }
        else{
            document.querySelector(".foto_1").style.opacity="0"
        }
        

        checkId(currentId)
    }
    else if(left === true && currentTarget === "left")
    {

        currentId = currentId -1
        
        document.querySelector(".foto_2").setAttribute("data-value", `${currentId}`)
        document.querySelector(".foto_3").setAttribute("data-value", `${currentId+1}`)
        if(currentId > 0){
            document.querySelector(".foto_1").setAttribute("data-value", `${currentId-1}`)
            document.querySelector(".foto_1").style.opacity="1"
        }
        else{
            document.querySelector(".foto_1").style.opacity="0"
        }

        if(currentId < total-1){
            document.querySelector(".foto_3").style.opacity="1"
        }
        else{
            
            document.querySelector(".foto_3").style.opacity="0"
        }

        imageCall()
        
        checkId(currentId)

    }

}

function checkId(currentId){

    if(currentId === 0){
        document.querySelector(".left").style.opacity="0";
        document.querySelector(".right").style.opacity="1";
        left = false;
        right = true;
        return
    }
    else if(currentId === total-1)
    {
        document.querySelector(".right").style.opacity="0";
        document.querySelector(".left").style.opacity="1";
        left = true;
        right = false;
        return
    }
    else{
        document.querySelector(".right").style.opacity="1";
        document.querySelector(".left").style.opacity="1";
        left = true;
        right = true;
    }
}

function imageCall()
{

    document.querySelectorAll("#gallery img").forEach(e=>{
        e.setAttribute("src", `${gallery[parseInt(e.getAttribute("data-value"))].src}`)
    })
}


async function showMenu(){

    if(flag ===true)
    {
        flag = false
    }
    else{
        flag = true
    }

        document.querySelector(".menu #bar1").style.borderBottom="3px solid gold"
        document.querySelector(".menu #bar2").style.borderBottom="3px solid gold"
        document.querySelector(".menu #bar3").style.borderBottom="3px solid gold"

        setTimeout(()=>{
            document.querySelector(".menu #bar1").style.borderBottom="3px solid #FFF"
            document.querySelector(".menu #bar2").style.borderBottom="3px solid #FFF"
            document.querySelector(".menu #bar3").style.borderBottom="3px solid #FFF"
        }
        ,100)
  

    if(flag===true){        
        document.querySelector('.aside').style.height="180px"
        document.querySelector('.aside').style.border="1px solid #FFF"
        setTimeout(()=>{
            document.querySelector('nav ul ').style.display="block"},150)

    }
    else{
        document.querySelector('.aside').style.height="0px"
        document.querySelector('.aside').style.border="0px"
        setTimeout(()=>{
            document.querySelector('nav ul ').style.display="none"
        },00)

    }
}



