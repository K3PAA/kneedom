class Background {
  constructor({ src, canvas }) {
    this.canvas = canvas

    this.image = new Image()
    this.image.src = src

    this.position = { x: 0, y: 0 }
    this.offset = { x: 0, y: 0 }
  }

  update({ moved, scale }) {
    if (
      (this.offset.x >= 0 && moved.x <= 0) ||
      (this.offset.x <= this.image.width + 0 - this.canvas.width * scale &&
        moved.x >= 0)
    )
      this.offset.x += moved.x

    if (
      (this.offset.y >= -64 && moved.y <= 0) ||
      (this.offset.y <= this.image.height + 0 - this.canvas.height * scale &&
        moved.y >= 0)
    )
      this.offset.y += moved.y
  }

  canScale({ scale }) {
    if (
      this.canvas.width * scale >= this.image.width ||
      this.canvas.height * scale >= this.image.height
    ) {
      return false
    }
    return true
  }

  draw({ c, scale }) {
    c.drawImage(
      this.image,
      this.offset.x,
      this.offset.y,
      this.canvas.width * scale,
      this.canvas.height * scale,
      this.position.x,
      this.position.y,
      this.canvas.width,
      this.canvas.height
    )
  }
}

export default Background
