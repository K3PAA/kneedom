class Input {
  constructor() {
    this.keys = []
    this.list = ['KeyZ', 'KeyX', 'KeyC']

    window.addEventListener('keydown', (e) => {
      this.registerKey(e.code)
    })
    window.addEventListener('keyup', (e) => {
      this.unregisterKey(e.code)
    })
  }

  registerKey(key) {
    if (this.list.includes(key)) {
      if (!this.keys.includes(key)) this.keys.push(key)
    }
  }

  unregisterKey(key) {
    const index = this.keys.indexOf(key)
    if (this.list.indexOf(key) > -1)
      if (index > -1) {
        this.keys.splice(index, 1)
      }
  }
}

export default Input
