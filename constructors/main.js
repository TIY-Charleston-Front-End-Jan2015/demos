// constructors

function Animal(spec) {
  var spec = spec || {};
  this.type =  spec.type || "generic animal";
  this.name = spec.name || "calvin";
  this.numLegs = spec.numLegs || 4;
  this.goPee = function (sound) {
    console.log(sound);
  };
  this.weight = spec.weight || 10;
  this.goPoo = function () {
    if(this.weight) {
    this.weight = this.weight - 1;
    console.log("i pooed");
  } else {
    console.log("your animal has died from losing too much weight");
  }
  }
}

var cat = new Animal({type: "cat", name: "oscar", numLegs: 4});



// function dog(name) {
//   return {
//     name: name,
//     numLegs: 4,
//     goPee: function () {
//       console.log("raaaaaaaaaaa");
//     }
//   };
// }
//
// function human(name) {
//   return {
//     name: name,
//     numLegs: 2,
//     goPee: function () {
//       console.log('blublbubblbleud...');
//     }
//   };
// }

// function cat(name) {
//   return {
//     name: name,
//     numLegs: 4,
//     goPee: function () {
//       console.log("whizzzzzzz....");
//     }
//   };
// }

var anAnimal = {
  name: null,
  numLegs: null
};
