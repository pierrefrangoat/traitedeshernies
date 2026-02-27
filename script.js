<script>

    function showChapter(id) {
    document.querySelectorAll('.chapter')
        .forEach(c => c.classList.remove('active'));
    const target = document.getElementById(id);
    if (target) target.classList.add('active');
        }
    
</script>
    
