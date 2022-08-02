function createInstructor(firstName, lastName){
    return{
        firstName: firstName,
        lastName : lastName,
    }
}
//ES2015 Version

function createInstructor(firstName, lastName){
    return {
        firstName,
        lastName
    }
}
//Computed Property Names
var favoriteNumber = 42;

var instructor ={
    firstName: "Colt",
}

instructor[favoriteNumber] = "That is my favorite!"

//ES2015 Version

let favoriteNumber = 42;

const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
}

//Object Methods

var instructor = {
    firstName: "Colt",
    sayHi:function(){
        return "Hi";
    },
    sayBye(){
        return this.firstName + "says bye!";
    }
}
//ES2015 Onject Methods
const instructor = {
    firstName: "Colt",
    sayHi() {
        return this.firstName + "says bye!";
    }
}


//create Animal Function

const d = createAnimal("dog", "bark", "Woooof!")


const s = createAnimal("sheep", "bleet" , "BAAAAaaaa")

function createAnimal(species, verb, noise){
    return {
        species,
        [verb](){
            return noise;
        }
    }
}