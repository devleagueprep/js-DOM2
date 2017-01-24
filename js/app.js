/*You will need to refer to the index.html page to complete the exercises below. Using DOM, please make the necessary changes to the website.

Also don't forget to run your live-server for this assignment.*/

//1. Kapiolani Coffee Shop
/*Despite being the cat's meow, Kapiolani Coffee Shop's current rating is n/a. Let's keep the hungry fans happy by changing the current ranking to:

Rating: 5 Stars*/

var coffeeElement = document.getElementById("rating1");
coffeeElement.innerHTML = "Rating: 5 Stars";


//2. Sunrise Restaurant
/*No rise and shine for the Sunrise Restaurant, as their price and address needs some serious updating. Bring in some sunshine by changing the price and address to the following:

Price: $$$
Adress: 525 Kapahulu Ave, Honolulu, HI 96815*/

var sunriseElement = document.getElementById("price2");
sunriseElement.innerHTML = "Price: $$$";

var addressElement = document.getElementById("addy2");
addressElement.innerHTML = "Address: 525 Kapahulu Ave, Honolulu, HI 96815";

//3. Ramen Nakamura
/*Literally, where did the time go? Ramen Nakamura is missing the hours section! This mistake is timeless.

You will need to create a new div element with an id of "hours3". Inside this div element, give it the following info:

Hours: 6pm - 12am Sun - Sat

Append this div element to the div id "text3"*/

var timeElement = document.createElement("div");
timeElement.id = "hours3";
timeElement.innerHTML = "Hours: 6pm - 12am Sun - Sat";
text3.appendChild(timeElement);


//4. Kam Bowl
/*Kam Bowl got no spare time to update their info and business is suffering! Help them regain their kingpin status again.

Create a new div element with an id of "price4". Inside this div element, give it the following info:

Price: $$$

Append this element to the div with the id of 
"text4"*/

var priceElement = document.createElement("div");
priceElement.id = "price4";
priceElement.innerHTML = "Price: $$$";
text4.appendChild(priceElement);

/*Create a new div element with an id of "addy4". Inside this div element, give it the following info:

Address: 1620 N. School St, Honolulu, HI 96817

Append this element to the div with the id of 
"text4"*/

var kamElement = document.createElement("div");
kamElement.id = "addy4";
kamElement.innerHTML = "Address: 1620 N. School St, Honolulu, HI 96817";
text4.appendChild(kamElement);

/*Create a new div element with an id of "hours4". Inside this div element, give it the following info:

Hours: 9am - 10pm Sun - Sat

Append this element to the div with the id of 
"text4"
*/

var hoursElement = document.createElement("div");
hoursElement.id = "hours4";
hoursElement.innerHTML = "Hours: 9am - 10pm Sun - Sat";
text4.appendChild(hoursElement);


/*Create a paragraph element with an id of "update4". Inside this paragraph element, give it the following info:

I'd leave a blank space for this oxtail soup!

Append this element to the div id of "comment4"*/

var paragraphElement = document.createElement("div");
paragraphElement.id = "update4";
paragraphElement.innerHTML = "I'd leave a blank space for this oxtail soup!";
comment4.appendChild(paragraphElement);

//5. The Death Star Cafe
/*The empire strikes back with a new and improved oxtail soup offering. Help the dark side win back customers by executing the following commands:*/

/*Create the div elements with the following id's:

"name5"
"rating5"
"price5"
"addy5"
"hours5"

Add the following info for each specific div id:

name5: 5. The Death Star Cafe
rating5: Rating: 2 Stars
price5: Price: $$
addy5: Address: A galaxy far, far away.
hours5: Hours: We never close.

Append the div elements to the div id "text5"
*/

var newName5 = document.createElement("div");
var newRating5 = document.createElement("div");
var newPrice5 = document.createElement("div");
var newAddy5 = document.createElement("div");
var newHours5 = document.createElement("div");

newName5.id = "name5";
newRating5.id = "rating5";
newPrice5.id = "price5";
newAddy5.id = "addy5";
newHours5.id = "hours5";

newName5.innerHTML = "5. The Death Star Cafe";
newRating5.innerHTML = "Rating: 2 Stars";
newPrice5.innerHTML = "Price: $$";
newAddy5.innerHTML = "Address: A galaxy far, far away.";
newHours5.innerHTML = "Hours: We never close.";

text5.appendChild(newName5);
text5.appendChild(newRating5);
text5.appendChild(newPrice5);
text5.appendChild(newAddy5);
text5.appendChild(newHours5);




