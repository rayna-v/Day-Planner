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
}, {
    hour: 18,
    time: "6:00 P.M."
}, {
    hour: 19,
    time: "7:00 P.M."
}, {
    hour: 20,
    time: "8:00 P.M."
}, {
    hour: 21,
    time: "9:00 P.M."
}, {
    hour: 22,
    time: "10:00 P.M."
}]

// seting time using moment.js and writing it to the HTML
var date = moment().format('MMMM Do YYYY');
var currentHour = moment().format('HH');
currentDay.text(date);

// dynamically changing CSS for HTML elements via jQuery
currentDay.attr("style", "font-size: 30px")

// appending formDiv to document via jQuery
container.append(formDiv)

// function renderEvents(i) {
// for (var i = 0; i < hours.length; i++) {
//     inputDiv[i].text(userEvents)
//     if (!userEvents) {
//         return
//     }
// }
$(document).ready(function () {

    $('input-2').text(localStorage.getItem("event-" + 2))

    //     for (var i = 0; i < hours.length; i++) {
    //         // userStoredEvents.push(userInput);
    //         console.log(userstored)
    //     }
    // console.log(localStorage[i].userInput)
})
for (var i = 0; i < hours.length; i++) {
    // dynamically creating html elements using jQuery
    row = $('<row>'); // row element
    inputDiv = $('<input>'); // input field to save events
    hourDiv = $('<div>'); // hour 
    buttonSave = $('<button>') // save button
    saveIcon = $('<i>');

    // adding text and attributes to elements via jQuery
    hourDiv.text(hours[i].time);
    buttonSave.attr("style", "font-size: 30px")

    // appending elements to document via jQuery
    formDiv.append(row)
    container.append(formDiv)
    row.append(hourDiv);
    row.append(inputDiv);
    row.append(buttonSave);
    buttonSave.append(saveIcon)

    //adding classes via jQuery
    row.addClass("row");
    inputDiv.addClass("col-md-10 ");

    buttonSave.addClass("saveBtn :hover col-md-1");
    hourDiv.addClass("col-md-1 hour");
    saveIcon.addClass("fa fa-floppy-o")

    //adding ids via jQuery
    inputDiv.attr("id", "input-" + i)
    buttonSave.attr('id', 'hour-' + i)

    // hourDiv.attr('id', "hour-" + i)

    // conditional to compare current hour with the planner hour and adds classes based on result
    if (parseInt(currentHour) === hours[i].hour) {
        inputDiv.addClass("col-md-10 present")
    } else if (currentHour > hours[i].hour) {
        inputDiv.addClass("col-md-10 past")
    } else {
        inputDiv.addClass("col-md-10 future")
    }
}

$('.saveBtn').on("click", function (event) {
    event.preventDefault();
    // console.log('clicked');
    // userEntry = inputDiv.val();

    // var element = event.target;
    for (var i = 0; i < hours.length; i++) {
        // var userArr = []
        userEvents = localStorage.getItem("event-" + i)
        // console.log(userEvents)
        userInput = $('#input-' + i).val();
        // userArr.push(userInput)
        localStorage.setItem("event-" + i, userInput);
        // console.log(userInput)
        console.log(userInput)

    }
})

// // declaring variables to store the locations of classes and ids from HTML
// var currentDay = $('#currentDay');
// var container = $('.container');
// currentDay.addClass("time-block");
// //dynamically creating HTML elements to manipulate via jQuery 
// var formDiv = $('<form>');


// //array for hours of day
// var hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

// // seting time using moment.js and writing it to the HTML
// var date = moment().format('MMMM Do YYYY');
// var currentHour = moment().format('HH');
// console.log(currentHour);
// console.log(date);
// currentDay.text(date);

// // dynamically changing CSS for HTML elements via jQuery
// currentDay.attr("style", "font-size: 30px")


// container.append(formDiv)

// //loops for hours and saves
// for (var i = 0; i < hours.length; i++) {
//     // dynamically creating html elements using jQuery
//     var row = $('<row>'); // row element
//     inputDiv = $('<input>'); // input field to save events
//     hourDiv = $('<div>'); // hour 
//     var buttonSave = $('<button>') // save button

//     // adding text to element via jQuery
//     // hour = hourDiv.text(hours[i]);
//     hour = hours[i];

//     buttonSave.text("Save")

//     // appending elements to document via jQuery
//     formDiv.append(row)
//     container.append(formDiv)
//     row.append(hourDiv);
//     row.append(inputDiv);
//     row.append(buttonSave)

//     //adding classes via jQuery
//     row.addClass("row");
//     inputDiv.addClass("col-md-10");
//     buttonSave.addClass("saveBtn");
//     hourDiv.addClass("col-md-1");
//     hourDiv.attr('id', "hour-" + i)
//     buttonSave.addClass("col-md-1");
//     console.log(currentHour)
//     if (currentHour === hour) {
//         inputDiv.addClass("col-md-10 present")
//     } else if (currentHour < hour) {
//         inputDiv.addClass("col-md-10 past")
//     } else {
//         inputDiv.addClass("col-md-10 future")
//     }
// }

// for (var j = 0; j < hours.length; j++) {
//     // var hour = hourDiv.text(hours[j]);
//     if (hours[j] < 12) {
//         hourDiv.text(hours[j] + ":00 A.M.")
//         console.log(hours[j])
//     }
// }
// // if (currentHour === hour) {
// //     inputDiv.addClass("col-md-10 present")
// //     console.log(currentHour)
// //     console.log(hour)
// // } else if (currentHour < hour) {
// //     inputDiv.addClass("col-md-10 past")
// // } else if (hour < 12) {
// //     hourDiv.text(hour + ":00 A.M.")
// //     // console.log(hours[i] + ":00 A.M.")
// // } else if (hour > 12) {
// //     hourDiv.text(hour - 12 + ":00 P.M.")
// // } else if (hour === 12) {
// //     hourDiv.text(hour + ":00 P.M.")
// // } else {
// //     inputDiv.addClass("col-md-10 future")
// // }
