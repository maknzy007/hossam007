// script.js
let originalLink;

function shortenLink() {
    originalLink = document.getElementById('original-link').value.trim();
    if (originalLink) {
        const shortLink = `https://short.ly/${Math.random().toString(36).substr(2, 6)}`;
        document.getElementById('shortened-link').href = "#"; // Placeholder
        document.getElementById('shortened-link').innerText = shortLink;
        document.getElementById('shortened-link-container').style.display = 'block';
    } else {
        alert("Please enter a valid link!");
    }
}

function openAdPage(event) {
    event.preventDefault();

    const adPageUrl = `ad.html?url=${encodeURIComponent(originalLink)}`;
    window.open(adPageUrl, "_blank");
}
