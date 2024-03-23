document.addEventListener('DOMContentLoaded', function() {
    const mainTitle = document.querySelector('h1');

    mainTitle.addEventListener('click', function() {
        const newText = prompt("Entrez un nouveau texte:");
        if (newText !== null) {
            mainTitle.textContent = newText;
        }
    });

    const allTitles = document.querySelectorAll('h1, h2');

    allTitles.forEach(title => {
        title.addEventListener('click', function() {
            const color = prompt("Entrez une couleur hexadécimale:");
            if (/^#[0-9A-F]{6}$/i.test(color)) {
                this.style.color = color;
            } else {
                alert("Veuillez entrer une couleur hexadécimale valide.");
            }
        });
    });

    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        const label = document.createElement('label');
        label.textContent = 'Technos utilisées : ';
        const input = document.createElement('input');
        input.type = 'text';
        const button = document.createElement('button');
        button.textContent = 'Valider';

        button.addEventListener('click', function() {
            alert(`Technos utilisées pour ce projet : ${input.value}`);
        });

        project.appendChild(label);
        project.appendChild(input);
        project.appendChild(button);
    });

    setTimeout(function() {
        alert('Voici une blague random : Pourquoi les plongeurs plongent-ils toujours en arrière et jamais en avant ? Parce que sinon ils tombent dans le bateau.');
    }, 5000);
});
