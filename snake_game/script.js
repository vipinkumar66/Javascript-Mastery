// Define Html elements
const gameBoard = document.getElementById("game__board");

// Define game variables
const gridSize = 20;
let snake = [{x:10, y:10}] //this basically represents the center of the board

let food = generateFood();
let direction = "up";

function draw(){
    gameBoard.innerHTML = "";
    drawSnake();
    drawFood();
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
// draw()

function drawFood(){
    const foodElement = createGameElement("div", "food");
    setPosition(foodElement, food);
    gameBoard.appendChild(foodElement);
}

// Generate Food
function generateFood(){
    const x = Math.floor(Math.random() * gridSize) +1;
    const y = Math.floor(Math.random() * gridSize) +1;
    return {x,y};
}

// Moving the snake
function moveSnake(){
    const head = {...snake[0]};
    switch(direction){
        case "right":
            head.x++;
            break
        case "up":
            head.y--;
            break
        case "down":
            head.y++;
            break
        case "left":
            head.x--;
            break
    }
    snake.unshift(head);
    snake.pop();
}

// Test Moving
setInterval(() => {
   moveSnake();
   draw(); //Draw again new position
}, 200);