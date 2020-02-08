//question 1
const myFunctionExpression = function() {
	console.log("Rebecca Young");
};

myFunctionExpression();

//question 2

const button = document.querySelector(".btn");
const btnClick = () => {
	button.addEventListener("click", () => {
		console.log("I was clicked");
	});
};

btnClick();

//question 3
const input = document.getElementById("firstName");
const keyPress = () => {
	input.addEventListener("keydown", function(event) {
		console.log(event.key);
	});
};

keyPress();

//question 4 Select the button in the HTML below by its tag. Add a mouseover event listener. The callback function should add a class called hover to the button.
const mouseoverBtn = document.getElementsByTagName("button");
Array.from(mouseoverBtn).forEach(() => {
	mouseoverBtn[0].addEventListener("mouseover", () => {
		mouseoverBtn[0].classList.add("hover");
	});
});

//question 5 Select the button in the HTML below by its data attribute and add a mouseout event listener to it. The callback function should remove the class called hover from the button.

const mouseoutBtn = document.querySelector(".btn[data-animal = 'dog']");
mouseoutBtn.addEventListener("mouseout", () => {
	mouseoutBtn.classList.remove("hover");
});

//Question 6: Select all the li tags from the HTML below. Using a loop, add a mouseover event listener to each tag. The callback function should log the value of the data attribute on each element when the cursor moves over it.

//question 7:
var animal = "cow";
switch (animal) {
	case "cat":
		console.log("Meow");
		break;

	case "cow":
		console.log("Moo");
		break;

	case "bird":
		console.log("Tweet");
		break;

	default:
		console.log("Harrumph");
}

//Question 8
const sheep = ["Malcolm", "Anders", "Marie"];
sheep.forEach(event => {
	console.log(event);
});

//Question 9 Create a timer that logs the word hello every half a second. It must stop after its logged the word 6 times.

const typeHello = () => {
	let sayHello = setInterval(() => console.log("hello"), 500);

	setTimeout(() => {
		clearInterval(sayHello);
	}, 3000);
};
typeHello();

//Question 10 Select the div from the HTML below. Write code that updates the div's text to say Text updated after waiting 2 seconds. You can use either innerText or innerHTML to update the text.

const changeContents = () => {
	const container = document.querySelector(".container");
	setTimeout(function() {
		container.innerText = "updated text";
	}, 2000);
};
changeContents();

//TODO
// question 6
