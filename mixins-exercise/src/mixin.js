export const stringLength = {
  computed: {
    countString() {
      return `${this.text} (${this.text.length})`
    }
  }
}
