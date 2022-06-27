const reset = '\x1b[0m'
const bold = '\x1b[1m'
const underline = '\x1b[4m'
const reverse = '\x1b[7m'

const black = '\x1b[30m'
const red = '\x1b[31m'
const green = '\x1b[32m'
const yellow = '\x1b[33m'
const blue = '\x1b[34m'
const magenta = '\x1b[35m'
const cyan = '\x1b[36m'
const white = '\x1b[37m'

const BGblack = '\x1b[40m'
const bgRed = '\x1b[41m'
const bgGreen = '\x1b[42m'
const bgYellow = '\x1b[43m'
const bgBlue = '\x1b[44m'
const bgMagenta = '\x1b[45m'
const bgCyan = '\x1b[46m'
const bgWhite = '\x1b[47m'

class Terminal {
  #color = reset

  black() {
    this.#color = this.#color + black
    return this
  }

  red() {
    this.#color = this.#color + red
    return this
  }

  green() {
    this.#color = this.#color + green
    return this
  }

  yellow() {
    this.#color = this.#color + yellow
    return this
  }

  blue() {
    this.#color = this.#color + blue
    return this
  }

  magenta() {
    this.#color = this.#color + magenta
    return this
  }

  cyan() {
    this.#color = this.#color + cyan
    return this
  }

  white() {
    this.#color = this.#color + white
    return this
  }

  bold() {
    this.#color = this.#color + bold
    return this
  }

  underline() {
    this.#color = this.#color + underline
    return this
  }

  reverse() {
    this.#color = this.#color + reverse
    return this
  }

  BGblack() {
    this.#color = this.#color + BGblack
    return this
  }

  bgRed() {
    this.#color = this.#color + bgRed
    return this
  }

  bgGreen() {
    this.#color = this.#color + bgGreen
    return this
  }

  bgYellow() {
    this.#color = this.#color + bgYellow
    return this
  }

  bgBlue() {
    this.#color = this.#color + bgBlue
    return this
  }

  bgMagenta() {
    this.#color = this.#color + bgMagenta
    return this
  }

  bgCyan() {
    this.#color = this.#color + bgCyan
    return this
  }

  bgWhite() {
    this.#color = this.#color + bgWhite
    return this
  }

  log(str) {
    const currentColor = this.#color
    this.#color = reset
    return console.log(`${currentColor}${str}${reset}`)
  }
}

module.exports.terminal = new Terminal()
