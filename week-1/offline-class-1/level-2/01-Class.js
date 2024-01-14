class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  static myType() { // static function, it is called with the name of class.
    console.log("Animal");
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}

let dog = new Animal("dog", 4);
console.log(dog.describe());
// You cannot call a static method on an object (i.e. dog.myType()), only on an object class (i.e. Animal.myType()).
Animal.myType();

