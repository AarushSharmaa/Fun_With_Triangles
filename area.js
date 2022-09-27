const triBase = document.querySelector("#base");
const triHt = document.querySelector("#height");

const button = document.querySelector("#is-triangle-btn");

const area = document.querySelector("#output");

function calculateArea() {

    if (triBase.value.length === 0 || triHt.value.length === 0) {
        alert("Do not leave any field empty");
        return;
    }

    if ((Number(triBase.value)) < 0) {
        alert("Base negative kaise? Positive value daale");
        return;
    }

    if ((Number(triHt.value)) < 0) {
        alert("Enter valid input cause height negative kaise?");
        return;
    }

    areaOfTri = 0.5 * Number(triBase.value) * Number(triHt.value);
    //console.log(areaOfTri);
    area.innerText = "The area is " + areaOfTri;
}


button.addEventListener("click", calculateArea);