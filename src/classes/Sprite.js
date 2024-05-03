class Sprite {
  constructor({ canvas, src }) {
    this.canvas = canvas
    this.scale = 1

    this.image = new Image()
    this.image.src = src

    this.offset = { x: 0, y: 0 }
  }

  update({ move }) {
    this.offset.x += move.x
    this.offset.y += move.y
  }

  setScale(x) {
    if (x > 3 || x < 1) return
    this.scale = x
  }

  draw(c) {
    c.drawImage(
      this.image,
      this.offset.x,
      this.offset.y,
      this.canvas.width * this.scale,
      this.canvas.height * this.scale,
      0,
      0,
      this.image.width,
      this.image.height
    )
  }
}

export default Sprite
