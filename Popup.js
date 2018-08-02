class caughtPokemon {
    constructor(pokemonID) {
      //When a pokemon was caught, we knew its type, AKA it's number in the store. Pokemon ID is this number
      this.html = $(`${pokemonStore[pokemonID]}`);
      this.level = 1;
      this.experence = {currentXP: 0, levelUpXP: 100}
      this.hp = 20 + Math.floor(Math.random()*10)
      this.attack = 10 + Math.floor(Math.random()*5)
    }
    gainExperience(){
      this.experience[currentXP] += 20 + Math.floor(Math.random()*50);
      if (this.experience[currentXP] > this.experience[levelUpXP]){
        this.experience[currentXP] = this.experience[levelUpXP] - this.expereince[currentXP]
        this.levelUp() 
      }
    }
    levelUp(){
      this.experience[levelUpXP] *= 1.2
      this.level += 1; 
      this.hp += 10 Math.floor(Math.random()*5)
      this.attack += 4 Math.floor(Math.random()*3)
    }
  }