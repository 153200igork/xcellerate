//old method

// function Player(name, health){
//     this.name = name;
//     this.health = health;
// }

// Player.prototype.attack = function(player){
//     player.health = Math.max(0, player.health - 10);
//     console.log(this.name+ ' (hp: '+this.health+') attacks '+player.name+ ' (hp: '+player.health+')');
// }

// let John = new Player('John', 100);
// let Dave = new Player('Dave', 100);

// while (john.health > 0 && dave.health > 0){
//     if(Math.floor(Math.random()*2) === 0){
//         john.attack(dave)
//     } else {
//         dave.attack(john)
//     }
// }

// new method

class Player {
    constructor(options){
      this.name = options.name;
      this.health = options.health;
    }
    
    attack(player){
      player.health = Math.max(0, player.health - 10);
      console.log(this.name+ ' (hp: '+this.health+') attacks '+player.name+ ' (hp: '+player.health+')');
      if(player.health < 0 ){
        console.log(`${this.player.name} died`)
      }
  
    }
  }
  
  let player1 = new Player({name: 'Jack', health: 100});
  let player2 = new Player({name: 'Tom', health: 100});
  
  while (player1.health > 0 && player2.health > 0){
      if(Math.floor(Math.random()*2) === 0){
          player1.attack(player2)
      } else {
          player2.attack(player1)
      } if(player1.health <= 0){
        console.log(player1.name+' is finally dead')
      } if(player2.health <= 0) {
        console.log(player2.name+' is finally dead')
  
      }
  
  }
  