window.addEventListener("load", () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext("2d")
    const width = canvas.width;
    const height = canvas.height;

    function makeBorder() {
        ctx.strokeStyle = "black";
        ctx.lineWidth = 5;
        ctx.strokeRect(0, 0, 500, 500);
    }

    let defPosX = 250;
    let defPosY = 250;
    let rad = 10
    let speed = 15
    function drawCircle(x = defPosX, y = defPosY) {
        ctx.beginPath();
        ctx.strokeStyle = "red";
        ctx.arc(x, y, rad, 0, 2 * Math.PI);
        ctx.stroke();
    }

    function checkIfCanMove() {
        if (defPosX < rad || defPosX > width - rad) {
            angle = Math.PI - angle;
        }
        else if (defPosY < rad || defPosY > height - rad) {
            angle = Math.PI * 2 - angle;
        }
        // if (defPosX < rad) {
        //     defPosX = rad;
        //     console.log('kek')
        // }
        // if (defPosY < rad) {
        //     defPosY = rad;
        //     console.log('rar')
        // }
        // if (defPosX + rad > width) {
        //     defPosX = width - rad;
        //     console.log('poo')
        // }
        // if (defPosY + rad > height) {
        //     defPosY = height - rad;
        //     console.log('lol')
        // }
    }
    function moving(angle) {
        defPosX += Math.cos(angle) * speed;
        defPosY += Math.sin(angle) * speed;
        console.log('x - ', defPosX, 'y - ', defPosY)
        checkIfCanMove();
        drawCircle(defPosX, defPosY)
    }
    // let directions = {
    //     39: 'right',
    //     38: 'up',
    //     37: 'left',
    //     40: 'down'
    // }

    // document.addEventListener('keydown', (event) => {
    //     for (let i in directions) {
    //         if (event.keyCode === 39) {
    //             defPosX++;
    //             console.log("kek")
    //         } else if (event.keyCode === 38) {
    //             defPosY--;
    //         } else if (event.keyCode === 37) {
    //             defPosX--;
    //         } else if (event.keyCode === 40) {
    //             defPosY++;
    //         }
    //     }
    // })

    let angle = Math.random() * Math.PI * 2;
    setInterval(function () {
        ctx.clearRect(0, 0, width, height);
        makeBorder();
        moving(angle)
    }, 50)
})


