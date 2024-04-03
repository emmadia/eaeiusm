class Hero {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Adding a method to describe the hero
  describe() {
    return `${this.name} is ${this.age} years old.`;
  }
}

// Usage
const hero = new Hero('Superman', 30);
console.log(hero.describe());
