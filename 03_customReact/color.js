const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
let startChangingColor;

function changeColor() {
    const hexCode = "0123456789ABCDEF"
    let colorCode = "#"
    for (let i=1; i<=6; i++) {
        colorCode += hexCode[Math.floor(Math.random() * 16)]
    }
    console.log(colorCode)
    return colorCode;
}

startButton.addEventListener("click", () => {
    if (startChangingColor) {
        clearInterval(startChangingColor);
    }
    startChangingColor = setInterval(() => {
        document.body.style.backgroundColor = `${changeColor()}`;

    }, 1000);

    stopButton.addEventListener("click", () => {
        clearInterval(startChangingColor);
    });
})