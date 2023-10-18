 var board = document.getElementById("canvas"),
		boardContext = board.getContext('2d'),
		boardWidth = 770,
		boardHeight = 520,
		boardCenterX = boardWidth / 2,
		boardCenterY = boardHeight / 2,
		controllers = [],
		goal = document.getElementsByClassName('table__goal-crease'),
		goalHeight = goal[0].clientHeight,
		goalPosTop = (boardHeight - goalHeight) / 2,
		score = [];

// Set width & height for canvas
board.width = boardWidth;
board.height = boardHeight;

// Set focus to canvas so keyboard events work
board.focus();

// Disc
function Disc() {

		this.startingPosX = boardCenterX;
		this.startingPosY = boardCenterY;
		this.x = this.startingPosX;
		this.y = this.startingPosY;
		this.radius = 34;
		this.mass = 15;
		this.velocityX = 0;
		this.velocityY = 0;
		this.maxSpeed = 10;
		this.frictionX = 0.997;
		this.frictionY = 0.997;
		this.acceleration = 1;
		this.color = '#000000';

		this.keepControllerInBoard = function() {
			
				// Need to determine if goal scored on x axis as well
				if (this.x > (boardWidth - this.radius) || this.x < this.radius) {

					if (this.x < this.radius) {
							  this.velocityX = 2;
						} else {
								this.velocityX = -2;
						}
				}

				// Determine if disc is to far up or down
				if (this.y > (boardHeight - this.radius) || this.y < this.radius) {

						if (this.y < this.radius) {
							  this.velocityY = 2;
						} else {
								this.velocityY = -2;
						}
