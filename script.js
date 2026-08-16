/* =========================================
   OPENING COUNTDOWN
========================================= */

const introScreen =
    document.getElementById("intro-screen");

const countdown =
    document.getElementById("countdown");

const introMessage =
    document.getElementById("intro-message");

const mainContent =
    document.getElementById("main-content");


let count = 3;


/* Show 3 */

function runCountdown() {

    countdown.textContent = count;


    /*
     * Restart animation every time
     * the number changes.
     */

    countdown.classList.remove(
        "countdown-number"
    );

    void countdown.offsetWidth;

    countdown.classList.add(
        "countdown-number"
    );


    if (count > 1) {

        count--;

        setTimeout(
            runCountdown,
            1000
        );

    } else {

        /*
         * Wait a little after 1,
         * then reveal the birthday page.
         */

        setTimeout(
            revealBirthday,
            900
        );

    }

}


/* =========================================
   REVEAL BIRTHDAY
========================================= */

function revealBirthday() {

    countdown.classList.add("final");

    introMessage.textContent =
        "Happy Birthday ❤️";


    /*
     * Let the final number
     * expand/fade first.
     */

    setTimeout(() => {

        mainContent.classList.add("show");

    }, 350);


    /*
     * Remove intro screen.

     * This happens after the
     * birthday page begins appearing.
     */

    setTimeout(() => {

        introScreen.classList.add("reveal");

    }, 700);


    /*
     * Completely remove the
     * intro from the page.
     */

    setTimeout(() => {

        introScreen.style.display =
            "none";

    }, 1900);

}


/* Start */

setTimeout(
    runCountdown,
    700
);



/* =========================================
   BIRTHDAY COUNTER
========================================= */

/*
   September 11, 2008

   IMPORTANT:
   JavaScript months start at 0.

   January = 0
   February = 1
   ...
   September = 8
*/

const birthDate =
    new Date(
        2008,
        8,
        11,
        0,
        0,
        0
    );


function updateCounter() {

    const now =
        new Date();


    /*
     * Calculate total time
     * since birth.
     */

    const difference =
        now.getTime()
        - birthDate.getTime();


    /*
     * Convert into total units.
     */

    const totalSeconds =
        Math.floor(
            difference / 1000
        );


    const totalMinutes =
        Math.floor(
            totalSeconds / 60
        );


    const totalHours =
        Math.floor(
            totalMinutes / 60
        );


    const totalDays =
        Math.floor(
            totalHours / 24
        );


    /*
     * Get remaining hours,
     * minutes and seconds.
     */

    const hours =
        totalHours % 24;


    const minutes =
        totalMinutes % 60;


    const seconds =
        totalSeconds % 60;


    /*
     * Update page.
     *
     * Days = TOTAL days alive
     * Hours = remaining hours
     * Minutes = remaining minutes
     * Seconds = remaining seconds
     */

    document.getElementById(
        "days"
    ).textContent =
        totalDays.toLocaleString();


    document.getElementById(
        "hours"
    ).textContent =
        hours;


    document.getElementById(
        "minutes"
    ).textContent =
        minutes;


    document.getElementById(
        "seconds"
    ).textContent =
        seconds;

}


/* Update every second */

updateCounter();

setInterval(
    updateCounter,
    1000
);