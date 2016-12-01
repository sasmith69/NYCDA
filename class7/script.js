//function change() {
//	document.getElementById("element").innerHTML = "new text";

//}

//change();

//var myFirstnumber = 4;
//var mySecoundNumber = 10;
//console.log (myFirstnumber + mySecoundNumber);	

//var myFirstname = "Shawn";
//var myLastname = "Smith";

//alert(myFirstname +" "+ myLastname);

//var myWork = {
	//myFirstname: "Shawn", 
	//myLastname: "Smith", 
	//mybirthday: "October 4, 1969", 
	//companyName: "Credit Suisse", 
	//interest: ["xbox", "sports", "movies"]
//};

//console.log(myWork.myFirstname);


//var x = 9;
//var y = 10;

//if(x > 10){

//alert("x is less that 10");

//}else{

//	console.log ("x is equals 9");

//}

//function myFunction(num){

	//console.log (num*num);
	//console.log ("your word was"+word);
//}


//myFunction(2, "NYCDA");
//myFunction(9, "cats");

//function squared (num){

//		return num*num;

//}

//var secondNum = squared(5);
//var thirdNum = squared(secondNum);

//console.log	(thirdNum);


//function someFunction(argument){
// console.log(argument)

//}
//someFunction("bed time is 8pm");
//someFunction("bed time is 9pm");
//someFunction("bed time is 10pm");
//someFunction("bed time is 11pm");

//function printInput(userInput){
//console.log (userInput);

//printInput ("my message");


//function noArgument(){
//console.log("my word");
//}
//noArgument();


//function doorChoice(doorNumber){
	//if(doorNumber === 1){
		//alert ("you chose a new car");
	//}else if (doorNumber === 2){
		//alert("you get puppy");
	//}else if (doorNumber ===3){
		//alert("you get nothing");
	//}

//}

//doorChoice(1);
//doorChoice(2);
//doorChoice(3);



//var x = 10;
//var y = 15;

//console.log (x + y);


//var firstName = "Shawn";
//var lastName = "Smith";

//.log (firstName +" "+ lastName);


//for (var i=50;i<=200;i=i+2){
//console.log(i);

//}



//var beers = ["Victory", "Lagunitas", "Brooklyn", "Yards"];

//for (var i=0;i<beers.length;i++){
//console.log(beers[i]);

//}


//var friends = ["Shawn", "Mary", "Marc", "John"];

//for (var i=0;i<friends.length;i++){
//console.log("One of my good friends is " + friends[i]);

//}

//var bottles = 99;

//while(bottles>0){

//	if(bottles>1){
//	console.log(bottles +" bottles of beer on the wall.");
//}else{
//	console.log(bottles +" bottles of beer on the wall.");
//	}	
//	bottles--;	
//}

var bottles = 99;
//As long as there are more than 0 bottles left...
while(bottles>0){
    //Create a new div
    var myDiv = document.createElement('div');
    //Append that div to the body
    document.body.appendChild(myDiv);
    //Change the background and border of the new div
    myDiv.style.background = "green";
    myDiv.style.border = "1px solid black";
    //Set the width of each div equal to the number of bottles left
    myDiv.style.width = bottles+"%";
    //If there are more than 1 bottles left...
    if(bottles>1){
        //Set the inner html to the following (plural):
        myDiv.innerHTML = bottles+" bottles of beer on the wall.";
    }else{
        ////Set the inner html to the following (singular):
        myDiv.innerHTML = bottles+" bottle of beer on the wall.";
    }
    //Remove a bottle of beer    
    bottles--;
}

//var paragraphText = document.getElementById("myParagraph").innerHTML;
//console.log(paragraphText);

//var newDiv = document.createElement('div');
//document.body.appendChild(newDiv);
//newDiv.innerHTML = paragraphText + "That's a lot of exclamation marks!"

//var allParagraphs = document.getElementsByTagName('p');
//console.log(allParagraphs);
//var myClassName = document.getElementsByTagName('myClassNamemyClass')
//console.log(myuClassNames)