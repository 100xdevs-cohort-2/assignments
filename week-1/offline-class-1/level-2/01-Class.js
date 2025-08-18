
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  describe() {
    console.log(`${this.name} has ${this.legCount} legs`)
    return 0;
  }
}

let animal = new Animal("dog",4);
animal.describe();
