class Game {
  constructor(id){
    this.players = [],
    this.supplies = {
      oxen: Math.floor(Math.random()*5)+1,
      setsClothing: Math.floor(Math.random()*10)+1,
      bullets: Math.floor(Math.random()*300)+1,
      wagonWheels: Math.floor(Math.random()*10)+1,
      wagonAxels: Math.floor(Math.random()*10)+1,
      wagonTongues: Math.floor(Math.random()*10)+1,
      poundsFood: Math.floor(Math.random()*300)+1,
    }
  }
}

module.exports = Game;
