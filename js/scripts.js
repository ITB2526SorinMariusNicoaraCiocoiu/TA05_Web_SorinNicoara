document.addEventListener('DOMContentLoaded', function() {
    // Obtenir referències als elements del formulari
    const form = document.getElementById('contact-form');
    const nomInput = document.getElementById('nom');
    const emailInput = document.getElementById('email');
    const missatgeConfirmacio = document.getElementById('missatge-confirmacio');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevenir l'enviament per defecte

            // Funció de validació de format d'Email (Funcionalitat JS 1)
            function isValidEmail(email) {
                // Expressió Regular simple per verificar @ i .
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(email);
            }

            const nom = nomInput.value.trim();
            const email = emailInput.value.trim();

            // 1. Validació de Camps Obligatoris (Funcionalitat JS 2)
            if (nom === "" || email === "") {
                missatgeConfirmacio.style.display = 'block';
                missatgeConfirmacio.style.color = 'red';
                missatgeConfirmacio.textContent = 'ERROR: El Nom i el Correu Electrònic són camps obligatoris.';
                return; // Atura l'execució
            }

            // 2. Validació de Format d'Email (Funcionalitat JS 1)
            if (!isValidEmail(email)) {
                missatgeConfirmacio.style.display = 'block';
                missatgeConfirmacio.style.color = 'red';
                missatgeConfirmacio.textContent = 'ERROR: El format del Correu Electrònic no és vàlid.';
                return; // Atura l'execució
            }

            // Si totes les validacions són correctes:
            
            // 3. Missatge de Confirmació d'Enviament (Funcionalitat JS 3)
            
            // Simulem l'enviament (en un entorn real, aquí s'enviaria la data al servidor)
            console.log('Formulari enviat amb èxit (simulat)!', { Nom: nom, Email: email });

            // Mostrar missatge d'èxit
            missatgeConfirmacio.style.display = 'block';
            missatgeConfirmacio.style.color = 'lightgreen';
            missatgeConfirmacio.textContent = '✅ El teu missatge ha estat enviat amb èxit. Gràcies per contactar!';

            // Netejar el formulari
            form.reset(); 
            
            // Amagar el missatge després de 5 segons
            setTimeout(() => {
                missatgeConfirmacio.style.display = 'none';
            }, 5000);
        });
    }
});