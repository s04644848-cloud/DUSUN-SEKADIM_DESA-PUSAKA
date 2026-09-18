function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("show");
}

function kirimPesan(event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value;

    alert(
        "Terima kasih, " + nama +
        "! Pesan kamu berhasil dikirim."
    );

    event.target.reset();
}
