

document.addEventListener('DOMContentLoaded', () => {
    /* -------------------------------------------------
       0️⃣  Récupération des éléments utiles
       ------------------------------------------------- */
    const chapters   = document.querySelectorAll('.chapter');   // tous les <article class="chapter">
    const selectEl   = document.getElementById('chapterDropdown'); // le <select>
    const navLinks   = document.querySelectorAll('.nav__link');   // les boutons du menu latéral
    const contentDiv = document.querySelector('.content');        // zone d’affichage du texte

    /* -------------------------------------------------
       1️⃣  Peupler le <select> avec les titres des chapitres
       ------------------------------------------------- */
    chapters.forEach(chap => {
        const title = chap.querySelector('h1').textContent.trim(); // le texte du <h1>
        const opt   = document.createElement('option');
        opt.value   = chap.id;          // ex. "chap_0"
        opt.textContent = title;
        selectEl.appendChild(opt);
    });

    /* -------------------------------------------------
       2️⃣  Fonction centrale : afficher un chapitre
       ------------------------------------------------- */
    function showChapter(id) {
        // Masquer TOUS les chapitres
        chapters.forEach(c => c.classList.remove('active'));

        // Rendre visible le chapitre demandé
        const target = document.getElementById(id);
        if (target) {
            target.classList.add('active');

            // Remettre le scroll de la zone .content en haut
            if (contentDiv) contentDiv.scrollTop = 0;
        }
    }

    /* -------------------------------------------------
       3️⃣  Gestion du clic sur les items du menu latéral
       ------------------------------------------------- */
    navLinks.forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.dataset.target;   // ex. "chap_0"
            showChapter(id);

            // Synchroniser le <select> (utile si l’utilisateur utilise le clavier)
            if (selectEl) selectEl.value = id;
        });
    });

    /* -------------------------------------------------
       4️⃣  Gestion du <select> (dropdown)
       ------------------------------------------------- */
    if (selectEl) {
        selectEl.addEventListener('change', () => {
            if (selectEl.value) {
                showChapter(selectEl.value);
            }
        });
    }

    /* -------------------------------------------------
       5️⃣  Export (au cas où vous voudriez appeler la fonction
           depuis le HTML avec onclick="showChapter('chap_0')")
       ------------------------------------------------- */
    window.showChapter = showChapter;
});
