const sideInputs = document.querySelectorAll(".side-input");

var calculateButton = document.querySelector("#calculate-btn");

const outputHypotenuse = document.querySelector("#output");

function calcuateSumOfSquares(x, y) {
    const sumOfSquares = (x * x) + (y * y);
    //console.log(sumOfSquares);
    return sumOfSquares;

}


function calculateHypotenuse() {

    const sumOfSquares = calcuateSumOfSquares
    (
        Number(sideInputs[0].value),
        Number(sideInputs[1].value)
    );
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    outputHypotenuse.innerText = "The length of Hypotenuse is : " + lengthOfHypotenuse;

}

calculateButton.addEventListener("click", calculateHypotenuse);