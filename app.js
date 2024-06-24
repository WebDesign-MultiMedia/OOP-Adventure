// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"],
//     companion: {
//         name: "Leo",
//         type: "Cat",
//         champion: {
//             name: "Frank",
//             type: "Flea",
//             belongings: ["small hat", "sunglasses"]

//         },
//     },
//     roll (mod = 0) {
//         const result = Math.floor(Math.random() * 20) + 1 + mod;
//         console.log(`${this.name} rolled a ${result}.`)
//         }
//     }




// PART TWO "Class Fantasy"

class Character{
    static MAX_HEALTH = 100;

    constructor(name, health){
        this.name = name;
        this.health = Math.min(health, Character.MAX_HEALTH);
        this.inventory = [];

    }
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        }    
}
console.log(Character.MAX_HEALTH);




// PART THREE "Class Features"


class Adventurer extends Character{
    static ROLES = ["Fighter", "Healer" ,"Wizard"];
    

    constructor(name){
        super(name);  
        this.role = (Adventurer.ROLES)    
        this.inventory.push("bedroll", "50 gold coins");
    }
    

    scout(){
        console.log(`${this.name} is scounting ahead...`);
        super.roll();
    }

    dual(oppenet){
       while(this.health > 50 && oppenet.health > 50){
        let roll1 = this.roll();
        let roll2 = oppenet.roll();

        console.log(`${this.name} rolls: ${roll1}`);
        console.log((`${oppenet.name} rolls : ${roll2}`));

        if(roll1 > roll2){
            oppenet.health -= 1;
            console.log(`${this.name} wins the round! ${oppenet.name} losses 1 health.`);
        } else if(roll2 > roll1){
            this.health -= 1;
            console.log(`${oppenet.name} wins the round! ${this.name} loses 1 health`);
        } else{
            console.log("It's a tial ! no health lost.");
        }
        if(this.health > 50){
            console.log(`${this.name} wins the duel with ${this.health} health remaining!`);
        } else{
            console.log(`${oppenet.name} wins the duel with ${oppenet.health} health reamining!`);
        }
       }
    }




}



// const adventurer1 = new Adventurer("Alice");
// const adventurer2 = new Adventurer("Bob");

// adventurer1.duel.adventurer2;

// console.log(adventurer1);


class Companion{
    constructor(name, type, inventory){
        this.name = name;
        this.type = type;
        this.inventory = inventory;
    }

    furryFriend(){
        console.log(`The ${this.type} named ${this.name} is traveling and with ${this.inventory}`)
    }
}



//PART FIVE "Gather Your Party"

class AdventurerFactory {
    constructor(role){
        this.role = role;
        this.adventurers = [];
    }
    generate (name){
        const newAdventurers = new Adventurer(name, this.role);
        this.adventurers.push(newAdventurers);
    }
    findByIndex(index){
        return TouchList.adventurers[index];
    }
    findByName(){
        return TouchList.adventurers.find((a) => a.name === name);
    }
}

const healers = new AdventurerFactory("Healer");
const robi = healers.generate("Robin")




const robin = new Adventurer("Robin");
robin.inventory = ["sword", "potion", "artifact"]

robin.companion = new Companion("Leo");
robin.companion.type = "cat";
robin.companion.inventory = ["Nothing"];


robin.companion.companion = new Companion("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

robin.scout()
robin.dual(4)
robin.companion.furryFriend()

console.log(healers, robi, robin, robin.companion);
