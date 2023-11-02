document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".md-card");

    cards.forEach(function(card) {
        card.addEventListener("click", function() {
            const link = card.querySelector("a");
            if (link) {
                window.location.href = link.getAttribute("href");
            }
        });
    });
});


