const marked = require('marked')

const Sanga = class {
  constructor(options) {
    this.wrapper = document.querySelector(options.selector)
    this.options = options
    this.markdown = marked.lexer(this.wrapper.innerHTML)
    console.log(this.markdown)
  }
}
module.exports = Sanga
