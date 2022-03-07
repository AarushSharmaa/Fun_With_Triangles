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
    const sumOfAngles = findSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    if (sumOfAngles === 180) {
        //console.log("It is a triangle 💖");
        outputIsTriangle.innerText = "It is a triangle 💖";
    } else {
        //console.log("It is not a triangle. 🤷‍♂️");
        outputIsTriangle.innerText = "It is not a triangle 🤦‍♂️";
    }

}

isTriangleBtn.addEventListener("click", isTriangle)