        console.log("\nexercice 1");

Math.random();
var random = (Math.random());

console.log(random);

        console.log("\nexercice 2");

var number = (12.28956);
    console.log(number);
    // console.log(Math.round(number));
// var round = (number.toFixed(2));
    console.log(number.toFixed(2));

        console.log("\nexercice 3");

var age = ("35");
        console.log(typeof age);

var age = (parseFloat("35"));
        console.log(typeof age);

        console.log("\nexercice 4");

var texte = ("Le soleil brille et lesoiseaux chantent");

var maxLength = 45;
console.log (texte.length)

        console.log("\nexercice7");

        if (texte.length > maxLength) {
                console.log("your texte is too long")
        }

        else {
                console.log("ok")
        }

        console.log("\nexercice 5");

var texte = "a nice boat";

var array = texte.split("");
console.log(array[2]);

        console.log("\nexercice 6");

        var name = "Paul Dumas";
        var expectedName = "paul dumas";

        if (name.toLowerCase() === expectedName) {
          console.log("OK Paul you can come in");
        }
        else {
          console.log("We do not know you");
        }    

        console.log("\nexercice 7");
var newStudent = "Ryan Oper";
var students = ["John Doe", "Jane Doe", "Marc Alm", "Jimmy Turner"];
console.log(newStudent);
console.log(students);

students.push(newStudent);
console.log(students);
var newStudent = "Ryan Oper";
var students = ["John Doe, Jane Doe, Marc Alm, Jimmy Turner"];

console.log(newStudent);
console.log(students);
students.push(newStudent);
console.log(students);

        console.log("\nexercice 8");

var transactions = [102, 50, 4563, 42, 78, 146, 10563];
var researched = 42;
console.log(transactions.includes(researched));

if (transactions.includes(researched)) {
        console.log("We found a matching transaction");
}

else {
        (console.log("no match"));
}

        // exercice 9
var students = ["John Doe", "Jane Doe", "Marc Alm", "Jimmy Turner"];
console.log(students);

students.sort();
console.log(students);
