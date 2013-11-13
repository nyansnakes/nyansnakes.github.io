var Path = function(color) {
  this.canvas = document.getElementById('path-canvas')
  this.lineColor = color
  this.context = this.prepareContext()
  this.width = this.gridWidth()
  this.height = this.gridHeight()
}

Path.prototype.prepareContext = function(){
  return this.canvas.getContext("2d")
}

Path.prototype.drawLine = function(x){
  console.log("drawLine for", this.width*x, "pixels")
  this.context.beginPath()
  this.context.moveTo(0, 0)
  this.context.lineTo(this.width*x, 0)
  this.context.strokeStyle = this.lineColor
  this.context.closePath()
  this.context.stroke()
  this.context.translate(this.width*x,0)
}

Path.prototype.rotate = function(degrees) {
  this.context.rotate(degrees*Math.PI/180.0)
}

Path.prototype.gridWidth = function() {
    return this.canvas.width / 64;
  }

Path.prototype.gridHeight = function() {
  return this.canvas.height / 36;
}
