class Monster {
    constructor(option){
      this.name = option.name;
      this.health = 90;
  
    }
  
    wound(damage){
      this.health -= Math.min(this.health, damage);
      console.log(this.name + ' lost '+ damage + ' hp, only ' + this.health + ' remaining!')
      if(this.health <= 0){
          console.log('Monster die!')
      }
    }
  
  
  }
  
  let hero = function(monster){
      let damage = Math.floor(Math.random()* (20-5 + 1) + 5)
      monster.wound(damage);    
  }

  var monster = new Monster({name: 'garbage grouch'})

  while(monster.health > 0){
      hero(monster)
  }