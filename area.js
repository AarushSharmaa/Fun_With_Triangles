const triBase = document.querySelector("#base");
const triHt = document.querySelector("#height");

const button = document.querySelector("#is-triangle-btn");

const area = document.querySelector("#output");

function calculateArea() {

    if (triBase.value.length === 0 || triHt.value.length === 0) {
        area.innerText = "Do not leave any field empty";
        return;
    }

    if ((Number(triBase.value)) <= 0) {
        area.innerText = "Invalid input. Base must be >= 1";
        return;
    }

    if ((Number(triHt.value)) <= 0) {
        area.innerText = "Invalid input. Height must be >= 1";
        return;
    }

    areaOfTri = 0.5 * Number(triBase.value) * Number(triHt.value);
    //console.log(areaOfTri);
    area.innerText = "The area is " + areaOfTri;
}


button.addEventListener("click", calculateArea);