let myGrades = [100, 100, 90, 73, 78, 94, 86];

let myAverage = 0;

for (let i = 0; i < myGrades.length; i++) { 

    myAverage += myGrades[i]; 

}

myAverage = myAverage / myGrades.length;

console.log("My grade average is " + myAverage);



class InvalidGradeException extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidGradeException";
    }
}


function validateGrade(grade) {
    if (typeof grade !== 'number') {
        throw new InvalidGradeException("Input must be a number.");
    }
    if (grade < 0 || grade > 100) {
        throw new InvalidGradeException("Grade must be between 0 and 100.");
    }
    console.log("Grade is valid:", grade);
}


try {
    validateGrade(105); 
} catch (e) {
    if (e instanceof InvalidGradeException) {
        console.error("Custom Exception Caught:", e.message);
    } else {
        console.error("Unexpected Error:", e);
    }
}





