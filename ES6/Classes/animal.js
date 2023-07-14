export class Animal {
  constructor(type,legs) {
    this.type = type;
    this.legs = legs;
  }
  makeNoise(sound= 'Loud Noise') {
    console.log(sound);
  }
  get metaData() {
    return `Type: $(this.type), Legs: ${this.legs}`;
  }
}
export class Cat extends Animal {
  makeNoise(sound = 'meow') {
    console.log(sound)
  }
}

//another js file animal2.js
