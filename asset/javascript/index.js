/*Get user input using prompt (“Enter your age :”). If user is 18 or older, give feedback: 'You are old
enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs
to turn 18.
o Enter your age: 30, you are old enough to drive.
o Enter your age: 15, you are left with 3 years to drive.*/

let age=prompt("enter your age to drive ")
if (age>=18)
{
console.log("you are old enough to drive")
}
else{
    console.log(`you are left with ${18-age} years to drive` )
}

/*Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result
to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
o Enter your age: 30, you are 5 years older than me.*/

let myAge=20;
let yourAge=prompt("enter your age for Compare myage and your age ")
if (myAge>yourAge){
console.log(`i am ${myAge-yourAge} year older than you`)
}
else{
    console.log(`you are ${yourAge-myAge} year older than me`)
}

/*If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
o using if else
o ternary operator.
o let a = 4, let b = 3, 4 is greater than 3*/

let a= prompt("enter a")
let b= prompt("enter b");
if(a>b){
    console.log("a is greater than b")
}
else if(a<b){
    console.log("b is greater than a")
}
else if(a==b){
    console.log("both are equal ")
}

/*Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or
odd?
o Enter a number: 2, 2 is an even number
o Enter a number: 9, 9 is an odd number*/

let num= prompt(" enter a number to  check the number is even or odd ")

if (a%2){
    console.log("number is even")
}
else{
    console.log("number is odd")
}

/*Write a code which can give grades to students according to theirs scores:
o 80-100, A
o 70-89, B
o 60-69, C
o 50-59, D
o 0-49, F*/

let scores = prompt("enter your score to know  your grade")

if(scores>=80){
    console.log("your grade is A")
}
 else if (scores>=70){
     console.log("your grade is B")

 }

 else if(scores>=60){
     console.log("your grade is C")
 }
 else if(scores>=50){
     console.log("your grade is D")
 }
 else if(scores>=0)
 {
     console.log("your grade is E")
 }

 /*Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
o September, October or November, the season is Autumn.
o December, January or February, the season is Winter.
o March, April or May, the season is Spring
o June, July or August, the season is Summer*/

let month=prompt("Enter a month to know season")

switch(month){
    case 'january':
        console.log(" season is winter")

        break
        case'december':
            console.log(" season is winter")

            break
            case 'february':
                console.log(" season is winter")
                
                break

                case 'september':
        
                console.log(" season is Autumn")
                break
                case 'october':

                console.log(" season is Autumn")
                break
                case 'november':

                console.log(" season is Autumn")

                break

                case 'march':
                    console.log(" season is Spring")

                    break

                    case 'april':
                    console.log(" season is Spring")

                    break

                    case 'may':
                    console.log(" season is Spring")

                    break
                    
                    case 'june':
                        console.log(" season is Summer")

                        break

                        case 'july':
                            console.log(" season is Summer")

                            break

                            case 'agust':
                            
                                console.log(" season is Summer")

                                break
                                default:
                          console.log('It is not a month.')

}

/*Check if a day is weekend day or a working day. Your script will take day as an input.
o What is the day today? Saturday, Saturday is a weekend.
o What is the day today? SaturDaY, Saturday is a weekend.
o What is the day today? Friday, Friday is a working day.
o What is the day today? FrIDAy, Friday is a working day.*/

let today=prompt( "enter a day ")

switch(today){
    case 'monday':
        console.log(" Monday is a working day")
        break

        case 'tuesday':
        console.log(" Tuesday is a working day")
        break
        case 'wednesday':
            console.log(" Wednesday is a working day")
            break
            case 'thursday':
                console.log(" Thursday is a working day")
                break
                case 'friday':
                    console.log(" Friday is a working day")
                    break
                    case 'saturday':
                        console.log(" Saturday is a weekend.")
                        break
                        case 'sunday':
                            console.log("  Sunday is a weekend.")
                            break

                            default:
                                console.log(" it's  not a day")}

                        
/*Write a program which tells the number of days in a month.
o Enter a month: January, January has 31 days.
o Enter a month: JANUARY, January has 31 day
o Enter a month: February, February has 28 days.
o Enter a month: February, February has 28 days.*/

let days =prompt("enter a month to know how many days in a month")

switch(days){

    case 'january':
        console.log(' january 31 days')
        break

        case 'february':
        console.log(' february  has 28 days')
        break

        case 'march':
        console.log(' March has 31 days')
        break

        case 'april':
        console.log(' april has 30 days')
        break

        case 'may':
        console.log(' may has 31 days')
        break

        case 'june':
        console.log(' june has 30 days')
        break

        case 'july':
        console.log(' july has 31 days')
        break

        case 'august':
        console.log(' august has 31 days')
        break

        case 'september':
        console.log(' september has 30 days')
        break

        case 'october':
        console.log(' october has 31 days')
        break

        case 'november':
        console.log(' november has 30 days')
        break

        case 'december':
        console.log(' december has 31 days')
        break

        default:
            console.log("it's not a month")
}

