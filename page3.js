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

    "The Life You Want",

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
   ACTUAL LABEL ANGLES
========================= */

/*
 * Calculated directly from the
 * translate(x, y) positions in CSS.
 *
 * CSS coordinates:
 * right  = 0°
 * bottom = 90°
 * left   = 180°
 * top    = 270°
 *
 * option-1:
 * translate(57px, -82px)
 * = approximately 304.8°
 *
 * option-2:
 * translate(80px, 25px)
 * = approximately 17.4°
 *
 * option-3:
 * translate(0, 82px)
 * = 90°
 *
 * option-4:
 * translate(-80px, 25px)
 * = approximately 162.6°
 *
 * option-5:
 * translate(-57px, -82px)
 * = approximately 235.2°
 */

const labelAngles = [

    304.8,   // World Tour

    17.4,    // Make a Wish

    90,      // Become Successful

    162.6,   // The Life You Want

    235.2    // All of the Above

];


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
         * Pick ONE option.
         *
         * This same selectedIndex
         * controls both the physical
         * landing position AND the
         * "You got" text.
         */

        const selectedIndex =
            Math.floor(
                Math.random() *
                options.length
            );


        /*
         * Get the actual position of
         * the selected label.
         */

        const selectedAngle =
            labelAngles[selectedIndex];


        /*
         * The pointer is at the TOP
         * of the wheel.
         *
         * In our coordinate system:
         *
         * TOP = 270°
         */

        const pointerAngle = 270;


        /*
         * Current wheel rotation.
         */

        const currentAngle =
            (
                currentRotation % 360
                + 360
            ) % 360;


        /*
         * Calculate the exact amount
         * needed to put the selected
         * label underneath the pointer.
         */

        let requiredRotation =
            pointerAngle
            -
            selectedAngle
            -
            currentAngle;


        /*
         * Always rotate clockwise.
         */

        if (requiredRotation < 0) {

            requiredRotation += 360;

        }


        /*
         * 5 or 6 complete spins.
         */

        const fullSpins =
            5 +
            Math.floor(
                Math.random() * 2
            );


        /*
         * Final rotation.
         */

        const rotation =
            fullSpins * 360
            +
            requiredRotation;


        currentRotation += rotation;


        /*
         * Rotate the wheel.
         */

        wheel.style.transform =
            `rotate(${currentRotation}deg)`;


        /*
         * Keep text upright while
         * still following the wheel.
         */

        labels.forEach(
            (label, index) => {

                label.style.transform =
                    `${originalTransforms[index]}
                     rotate(${-currentRotation}deg)`;

            }
        );


        /*
         * Show result after the
         * 4-second wheel animation.
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


                /*
                 * Keep the button disabled.
                 */

                spinning = false;

            },
            4100
        );

    }
);