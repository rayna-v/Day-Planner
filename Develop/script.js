// declaring variables to store the locations of classes and ids from HTML
var currentDay = $('#currentDay');
var container = $('.container');
currentDay.addClass("description");
var userInput
var userEvents
var userstored
var fontAwesome =
    $('head').append('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">');

//dynamically creating HTML elements to manipulate via jQuery 
var formDiv = $('<form>');

//array of objects to represent hours of day and time to display
var hours = [{
    hour: 8,
    time: "8:00 A.M."
}, {
    hour: 9,
    time: "9:00 A.M."
}, {
    hour: 10,
    time: "10:00 A.M."
}, {
    hour: 11,
    time: "11:00 A.M."
}, {
    hour: 12,
    time: "12:00 A.M."
}, {
    hour: 13,
    time: "1:00 P.M."
}, {
    hour: 14,
    time: "2:00 P.M."
}, {
    hour: 15,
    time: "3:00 P.M."
}, {
    hour: 16,
    time: "4:00 P.M."
}, {
    hour: 17,
    time: "5:00 P.M."
}]

// seting time using moment.js and writing it to the HTML
var date = moment().format('MMMM Do YYYY');
var currentHour = moment().format('HH');
currentDay.text(date);

// dynamically changing CSS for HTML elements via jQuery
currentDay.attr("style", "font-size: 30px")

// appending formDiv to document via jQuery
container.append(formDiv)

for (var i = 0; i < hours.length; i++) {
    // dynamically creating html elements using jQuery
    row = $('<row>'); // row element
    inputDiv = $('<input>'); // input field to save events
    hourDiv = $('<div>'); // hour 
    buttonSave = $('<button>'); // save button
    saveIcon = $('<i>'); // save icon

    // adding text and attributes to elements via jQuery
    hourDiv.text(hours[i].time);
    buttonSave.attr("style", "font-size: 30px");
    $('.past').attr("style", "color: black")

    // appending elements to document via jQuery
    formDiv.append(row);
    row.append(hourDiv);
    row.append(inputDiv);
    row.append(buttonSave);
    buttonSave.append(saveIcon);

    //adding classes via jQuery
    row.addClass("row");
    hourDiv.addClass("col-md-1 hour");
    inputDiv.addClass("col-md-10 ");
    buttonSave.addClass("saveBtn :hover col-md-1");
    saveIcon.addClass("fa fa-floppy-o")

    //adding IDs via jQuery
    inputDiv.attr("id", "input-" + i)
    buttonSave.attr('id', 'hour-' + i)

    // conditional to compare current hour with the planner hour and adds classes to color-code based on result
    if (parseInt(currentHour) === hours[i].hour + 3) {
        inputDiv.addClass("col-md-10 present")
    } else if (currentHour > hours[i].hour + 3) {
        inputDiv.addClass("col-md-10 past")
    } else {
        inputDiv.addClass("col-md-10 future")
    }
}

// event handler for save buttons to store input values in Local Storage
$('.saveBtn').on("click", function (event) {
    event.preventDefault();

    for (var i = 0; i < hours.length; i++) {
        userEvents = localStorage.getItem("event-" + i)
        userInput = $('#input-' + i).val();
        localStorage.setItem("event-" + i, userInput);
    }

})

// function to print the stored event values from local storage to the day planner
function renderLastEvents() {

    for (var i = 0; i < hours.length; i++) {
        var event = localStorage.getItem("event-" + i);
        var input = $('#input-' + i)
        input.val(event)
    }
}
renderLastEvents()