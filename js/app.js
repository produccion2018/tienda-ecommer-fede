document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('card-container');

    for (let i = 1; i <= 20; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        
        const img = document.createElement('img');
        img.src = `https://via.placeholder.com/300x200?text=Imagen+${i}`;
        img.alt = `Imagen ${i}`;
        
        const content = document.createElement('div');
        content.classList.add('card-content');
        content.innerHTML = `<h3>Tarjeta ${i}</h3><p>Descripción de la tarjeta ${i}</p>`;
        
        card.appendChild(img);
        card.appendChild(content);
        container.appendChild(card);
    }
});
