


 function  voteEligibility(age , name){ 
 console.log(`helllo '${name}' your enterd age is : ${age},`);
 if (age <=0 || age>120 || age==undefined) {
    console.log(` You are eligible for voting ${age}`);
 }
  else 
    if (age>0 && age <18) {
        console.log(` you are not eligibile for voting `);
    } else 
        if (age >=18 && age <=120) {
            console.log(` You are eligible for voting`)
        } 
 }


var x;
voteEligibility(45,"krishna");
voteEligibility (17,"hardi");
voteEligibility (8,"A");
voteEligibility (20,"B");
voteEligibility (-10,"C");
voteEligibility (200,"D");
voteEligibility (0,"E");