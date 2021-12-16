const D1 = "16";
const D2 = "17";
const D3 = "18";

var value = 0; //represent wich date you are on for example : 0 = 15/12 etc...
function removeDate() {
    if (value > 0) {
        value = value - 1
        view(value)
    }
}

function addDate() {
    if (value < 2) {
        value = value + 1
        view(value)
    }
}

//Hide graphs depend on actual date
function view(value) {
    if (value === 0){
        document.getElementById('firstDay').hidden = false;
        document.getElementById('secondDay').hidden = true;
        document.getElementById('thirdDay').hidden = true;
        document.getElementById('date').innerHTML = "Valeurs du "+D1+" décembre 2021"
        document.getElementById('btnLeft').hidden = true;
        document.getElementById('btnRight').hidden = false;
    } else if (value === 1){
        document.getElementById('firstDay').hidden = true;
        document.getElementById('secondDay').hidden = false;
        document.getElementById('thirdDay').hidden = true;
        document.getElementById('date').innerHTML = "Valeurs du "+D2+" décembre 2021"
        document.getElementById('btnLeft').hidden = false;
        document.getElementById('btnRight').hidden = false;
    } else if (value === 2){
        document.getElementById('firstDay').hidden = true;
        document.getElementById('secondDay').hidden = true;
        document.getElementById('thirdDay').hidden = false;
        document.getElementById('date').innerHTML = "Valeurs du "+D3+" décembre 2021"
        document.getElementById('btnLeft').hidden = false;
        document.getElementById('btnRight').hidden = true;
    }
}

view(value);

const fetchPerDates = [[],[],[]];
// Fake table, waiting for the google analytics values
const connectedTab = [
    {"date": D1, "hour": "00"},   
    {"date": D1, "hour": "01"}, {"date": D1, "hour": "01"}, {"date": D1, "hour": "01"}, {"date": D1, "hour": "01"},
    {"date": D1, "hour": "04"},{"date": D1, "hour": "04"},
    {"date": D1, "hour": "12"},{"date": D1, "hour": "12"},{"date": D1, "hour": "12"},

    {"date": D2, "hour": "09"},   
    {"date": D2, "hour": "23"}, {"date": D2, "hour": "23"}, {"date": D2, "hour": "23"}, {"date": D2, "hour": "23"},
    {"date": D2, "hour": "14"},{"date": D2, "hour": "14"},
    {"date": D2, "hour": "08"},{"date": D2, "hour": "08"},{"date": D2, "hour": "08"},

    {"date": D3, "hour": "11"},   
    {"date": D3, "hour": "21"}, {"date": D3, "hour": "21"}, {"date": D3, "hour": "21"}, {"date": D3, "hour": "21"},
    {"date": D3, "hour": "13"},{"date": D3, "hour": "13"},
    {"date": D3, "hour": "22"},{"date": D3, "hour": "22"},{"date": D3, "hour": "22"},
];

const day1 = [
    "00", 0,
    "01", 0,
    "02", 0,
    "03", 0,
    "04", 0,
    "05", 0,
    "06", 0,
    "07", 0,
    "08", 0,
    "09", 0,
    "10", 0,
    "11", 0,
    "12", 0,
    "13", 0,
    "14", 0,
    "15", 0,
    "16", 0,
    "17", 0,
    "18", 0,
    "19", 0,
    "20", 0,
    "21", 0,
    "22", 0,
    "23", 0
];
const day2 = [
    "00", 0,
    "01", 0,
    "02", 0,
    "03", 0,
    "04", 0,
    "05", 0,
    "06", 0,
    "07", 0,
    "08", 0,
    "09", 0,
    "10", 0,
    "11", 0,
    "12", 0,
    "13", 0,
    "14", 0,
    "15", 0,
    "16", 0,
    "17", 0,
    "18", 0,
    "19", 0,
    "20", 0,
    "21", 0,
    "22", 0,
    "23", 0
];
const day3 = [
    "00", 0,
    "01", 0,
    "02", 0,
    "03", 0,
    "04", 0,
    "05", 0,
    "06", 0,
    "07", 0,
    "08", 0,
    "09", 0,
    "10", 0,
    "11", 0,
    "12", 0,
    "13", 0,
    "14", 0,
    "15", 0,
    "16", 0,
    "17", 0,
    "18", 0,
    "19", 0,
    "20", 0,
    "21", 0,
    "22", 0,
    "23", 0
];

// Fetch every user who connect inside one of the three days
connectedTab.forEach(connected => {
    if(connected.date === D1){
        fetchPerDates[0].push(connected);
    }else if(connected.date === D2){
        fetchPerDates[1].push(connected);
    }else if (connected.date === D3){
        fetchPerDates[2].push(connected);
    }
});

// Fetch on list day1, 2 and 3 the number of click depending on wich hour
for (let i = 0; i < fetchPerDates.length; i++){
    fetchPerDates[i].forEach(connected => {
        if (i === 0){
            for(let k=0; k < day1.length;) {
                console.log(day1[0], connected.hour)
                if (day1[k] === connected.hour){
                    day1[k+1] = day1[k+1] + 1
                }
                k=k+2
            }
        }else if (i === 1) {
            for(let k=0; k < day2.length;) {
                console.log(day2[0], connected.hour)
                if (day2[k] === connected.hour){
                    day2[k+1] = day2[k+1] + 1
                }
                k=k+2
            }
        }else if (i === 2) {
            for(let k=0; k < day3.length;) {
                if (day3[k] === connected.hour){
                    day3[k+1] = day3[k+1] + 1
                }
                k=k+2
            }
        }
    });
}

// The whole graphics part
const dayOne = document.getElementById('firstDay').getContext('2d');
const firstDay = new Chart(dayOne, {
    type: 'bar',
    data: {
        labels: [
            day1[0]+"h", day1[2]+"h", day1[4]+"h", day1[6]+"h", day1[8]+"h", day1[10]+"h",
            day1[12]+"h", day1[14]+"h", day1[16]+"h", day1[18]+"h", day1[20]+"h", day1[22]+"h", 
            day1[24]+"h", day1[26]+"h", day1[28]+"h", day1[30]+"h", day1[32]+"h", day1[34]+"h", 
            day1[36]+"h", day1[38]+"h", day1[40]+"h", day1[42]+"h", day1[44]+"h", day1[46]+"h"
        ],
        datasets: [{
            label: 'Personnes connectées au site le '+D1+'/12',

            // Datas
            data: [
                day1[1], day1[3], day1[5], day1[7], day1[9], day1[11],
                day1[13], day1[15], day1[17], day1[19], day1[21], day1[23], 
                day1[25], day1[27], day1[29], day1[31], day1[33], day1[35], 
                day1[37], day1[39], day1[41], day1[43], day1[45], day1[47]
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],

            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const dayTwo = document.getElementById('secondDay').getContext('2d');
const secondDay = new Chart(dayTwo, {
    type: 'bar',
    data: {
        labels: [
            day2[0]+"h", day2[2]+"h", day2[4]+"h", day2[6]+"h", day2[8]+"h", day2[10]+"h",
            day2[12]+"h", day2[14]+"h", day2[16]+"h", day2[18]+"h", day2[20]+"h", day2[22]+"h", 
            day2[24]+"h", day2[26]+"h", day2[28]+"h", day2[30]+"h", day2[32]+"h", day2[34]+"h", 
            day2[36]+"h", day2[38]+"h", day2[40]+"h", day2[42]+"h", day2[44]+"h", day2[46]+"h"
        ],
        datasets: [{
            label: 'Personnes connectées au site le '+D2+'/12',

            // Datas
            data: [
                day2[1], day2[3], day2[5], day2[7], day2[9], day2[11],
                day2[13], day2[15], day2[17], day2[19], day2[21], day2[23], 
                day2[25], day2[27], day2[29], day2[31], day2[33], day2[35], 
                day2[37], day2[39], day2[41], day2[43], day2[45], day2[47]
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],

            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const dayThree = document.getElementById('thirdDay').getContext('2d');
const thirdDay = new Chart(dayThree, {
    type: 'bar',
    data: {
        labels: [
            day3[0]+"h", day3[2]+"h", day3[4]+"h", day3[6]+"h", day3[8]+"h", day3[10]+"h",
            day3[12]+"h", day3[14]+"h", day3[16]+"h", day3[18]+"h", day3[20]+"h", day3[22]+"h", 
            day3[24]+"h", day3[26]+"h", day3[28]+"h", day3[30]+"h", day3[32]+"h", day3[34]+"h", 
            day3[36]+"h", day3[38]+"h", day3[40]+"h", day3[42]+"h", day3[44]+"h", day3[46]+"h"
        ],
        datasets: [{
            label: 'Personnes connectées au site le '+D3+'/12',

            // Datas
            data: [
                day3[1], day3[3], day3[5], day3[7], day3[9], day3[11],
                day3[13], day3[15], day3[17], day3[19], day3[21], day3[23], 
                day3[25], day3[27], day3[29], day3[31], day3[33], day3[35], 
                day3[37], day3[39], day3[41], day3[43], day3[45], day3[47]
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],

            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});