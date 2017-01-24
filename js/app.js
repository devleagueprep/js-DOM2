/*You will need to refer to the index.html page to complete the exercises below. Using DOM, please make the necessary changes to the website.

Also don't forget to run your live-server for this assignment.*/

//1. Kapiolani Coffee Shop
/*Despite being the cat's meow, Kapiolani Coffee Shop's current rating is n/a. Let's keep the hungry fans happy by changing the current ranking to:

Rating: 5 Stars*/

var rateOne = document.getElementById("rating1");
rateOne.innerHTML = "Rating: 5 Stars";


//2. Sunrise Restaurant
/*No rise and shine for the Sunrise Restaurant, as their price and address needs some serious updating. Bring in some sunshine by changing the price and address to the following:

Price: $$$
Adress: 525 Kapahulu Ave, Honolulu, HI 96815*/

var priceTwo = document.getElementById("price2");
var locationTwo = document.getElementById("addy2");
priceTwo.innerHTML = "Price: $$$";
addy2.innerHTML = "525 Kapahulu Ave, Honolulu, HI 96815";

//3. Ramen Nakamura
/*Literally, where did the time go? Ramen Nakamura is missing the hours section! This mistake is timeless.

You will need to create a new div element with an id of "hours3". Inside this div element, give it the following info:

Hours: 6pm - 12am Sun - Sat

Append this div element to the div id "text3"*/

var ramenHours = document.createElement("div");
ramenHours.id = "hours3";
ramenHours.innerHTML = "Hours: 6pm - 12am Sun - Sat";
text3.appendChild(ramenHours);

//4. Kam Bowl
/*Kam Bowl got no spare time to update their info and business is suffering! Help them regain their kingpin status again.

Create a new div element with an id of "price4". Inside this div element, give it the following info:

Price: $$$

Append this element to the div with the id of 
"text4"*/

var kingpin = document.createElement("div");
kingpin.id = "price4";
kingpin.innerHTML = "Price: $$$";
text4.appendChild(kingpin);

/*Create a new div element with an id of "addy4". Inside this div element, give it the following info:

Address: 1620 N. School St, Honolulu, HI 96817

Append this element to the div with the id of 
"text4"*/

var addressOne = document.createElement("div");
addressOne.id = "addy4";
addressOne.innerHTML = "Address: 1620 N. School St, Honolulu, HI 96817";
text4.appendChild(addressOne);

/*Create a new div element with an id of "hours4". Inside this div element, give it the following info:

Hours: 9am - 10pm Sun - Sat

Append this element to the div with the id of 
"text4"
*/
var openTime = document.createElement("div");
openTime.id = "hours4";
openTime.innerHTML = "Hours: 9am - 10pm Sun - Sat";
text4.appendChild(openTime);

/*Create a paragraph element with an id of "update4". Inside this paragraph element, give it the following info:

I'd leave a blank space for this oxtail soup!

Append this element to the div id of "comment4"*/

var comment = document.createElement("p");
comment.id = "update4";
comment.innerHTML = "I'd leave a blank space for this oxtail soup!";
comment4.appendChild(comment);


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
// var sithSoup = document.createElement("div");
// sithSoup.id = "name5";
// sithSoup.name = "5. The Death Star Cafe";
// text5.appendChild(sithSoup);

// var dsName = document.createElement("div");
// dsName.className = "name5";
// dsName.innerHTML = "5. The Death Star Cafe";
// text5.appendChild(dsName);


// var dsRating = document.createElement("div");
// dsRating.className = "rating5";
// dsRating.innerHTML = "Rating: 2 Stars";
// text5.appendChild(dsRating);


var dsname = document.createElement("div");
var dsrating = document.createElement("div");
var dsprice = document.createElement("div");
var dsaddy = document.createElement("div");
var dshours = document.createElement("div");


dsname.id = "name5";
dsrating.id = "rating5";
dsprice.id = "price5";
dsaddy.id = "addy5";
dshours.id = "hours5";

dsname.innerHTML = "5. The Death Star";
dsrating.innerHTML = "Rating: 2 Star";
dsprice.innerHTML = "Price: $$";
dsaddy.innerHTML = "Address: A galaxy far, far away.";
dshours.innerHTML = "Hours: We never close.";

text5.appendChild(dsname);
text5.appendChild(dsrating);
text5.appendChild(dsprice);
text5.appendChild(dsaddy);
text5.appendChild(dshours);