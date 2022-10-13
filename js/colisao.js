let vida1 = 100, vida2 = 100, c = 0;


function blockRect(r1, r2) {
    //armazenam a distância entre os retângulos
    let posicaoX = r1.centerX() - r2.centerX();
    let posicaoY = r1.centerY() - r2.centerY();


    //soma das metades
    let somaMetadeWidth = r1.halfWidth() + r2.halfWidth();
    let somaMetadeHeight = r1.halfHeight() + r2.halfHeight();


    if (Math.abs(posicaoX) < somaMetadeWidth && Math.abs(posicaoY) < somaMetadeHeight) {

        let overlapX = somaMetadeWidth - Math.abs(posicaoX);
        let overlapY = somaMetadeHeight - Math.abs(posicaoY);


        if (overlapX >= overlapY) { //colisão por cima ou por baixo
            if (posicaoY > 0) { //por cima
                r1.posY = r1.posX = 100;
                r2.posY = 500;
                r2.posX = 1300;

                vida1 -= Math.floor(Math.random() * 21);
                vida2 -= Math.floor(Math.random() * 21);
                // document.querySelector('#robo1').textContent = `Vida do robô 1: ${vida1}`;
                // document.querySelector('#robo2').textContent = `Vida do robô 2: ${vida2}`;
            } else {
                r1.posY = r1.posX = 100;
                r2.posY = 500;
                r2.posX = 1300;

                vida1 -= Math.floor(Math.random() * 21);
                vida2 -= Math.floor(Math.random() * 21);
                // document.querySelector('#robo1').textContent = `Vida do robô 1: ${vida1}`;
                // document.querySelector('#robo2').textContent = `Vida do robô 2: ${vida2}`;
            }
        } else { //colisão pela esquerda ou direita
            if (posicaoX > 0) { //colisão pela esquerda
                r1.posY = r1.posX = 100;
                r2.posY = 500;
                r2.posX = 1300;

                vida1 -= Math.floor(Math.random() * 21);
                vida2 -= Math.floor(Math.random() * 21);
                // document.querySelector('#robo1').textContent = `Vida do robô 1: ${vida1}`;
                // document.querySelector('#robo2').textContent = `Vida do robô 2: ${vida2}`;
            } else {
                r1.posY = r1.posX = 100;
                r2.posY = 500;
                r2.posX = 1300;

                vida1 -= Math.floor(Math.random() * 21);
                vida2 -= Math.floor(Math.random() * 21);
            }
        }
        document.querySelector('#robo1').textContent = `Robô 1: ${vida1}`;
        document.querySelector('#robo2').textContent = `Robô 2: ${vida2}`;
        c++;
        if (c==5) {
            if(vida1>vida2){
                document.querySelector('#robo1').textContent = `O Robô 1 foi o grande campeão!!!`;
                document.querySelector('#robo2').textContent = `Robô 1: ${vida1} | Robô 2: ${vida2}`;
            }else if (vida1<vida2){
                document.querySelector('#robo1').textContent = `O Robô 2 foi o grande campeão!!!`;
                document.querySelector('#robo2').textContent = `Robô 1: ${vida1} | Robô 2: ${vida2}`;
            }else {
                document.querySelector('#robo1').textContent = `Houve um empate!`;
                document.querySelector('#robo2').textContent = `Ambos ficaram com ${vida1} pontos de vida.`;
            }
            mvLeft = mvUp = mvRight = mvDown = plLeft = plUp = plRight = plDown =  false;
            vida1 = vida2 = 100;
            c = 0;
        }
    }
}