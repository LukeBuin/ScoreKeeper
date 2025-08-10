let homePoints = 0;
let guestPoints = 0;

document.getElementById("homeScore").textContent = homePoints;
document.getElementById("guestScore").textContent = guestPoints; // Corrected ID

function homeOnePoint() {
    homePoints++;
    document.getElementById("homeScore").textContent = homePoints;
}

function homeTwoPoints() {
    homePoints += 2; // Corrected: increment homePoints
    document.getElementById("homeScore").textContent = homePoints;
}

function homeThreePoints() { // New function for +3 points
    homePoints += 3;
    document.getElementById("homeScore").textContent = homePoints;
}

function guestOnePoint() { // New function for guest +1 point
    guestPoints++;
    document.getElementById("guestScore").textContent = guestPoints;
}

function guestTwoPoints() { // New function for guest +2 points
    guestPoints += 2;
    document.getElementById("guestScore").textContent = guestPoints;
}

function guestThreePoints() { // New function for guest +3 points
    guestPoints += 3;
    document.getElementById("guestScore").textContent = guestPoints;
}



function resetScores() {
    homePoints = 0;
    guestPoints = 0;
    document.getElementById("homeScore").textContent = homePoints;
    document.getElementById("guestScore").textContent = guestPoints; // Corrected ID
}

document.getElementById("resetButton").addEventListener("click", resetScores); 


