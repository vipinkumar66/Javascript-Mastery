// Define Html elements
const gameBoard = document.getElementById("game__board");
const instructionDetail = document.getElementById("game__instructions");
const logo = document.getElementById("logo");

// Define game variables
const gridSize = 20;
let snake = [{x:10, y:10}] //this basically represents the center of the board

let food = generateFood();
let direction = "up";
let gameInterval;
let gameSpeedDelay = 200;
let gameStarted = false;


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
    // snake.pop();

    if (head.x === food.x && head.y === food.y){
        food = generateFood();
        clearInterval();
        gameInterval = setInterval(()=>{
            moveSnake();
            draw();
        }, gameSpeedDelay);
    }else{
        snake.pop();
    }
}

// Test Moving
// setInterval(() => {
//    moveSnake();
//    draw(); //Draw again new position
// }, 200);

function startGameFunction(){
    gameStarted = true;
    instructionDetail.style.display = "none";
    logo.style.display = "none";
    gameInterval = setInterval(()=>{
        moveSnake();
        // checkCollsion();
        draw();
    }, gameSpeedDelay);

}

// Key press listener event
function handleKeyPress(event){
    if((!gameStarted && event.code === "Space") ||
    (!gameStarted && event.key === " ") ){
        startGameFunction();
    }else{
        switch(event.key){
            case "ArrowUp":
                direction = "up";
                break;
            case "ArrowDown":
                direction = "down";
                break;
            case "ArrowLeft":
                direction = "left";
                break;
            case "ArrowRight":
                direction = "right";
                break;
        }
    }
}

document.addEventListener('keydown', handleKeyPress);