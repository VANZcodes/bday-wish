// ========================================
// HER BIRTH DATE
// ========================================
//
// Change this.
//
// Example:
// 17 April 2006, 2:30 PM
//
// becomes:
//
// 2006-04-17T14:30:00
//

const birthDate = new Date("2006-04-17T14:30:00");


// ========================================
// UPDATE COUNTER
// ========================================

function updateCounter() {

    const now = new Date();

    const difference = now - birthDate;


    // Convert milliseconds
    const totalSeconds = Math.floor(difference / 1000);


    const days = Math.floor(
        totalSeconds / (60 * 60 * 24)
    );


    const hours = Math.floor(
        (totalSeconds % (60 * 60 * 24)) / (60 * 60)
    );


    const minutes = Math.floor(
        (totalSeconds % (60 * 60)) / 60
    );


    const seconds = totalSeconds % 60;


    // Put the numbers into HTML

    document.getElementById("days").textContent =
        days.toLocaleString();


    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");


    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}


// Run immediately
updateCounter();


// Update every second
setInterval(updateCounter, 1000);