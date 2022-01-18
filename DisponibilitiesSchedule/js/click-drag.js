document.querySelectorAll("#app-calendar .hour").forEach(hour => {
    for (let i = 1; i <= 3; i++) {
        if (i === 1) { // While click
            typeEvent = "click"
        }
        else if (i === 2) { // While draging
            typeEvent = "dragenter"
        }
        else if (i === 3) { // While push click button
            typeEvent = "mouseenter"
        }
        hour.addEventListener(typeEvent, event => {
            if (i === 3) { // Another condition to endle the mouse enter while push click button
                if (event.buttons == 1) {
                    generateEvents(event);
                }
            }
            else {
                generateEvents(event);
            }
        });
    }
});

function generateEvents(event) {

    event.currentTarget.classList.toggle("selected"); // While on day it will Add or remove selected depend on the current value
    
    // Define the days as boolean
    let lundi = true;
    let mardi = true;
    let mercredi = true;
    let jeudi = true;
    let vendredi = true;
    let samedi = true;
    let dimanche = true;

    let text = ""
    let selectClass = document.getElementsByClassName("selected"); // Select all class containing "selected" attribute

    for (let i = 0; i <= selectClass.length; i++) { // For each div containing "selected" inside her class

        // If condition to add the date for each days selected and not add it twice with the boolean value
        if ($(selectClass[i]).hasClass('1') && lundi === true) {
            text = text + "<br><br>Lundi :";
            lundi = false;
        }
        else if ($(selectClass[i]).hasClass('2') && mardi === true) {
            text = text + "<br><br>Mardi :";
            mardi = false;
        }
        else if ($(selectClass[i]).hasClass('3') && mercredi === true) {
            text = text + "<br><br>Mercredi :";
            mercredi = false;
        }
        else if ($(selectClass[i]).hasClass('4') && jeudi === true) {
            text = text + "<br><br>Jeudi :";
            jeudi = false;
        }
        else if ($(selectClass[i]).hasClass('5') && vendredi === true) {
            text = text + "<br><br>Vendredi :";
            vendredi = false;
        }
        else if ($(selectClass[i]).hasClass('6') && samedi === true) {
            text = text + "<br><br>Samedi :";
            samedi = false;
        }
        else if ($(selectClass[i]).hasClass('7') && dimanche === true) {
            text = text + "<br><br>Dimanche :";
            dimanche = false;
        }
        result = $(selectClass[i]).attr("value"); // Get the value of the selected div
        text = text + result; // Add the value to the String
    };
    text = text.replace("undefined", ""); // Remove the undefined if null

    let textDiv = document.getElementById("app-dispo"); // select the div
    
    if (text !== "") { // add inside the div the current text value, divs and copy button
        textDiv.innerHTML = `<br><button id="btnCopy" onclick="copyDivToClipboard()">Copy</button><div id="textSchedule" class="text">${text}</div>`; 
    }
    else {
        textDiv.innerHTML = ``; // if empty remove everything (especially the copy button)
    }
    $("#textSchedule").hide(); // Hide the text element
};