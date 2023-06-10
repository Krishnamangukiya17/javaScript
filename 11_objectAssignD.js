let professor={
    name:"Ghanshyam",
    age: 45,
    degree:"Ms.IT",
    city:"pune",
   isMarried:"true",
}
const profesor={
    name:"Ghanshyam",
    age: 45,
    degree:{
        engineering:'CSC',
        PhD:'Advance computing',
        Mtech:'advance electronic',
    } } 
    const profesorr={
        name:"Ghanshyam",
        age: 45,
        total:{
            experiance:'14 years' ,
            
           
        },   
           
}
const pro={
    name:"Ghanshyam",
    age: 45,
    degree:"Ms.IT",
    city:"pune",
   isMarried:"true",
   certificate:{
    certificate:"Orcal certified"}
} 
const certificate=[" hacker rank participation "," certificate in IFE cource "," certificate in advance programming "]
profesor.degree.engineering = "Entc";
 
console.log(" 1) profesor object are :");
console.log( professor);
console.log("---------------------------------------------------------------------------------------------");
console.log(" 2) Nested object degree added :");
console.log(profesor.degree);
console.log("---------------------------------------------------------------------------------------------");
console.log(" 3) Add on array :");
console.log(certificate);
console.log("---------------------------------------------------------------------------------------------");
console.log(" 4) Teacher total degree are :");
console.log(profesor.degree);
console.log("---------------------------------------------------------------------------------------------");
console.log(" 5) Adding new property total experiance of professor :");
console.log(profesorr.total);
console.log("---------------------------------------------------------------------------------------------");
console.log(" 6) Modift existing peoperty engineering :");
console.log(` ${profesor.degree.engineering}`);
console.log("---------------------------------------------------------------------------------------------");
console.log(" 7) Add one new certificate :");
console.log(` ${pro.certificate.certificate}`);
console.log("---------------------------------------------------------------------------------------------");
