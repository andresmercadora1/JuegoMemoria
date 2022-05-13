document.addEventListener('DOMContentLoaded', () => {

    const imagenes = [
        {
            url: '../img/anng.png',
            nombre: 'anng'
        },
        {
            url: '../img/azula.jpg',
            nombre: 'azula'
        },
        {
            url: '../img/katara.jpg',
            nombre: 'katara'
        },
        {
            url: '../img/sokka.jpg',
            nombre: 'sokka'
        },
        {
            url: '../img/toph.jpg',
            nombre: 'toph'
        },
        {
            url: '../img/suko.jpg',
            nombre: 'suko'
        },
        {
            url: '../img/iron.png',
            nombre: 'iron'
        },
        {
            url: '../img/anng.png',
            nombre: 'anng'
        },
        {
            url: '../img/azula.jpg',
            nombre: 'azula'
        },
        {
            url: '../img/katara.jpg',
            nombre: 'katara'
        },
        {
            url: '../img/sokka.jpg',
            nombre: 'sokka'
        },
        {
            url: '../img/toph.jpg',
            nombre: 'toph'
        },
        {
            url: '../img/suko.jpg',
            nombre: 'suko'
        },
        {
            url: '../img/iron.png',
            nombre: 'iron'
        }
    ];

    const tablero = document.querySelector('.tablero');

    const agregarImg = () => {
        for (let imgen of imagenes) {
            const img = document.createElement('img');
            img.append(imgen);
            img.setAttribute('src', '../img/interrogacion.webp');
            img.setAttribute('alt', imgen.nombre);
            img.setAttribute('width', "200px");

            tablero.appendChild(img);
        }
    }

    agregarImg()
});