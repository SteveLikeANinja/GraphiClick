function Canvas(cid){ //cid is the id of a <canvas>
  var cnvs = document.getElementById(cid);
  var ctx = cnvs.getContext('2d');
  function draw_rect(x,y,w,h,color){
    ctx.drawRect(x,y,w,h);
    ctx.strokeStyle = color;
    ctx.stroke();
  }
  function draw_square(x,y,s,color){
    draw_rect(x,y,s,s);
  }
  function draw_ellipse(x,y,a,b,color){
    ctx.drawEllipse(x,y,a,b);
    ctx.strokeStyle = color;
    ctx.stroke();
  }
  function draw_circle(x,y,r,color){
    draw_ellipse(x,y,r,r,color);
  }
  function draw_line(x1,y1,x2,y2,color){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle = color;
    ctx.stroke();
  }
  function draw_shape(shape){
    var color = shape.getColor();
    var points = shape.getPoints();
    ctx.beginPath();
    for(var i = 0; i<points.length; i++){
      if(i == 0){
        ctx.moveTo(points[i].getX(),points[i].getY());
      }else{
        ctx.lineTo(points[i].getX(),points[i].getY());
      }
    }
    ctx.strokeStyle = color;
    ctx.stroke();
  }
  function draw_image(x,y,img,color){
    if(color == undefined){
      color = "white";
    }
    ctx.strokeStyle = color;
    ctx.drawImage(img,x,y);
    ctx.stroke();
  }
  this.draw_rect = draw_rect;
  this.draw_square = draw_square;
  this.draw_ellipse = draw_ellipse;
  this.draw_circle = draw_circle;
  this.draw_line = draw_line;
  this.draw_shape = draw_shape;
  this.draw_image = draw_image;
}
//Class for sprites
function Sprite(data){ 
  var drawdata;
  var datatype;
  if(typeof data == "object" && data.type == "GraphiClick_Image"){
    drawdata = data.src;
    datatype = "ImageSrc";
  }else if(typeof data == "object" && data.type == "GraphiClick_Shape"){
    drawdata = data.points;
    datatype = "ShapePoints";
  }else if(typeof data == "string"){
    drawdata = data;
    datatype = "ImageSrc";
  }else{
    throw new TypeError("Invalid data type for Sprite data.");
  }
  function draw(canv,x,y){
    if(datatype == "ImageSrc"){
      canv.draw_image(new Image(drawdata),x,y);
    }
  }
}

function GraphiClickImage(source){
  this.src = source;
  this.type = "GraphiClick_Image";
}

function Shape(){
  var points = [];
  function addPoint(pnt){
    points.push(pnt);
  }
  function removeLastPoint(){
    points.pop();
  }
  function getPoints(){
    return points;
  }
  this.addPoint = addPoint;
  this.removeLastPoint = removeLastPoint;
  this.getPoints = getPoints;
  this.type = "GraphiClick_Shape";
}

function Point(x_val,y_val){
  var x = x_val;
  var y = y_val;
  function getX(){
    return x;
  }
  function getY(){
    return y;
  }
  function setX(x_val){
    x = x_val;
  }
  function setY(y_val){
    y = y_val;
  }
  this.getX = getX;
  this.getY = getY;
  this.setX = setX;
  this.setY = setY;
}
