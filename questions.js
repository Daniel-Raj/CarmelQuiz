var q1 ={
    no : "1",
    question : "Question 1?",
    option1 : "Answer 1",
    option2 : "Answer 2",
    option3 : "Answer 3",
    option4 : "Answer 4",
    answer : "Answer 1"
    }

var q2 = {
    no : "2",
    question : "Question 2?",
    option1 : "Answer 1",
    option2 : "Answer 2",
    option3 : "Answer 3",
    option4 : "Answer 4",
    answer : "Answer 2"
    }

var q3 = {
    no : "3",
    question : "Question 3?",
    option1 : "Answer 1",
    option2 : "Answer 2",
    option3 : "Answer 3",
    option4 : "Answer 4",
    answer : "Answer 3"
    }

var q4 = {
    no : "4",
    question : "Question 4?",
    option1 : "Answer 1",
    option2 : "Answer 2",
    option3 : "Answer 3",
    option4 : "Answer 4",
    answer : "Answer 4"
    }

var q5 = {
    no : "5",
    question : "Question 5?",
    option1 : "Answer 1",
    option2 : "Answer 2",
    option3 : "Answer 3",
    option4 : "Answer 4",
    answer : "Answer 1"
    }

module.exports = function(val) {
    
    switch(val){
        case 1 : return(q1);break;
        case 2 : return(q2);break;
        case 3 : return(q3);break;
        case 4 : return(q4);break;
        case 5 : return(q5);break;
        default : return(0);
    }
    
};