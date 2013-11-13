var Path = function(color, canvasId, widthAspectRatio, heightAspectRatio) {
  this.canvas = document.getElementById(canvasId)
  this.widthAspectRatio = widthAspectRatio
  this.heightAspectRatio = heightAspectRatio
  this.lineColor = color
  this.context = this.prepareContext()
  this.width = this.gridWidth()
  this.height = this.gridHeight()
  this.savedCanvasData = []
}

Path.prototype.prepareContext = function(){
  return this.canvas.getContext("2d")
}

Path.prototype.drawLine = function(x){
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

Path.prototype.translate = function(x){
  this.context.translate(this.width*x, 0)
}

Path.prototype.gridWidth = function() {
  return this.canvas.width / this.widthAspectRatio;
  }

Path.prototype.gridHeight = function() {
  return this.canvas.height / this.heightAspectRatio;
}
