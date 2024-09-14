document.querySelectorAll('nav a').forEach(item => {
    item.addEventListener('mouseover', event => {
        item.style.color = '#ff5722'; // Mengubah warna saat hover
    });
    item.addEventListener('mouseout', event => {
        item.style.color = '#4a4a4a'; // Mengembalikan warna saat tidak hover
    });
});
