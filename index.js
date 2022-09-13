import dogs from "./data.js"
import Dog from "./Dog.js"

document.getElementById("btn-love").addEventListener("click", loveDog)
document.getElementById("btn-nope").addEventListener("click", nopeDog)

function loveDog() {
  dog.setSwiped()
  dog.setLiked()
  render()
  nextDog()
}

function nopeDog() {
  dog.setSwiped()
  render()
  nextDog()
}

function nextDog() {
  if (dogs.length) {
    setTimeout(() => {
      dog = new Dog(dogs.shift())
      render()
    }, 1000)
  }
}

function render() {
  document.getElementById("dog").innerHTML = dog.getDogHtml()
}

let dog = new Dog(dogs.shift())
render()
