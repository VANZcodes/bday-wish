const gifts = [

    "A Movie Day, Your Choice",

    "A Shopping Day, Just for You",

    "A Day at Your Desired Place",

    "Your Favorite Meal, My Treat👀"

];


const giftBoxes =
    document.querySelectorAll(".gift-box");

const overlay =
    document.getElementById("giftOverlay");

const envelope =
    document.getElementById("envelope");

const giftMessage =
    document.getElementById("giftMessage");

const closeButton =
    document.getElementById("closeGift");


let isAnimating = false;


/* =========================
   OPEN GIFT
========================= */

giftBoxes.forEach((box) => {

    box.addEventListener("click", () => {

        if (isAnimating) return;

        isAnimating = true;


        const giftIndex =
            Number(box.dataset.gift);


        /* Put the correct
           message in the letter */

        giftMessage.textContent =
            gifts[giftIndex];


        /*
         * Make sure the envelope
         * starts completely closed.
         */

        envelope.classList.remove("open");


        /*
         * Show the overlay.
         */

        overlay.classList.add("show");


        /*
         * Wait for the envelope
         * to appear, then open it.
         */

        setTimeout(() => {

            envelope.classList.add("open");

        }, 450);


        /*
         * Unlock after opening.
         */

        setTimeout(() => {

            isAnimating = false;

        }, 1350);

    });

});


/* =========================
   CLOSE GIFT
========================= */

function closeGift() {

    if (isAnimating) return;

    isAnimating = true;


    /*
     * Close the envelope FIRST.
     *
     * The letter moves from
     * -65px back to 0px.
     */

    envelope.classList.remove("open");


    /*
     * Wait for the letter to
     * completely return inside.
     */

    setTimeout(() => {

        overlay.classList.remove("show");

    }, 850);


    /*
     * Reset animation lock.
     */

    setTimeout(() => {

        isAnimating = false;

    }, 1300);

}


closeButton.addEventListener(
    "click",
    closeGift
);


/* =========================
   CLICK OUTSIDE
========================= */

overlay.addEventListener(
    "click",
    (event) => {

        if (event.target === overlay) {

            closeGift();

        }

    }
);