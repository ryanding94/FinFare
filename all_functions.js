function register_lunch() {
    // Should do logic to register someone for the event
    location.href = "homepage.html";
}

function cancel_lunch() {
    // Should do logic to remove user from the event
    location.href = "homepage.html";
}

function go_to_homepage() {
    // Just sends the user to another page
    location.href = "homepage.html";
}

function go_to_profile() {
    // Sends user to their profile
    location.href = "profile.html";
    // console.log("I'm here!"); 
    // document.getElementById("profilename").placeholder = "Kendra Andersen";

}

function add_meal() {
    // Sends user to create meal for today
    location.href = "meal.html";
}

function edit_meal() {
    // Sends user to edit meal
    location.href = "meal.html";
}

function Fin(userID, name, location, username, password, picture) {
    this.id = userID;
    this.name = name;
    this.location = location;
    this.username = username;
    this.password = password;
    this.picture = picture;
}

function Meal(startTime, endTime, location, userID, mealID) {
    this.startTime = startTime;
    this.endTime = endTime;
    this.location = location;
    this.userID = userID;
    this.mealID = mealID;
}

var Meals = new Array();

var newMeal = new Meal();
//newMeal.startTime = "12:00";
//localStorage.setItem("MealKey", newMeal);
//document.getElementById("MealStart").innerHTML = newMeal.startTime;

function CreateMeal(){

    //Grabs start time from dropdown box
    var x = document.getElementById("inputGroupSelect01");
    //var y = x.options[x.selectedIndex].text;
    newMeal.startTime = x.options[x.selectedIndex].text;
    //document.getElementById("demo").innerHTML = newMeal.startTime;

    //Grabs end time from dropdown box
    x = document.getElementById("inputGroupSelect02");
    newMeal.endTime = x.options[x.selectedIndex].text;
    //document.getElementById("demo2").innerHTML = newMeal.endTime;

    //Grabs office location from dropdown box
    x = document.getElementById("inputGroupSelect03");
    newMeal.location = x.options[x.selectedIndex].text;
    //document.getElementById("demo3").innerHTML = newMeal.location;

    Meals.push(newMeal);
    document.getElementById("demo5").innerHTML = Meals[0].startTime;
}

function FetchMeal(){
    document.getElementById("MealStart").innerHTML = newMeal.startTime;
}
