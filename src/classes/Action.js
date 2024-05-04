class Action {
  constructor({ keys, setScale }) {
    this.keys = keys
    this.setScale = setScale
  }

  select(scroll) {
    if (
      this.keys.includes('KeyX') &&
      (this.keys.includes('KeyZ') || scroll > 0)
    ) {
      this.setScale(0.05)
    }
    if (
      this.keys.includes('KeyX') &&
      (this.keys.includes('KeyC') || scroll < 0)
    ) {
      this.setScale(-0.05)
    }
  }
}

export default Action
