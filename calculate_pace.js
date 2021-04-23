var $ = function(id) { return document.getElementById(id); };


function calculatePace() {
    var hours = parseFloat($("hours").value),
        minutes = parseFloat($("minutes").value),
        seconds = parseFloat($("seconds").value),
        distance = parseFloat($("distance").value);
        paceHours = parseFloat($("paceHours").value);
        paceMinutes = parseFloat($("paceMinutes").value);
        paceSeconds = parseFloat($("paceSeconds").value);
    
    if (isNaN(hours) && isNaN(minutes) && isNaN(seconds) && isNaN(distance) && isNaN(paceHours) && isNaN(paceMinutes) && isNaN(paceSeconds)) {
        $("alert").textContent = "Please fill in values for two of the three rows below.";
    } else if ((!isNaN(hours) || !isNaN(minutes) || !isNaN(seconds)) && !isNaN(distance) && (!isNaN(paceHours) || !isNaN(paceMinutes) || !isNaN(paceSeconds)))  {
        $("alert").textContent = "Please leave the row you wish to calculate blank.";
    }  
    else if (isNaN(hours) && isNaN(minutes) && isNaN(seconds) && isNaN(distance)) {
        $("alert").textContent = "Please provide values for Time and Distance.";
    }   
    else if (isNaN(hours) && isNaN(minutes) && isNaN(seconds)) {
        $("alert").textContent = "Please provide at least one value for Time.";
    } 
    else if (isNaN(distance)) {
        $("alert").textContent = "Please provide a value for Distance.";
    } 
    else {
        $("alert").textContent = "";
    if (isNaN(hours)) {
        hours = 0;
    }
    if (isNaN(minutes)) {
        minutes = 0;
    }
    if (isNaN(seconds)) {
        seconds = 0;
    }   
    var totalMinutes = hours * 60 + minutes + seconds / 60; 
    if ($("metric").value === "Miles") {
        var pace = totalMinutes / distance;
    } else {
        var pace = totalMinutes / (distance / 1.60934);
    }

    var paceHours = Math.floor(pace / 60),
        paceMinutes = Math.floor(pace - (paceHours * 60)),
        paceSeconds = Math.round(((pace - paceMinutes) * 60) - (paceHours * 3600));

    if (paceSeconds == 60) {
        paceMinutes += 1;
        paceSeconds = 0;
    }
    if (paceHours < 10) {
        paceHours = "0" + paceHours;
    }
    if (paceMinutes < 10) {
        paceMinutes = "0" + paceMinutes;
    }
    if (paceSeconds < 10) {
        paceSeconds = "0" + paceSeconds;
    }

    $("paceHours").value = paceHours;
    $("paceMinutes").value = paceMinutes;
    $("paceSeconds").value = paceSeconds;
    }
}

function calculateTime() {
    paceHours = parseFloat($("paceHours").value);
    paceMinutes = parseFloat($("paceMinutes").value);
    paceSeconds = parseFloat($("paceSeconds").value);
    distance = parseFloat($("distance").value);

 if (isNaN(paceHours) && isNaN(paceMinutes) && isNaN(paceSeconds) && isNaN(distance)) {
        $("alert").textContent = "Please provide values for Distance and Pace.";
    } 
    else if (isNaN(paceHours) && isNaN(paceMinutes) && isNaN(paceSeconds)) {
        $("alert").textContent = "* Please provide at least one value for Pace.";
    }
    else if (isNaN(distance)) {
        $("alert").textContent = "Please provide a value for Distance.";
    } 
    else {
        $("alert").textContent = "";
    if (isNaN(paceHours)) {
        paceHours = 0;
    }
    if (isNaN(paceMinutes)) {
        paceMinutes = 0;
    }
    if (isNaN(paceSeconds)) {
        paceSeconds = 0;
    }   

    var totalPaceMinutes = paceHours * 60 + paceMinutes + paceSeconds / 60; 
    var time = totalPaceMinutes * distance;
    hours = Math.floor(time / 60);
    minutes = Math.floor(time - (hours * 60));
    seconds = Math.round(((time - minutes) * 60) - (hours * 3600));

    if (seconds == 60) {
        minutes += 1;
        seconds = 0;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    $("hours").value = hours;
    $("minutes").value = minutes;
    $("seconds").value = seconds;
    }
}

function calculateDistance() {
    hours = parseFloat($("hours").value);
    minutes = parseFloat($("minutes").value);
    seconds = parseFloat($("seconds").value);
    paceHours = parseFloat($("paceHours").value);
    paceMinutes = parseFloat($("paceMinutes").value);
    paceSeconds = parseFloat($("paceSeconds").value);
    totalMinutes = hours * 60 + minutes + seconds / 60; 
    totalPaceMinutes = paceHours * 60 + paceMinutes + paceSeconds / 60; 
    distance = (totalMinutes / totalPaceMinutes).toFixed(2);

    $("distance").value = distance;
}


var clearTextBoxes = function() {
    $("hours").value = "";
    $("minutes").value = "";
    $("seconds").value = "";
    $("distance").value = "";
    $("paceHours").value = "";
    $("paceMinutes").value = "";
    $("paceSeconds").value = "";
    $("alert").textContent = "";
    $("metric").value = "Miles";

};

window.onload = function() {
    $("btnCalculateTime").onclick = calculateTime; 
    $("btnCalculateDistance").onclick = calculateDistance; 
    $("btnCalculatePace").onclick = calculatePace; 
    $("reset").onclick = clearTextBoxes;
};