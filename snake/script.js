const gridSize = 20;
const boardSize = 300;
let snake = [{ x: 0, y: 0 }];
let direction = 'right';
let food = { x: 100, y: 100 }; // Initial food position

function createBoard() {
  const gameBoard = document.getElementById('game-board');
  gameBoard.innerHTML = '';

  snake.forEach(segment => {
    const snakeSegment = document.createElement('div');
    snakeSegment.className = 'snake';
    snakeSegment.style.left = `${segment.x}px`;
    snakeSegment.style.top = `${segment.y}px`;
    gameBoard.appendChild(snakeSegment);
  });

  const foodElement = document.createElement('div');
  foodElement.className = 'food';
  foodElement.style.left = `${food.x}px`;
  foodElement.style.top = `${food.y}px`;
  gameBoard.appendChild(foodElement);
}

function moveSnake() {
  const head = { ...snake[0] };

  switch (direction) {
    case 'up':
      head.y -= gridSize;
      break;
    case 'down':
      head.y += gridSize;
      break;
    case 'left':
      head.x -= gridSize;
      break;
    case 'right':
      head.x += gridSize;
      break;
  }

  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    generateFood();
  } else {
    snake.pop();
  }
}

function generateFood() {
  const x = Math.floor(Math.random() * (boardSize / gridSize)) * gridSize;
  const y = Math.floor(Math.random() * (boardSize / gridSize)) * gridSize;

  food = { x, y };
}

function checkCollision() {
  const head = snake[0];

  // Check collision with walls
  if (head.x < 0 || head.x >= boardSize || head.y < 0 || head.y >= boardSize) {
    return true;
  }

  // Check collision with itself
  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      return true;
    }
  }

  return false;
}

function gameLoop() {
  moveSnake();
  createBoard();

  if (checkCollision()) {
    alert('Game Over!');
    resetGame();
  } else {
    setTimeout(gameLoop, 200);
  }
}

function resetGame() {
  snake = [{ x: 0, y: 0 }];
  direction = 'right';
  generateFood();
  gameLoop();
}

document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp':
      if (direction !== 'down') {
        direction = 'up';
      }
      break;
    case 'ArrowDown':
      if (direction !== 'up') {
        direction = 'down';
      }
      break;
    case 'ArrowLeft':
      if (direction !== 'right') {
        direction = 'left';
      }
      break;
    case 'ArrowRight':
      if (direction !== 'left') {
        direction = 'right';
      }
      break;
  }
});

resetGame();
