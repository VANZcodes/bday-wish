const wheel =
    document.getElementById("wheel");

const spinButton =
    document.getElementById("spinButton");

const result =
    document.getElementById("result");


/* =========================
   OPTIONS
========================= */

const options = [

    "Unlimited Momos",

    "Make a Wish (tell me)",

    "Become Successful",

    "World Tour",

    "All of the Above"

];


/* =========================
   VARIABLES
========================= */

let currentRotation = 0;

let spinning = false;


/*
 * Store the original position
 * transform of every option.
 */

const labels =
    document.querySelectorAll(
        ".wheel-option"
    );


const originalTransforms = [];


labels.forEach((label) => {

    originalTransforms.push(
        getComputedStyle(label).transform
    );

});


/* =========================
   SPIN
========================= */

spinButton.addEventListener(
    "click",
    () => {

        if (spinning) {
            return;
        }


        spinning = true;

        spinButton.disabled = true;


        /*
         * Pick random option.
         */

        const selectedIndex =
            Math.floor(
                Math.random() *
                options.length
            );


        /*
         * Every section is 72°.
         */

        const sliceAngle = 72;


        /*
         * Center of selected section.
         */

        const selectedAngle =
            selectedIndex *
            sliceAngle
            +
            sliceAngle / 2;


        /*
         * Number of complete spins.
         */

        const fullSpins =
            5 +
            Math.floor(
                Math.random() * 2
            );


        /*
         * Calculate wheel rotation.
         */

        const rotation =
            fullSpins * 360
            +
            (360 - selectedAngle);


        currentRotation += rotation;


        /*
         * Rotate the wheel.
         */

        wheel.style.transform =
            `rotate(${currentRotation}deg)`;


        /*
         * Counter-rotate the text
         * so it stays upright while
         * physically following its slice.
         */

        labels.forEach(
            (label, index) => {

                label.style.transform =
                    `${originalTransforms[index]}
                     rotate(${-currentRotation}deg)`;

            }
        );


        /*
         * Show result after animation.
         */

        setTimeout(
            () => {

                result.innerHTML = `
                    <div>
                        <div>You got</div>
                        <strong>${options[selectedIndex]}</strong> ♡
                    </div>
                    `;

                result.classList.add(
                    "show"
                );


                spinning = false;

                spinButton.disabled =
                    false;

            },
            4100
        );

    }
);