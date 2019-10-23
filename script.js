// Function constructor

/* var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};


// Convention is function constructor has a capital letter to start out.
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

// How we create new objects using function constructor. 
// Instantiation 
var john = new Person("John", 1990, "teacher");

// Inheritance
// This adds a method to the constructor via prototype/inheritance.
Person.prototype.calculateAge = function() {
    console.log(2016-this.yearOfBirth);
}
// not common to use for properties, but very common for methods.

//can check to see if an object has a specific property:
john.hasOwnProperty('job');

//however, has to be john's OWN property not something he inherited.
john.hasOwnProperty('lastName');
//false as john inherited the lastname smith.

//can also check out
john instanceof Person
//Checks if john is an instance of the person.

var x = [2,4,6];
console.info(x); */
//This allows us to see the object information, almost everything is an object.

// Object.create
// Things work a bit different, define an object that will act as a prototype, then create an instance of that object using that prototype.
/*var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfbirthday);
    }
};

var john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1990;
john.job = "teacher";
// the above method is not ideal as we manually had to add the data in.

var jane = Object.create(personProto,
    {
        name: { value: 'Jane' },
        year: { value: 1969 },
        job: { value: 'designer' }
    });*/

//difference between Object.create & function constructor is that the Object.create
//creates directly from the prototype that was passed in as an argument
//while other one inherits from object function constructor.




// Primitives vs objects
// a variable that stores an object does not actually contain that object
// instead it holds a pointer that points to where that object is stored in memory.
// variables that contain primitives actually do contain the data.
/*var a = 23;
var b = a;
a = 46;

console.log(a);
console.log(b);

// b is unaffected as each variable holds their own copy of the data.

var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj2;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age); */
//both 30 because they share the same pointer reference because variables that contain
//pointers that point to the same object in memory.

//this works the same way for functions.
//objects are passed by reference, prims are passed by value.






//functions returning other functions
/*function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name +', can you please explain what UX design is?' );
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');
//this passes in the name for the returning function.
//can reuse this as much as we want.

//we dont even need to use a variable, we can use it right away.
//evaluates left to right.
interviewQuestion('designer')('Santos');*/








//IIFE - Immediately Invoked Function Expressions
// If-eeeee
/*
(function() {
    var score = Math.random * 10;
    console.log(score >= 5);
})();
//need to be wrapped in parentheses
//tricks the parser that this is a function expression.
//need to invoke function immediately after snc not attached to a variable.

// can also pass parameters into IIFEs
(function(goodluck) {
    var score = Math.random * 10;
    console.log(score >= 5 - goodluck);
})(5);*/

//IIFEs are really good to privatize data
//new scope that is hidden from the outside scope.
//not to reuse, for data privacy.



















//Closures
// An inner function always has access to its outer functions vars & parameters, even after the outer function has returned.
//scope chain always stays intact.
//this is because of the execution context and scope chain, due to the fact that a pointer it stored with the other properties.
/* 
function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + );
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log( + name + '?');
        }
    } else {
        return function(name) {
            console.log( + name + );
        }
    }
} 
*/

//rewrite this function w/ the power of closures.
/*function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            return function (name) {
                console.log(name +', can you please explain what UX design is?' );
            }
        } else if (job === 'teacher') {
            return function(name) {
                console.log('What subject do you teach, ' + name + '?');
            }
        } else {
            return function(name) {
                console.log('Hello ' + name + ', what do you do?');
            }
        }
    }
}
interviewQuestion('designer')('santos'); */






/*
//since functions are also objects, they inherit from their function constructor a few functions:
//bind, call, and apply
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if(style === "formal") {
            console.log("Good" + timeOfDay + "ladies & gents, I'm " + this.name)
        } else if (style === "friendly") {
            console.log("Hey, what's up? I'm " + this.name);
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};
john.presentation('formal', 'morning');

//suppose we want to use john's presentation method with emily's object
//we can the call function.
john.presentation.call(emily, 'friendly', 'afternnon');
//this sets the "this" variable to refer to the object passed into the first argument.
//this is called method borrowing






//apply method
//this is the same as call except the second argument is for an array.
john.presentation.apply(emily, ['friendly','afternoon']);
//this wont work as the function doesnt expect to receive an array.



//bind method
//very similar to call method as well, set this variable, difference is that it doesn't immediately call the method
//doesnt immediately call function, instead generates a copy of the function
//so we can keep a copy someewhere.
//can store with preset arguments
var johnFriendly = john.presentation.bind(john, 'friendly');
//this is called carrying
//this is when we copy a function and create the copy function w/ preset parameters.

/*
one really useful thing to use bind method is when you have a function
w/ a function passed in as a parameter. let's say the function you're trying to pass in
has 2 parameters. we can use bind to preset the arguments of the function you wish to
pass in, and then pass that in as the argument.
*/
/*
*/

/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/


(
function() {
    var userAnswer;
    var random = Math.floor((Math.random() * 3));
    var isBabeWeird = new Question("Is my babe weird?", ["Yes, she totally is.", "No, I'm insane, too."], 0);
    var firstProgrammingLanguage = new Question("What is the first programming language Santos learned in detail?", ["Python", "PHP", "JavaScript", "VBA"], 0);
    var favoriteFood = new Question("What is my favorite food?", ["pizza", "tacos", "pad thai", "sweet and sour pork", "dim sum"], 4);
    var questions = [isBabeWeird, firstProgrammingLanguage, favoriteFood];

    function Question(question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    };

    Question.prototype.askQuestion = function() {
        console.log(this.question);
        console.log("Possible Answers: ");
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ". " + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(userAnswer) {
        if (userAnswer == this.correctAnswer) {
            console.log("You got it! The answer you provided is correct.");
        }
    }

    questions[random].askQuestion();
    userAnswer = prompt("Please enter the correct answer here: ");
    questions[random].checkAnswer(userAnswer);
}
)();