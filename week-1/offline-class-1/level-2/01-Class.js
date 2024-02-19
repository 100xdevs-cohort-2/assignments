
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}

class Dog extends Animal{
  constructor(name, legCount, sound){
    super(name, legCount);
    this.sound = sound;
  }
  describe(){
    return super.describe();
  }
  describeDog(){
    return `${this.name} has ${this.legCount} legs and ${this.sound}`;
  }
}


let dog = new Dog("jio", 4, "bark");
let dog2 = new Dog("Cam", 4, "bark")
console.log(dog.describe());
console.log(dog2.describeDog())


