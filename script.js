<script>
    
function showChapter(id) {
    // 1️⃣ Masquer tous les chapitres
    document.querySelectorAll('.chapter')
            .forEach(c => c.classList.remove('active'));

    // 2️⃣ Trouver le chapitre demandé
    const target = document.getElementById(id);

    // 3️⃣ Si on l’a trouvé, le rendre visible
    if (target) {
        target.classList.add('active');

        // Facultatif : remettre le scroll de la zone de lecture en haut
        const content = document.querySelector('.content');
        if (content) content.scrollTop = 0;
    }
}
</script>
