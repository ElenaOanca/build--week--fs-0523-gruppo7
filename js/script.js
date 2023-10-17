document.addEventListener("DOMContentLoaded", function() {
     const sections = document.querySelectorAll("section"); // Seleziona tutte le sezioni
     let timer = document.getElementById('timer')
     // Funzione per nascondere tutte le sezioni tranne quella con l'indice specificato
     function showPage(pageNumber) {
       sections.forEach(function(section, index) {
         if (index + 1 === pageNumber) {
           section.classList.remove("hidden");
         } else {
           section.classList.add("hidden");
         }
          
     });
     }
   
     // Aggiungi un gestore di eventi a tutti i pulsanti "Next"
     const nextButtons = document.querySelectorAll(".buttonLogica");
     nextButtons.forEach(function(button, index) {
       button.addEventListener("click", function() {
         showPage(index + 2); // Passa all'indice successivo (inizia da 2)
       });
     });
   });
   
   else if (index !==page3){
     timer.classList.add('hiddenTimer')