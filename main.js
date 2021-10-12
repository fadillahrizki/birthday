let options = {
    "hue": {
        "min": 0,
        "max": 345
    },
    "delay": {
        "min": 15,
        "max": 15
    },
    "rocketsPoint": 50,
    "speed": 10,
    "acceleration": 1.2,
    "friction": 0.96,
    "gravity": 1,
    "particles": 90,
    "trace": 3,
    "explosion": 6,
    "autoresize": true,
    "brightness": {
        "min": 50,
        "max": 80,
        "decay": {
            "min": 0.015,
            "max": 0.03
        }
    },
    "boundaries": {
        "x": 50,
        "y": 50,
        "width": 1920,
        "height": 929,
        "visible": false
    },
    "sound": {
        "enable": true,
        "files": [
            "https://fireworks.js.org/sounds/explosion0.mp3",
            "https://fireworks.js.org/sounds/explosion1.mp3",
            "https://fireworks.js.org/sounds/explosion2.mp3"
        ],
        "volume": {
            "min": 4,
            "max": 20
        }
    },
    "mouse": {
        "click": true,
        "move": false,
        "max": 3
    }
}

const container = document.querySelector('body')
const fireworks = new Fireworks(container, options)
let box = document.querySelector('.box')

fireworks.setSize({ height: screen.height, width: screen.width })

var x = setInterval(()=>{
    
    setDate("Nov 18 "+new Date().getFullYear())

},1000)

function setDate(target){
    var target_date = Date.parse(target)
    var now = Date.now();

    var distance = target_date - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    box.innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        box.innerHTML = "Happy Birthday to Me:)";
    }
    
    if(now >= target_date){
        fireworks.start()
    }else{
        fireworks.stop()
    }
}