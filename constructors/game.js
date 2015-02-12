

// character constructor

function Character(spec) {
  var spec = spec || {};
  this.name = spec.name || "person";
  this.life = 100;
  this.age = spec.age || 20;
  this.arm = function (type, rounds) {

    this.weapon = new Weapon(type, rounds);
  };
  this.attack = function (monster) {
    var hits = Math.floor(Math.random() * 20);
    console.log("pew pew");
    monster.damage(hits);
  }


}

// monster constructor

function Monster() {
  this.name = "sully"
  this.life = 100;
  this.damage = function (hits) {
    if(this.life >= 0) {
    this.life = this.life - hits;
    console.log(this.name + " was hit!!");
  } else {
    console.log(this.name + " HAS DIED, YOU WIN!!!!!");
  }
  }

}


var myPage = {
  init: function () {
    myPage.initEvents();
  },
  initStyling: function () {

  },
  initEvents: function () {
    $("#createGame").on('submit', function (e) {
      e.preventDefault();
      var traits = {
        name: $('#character input[name="name"]').val(),
      };
      myPage.character = new Character(traits);
      myPage.monster = new Monster();
      myPage.renderBoard();

    });
    $("#board").on("click", "button", function (e) {
      e.preventDefault();

      myPage.character.attack(myPage.monster);
      $(".status").text(myPage.monster.name + "'s life is: " + myPage.monster.life);
    })

  },
  renderBoard: function () {
    $("#board").append("<img src='http://www.fillmurray.com/200/200'><button>Attack</button>");
    $("#board").append("<img src='http://www.placecage.com/200/200'>");

  }
};

$(document).ready(function () {
  myPage.init();
});
