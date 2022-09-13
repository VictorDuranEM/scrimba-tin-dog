// Create the Dog class here

class Dog {
  constructor(data) {
    Object.assign(this, data)
  }
  
  setSwiped() {
    this.hasBeenSwiped = true
  }
  
  setLiked() {
    this.hasBeenLiked = true
  }
  
  getDogHtml() {
    const { name, avatar, age, bio, hasBeenLiked, hasBeenSwiped } = this
    return `
      <img class="dog-img" src="${avatar}" alt="teddy dog">
      <p class="dog-status ${hasBeenLiked ? 'dog-status-like'
          : hasBeenSwiped ? 'dog-status-nope' : ''}">
        ${hasBeenLiked ? "like" : hasBeenSwiped ? "nope" : ""}    
      </p>
      <div class="dog-info">
          <h1>${name}, ${age}</h1>
          <p>${bio}</p>
      </div>
    `
  }
  
}

export default Dog