// =======================================
// LoveOS Proposal Page
// Part 1
// =======================================

document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // URL Parameters
    // ===============================

    const params = new URLSearchParams(window.location.search);

    const sender =
        decodeURIComponent(params.get("from") || "Someone Special");

    const receiver =
        decodeURIComponent(params.get("to") || "");

    const customMessage =
        decodeURIComponent(params.get("msg") || "");

    // ===============================
    // Elements
    // ===============================

    const senderName = document.getElementById("senderName");
    const senderAgain = document.getElementById("senderAgain");
    const receiverName = document.getElementById("receiverName");

    const giftBtn = document.getElementById("giftBtn");

    const loveLetter = document.getElementById("loveLetter");
    const customMessageBox =document.getElementById("letterMessage");

    const continueBtn = document.getElementById("continueBtn");

    const proposalArea = document.getElementById("proposalArea");

    const bgMusic = document.getElementById("bgMusic");

    // ===============================
    // Set Sender / Receiver
    // ===============================

    senderName.innerText = sender;
    senderAgain.innerText = sender;

    if (receiver !== "") {
        receiverName.innerHTML = "💖 To : " + receiver;
    }

    // ===============================
    // Music
    // ===============================

    bgMusic.volume = 0.2;

    // ===============================
    // Type Writer Function
    // ===============================

    function typeWriter(text) {

        customMessageBox.innerHTML = "";

        let i = 0;

        const speed = 40;

        const typing = setInterval(() => {

            if (i < text.length) {

                customMessageBox.innerHTML += text.charAt(i);

                i++;

            } else {

                clearInterval(typing);

                continueBtn.style.display = "inline-block";

            }

        }, speed);

    }

    // ===============================
    // Open Gift
    // ===============================

    giftBtn.addEventListener("click", () => {

        bgMusic.play().catch(() => {});

        giftBtn.style.display = "none";

        loveLetter.style.display = "flex";

        const finalMessage =
            customMessage !== ""
                ? customMessage
                : "You are the most beautiful part of my life ❤️";

        typeWriter(finalMessage);

    });
        // ===============================
    // Continue Button
    // ===============================

    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const noMessage = document.getElementById("noMessage");

    let noCount = 0;

    continueBtn.addEventListener("click", () => {

        loveLetter.style.display = "none";

        proposalArea.style.display = "block";

        proposalArea.scrollIntoView({

            behavior: "smooth",
            block: "center"

        });

    });

    // ===============================
    // Funny Running NO Button
    // ===============================

    function moveNoButton() {

        const card = document.querySelector(".proposal-card");

        const maxX = card.clientWidth - noBtn.offsetWidth - 30;

        const maxY = card.clientHeight - noBtn.offsetHeight - 30;

        const x = Math.random() * maxX;

        const y = Math.random() * maxY;

        noBtn.style.position = "absolute";
        noBtn.style.left = x + "px";
        noBtn.style.top = y + "px";

    }

    noBtn.addEventListener("mouseover", moveNoButton);

    noBtn.addEventListener("touchstart", function(e){

        e.preventDefault();

        moveNoButton();

    });

    // ===============================
    // NO Button Messages
    // ===============================

    noBtn.addEventListener("click", function(){

        noCount++;

        noMessage.style.display = "block";

        if(noCount==1){

            noMessage.innerHTML="🥺 Ek baar aur soch lo na...";

        }

        else if(noCount==2){

            noMessage.innerHTML="❤️ Please... itna bhi mat satao.";

        }

        else if(noCount==3){

            noMessage.innerHTML="😍 Mujhe lagta hai aap YES hi bolenge.";

        }

        else{

            noMessage.innerHTML="😂 Theek hai... phir bhi main wait karunga.";

        }

    });

    // ===============================
    // YES Button
    // ===============================

    yesBtn.addEventListener("click", () => {

        startConfetti();

        setTimeout(()=>{

            const modal = new bootstrap.Modal(

                document.getElementById("successModal")

            );

            modal.show();

        },700);

    });
        // ===============================
    // Share Button
    // ===============================

    const shareBtn = document.getElementById("shareBtn");

    shareBtn.addEventListener("click", () => {

        window.location.href = "index.html";

    });

}); // DOMContentLoaded END


// =======================================
// Premium Confetti
// =======================================

function startConfetti() {

    for (let i = 0; i < 150; i++) {

        createConfetti();

    }

}

function createConfetti() {

    const items = ["🎉","🎊","💖","💕","❤️","💗","✨"];

    const piece = document.createElement("div");

    piece.innerHTML = items[Math.floor(Math.random() * items.length)];

    piece.style.position = "fixed";

    piece.style.left = Math.random() * 100 + "vw";

    piece.style.top = "-50px";

    piece.style.fontSize = (18 + Math.random() * 20) + "px";

    piece.style.zIndex = "99999";

    piece.style.pointerEvents = "none";

    piece.style.transition = (3 + Math.random() * 2) + "s linear";

    document.body.appendChild(piece);

    setTimeout(() => {

        piece.style.top = "110vh";

        piece.style.transform =
            "rotate(" + (Math.random() * 720) + "deg)";

        piece.style.left =
            (Math.random() * 100) + "vw";

    }, 50);

    setTimeout(() => {

        piece.remove();

    }, 5000);

}