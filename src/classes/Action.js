class Action {
  constructor({ background, keys }) {
    this.keys = keys
    this.background = background
  }

  select(scroll) {
    if (
      this.keys.includes('KeyX') &&
      (this.keys.includes('KeyZ') || scroll > 0)
    ) {
      // console.log('scale up')
      this.background.setScale(this.background.scale + 0.025)
    }
    if (
      this.keys.includes('KeyX') &&
      (this.keys.includes('KeyC') || scroll < 0)
    ) {
      // console.log('scale down')
      this.background.setScale(this.background.scale - 0.025)
    }
  }
}

export default Action
