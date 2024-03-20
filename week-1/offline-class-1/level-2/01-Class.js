
class Animal {
  //Special method for creating and initializing an object created with a class
  //Only one Constructor can be there in a class
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  //method
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}
const myAnimal = new Animal("Dog",4);

console.log(myAnimal.describe());


