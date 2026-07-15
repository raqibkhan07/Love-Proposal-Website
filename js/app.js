// =============================
// LoveOS App
// =============================

document.addEventListener("DOMContentLoaded", () => {

    // Form Elements
    const form = document.getElementById("loveForm");
    const senderName = document.getElementById("senderName");
    const receiverName = document.getElementById("receiverName");
    const message = document.getElementById("message");

    // Share Elements
    const shareBox = document.querySelector(".share-box");
    const generatedLink = document.getElementById("generatedLink");
    const copyBtn = document.getElementById("copyBtn");
    const whatsappBtn = document.getElementById("whatsappBtn");
    const telegramBtn = document.getElementById("telegramBtn");

    // =============================
    // Generate Link
    // =============================

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const from = senderName.value.trim();
        const to = receiverName.value.trim();
        const msg = message.value.trim();

        if (from === "") {
            alert("Please enter your name ❤️");
            senderName.focus();
            return;
        }

        if (to === "") {
            alert("Please enter receiver name ❤️");
            receiverName.focus();
            return;
        }

        const baseUrl =
            window.location.origin +
            window.location.pathname.replace("index.html", "");

        const finalLink =
            baseUrl +
            "Surprise.html?from=" +
            encodeURIComponent(from) +
            "&to=" +
            encodeURIComponent(to) +
            "&msg=" +
            encodeURIComponent(msg);

        generatedLink.value = finalLink;

        shareBox.style.display = "block";

        shareBox.scrollIntoView({
            behavior: "smooth"
        });

    });

    // =============================
    // Copy Link
    // =============================

    copyBtn.addEventListener("click", function () {

        if (generatedLink.value === "") {
            alert("Please create your surprise first.");
            return;
        }

        navigator.clipboard.writeText(generatedLink.value);

        const oldText = copyBtn.innerHTML;

        copyBtn.innerHTML = "✅ Copied";

        setTimeout(() => {
            copyBtn.innerHTML = oldText;
        }, 2000);

    });

    // =============================
    // WhatsApp Share
    // =============================

    whatsappBtn.addEventListener("click", function () {

        if (generatedLink.value === "") {
            alert("Please create your surprise first.");
            return;
        }

        const from = senderName.value.trim();

        const text =
`💖 A special surprise is waiting for you!

Someone created something beautiful just for you.

🎁 Open Now👇

${generatedLink.value}

Made with ❤️ LoveOS`;

        window.open(
            "https://wa.me/?text=" + encodeURIComponent(text),
            "_blank"
        );

    });

    // =============================
    // Telegram Share
    // =============================

    telegramBtn.addEventListener("click", function () {

        if (generatedLink.value === "") {
            alert("Please create your surprise first.");
            return;
        }

        const text =
`💖 Open Your Surprise ❤️

${generatedLink.value}`;

        window.open(
            "https://t.me/share/url?url=" +
            encodeURIComponent(generatedLink.value) +
            "&text=" +
            encodeURIComponent(text),
            "_blank"
        );

    });

});