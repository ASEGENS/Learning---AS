document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.accordion-button').forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const target = document.querySelector(button.getAttribute('data-bs-target'));

            if (target.classList.contains('show')) {
                target.classList.remove('show');
                button.setAttribute('aria-expanded', 'false');
                button.classList.add('collapsed');
            } else {
                // Fermer tous les accordéons ouverts
                document.querySelectorAll('.accordion-collapse.show').forEach(item => {
                    item.classList.remove('show');
                    document.querySelector(`[data-bs-target="#${item.id}"]`).classList.add('collapsed');
                    document.querySelector(`[data-bs-target="#${item.id}"]`).setAttribute('aria-expanded', 'false');
                });

                // Vérifier si l'accordéon cible était déjà ouvert
                if (!button.classList.contains('collapsed')) {
                    // Ouvrir l'accordéon cible
                    target.classList.add('show');
                    button.setAttribute('aria-expanded', 'true');
                    button.classList.remove('collapsed');
                }
            }
        });
    });
});
