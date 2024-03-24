// Sélectionnez le titre principal
const mainTitle = document.getElementById('main-title');
const allTitles = document.querySelectorAll ("h1,h2");

// Variable pour suivre si le texte a été remplacé ou non
let textReplaced = false;

// Fonction pour gérer le clic sur le titre principal
function changeTitleClick() {
    // Vérifie si le texte n'a pas déjà été remplacé
    if (!textReplaced) {
        // Demande à l'utilisateur d'entrer un nouveau texte
        const newTitle = prompt('Vous pouvez changer le titre :');

        // Vérifie si l'utilisateur a entré un texte
        if (newTitle !== null && newTitle !== '') {
            // Remplace le contenu du titre principal avec le nouveau texte
            mainTitle.textContent = newTitle;
            // Met à jour la variable pour indiquer que le texte a été remplacé
            textReplaced = true;
        }
    }
}

function changeTitleColor(event){
    event.preventDefault();

    if (event.target !== maintTitle){
    const colorValue = window.prompt("Vous pouvez choisir une couleur pour les titres:");
    
    if (colorValue !== null){
        allTitles.forEach(title =>{
            allTitles.style.color = colorValue;
      });

    }
  }
}

// Ajoute un écouteur d'événements pour le clic sur le titre principal
mainTitle.addEventListener('click', changeTitleClick);

allTitles.forEach(title =>{
    title.addEventListener("click", changeTitleColor );

});
