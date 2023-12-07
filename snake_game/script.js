// Define Html elements
const gameBoard = document.getElementById("game__board");
const instructionDetail = document.getElementById("game__instructions");
const logo = document.getElementById("logo");
const score = document.getElementById("score")
const highScoreText = document.getElementById("highScore")

// Define game variables
const gridSize = 20;
let snake = [{x:10, y:10}] //this basically represents the center of the board

let food = generateFood();
let direction = "up";
let gameInterval;
let gameSpeedDelay = 200;
let gameStarted = false;
let highScore = 0;

function draw(){
    gameBoard.innerHTML = "";
    drawSnake();
    drawFood();
    updateScore();
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
    if (gameStarted){
        const foodElement = createGameElement("div", "food");
        setPosition(foodElement, food);
        gameBoard.appendChild(foodElement);
    }
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
        increaseSpeed();
        clearInterval(gameInterval);
        gameInterval = setInterval(()=>{
            moveSnake();
            checkCollsion ();
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
        checkCollsion();
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

function increaseSpeed(){
    // console.log(gameSpeedDelay)
    if (gameSpeedDelay > 150){
        gameSpeedDelay -=5;
    }else if (gameSpeedDelay > 100){
        gameSpeedDelay -=3;
    }else if (gameSpeedDelay > 50){
        gameSpeedDelay -=2;
    }else if (gameSpeedDelay > 25){
        gameSpeedDelay -=1;
    }
}

function checkCollsion(){
    const head = snake[0];
    if (head.x < 1 || head.x >gridSize || head.y < 1 || head.y > gridSize){
        resetGame();
    }
    for (let i=1; i<snake.length; i++){
        if (head.x === snake[i].x && head.y == snake[i].y){
            resetGame();
        }
    }
}

function resetGame(){
    updateHighScore();
    stopGame();
    snake = [{x:10, y:10}];
    food = generateFood();
    direction = "up";
    gameSpeedDelay = 200;
    updateScore();
}

function updateScore(){
    const currentScore = snake.length - 1;
    score.textContent = currentScore.toString().padStart(3, '0');
}

function stopGame(){
    clearInterval(gameInterval);
    gameStarted = false;
    instructionDetail.style.display = "block";
    logo.style.display = "block";
}

function updateHighScore(){
    const currentScore = snake.length -1;
    if(currentScore > highScore){
        highScore = currentScore;
        highScoreText.textContent = highScore.toString().padStart(3, "0")
    }
    highScoreText.style.display = "block"
}