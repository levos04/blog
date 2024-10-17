const blogPosts = [
    {
        title: "Mi primer post",
        content: "Este es el contenido de mi primer post en el blog.",
        synopsis: "Un inicio emocionante de mi blog personal.",
        date: "2024-10-03"
    },
    {
        title: "Cómo aprender JavaScript",
        content: "En este post te enseñaré cómo empezar con JavaScript.",
        synopsis: "Consejos y trucos para iniciarse en la programación.",
        date: "2024-10-02"
    },
    {
        title: "Guía para usar Tailwind CSS",
        content: "Aquí te muestro cómo aprovechar las utilidades de Tailwind CSS.",
        synopsis: "Guía paso a paso para crear estilos rápidos y efectivos.",
        date: "2024-10-01"
    }
];

// Función para renderizar las entradas del blog
function renderBlogPosts() {
    const blogContainer = document.getElementById('cartas');
    blogContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar las entradas
    
    blogPosts.forEach(post => {
        const postElement = `
            <div class="card">
                <h2 class="card-title">${post.title}</h2>
                <p class="card-date">Fecha: ${post.date}</p>
                <p class="card-synopsis">${post.synopsis}</p>
            </div>
        `;
        blogContainer.innerHTML += postElement;
    });
}

// Ejecutamos la función al cargar la página
document.addEventListener('DOMContentLoaded', renderBlogPosts);