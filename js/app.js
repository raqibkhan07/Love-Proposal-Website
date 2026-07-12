// =============================
// LoveLink App
// =============================

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("loveForm");
    const senderName = document.getElementById("senderName");

    const shareBox = document.querySelector(".share-box");

    const generatedLink = document.getElementById("generatedLink");

    const copyBtn = document.getElementById("copyBtn");

    const whatsappBtn = document.getElementById("whatsappBtn");

    const telegramBtn = document.getElementById("telegramBtn");


    // =============================
    // Generate Link
    // =============================

    form.addEventListener("submit", function(e){

        e.preventDefault();

        const name = senderName.value.trim();

        if(name===""){

            alert("Please enter your name ❤️");

            return;

        }

        // URL Encode
        const encodedName = encodeURIComponent(name);

        // Current Domain
        const baseUrl = window.location.origin +
                        window.location.pathname.replace("index.html","");

        // Final Link
        const finalLink =
        baseUrl +
        "Surprise.html?from=" +
        encodedName;

        generatedLink.value = finalLink;

        shareBox.style.display="block";

        shareBox.scrollIntoView({

            behavior:"smooth"

        });

    });



    // =============================
    // Copy Link
    // =============================

    copyBtn.addEventListener("click", function(){

        if(generatedLink.value===""){

            alert("Generate link first.");

            return;

        }

        navigator.clipboard.writeText(

            generatedLink.value

        );

        copyBtn.innerHTML="✅";

        setTimeout(()=>{

            copyBtn.innerHTML='<i class="bi bi-copy"></i>';

        },2000);

    });



    // =============================
    // WhatsApp
    // =============================

    whatsappBtn.addEventListener("click",function(){

        if(generatedLink.value===""){

            alert("Generate link first.");

            return;

        }

        const message =
`❤️ Someone special has sent you a secret surprise...

Open this ❤️

${generatedLink.value}`;

        const url =
"https://wa.me/?text=" +

encodeURIComponent(message);

        window.open(url,"_blank");

    });



    // =============================
    // Telegram
    // =============================

    telegramBtn.addEventListener("click",function(){

        if(generatedLink.value===""){

            alert("Generate link first.");

            return;

        }

        const message =
`❤️ Open Your Secret Surprise

${generatedLink.value}`;

        const url =

"https://t.me/share/url?url=" +

encodeURIComponent(generatedLink.value)

+

"&text="

+

encodeURIComponent(message);

        window.open(url,"_blank");

    });

});