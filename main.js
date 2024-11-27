var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Desarrolladora Frontend Junior')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Si lo puedes imaginar, lo puedes crear!')
    .pauseFor(2500)
    .deleteChars(6)
    .typeString('<strong>Programar!</strong>')
    .pauseFor(2500)
    .start();