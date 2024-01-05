//classes means give out of the structure of something reversible and using multiple places
// A Class is like an object constructor, or a “blueprint” for creating objects.

// Creating a Class:

// To create a class, use the keyword class:

// Syntax of creating a class named “car” with a variable x:

// public class car {

//   int x;

// }

class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}


const dog ={
  name: "doggie",
  legCount: 4,
  speaks: "bhow bhow",
};


const cat ={
  name: "cat",
  legCount: 4,
  speaks: "meow",
};

function printStr(animal){
  console.log("animal" + animal["name"] + " "  + animal["speaks"]);
   // nothing
}

console.log(printStr(dog));
printStr(cat);

//output
// animaldoggie bhow bhow
// undefined why this come because of i am login the printStr 
//and what is printStr return Nothing thats why 
// animalcat meow



class pet {
  constructor(name, legCount, speaks){
    this.name = name;
    this.loeCount = legCount;
    this.speaks = speaks;
  }


  static mytype(){
    console.log("pet")
  }

  //console.log(pet.speak())

  speak(){
    console.log("hi there " + this.speaks);
  }
}

let parrot = new pet("parrot", 2, "bhow bhow"); // creat object
let cow = new pet("cow",4,"hammaa");


cow.speak();  /// call function on object
parrot.speak();


//static function on class this are assosiate with objects to the class it self this are the blueprint it self