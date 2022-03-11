const triBase = document.querySelector("#base");
const triHt = document.querySelector("#height");

const button = document.querySelector("#calc-btn");

const area = document.querySelector("#output");

function calculateArea(){

    if ((Number(triBase.value)) < 0){
        alert("You are dumb cause base negative kaise?");
        return;
    }

    if  ((Number(triHt.value))<0) { 
        alert("You are dumb cause height negative kaise?");
        return;
    }
    
    areaOfTri = 0.5 * Number(triBase.value) * Number(triHt.value);
    //console.log(areaOfTri);
    area.innerText = "The area is " + areaOfTri;
}


button.addEventListener("click", calculateArea);