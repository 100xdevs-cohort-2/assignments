//JS Classes
// 1. Create a class Animal with name and legCount properties in its constructor method
// 2. Create a method describe in Animal class that returns a string like: "Animal name has legCount legs"
// 3. Create a class Dog that extends Animal and has breed as its own property in constructor
// 4. Create a method describe in Dog class that returns a string like: "Animal name has legCount legs and it is a breed dog"
// 5. Create an object of Dog class and call describe method on it

class Animal {
  constructor(name, legCount) {
    this.name = name;
    this.legCount = legCount;
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`;
  }
}
