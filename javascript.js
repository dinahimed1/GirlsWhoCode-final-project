<html>
	<head>
		<script src="http://cloud.github.com/downloads/processing-js/processing-js/processing-1.4.1.min.js"></script>
		<script type="text/processing" data-processing-target="mycanvas">
		
		void setup()
			{
			  size(800,600);
			  background(255,200,214);
			}
		
		
		


		var x = 200;
		var x2= 600;
	

		void draw() {
			background(252, 255, 214);
			noStroke();
			drawFem();
			drawNeut();
		}


    
        void drawFem(){
            background(252, 255, 214);
			noStroke();
			// draw the female circle
			fill(255, 0, 115);
			ellipse(x, 200, 50, 50);
			
			
			x = x + 5;
            
        }
        
        void drawNeut(){
            background(252, 255, 214);
            noStroke();
            //draw the neut circle
            fill(253, 245, 15);
            ellipse (x2, 200, 50, 50);
            
            x2 = x2 - 5;
            
        }
	    

		</script>
	</head>
	<body>
		<canvas id="mycanvas"></canvas>
	</body>
</html>