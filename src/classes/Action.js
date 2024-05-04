class Action {
  constructor({ keys, scale }) {
    this.keys = keys
    this.scale = scale
  }

  select({ mouse }) {
    if (
      this.keys.includes('KeyX') &&
      (this.keys.includes('KeyZ') || mouse.scroll > 0)
    ) {
      this.scale.up()
    }
    if (
      this.keys.includes('KeyX') &&
      (this.keys.includes('KeyC') || mouse.scroll < 0)
    ) {
      this.scale.down()
    }
  }
}

export default Action
