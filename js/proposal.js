// =======================================
// Proposal Page
// =======================================

document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // URL Params
    // ===============================

    const params = new URLSearchParams(window.location.search);

    const senderParam = params.get("from");

const sender =
    (!senderParam || senderParam === "null")
    ? "Someone"
    : decodeURIComponent(senderParam);

    document.getElementById("senderName").innerText = sender;

    document.getElementById("senderAgain").innerText = sender;

    // ===============================
    // Elements
    // ===============================

    const giftBtn = document.getElementById("giftBtn");

    const proposalArea = document.getElementById("proposalArea");

    const yesBtn = document.getElementById("yesBtn");

    const noBtn = document.getElementById("noBtn");

    // ===============================
    // Open Gift
    // ===============================

    giftBtn.addEventListener("click", () => {

        bgMusic.play().catch(() => {});

        giftBtn.style.display = "none";

        proposalArea.style.display = "block";

        proposalArea.scrollIntoView({
            behavior: "smooth"
        });

    });

    // ===============================
    // Running NO Button
    // ===============================

    function moveButton() {

        const card = document.querySelector(".proposal-card");

        const maxX = card.clientWidth - noBtn.offsetWidth - 30;

        const maxY = card.clientHeight - noBtn.offsetHeight - 30;

        const x = Math.random() * maxX;

        const y = Math.random() * maxY;

        noBtn.style.position = "absolute";

        noBtn.style.left = x + "px";

        noBtn.style.top = y + "px";

    }

    noBtn.addEventListener("mouseover", moveButton);

    noBtn.addEventListener("touchstart", function(e){

        e.preventDefault();

        moveButton();

    });

    // ===============================
    // YES Button
    // ===============================

    yesBtn.addEventListener("click", () => {

        startConfetti();

        const modal = new bootstrap.Modal(

            document.getElementById("successModal")

        );

        modal.show();

    });

});


// =======================================
// Simple Confetti
// =======================================

function startConfetti(){

    for(let i=0;i<120;i++){

        createPiece();

    }

}

function createPiece(){

    const piece=document.createElement("div");

    piece.innerHTML="🎉";

    piece.style.position="fixed";

    piece.style.left=Math.random()*100+"vw";

    piece.style.top="-30px";

    piece.style.fontSize=(18+Math.random()*20)+"px";

    piece.style.zIndex="99999";

    piece.style.pointerEvents="none";

    piece.style.transition="4s linear";

    document.body.appendChild(piece);

    setTimeout(()=>{

        piece.style.top="110vh";

        piece.style.transform=

        "rotate("+Math.random()*720+"deg)";

    },30);

    setTimeout(()=>{

        piece.remove();

    },4200);

}


// ============================
// Background Music
// ============================

const bgMusic = document.getElementById("bgMusic");
bgMusic.volume = 0.2;

const shareBtn = document.getElementById("shareBtn");

shareBtn.addEventListener("click", () => {
    window.location.href = "index.html";
});