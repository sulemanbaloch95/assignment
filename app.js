
class autoMobile{

   constructor(carname,model,color,kind){
       
         this.mycar=carname;
         this.mymodel=model;
         this.colour=color;
         this.system=kind;
   }


   data(){

           let carSpacification = `Hello This is Suleman I have a car name is ${this.mycar}.
           and my car model is ${this.mymodel}. My car color is ${this.colour}. and this car is ${this.system}`;

           document.write(carSpacification);

   }

}


class corolla extends autoMobile{

  constructor(carname,model,color,kind,adjust,keyless,){
        super(carname,model,color,kind);
        this.advance=adjust;
        this.key=keyless;
       
  }

data()
{

  let carSpacification = `Hi! This is suleman I have a car name is ${this.mycar}.
           and my car model is ${this.mymodel}. My car color is ${this.colour}. and this car is ${this.system}.
           and this car ${this.advance} car does not have ${this.key}`;

           document.write("<br/>"+"<br/>"+ carSpacification);


}
         
}

let car =new autoMobile("Corolla",2020,"white","Automatic fully fuctionable");
let car1 = new sonataSEL("Corolla",2020,"white","Automatic fully fuctionable","Adjustable drive seat free hand can drive","keyless start with figer print")

car.data();
car1.data();


document.write("<br/>"+"<br/>"+"<br/>");
document.write("<h2>Question Number Three Classes and inheritance</h2>");
document.write("<br/>"+"<br/>"+"<br/>");



class bus{

   constructor(busname,busmodel,buscolor){

          this.mybusname=busname;
          this.mybus=busmodel;
          this.mybuscolor=buscolor;


   }
  
   information(){

            let busSpacification = `This bus name is ${this.mybusname}. this bus model is ${this.mybus}. this bus color name is
            ${this.mybuscolor}`;
            
            document.write("<br/>"+"<br/>"+busSpacification);
   }

}


class bus1 extends bus{


    constructor(busname,busmodel,buscolor,Ac,door,wifi){
       super(busname,busmodel,buscolor);
       this.air=Ac;
       this.auto=door;
       this.net=wifi;

    }

    information(){

      let busSpacification = `This bus name is ${this.mybusname}. this bus model is ${this.mybus}. this bus color name is
      ${this.mybuscolor}. This Bus ${this.air}. This bus is ${this.auto}. This bus is${this.net} `;
      
      document.write("<br/>"+"<br/>"+busSpacification);
    }

}



let detail = new bus("Daewoo",2021,"Red");
let detail11 = new bus1("Daewoo",2021,"Red","Full air condition","Auto Open and close door"," 500mps wifi free")
detail.information();
detail11.information();


document.write("<br/>"+"<br/>"+"<br/>");
document.write("<h2>Question Number four Classes and inheritance</h2>");




class truck{

  constructor(name,model,color){

    this.myname=name;
    this.lastName=model;
    this.mycome=color;
 }

 truckdata(){
   document.write("<br/>"+"<br/>"+"<br/>")
  document.write(`Hi my name is ${this.myname}. my last name is ${this.lastName}. my truck color is 
  ${this.mycome}`)
  
 
 }


}

class autotruck extends truck{


  constructor(name,model,color,room,door,){
     super(name,model,color);
     this.air=room;
     this.auto=door;


  }

  truckdata(){

    document.write("<br/>"+"<br/>"+"<br/>")
         let title = `Hi my name is ${this.myname}. my last name is ${this.lastName}. my truck color is 
    ${this.myccome}.this truck have ${this.air}. this truck is${this.auto}`;
         document.write(title);    
  
  }

}

let list = new truck("Loader","2022","red and Black")
let list1 = new autotruck("Loader","2022","red and Black","Air condition room for driver","Auto door")
list.truckdata()
list1.truckdata()