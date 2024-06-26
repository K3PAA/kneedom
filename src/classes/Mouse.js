class Mouse {
  constructor({ canvas }) {
    this.canvas = canvas

    this.scroll = 0
    this.position = { x: 0, y: 0 }
    this.moved = { x: 0, y: 0 }
    this.sliding = false
    this.movedTimer

    let scrollingTimer

    this.canvas.addEventListener('mousedown', (e) => {
      const { offsetX, offsetY } = e
      this.position = { x: offsetX, y: offsetY }
      this.sliding = true
    })
    this.canvas.addEventListener('mousemove', (e) => {
      const { offsetX, offsetY } = e

      if (this.sliding) {
        this.moved = {
          x: this.position.x - offsetX,
          y: this.position.y - offsetY,
        }
      }

      this.position.x = offsetX
      this.position.y = offsetY
    })
    this.canvas.addEventListener('mouseup', (e) => {
      this.sliding = false
      this.moved = { x: 0, y: 0 }
    })

    this.canvas.addEventListener('mouseleave', (e) => {
      this.sliding = false
      this.moved = { x: 0, y: 0 }
    })

    window.addEventListener('wheel', (e) => {
      clearTimeout(scrollingTimer)
      this.scroll = e.deltaY > 0 ? 1 : -1

      scrollingTimer = setTimeout(() => {
        this.scroll = 0
      }, 100)
    })
  }
}

export default Mouse
