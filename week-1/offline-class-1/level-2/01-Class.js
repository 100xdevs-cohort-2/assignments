
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  static speak(){
    console.log(`${this.name} Speak`);
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}


let dog = new Animal("ray", 4);
console.log(dog.describe());
Animal.speak()