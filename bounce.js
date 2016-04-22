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

var makeCircle = function(){
  var board = document.getElementById('board');
  var c = document.createElementNS("http://www.w3.org/2000/svg","circle");
  //c.setAttribute("cx", Math.floor((Math.random()*440)) + 30); //30-470
  //c.setAttribute("cy", Math.floor((Math.random()*440)) + 30);
  var index = circle_hold.length;
  var xpos = 250;
  var ypos = 250;
  var xdir = Math.random()*4-2;
    var ydir = Math.random()*4-2;
  var get_pos = function(){return [xpos, ypos];}
  //var create = function(){
  c.setAttribute("r", 30);
  c.setAttribute("fill", "red");
  c.setAttribute("stroke", "black");
  c.setAttribute("cx", xpos);
  c.setAttribute("cy", ypos);
  board.appendChild(c);
  //}

  var update = function(){
    if(xpos <= 30 || xpos >= 470){xdir = -1 * xdir;}
    if(ypos <= 30 || ypos >= 470){ydir = -1 * ydir;}
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
    //create: create,
    get_pos: get_pos,
  };
}



setInterval(nextFrame,16);
