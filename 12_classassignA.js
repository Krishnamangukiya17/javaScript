
console.log("------------------------------(1)-----------------------------------");
class Vehical{
constructor(brand,colour,price,fuelType,mielage){
    this.brand=brand;
    this.colour=colour;
    this.price=price;
    this.fuelType=fuelType;
    this.mielage=mielage;
}
showDetails(){
    console.log(` Detail of the vehical is ==>> ${this.brand}, ${this.colour},${this.price},${this.fuelType},${this.mielage}`);
}
}
const bmw =new Vehical("BMW","White", "31Lacs","Petrol","9km hr");
const activa= new Vehical("honda","white","1Lakh","petrol","40km");
const tata =new Vehical("tata","White", "51Lacs","Petrol","18km hr");
const audi= new Vehical("audi","white","40Lakh","petrol","12km");
const jaguar= new Vehical("jaguar","white","40Lakh","petrol","17km");
bmw.showDetails();
activa.showDetails();
tata.showDetails();
audi.showDetails();
jaguar.showDetails();
console.log("------------------------------(2)-----------------------------------");

class College{
constructor(collegeName ,location,pin,eMail){
    this.collegeName=collegeName;
    this.location=location;
    this.pin=pin;
    this.eMail=eMail;
}
showDetails(){
    console.log(`${this.collegeName},${this.location},${this.pin},${this.eMail}`);
}
}
const sd =new College(": S.D College",": Ahemdabad", ": 380023",": shethdamodar12@gmail.com");
const iim =new College(": IIM College",": Ahemdabad", ": 380020",": iiminstitude@gmail.com");
const somlalit =new College(": som lalit College",": Ahemdabad", ": 380020",": slims@gmail.com");
const rj=new College(": R J Tribraval",": ahemdabad",": 380025",": tj143@gmail.com")

traverse(sd);
console.log("---------------------------------------------------------------------");
traverse(iim);
console.log("---------------------------------------------------------------------");
traverse(somlalit);
console.log("---------------------------------------------------------------------");
traverse(rj);

function traverse(collegeObject) {
    for (const key in collegeObject) {
        if (Object.hasOwnProperty.call(collegeObject, key)) {
            const element = collegeObject[key];
          console.log(`${key},${element}`); 
        }
    }
}



