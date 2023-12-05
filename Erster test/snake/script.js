const gridSize = 20;
let snake = [{ x: 0, y: 0 }];
let direction = 'right';
let food = { x: 100, y: 100 }; // Initial food position
let points = 0;

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

  // Display points during gameplay
  const pointsElement = document.createElement('div');
  pointsElement.className = 'points';
  pointsElement.textContent = `Points: ${points}`;
  gameBoard.appendChild(pointsElement);
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
    points += 1; // Increment points on eating an apple
  } else {
    snake.pop();
  }
}

function generateFood() {
  let x, y;

  do {
    x = Math.floor(Math.random() * 15) * gridSize;
    y = Math.floor(Math.random() * 15) * gridSize;
  } while (isFoodOnSnake(x, y));

  food = { x, y };
}

function isFoodOnSnake(x, y) {
  return snake.some(segment => segment.x === x && segment.y === y);
}

function checkCollision() {
  const head = snake[0];

  // Check collision with walls
  if (head.x < 0 || head.x >= 300 || head.y < 0 || head.y >= 300) {
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
    gameOver();
  } else {
    setTimeout(gameLoop, 200);
  }
}

function resetGame() {
  snake = [{ x: 0, y: 0 }];
  direction = 'right';
  generateFood();
  points = 0; // Reset points
  gameLoop();
}

function gameOver() {
  alert(`Game Over! Points: ${points}`);
  resetGame();
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
