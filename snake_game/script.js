// Define Html elements
const gameBoard = document.getElementById("game__board");

// Define game variables
let snake = [{x:10, y:10}] //this basically represents the center of the board

function draw(){
    gameBoard.innerHTML = "";
    drawSnake();
}

// Draw Snake
function drawSnake(){
    snake.forEach((segment) => {
        const snakeElement = createGameElement('div', 'snake');
        setPosition(snakeElement, segment);
        gameBoard.appendChild(snakeElement);
    })
}

// Creating snake or food div
function createGameElement(tag, className){
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

// Set the position of the snake
function setPosition(element, position){
    element.style.gridColumn = position.x;
    element.style.gridRow = position.y;
}

// Testing Draw Function
draw()