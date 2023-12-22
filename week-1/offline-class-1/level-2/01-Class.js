//JS Classes

class Animal {
  constructor(name, legCount, sound) {
    this.name = name;
    this.legCount = legCount;
    this.sound = sound;
  }

  //static method  can be called without instantiating the class
  static func() {
    console.log("ANIMAL !");
  }

  describe() {
    console.log(`${this.sound}, i am ${this.name} has ${this.legCount} legs`);
  }
}

let dog = new Animal("dog", 4, "bhow bhow");
let cat = new Animal("cat", 4, "meow meow");
let cow = new Animal("cow", 4, "moo moo");
let bird = new Animal("bird", 2, "tweet tweet");

dog.describe();
cat.describe();
Animal.func();
