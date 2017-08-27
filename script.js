// alert box

var cross = document.getElementById('cross');
var alertContainer = document.getElementById('main-alert-container');

cross.addEventListener('click', function() {
   alertContainer.style.display = 'none';
});

// line chart menu

var hourlyItem = document.getElementById('hourly-item');
var dailyItem = document.getElementById('daily-item');
var weeklyItem = document.getElementById('weekly-item');
var monthlyItem = document.getElementById('monthly-item');
var hourlyData = [0, 750, 1200, 1150, 1500, 2000, 1500, 1650, 1750, 1500, 1750, 2000];
var dailyData = [0, 435, 1232, 234, 231, 657, 987, 1540, 1750, 2000, 500, 345];
var weeklyData = [0, 888, 1540, 123, 1783, 2000, 903, 1111, 300, 345, 658, 200];
var monthlyData = [0, 1999, 1600, 500, 1800, 20, 50, 90, 400, 250, 1200, 300];

lineChartFunction(hourlyData);

hourlyItem.addEventListener('click', function() {
    if (hourlyItem.className === 'not-selected') {
        removeSelectedClass(hourlyItem);
        selectedClass(dailyItem);
        selectedClass(weeklyItem);
        selectedClass(monthlyItem);
    }
    lineChartFunction(hourlyData);
});

dailyItem.addEventListener('click', function() {
    if (dailyItem.className === 'not-selected') {
        removeSelectedClass(dailyItem);
        selectedClass(hourlyItem);
        selectedClass(weeklyItem);
        selectedClass(monthlyItem);
    }
    lineChartFunction(dailyData);
});

weeklyItem.addEventListener('click', function() {
    if (weeklyItem.className === 'not-selected') {
        removeSelectedClass(weeklyItem);
        selectedClass(hourlyItem);
        selectedClass(dailyItem);
        selectedClass(monthlyItem);
    }
    lineChartFunction(weeklyData);
});

monthlyItem.addEventListener('click', function() {
    if (monthlyItem.className === 'not-selected') {
        removeSelectedClass(monthlyItem);
        selectedClass(hourlyItem);
        selectedClass(dailyItem);
        selectedClass(weeklyItem);
    }
    lineChartFunction(monthlyData);
});

function selectedClass(element) {
    element.classList.remove('selected');
    element.classList.add('not-selected');
}

function removeSelectedClass(element) {
    element.classList.remove('not-selected');
    element.classList.add('selected');
}

// Line Chart



function lineChartFunction(data) {
    var lineChart = document.getElementById("traffic-chart").getContext('2d');
    var mainLineChart = new Chart(lineChart, {
        type: 'line',
        data: {
            labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
            datasets: [{
                data: data,
                backgroundColor: "rgba(116, 119, 191, 0.2)",
                pointBackgroundColor: '#fff',
                pointBorderWidth: [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                pointRadius:[0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
            }]
        },
        options: {
            layout: {
                padding: {
                    top: 10,
                    bottom: 10
                }
            },
            legend: {
                display: false
            },
            elements: {
                point: {
                    borderColor: 'rgba(116, 119, 191, 0.8)',
                },
                line: {
                    tension: 0,
                    borderColor: 'rgba(116, 119, 191, 0.8)',
                    borderWidth: 0.7
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        stepSize: 500,
                        fontSize: 10,
                        fontFamily: 'Roboto',
                        fontColor: 'rgba(118, 117, 117, 0.5)',
                    },
                    gridLines: {
                        offsetGridLines: true,
                        zeroLineColor: 'rgba(204, 204, 204, 0.1)',
                        drawTicks: false
                    }

                }],
                xAxes: [{
                    ticks: {
                        fontSize: 10,
                        fontFamily: 'Roboto',
                        fontColor: 'rgba(118, 117, 117, 0.5)'
                    },
                    gridLines: {
                        offsetGridLines: true,
                        zeroLineColor: 'rgba(204, 204, 204, 0.1)',
                        drawTicks: false
                    }
                }]
            },

        }
    });
}


// Bar Chart

var barChart = document.getElementById("daily-traffic-chart").getContext('2d');
var mainBarChart = new Chart(barChart, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            data: [75, 100, 175, 125, 225, 200, 100],
            backgroundColor: "rgba(116, 119, 191, 1)"
        }]
    },
    options: {
        layout: {
            padding: {
                top: 10,
                bottom: 10
            }
        },
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    stepSize: 50,
                    fontSize: 10,
                    fontFamily: 'Roboto',
                    fontColor: 'rgba(118, 117, 117, 0.5)',
                },
                gridLines: {
                    zeroLineColor: 'rgba(204, 204, 204, 0.1)',
                    drawTicks: false
                }
            }],
            xAxes: [{
                ticks: {
                    fontSize: 10,
                    fontFamily: 'Roboto',
                    fontColor: 'rgba(118, 117, 117, 0.5)'
                },
                gridLines: {
                    zeroLineColor: 'rgba(204, 204, 204, 0.1)',
                    drawTicks: false
                }
            }]
        }
    }
});

// Pie Chart

var pieChart = document.getElementById("mobile-users-chart").getContext('2d');

var mainPieChart = new Chart(pieChart, {
    type: 'doughnut',
    data: {
        labels: ["Phones", "Tablets", "Desktop"],
        datasets: [{
            data: [25, 25, 100],
            backgroundColor: ["rgb(116, 177, 291)", "rgb(133, 219, 128)", "rgba(116, 119, 191, 1)"],
            borderWidth: 0
        }]
    },
    options: {
        form: {
            rotation: 20 * Math.PI
        },
        legend: {
            display: false,
        }
    }
});

document.getElementById('chartjsLegend').innerHTML = mainPieChart.generateLegend();

// Message User Widget

var users = [
    'Victoria Chambers',
    'Dale Byrd',
    'Dawn Wood',
    'Dan Oliver'
];

var sendbutton = document.getElementById('send-button');
var searchUserInput = document.getElementById('search-user-input');
var searchMessage = document.getElementById('search-message');
var submitMessage = document.getElementById('submit-message');
var searchResults = document.getElementById('search-results');



searchUserInput.addEventListener('input', function() {
    searchResults.innerHTML = '';
    var finalUserList = [];
    if (searchUserInput.value !== '') {
        users.forEach(function(user) {
            if (user.toLowerCase().includes(searchUserInput.value.toLowerCase())) {
                finalUserList.push(user);
            }
        });
    }

    if (finalUserList.length > 0) {
        finalUserList.forEach(function(user) {
            var member = document.createElement('p');
            member.className = 'member-result';
            member.innerHTML = user;
            member.addEventListener('click', function() {
                searchUserInput.value = member.innerHTML;
                searchUserInput.style.marginBottom = '12px';
                searchResults.style.display = 'none';
            });
            searchResults.append(member);
        });
        searchUserInput.style.marginBottom = '0';
        searchResults.style.marginBottom = '12px';
        searchResults.style.display = 'block';
    } else {
        searchUserInput.style.marginBottom = '12px';
        searchResults.style.display = 'none';
    }
});

sendbutton.addEventListener('click', function(e) {
    e.preventDefault();
    var isUser = false;
    users.forEach(function(user) {
        if (user.toLowerCase() === searchUserInput.value.toLowerCase()) {
            isUser = true;
            if (searchUserInput.value && searchMessage.value) {
                searchUserInput.value = '';
                searchMessage.value = '';
                submitMessage.innerHTML = 'Congratulations, your message has been submitted!';
                submitMessage.style.color = 'green';
                submitMessage.style.display = 'block';
            } else {
                submitMessage.innerHTML = 'Please fill in both fields.';
                submitMessage.style.color = 'red';
                submitMessage.style.display = 'block';
            }
        }
    });
    if (!isUser) {
        submitMessage.innerHTML = 'That user is not found.';
        submitMessage.style.color = 'red';
        submitMessage.style.display = 'block';
    }
});

// alert menu
var bellContainer = document.getElementById('header-svg-container');
var alertMenu = document.getElementById('alert-menu');

var isOpen = false;

bellContainer.addEventListener('click', function() {
    if (!isOpen) {
        alertMenu.style.display = 'block';
        isOpen = true;
    } else {
        alertMenu.style.display = 'none';
        isOpen = false;
    }
});

// Local Storage
var settingsForm = document.getElementById('settings-form');
var emailInput = document.getElementById('email-input');
var publicInput = document.getElementById('public-input');
var timezone = document.getElementById('timezone');
var saveButton = document.getElementById('save-button');
var cancelButton = document.getElementById('cancel-button');

function supportsLocalStorage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch(e) {
        return false;
    }
}

function saveAllSettings() {
    if (emailInput.checked) {
        localStorage.pastEmailInput = 'on';
    } else {
        localStorage.pastEmailInput = 'off';
    }

    if (publicInput.checked) {
        localStorage.pastPublicInput = 'on';
    } else {
        localStorage.pastPublicInput = 'off';
    }
    localStorage.timezone = timezone.value;
}

function loadAllSettings() {
    if (localStorage.pastEmailInput === 'off') {
        emailInput.checked = false;
    } else {
        emailInput.checked = true;
    }
    if (localStorage.pastPublicInput === 'off') {
        publicInput.checked = false;
    } else {
        publicInput.checked = true;
    }
    timezone.value = localStorage.timezone;
}

function resetSettings() {
    localStorage.pastEmailInput = 'off';
    localStorage.pastPublicInput = 'off';
    localStorage.timezone = 0;
}

saveButton.addEventListener('click', function(e) {
    saveAllSettings();
});

cancelButton.addEventListener('click', function() {
    resetSettings();
});

window.onload = function() {
    if (supportsLocalStorage()) {
        loadAllSettings();
    }
}






























