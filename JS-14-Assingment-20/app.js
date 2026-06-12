// Select Elements

let button = document.getElementById("btn");

let colorCode = document.getElementById("colorCode");


// Generate Random Color Function

function generateColor() {

    let letters = "0123456789ABCDEF";

    let color = "#";


    for (let i = 0; i < 6; i++) {

        let randomIndex = Math.floor(
            Math.random() * letters.length
        );

        color += letters[randomIndex];
    }

    return color;
}



// Click Event

button.addEventListener("click", function () {

    let newColor = generateColor();


    document.body.style.backgroundColor = newColor;


    colorCode.innerText = newColor;

});