console.log("\nExercice 1");

if (true) {
    console.log("Condition is working !");
  }
  if (false) {
    console.log("Condition is working !");
  } 
  else {
    console.log("Condition is not working !");
  }
  if (false === false) {
    console.log("Condition is working !");
  } 


  console.log("\nExercice 2");

  if (123) {
    console.log("Condition is OK");
  }
  else {
    console.log("Condition is KO");
  }

  console.log("\nexercice  3");

  var price = "forty five";
  
  if (price === 45) {
    console.log("The price is a number");
  }
  else if (price == 45) {
    console.log("The price is a string");
  }
  else {
    console.log("The price is something else");
  }

  console.log("\nexercice 4");

  var age = (20);

  if (age>=18)  {
      console.log("Entry allowed");
  }
  else if(age < 18) {
    console.log("Entry not allowed");
  }

  console.log("\nexercice 5");

  var store = ["Walmart", "Colorado", "South-Park", 483,];

  if (store[0] === "Walmart" && store[2] === "South-Park") {
    console.log("The Walmart in South-Park has " + store[3] + " employes");
  }
  else if (store[0] === "Walmart" && store[1] === "Colorado") {
    console.log("Hum this is an other Walmart from Colorado");
  }
  else if (store[0] === "Walmart") {
    console.log("Too bad this is just a Walmart");
  }
  else {
    console.log("I do not know what this is"); 
  }

  console.log("\nexercice 6");
  
  var student = [ "name", "John Doe", "Grade", "1"]
 
  if (student[3] < 10) {
      console.log("Recalé");
  }
  else if (student[3] >= 10 && student[3] <= 12) {
      console.log("Passable");
  }

  else if (student[3] >= 12 && student[3] <= 14) {
      console.log("Moyen");
  }
  else if (student[3] >= 14 && student[3] <=16) {
      console.log("bien");  
}
  else {
      console.log("Très bien");
  }

  console.log("\nExercice 7");

  