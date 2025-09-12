class Person{
    name;
    age;
    occupation;
    message;

    constructor(name, age, occupation, message){
         this.name = name;
         this.age = age;
         this.occupation = occupation;
         this.message = message;
    }

    displayInfo(){
        console.log("Name: "+ this.name);
        console.log("Age: "+ this.age);
        console.log("occupation: "+ this.occupation);
        console.log("Message: "+ this.message);
        console.log("----------------------")
    }
    showName(){
        console.log(this.name);
    }
    showMessage(){
        console.log (this.message);
    }

}
 

const Person1 = new Person("Coco Martin" ,24, "Masahista" ,"Ser, tapos na po");
const Person2 = new Person("Victor Magtanggol" ,24, "Superhero" ,"Arjooooooo");

Person1.displayInfo();
Person2.displayInfo();