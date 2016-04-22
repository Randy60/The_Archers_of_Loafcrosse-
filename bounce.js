var circle_hold = [];
var nextFrame = function(){
  for(var i = 0; i < circle_hold.length; i++){
    circle_hold[i].update();
  }
}
var but_1 = document.getElementById("new_circle");

but_1.addEventListener("click", function(){
  circle_hold.push(makeCircle());
});

var but_2 = document.getElementById("by_size");
but_2.addEventListener("click", function(){
  for(var c1 = 0; c1 < circle_hold.length; c1++){
    circle_hold[c1].byspeed();
  }
});
    


var makeCircle = function(){
  var board = document.getElementById('board');
  var c = document.createElementNS("http://www.w3.org/2000/svg","circle");
  var index = circle_hold.length;
  var xpos = Math.floor((Math.random()*440)) + 30;
  var ypos = Math.floor((Math.random()*440)) + 30;
  var xdir = Math.random()*4-2;
  var ydir = Math.random()*4-2;
  var radius = Math.floor((Math.random()*20)) + 20;
  var get_pos = function(){return [xpos, ypos];}
  var speed = function(){return [xdir, ydir];}
  var rad = function(){return radius;}
  var byspeed = function(){
      radius = ( (2 - Math.abs(xdir)) * 10 + (2 - Math.abs(ydir)) * 10);
      c.setAttribute("r", radius);
  }
  c.setAttribute("r", radius);
  c.setAttribute("fill", "red");
  c.setAttribute("stroke", "black");
  c.setAttribute("cx", xpos);
  c.setAttribute("cy", ypos);
  board.appendChild(c);


  var update = function(){
    if(xpos <= radius || xpos >= 500-radius){xdir = -1 * xdir;}
    if(ypos <= radius || ypos >= 500-radius){ydir = -1 * ydir;}
    for(var i = 0; i < circle_hold.length; i++){
	if(i!=index){
	    if((circle_hold[i].get_pos[0]-xpos)*(circle_hold[i].get_pos[0]-xpos)+(circle_hold[i].get_pos[1]-ypos)*(circle_hold[i].get_pos[1]-ypos)<3600){
		
	    }
	}
    }
    xpos += xdir;
    ypos += ydir;
    c.setAttribute("cx", xpos);
    c.setAttribute("cy", ypos);
    board.appendChild(c);
  }
  
  return {
    update: update,
    get_pos: get_pos,
    speed: speed,
    radius: rad,
    byspeed: byspeed,
  };
}



setInterval(nextFrame,16);
