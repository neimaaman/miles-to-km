//I will declare two variables
const numOne = prompt("enter a number");
const numTwo = 0.6214;

// multiply two variables
const result = numOne * numTwo;
// const message = "miles to km";
// I will log it to the console
console.log(result);
// console.log(message);

const displayMessage = `miles to km : ${result}`;
// console.log(displayMessage);

// console.log(typeof result);
// console.log(typeof message);

const roundNumber = Number (result);
console.log(result);

// alert(displayMessage);
const bodyElement = document.body;
const newText = document.createElement("div");
newText.classList.add("h-screen", "flex", "justify-center","items-center");
    

newText.innerHTML = `

<div class="bg-teal-300 p-8 w-2/3 rounded-lg">
        <p class="text-gray-600 text-xs uppercase "> miles to km by @neimaaman </p>
        <p class="text-4xl"> miles to km :<span class="font-bold text-white "> ${result}</span> </p>
    
</div>
`;
bodyElement.appendChild(newText);

 
