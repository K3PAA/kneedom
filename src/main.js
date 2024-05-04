import '../style.css'
import Game from './classes/Game'

window.onload = () => {
  const canvas = document.querySelector('canvas')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

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
