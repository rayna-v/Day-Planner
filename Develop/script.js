// declaring variables to store the locations of classes and ids from HTML
var currentDay = $('#currentDay');
var container = $('.container');

//dynamically creating HTML elements to manipulate via jQuery 
var formDiv = $('<form>');
var row = $('<row>');
var inputDiv = $('<input>');
var spanEl = $('<span>');
var buttonSave = $('<button>')

//array for hours of day
var hours = ['8am', '9am', '10am', '11am']

// seting time using moment.js and writing it to the HTML
moment().format('MMMM Do YYYY, h:mm:ss');
currentDay.text(moment());

// dynamically changing CSS for HTML elements via jQuery
// currentDay.attr("style", "font-size: 30px")

//adding classes
row.addClass("row")
currentDay.addClass("time-block");
spanEl.addClass("hour");
buttonSave.addClass("saveBtn");


// appending elements 
container.append(formDiv)
formDiv.append(row)
row.append(spanEl)
row.append(inputDiv)
row.append(buttonSave)

//loops for hours and saves

