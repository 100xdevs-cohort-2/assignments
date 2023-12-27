
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
  print(){
    console.log(this.name + `has ${this.legCount} legs`);
  }
}

var legs = new Animal("Animal",2);
legs.print();



