/*You will need to refer to the index.html page to complete the exercises below. Using DOM, please make the necessary changes to the website.

Also don't forget to run your live-server for this assignment.*/

//1. Kapiolani Coffee Shop
/*Despite being the cat's meow, Kapiolani Coffee Shop's current rating is n/a. Let's keep the hungry fans happy by changing the current ranking to:

Rating: 5 Stars*/

var rate = "Rating: 5 Stars";
var newRate = document.getElementById ('rating1');
newRate.id = 'rate';
newRate.innerHTML = rate;

//2. Sunrise Restaurant
/*No rise and shine for the Sunrise Restaurant, as their price and address needs some serious updating. Bring in some sunshine by changing the price and address to the following:

Price: $$$
Adress: 525 Kapahulu Ave, Honolulu, HI 96815*/
var newPrice = "Price: $$$";
var newAddy = 'Address: 525 Kapahulu Ave, Honolulu HI 96815';

var addprice = document.getElementById ('price2');
var addAddy = document.getElementById ('addy2');

addprice.innerHTML = newPrice;
addAddy.innerHTML = newAddy;
//3. Ramen Nakamura
/*Literally, where did the time go? Ramen Nakamura is missing the hours section! This mistake is timeless.

You will need to create a new div element with an id of "hours3". Inside this div element, give it the following info:

Hours: 6pm - 12am Sun - Sat

Append this div element to the div id "text3"*/

var ramhours = "Hours: 6pm - 12am Sun - Sat";
var newramhours = document.createElement ('div');
newramhours.id = 'hours3';
newramhours.innerHTML = ramhours;
addy3.appendChild (newramhours);


//4. Kam Bowl
/*Kam Bowl got no spare time to update their info and business is suffering! Help them regain their kingpin status again.

Create a new div element with an id of "price4". Inside this div element, give it the following info:

Price: $$$

Append this element to the div with the id of 
"text4"*/

var kamPrice = "Price: $$$";
var addKamPrice = document.createElement('div');
addKamPrice.id = 'price4';
addKamPrice.innerHTML = kamPrice;
text4.appendChild (addKamPrice);

/*Create a new div element with an id of "addy4". Inside this div element, give it the following info:

Address: 1620 N. School St, Honolulu, HI 96817

Append this element to the div with the id of 
"text4"*/

var kamAddy = "Address: 1620 N. School St, Honolulu, HI 96817";
var addKamAddy = document.createElement ("addy4");
addKamAddy.id = "addy4";
addKamAddy.innerHTML = kamAddy;
text4.appendChild (addKamAddy);

/*Create a new div element with an id of "hours4". Inside this div element, give it the following info:

Hours: 9am - 10pm Sun - Sat

Append this element to the div with the id of 
"text4"
*/

var kamHours = "Hours: 9am - 10 pm Sun - Sat";
var addKamHours = document.createElement ('div');
addKamHours.id = 'hours4';
addKamHours.innerHTML = kamHours;
text4.appendChild (addKamHours);

/*Create a paragraph element with an id of "update4". Inside this paragraph element, give it the following info:

I'd leave a blank space for this oxtail soup!

Append this element to the div id of "comment4"*/

var comment = "I'd leave a blank space for this oxtail soup";
var createComment = document.createElement ('p');
createComment.id = 'update4';
createComment.innerHTML = comment;
comment4.appendChild (createComment);

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
var deathName = "The Death Star Cafe";
var deathRating = "Rating: 2 Stars";
var deathPrice = "Price: $$";
var deathAddy = "Address: A glaxy far, far away.";
var deatHours = "Hours: We never close.";

var addDeathName = document.createElement ('div');
var addDeathRating = document.createElement ('div');
var addDeathPrice = document.createElement('div');
var addDeathHours = document.createElement ('div');
var addDeathAddy = document.createElement ('div');

addDeathName.id = 'name5';
addDeathRating.id = 'rating5';
addDeathPrice.id = 'price5';
addDeathHours.id = 'hours5';
addDeathAddy.id = 'addy5';

addDeathName.innerHTML = deathName;
addDeathRating.innerHTML = deathRating;
addDeathPrice.innerHTML = deathPrice;
addDeathHours.innerHTML = deatHours;
addDeathAddy.innerHTML = deathAddy;

text5.appendChild (addDeathName);
text5.appendChild (addDeathRating);
text5.appendChild (addDeathPrice);
text5.appendChild (addDeathHours);
text5.appendChild (addDeathAddy);



