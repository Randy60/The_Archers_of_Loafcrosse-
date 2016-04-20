var pic = document.getElementById('savage');
var c = document.createElementNS("http://www.w3.org/2000/svg","circle");
//var logo = 
var circle_botton = document.getElementById("circle");
var dvd = document.getElementById("DVD");
var stop = document.getElementById("stop");
var uppy = document.getElementById('up');
var downy = document.getElementById('down');
var grav = document.getElementById('grav');

var change = function(e){
  e.preventDefault();

}

var size = 2;
var size_dir = 1;
var x = Math.round((Math.random() * 400) + 31);
var y = Math.round((Math.random() * 400) + 31);
var xdir = 1;
var ydir = -1.1;
var function_type = false;
var function_on = false;
var speed = 10;
var gravity = false;

circle.addEventListener("click",function(e){function_type = false;function_on=true;});
dvd.addEventListener("click",function(e){function_type=true;function_on=true;c.setAttribute("r",30);});
stop.addEventListener("click", function(e){function_on=false;});
uppy.addEventListener('click', function(e){
  if(speed > 1){
    speed -= 1;
  }
});
downy.addEventListener('click', function(e){
  if(speed < 30){
    speed += 1;
  }
});
grav.addEventListener('click',function(e){
  if(function_on && function_type){
    gravity = !gravity;
  }
});

var next = function(e){
    if(function_on){
	     if(function_type){

  	    if (x >= 470 || x <= 30 ) {
  		      xdir = -xdir;
  	    }
  	    if ( y >= 470 || y <= 30 ) {
  		      ydir =  -ydir;
  		      console.log(ydir);
  	    } else{
          if(gravity){
            ydir += 0.05;
          }
        }
        /*else{
  		      ydir += .1;
  	    }*/
  	    x += xdir;
  	    y += ydir;
        c.setAttribute("cx",x);
        c.setAttribute("cy",y);
        c.setAttribute("r",30);
        c.setAttribute("fill","yellow");
        c.setAttribute("stroke","black");

        pic.appendChild(c);
	     }else{

	    if(size > 250){
		      size_dir = -0.4
	    }
	    if(size < 2){
		      size_dir = 0.4;
	    }
	      size+=size_dir*Math.log(size);
	      console.log(size);
        c.setAttribute("cx",250);
        c.setAttribute("cy",250);
        c.setAttribute("r",size);
        c.setAttribute("fill","green");
        c.setAttribute("stroke","black");
        pic.appendChild(c);
	}
    }
    window.setTimeout(next,speed);
}

next();
