function main() {
  function buildSentence(element) {
    let letters = element.textContent.split('')
    let count = 0
    element.textContent = ''
    let textTimer = setInterval(() => {
      element.textContent = element.textContent + letters[count]
      count++
      if(element.textContent.length === letters.length) {
        clearInterval(textTimer)
        breakSentence(letters, element)
      }
    }, 175)
  }
  
  function breakSentence(array, element) {
    let count = array.length - 1
    let textTimer = setInterval(() => {
      element.textContent = element.textContent.substring(0, count)
      count--
      if(count < 0) {
        clearInterval(textTimer)
        element.textContent = array.join('')
        buildSentence(element)
      }
    }, 75)
  }

  buildSentence(document.querySelector('#animate-text'))
}
document.addEventListener('load', main())