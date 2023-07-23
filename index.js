
/* CLASS  STAIC FUNCTION AND CLASS BASICS*/
class Student {
  constructor(name,yob) {
    this.name = name;
    this.yob = yob
  }

  getAge() {
    return new Date().getFullYear() - this.yob;
  }


  // STATIC FUNCTION
  static getMinYob(...arg) {
    var arr = arg.map((item) => item.yob)
    console.log(Math.min(...arr))
  }
}

let student1 = new Student('adarsh',2000);
let student2 = new Student('hellan',2001);
let student3 = new Student('john',2003);
//student1.place = "the unknown location"


Student.getMinYob(student1,student2,student3)


/* CLASS SET AND GET FUNCTIONS */

class Details {
  constructor(name,age,place){
      this.name = name;
      this.age = age;
      this.place = place;
      
  }

  set number(num) {
    this.phone = num 
  }

  get namePlace() {
    return {name: this.name,place:this.place}
  }
}

let details1 = new Details("hello",32,"uk");
details1.number = "9086467"


/* INHERITANCE  CHILD CLASS*/

class Home {
  constructor(room,kitchen,bathroom){
    this.room = room;
    this.kitchen = kitchen;
    this.bathroom = bathroom;
  }

  set Place(place) {
    return this.place = place
  }
}





class Outroom extends Home {
  constructor(room,kitchen,bathroom,d1) {
    super(room,kitchen,bathroom)
    this.d1 = d1
  }
}

let outdoor = new Outroom('room','kitchen','bathroom','d1')
outdoor.place = "uk";
console.log(outdoor);