// Scroll to the top of the page when the logo is clicked
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function () {
    // Sélectionner les éléments HTML
    const popup = document.getElementById('newsletter-popup');
    const closeButton = document.getElementById('close-popup');
  
    // Vérifier si les éléments existent
    if (popup && closeButton) {
      // Ajouter un écouteur d'événement au bouton de fermeture
      closeButton.addEventListener('click', function () {
        popup.style.display = 'none'; // Masquer le popup
      });
    } else {
      console.error('Les éléments #newsletter-popup ou #close-popup sont introuvables.');
    }
  });