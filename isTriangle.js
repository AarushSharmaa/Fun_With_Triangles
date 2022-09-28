//selecting all the input angles
const inputs = document.querySelectorAll(".angle-input");

//selecting the button
const isTriangleBtn = document.querySelector("#is-triangle-btn");

//selecting the output
const outputIsTriangle = document.querySelector("#output")

function findSumOfAngles(angle1, angle2, angle3) {
    const sumOfInputAngles = angle1 + angle2 + angle3;
    return sumOfInputAngles;
}
//function to check -- logic

function isTriangle() {
    if (inputs[0].value.length === 0 || inputs[1].value.length === 0 || inputs[2].value.length === 0) {
        outputIsTriangle.innerText = "One or more angles are empty. Please enter positive values for angles.";
        return;
    }
    if (Number(inputs[0].value) === 0 || Number(inputs[1].value) === 0 || Number(inputs[2].value) === 0) {
        outputIsTriangle.innerText = "All three angles must be non-zero and positive."
        return;
    }


    if (Number(inputs[0].value) < 0 || Number(inputs[1].value < 0) || Number(inputs[2].value < 0)) {
        outputIsTriangle.innerText = "All three angles must be positive. Please enter valid inputs and retry."
        return;
    } else {
        const sumOfAngles = findSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
        if (sumOfAngles === 180) {
            //console.log("It is a triangle 💖");
            outputIsTriangle.innerText = "It is a triangle 💖";
        } else {
            //console.log("It is not a triangle. 🤷‍♂️");
            outputIsTriangle.innerText = "It is not a triangle 🤦‍♂️";
        }
    }

}

isTriangleBtn.addEventListener("click", isTriangle)