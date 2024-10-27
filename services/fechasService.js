// Función para obtener los datos del archivo fechas.json
async function fetchBlogPosts() {
    try {
        const response = await fetch('data/fechas.json'); // Ruta del archivo JSON
        const posts = await response.json();
        return posts;
    } catch (error) {
        console.error('Error al obtener las entradas del blog:', error);
        return [];
    }
}

// Función para renderizar las entradas del blog
async function renderBlogPosts() {
    const blogContainer = document.getElementById('cartas');
    blogContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar las entradas
    
    const blogPosts = await fetchBlogPosts(); // Obtener datos del archivo JSON

    blogPosts.forEach(post => {
        const postElement = document.createElement('button');
        postElement.className = 'button-card';
        postElement.innerHTML = `
            <img src="${post.portada}" alt="${post.title}" class="card-image" width=400>
            <h2 class="card-title">${post.title}</h2>
            <p class="card-date">Fecha: ${post.date}</p>
            <p class="card-synopsis">${post.synopsis}</p>
        `;
        
        // Agregar evento de click para redirigir a la página individual
        postElement.addEventListener('click', () => {
            // Redirigir pasando solo el título como parámetro de la URL
            window.location.href = `post.html?title=${encodeURIComponent(post.title)}`;
        });
        
        blogContainer.appendChild(postElement);
    });
}

// Ejecutamos la función al cargar la página
document.addEventListener('DOMContentLoaded', renderBlogPosts);