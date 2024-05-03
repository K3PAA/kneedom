import '../style.css'
import Game from './classes/Game'
// import data, { dimensions } from './data'

window.onload = () => {
  const canvas = document.querySelector('canvas')
  canvas.width = 1000
  canvas.height = 600

  const c = canvas.getContext('2d')
  c.imageSmoothingEnabled = false
  const game = new Game({ canvas })
  let prev = 0

  const animation = (time) => {
    const timeStamp = (time || 0) - prev
    prev = time

    c.fillStyle = 'rgb(71,171,169)'
    c.fillRect(0, 0, canvas.width, canvas.height)

    game.update(timeStamp)
    game.draw(c)

    requestAnimationFrame(animation)
  }

  animation()
}
