class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }

  static myType(){
    console.log("This is an Animal")
  }
  speak() {
    return `${this.name} has ${this.legCount} legs`
  }
}

Animal.myType()
let dog=new Animal("mow",4)
console.log(dog.speak())