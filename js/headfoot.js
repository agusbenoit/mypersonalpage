// Header y footer
var cad =`
<head>
        <h1 class="titulo">Agustin Benoit</h1>
    </head>

    <div class="nav-bg">
        <nav class="navegacion-principal contenedor">
            <a href="index.html">Index</a>
            <a href="sobremi.html">About me</a>
            <a href="https://www.linkedin.com/in/agust%C3%ADn-benoit-05395335/" target="_blank">LinkdIn</a>
            <a href="img/Resume-2022.pdf" target="_blank">Resume</a>
            <a href="contacto.html">How to reach me</a>
        </nav>
        </div>
    
    <section class="hero">
        <div class="contenido-hero">
            <h2>System Administrator </h2>
            <p>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="88" height="88" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFC107" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="12" cy="11" r="3" />
                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                </svg>
            Buenos Aires</p>
            <a class="boton" href="contacto.html">How to reach me</a>
        </div>
    </section>
`
document.getElementById("header").innerHTML = cad;

var cad = '<h4> Buenos Aires, Argentina</h4>'

document.getElementById("footer").innerHTML = cad;
