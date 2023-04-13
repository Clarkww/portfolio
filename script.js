		// Get the canvas element
		let canvas = document.getElementById("canvas")

		// Set the canvas dimensions
		canvas.width = window.innerWidth
		canvas.height = window.innerHeight

		// Get the 2D context of the canvas
		let ctx = canvas.getContext("2d")

		// Disable image smoothing to make stars look sharper
		ctx.imageSmoothingEnabled = false
		// Set the background color of the canvas
		ctx.fillStyle = "#000000"
		ctx.fillRect(0, 0, canvas.width, canvas.height)

		// Define the two colors
		let colorOne = "cyan"
		let colorTwo = "purple"

		// Draw a random number of stars on the canvas
		let numStars = Math.floor(Math.random() * 100) + 110
		let stars = []
		for (let i = 0; i < numStars; i++) {
			// Generate a random position and radius for the star
			let x = Math.floor(Math.random() * canvas.width)
			let y = Math.floor(Math.random() * canvas.height)
			let r = Math.floor(Math.random() * 3) + 1

			// Alternate between the two colors for each star
			let color = i % 2 == 0 ? colorOne : colorTwo

			// Add the star to the array
			stars.push({x: x, y: y, r: r, color: color})
		}

		// Add an event listener to the canvas to track the mouse position
		canvas.addEventListener("mousemove", function(event) {
			let mouseX = event.clientX
			let mouseY = event.clientY

			// Iterate over the stars and calculate the distance between the mouse and each star
			for (let i = 0; i < stars.length; i++) {
				let star = stars[i]
				let distance = Math.sqrt((mouseX - star.x) ** 2 + (mouseY - star.y) ** 2)

				// Increase the size of the star if the mouse is close to it
                if (distance < 10) {
                    star.r = 6
                } else if(distance < 70){
                    star.r = 3.5
                } else if (distance < 100) {
                    star.r = 2.8

                }else if (distance < 130) {
					star.r = 2.5
				} else if (distance < 160) {
                    star.r = 2.2
                } else {
                    star.r = 2
                }
			}

			// Redraw the stars on the canvas
			drawStars()
		})

		// Function to draw the stars on the canvas
		function drawStars() {
			// Clear the canvas
			ctx.clearRect(0, 0, canvas.width, canvas.height)

			// Draw each star as a small circle
			for (let i = 0; i < stars.length; i++) {
				let star = stars[i]
				ctx.beginPath()
				ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI)
				ctx.fillStyle = star.color
				ctx.fill()
			}
		}

		// Draw the stars for the first time
		drawStars()