function bukaPesan() {
    const overlay = document.getElementById("overlay");
    overlay.classList.add("aktif");
    document.body.style.overflow = "hidden";
}

function tutupPesan() {
    const overlay = document.getElementById("overlay");
    overlay.classList.remove("aktif");
    document.body.style.overflow = "";
}

const overlay = document.getElementById("overlay");

overlay.addEventListener("click", function(event) {
    if (event.target === overlay) {
        tutupPesan();
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        tutupPesan();
    }
});

function buatHati() {
    const hati = document.createElement("div");
    hati.innerHTML = "❤️";
    hati.style.position = "fixed";
    hati.style.left = Math.random() * 100 + "vw";
    hati.style.top = "-30px";
    hati.style.fontSize = (Math.random() * 15 + 15) + "px";
    hati.style.pointerEvents = "none";
    hati.style.zIndex = "999";

    document.body.appendChild(hati);

    let posisi = -30;

    const animasi = setInterval(function() {
        posisi += 2;
        hati.style.top = posisi + "px";
        hati.style.opacity = 1 - posisi / window.innerHeight;

        if (posisi > window.innerHeight) {
            clearInterval(animasi);
            hati.remove();
        }
    }, 20);
}

setInterval(buatHati, 2000);
