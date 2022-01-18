const calendar = document.querySelector("#app-calendar"); // To access the calendar div easier
const disponibilities = document.querySelector("#app-dispo") // To access the text div easier

// Find Weekends
const isWeekend = day => {
    return day % 7 === 0 || day % 7 === 6; // 0 when sunday, 6 when it's saturday
}

// Get Day Name
const getDayName = day => {
    if (day === 1) {
        date = "Lundi"
    }
    else if (day === 2) {
        date = "Mardi"
    }
    else if (day === 3) {
        date = "Mercredi"
    }
    else if (day === 4) {
        date = "Jeudi"
    }
    else if (day === 5) {
        date = "Vendredi"
    }
    else if (day === 6) {
        date = "Samedi"
    }
    else if (day === 7) {
        date = "Dimanche"
    }
    return date;
}

// Create the hours vertical-bar
let hoursInfo = `<div class="name">Horaires / Jours</div>`;
for (let hour = 6; hour <= 19.5; hour = hour + 0.5) {
    // if it's exactly one o'clock
    if (hour % 1 === 0) { 
        hoursInfo = hoursInfo + `<div id="${hour}" class="info">${hour}h - ${hour}h30</div>`;
    } 
    // if it's half an hour
    else {
        hoursInfo = hoursInfo + `<div id="${hour}" class="info">${hour - 0.5}h30 - ${hour + 0.5}h</div>`; 
    }
}
// Add the vertical bar generate above inside the calendar div
calendar.insertAdjacentHTML("beforeend",
    `<div class="day">
    ${hoursInfo}
    </div>`
);


for (let day = 1; day <= 7; day++) {

    const weekend = isWeekend(day);

    // Add for each day their name on the horizontal bar
    let name = "";
    if (day <= 7) {
        const dayName = getDayName(day);
        name = `<div class="name">${dayName}</div>`;
    }

    // For each hours, add a div that you can select for each day
    let hours = "";
    for (let hour = 6; hour <= 19.5; hour = hour + 0.5) {
        if (hour <= 19.5) {
            // if it's exactly one o'clock
            if (hour % 1 === 0) {
                hours = hours + `<div id="${hour}" class="hour ${day}" value="<br>${hour}h - ${hour}h30"></div>`
            }
            // if it's half an hour
            else {
                hours = hours + `<div id="${hour}" class="hour ${day}" value="<br>${hour - 0.5}h30 - ${hour + 0.5}h"></div>`
            }
        }
    }

    // Add the days and hours schedules to the calendar div
    calendar.insertAdjacentHTML("beforeend",
        // if its a weekend add the class weekend 
        `<div class="day ${weekend ? "weekend" : ""}">
            ${name}
            ${hours}
        </div>`
    );
}

function copyDivToClipboard() { // Function called by onclick method inside the button element
    $("#textSchedule").show(); // Make him appear because if not i can't copy the element
    var range = document.createRange(); // Create Range object
    range.selectNode(document.getElementById("textSchedule")); // Get the text div by adding methods to the range
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy"); // Copy the text
    window.getSelection().removeAllRanges();// to deselect
    alert("Copie !") // Print success message
    $("#textSchedule").hide(); // Hide it again
}