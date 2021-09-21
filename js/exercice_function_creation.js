// Exercice 1
function product(a, b) {
    return (a*b)
};


var result = product(8, 3);
console.log(result);

    //Exercice 2

    function showDigit(a,b) {
        for (i=a ; i<=b ; i++) {
            console.log(i);
        }

    }
    
    showDigit(10,18);



        //Exercice 3

        console.log("\nexercice 3");

    function welcome(firstName, lastName) {
        return firstName + lastName; 
    
   
    }
    var result = welcome("John", " Doe");

        console.log("Welcome to our site John Doe " + result);

            // Exercice 4
        console.log("\nexercice 4");
    
function isAdult(age=false) {
    if ( age >= 18) {
        console.log("true");
    }
    else {
        console.log("false");
    }
    // else () {
    //     console.log("false");
    // }
}

isAdult (2);

// autre exemple pour cet exercice

function isAdult(age=false){
    if(age){
      return (age >= 18) ? true : false; // le ? et : est un "turner" ce qui remplace le "if else et else"
    }
    return false;
  }
  
  if (isAdult(27)) {
    console.log("Welcome to the site");
  }


    // exercice 5
console.log("\nexercice 5");

function birthYear(age=false){
    
    var date = new Date();
    var birthYear = date.getFullYear() - age
    console.log(birthYear);
}
birthYear (15)
    

    //Exercice 6 
