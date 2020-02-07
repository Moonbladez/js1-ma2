//question 1
const myFunctionExpression = function () {
    console.log("Rebecca Young")
}

myFunctionExpression()

//question 2
const button = document.getElementsByClassName("btn")

function btnClick() {
    console.log("click me")
}

button.addEventListener("click", btnClick)