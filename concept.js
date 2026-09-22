const cards = document.querySelectorAll(".card"); 
 
cards.forEach(function(card) { 
 
    card.addEventListener("click", function() { 
 
        const number = card.id.replace("card", ""); 
 
        const overlay = document.getElementById("overlay" + number); 
 
        overlay.style.display = "flex"; 
 
        const close = document.getElementById("close" + number); 
 
        close.addEventListener("click", function() { 
            overlay.style.display = "none"; 
        }); 
 
    }); 
 
});