(function(){
    //Variáveis
    let cnv = document.querySelector('#canvas');
    let ctx = cnv.getContext('2d');
    let spritesheet1 = new Image();
    let spritesheet2 = new Image();
    spritesheet1.src = "../Images/robo1.png"
    spritesheet2.src = "../Images/robo2.png"

    //Teclas
	const LEFT = 37
	const UP = 38
	const RIGHT = 39
	const DOWN = 40;

	const A = 65;
	const W = 87;
	const D = 68;
	const S = 83;
	//Movimentos
	let mvLeft = mvUp = mvRight = mvDown = false;
	
	let plLeft = plUp = plRight = plDown = false;

    //Robôs

    let sprites = [];

    let robo1 = new Sprite(100, 100, 100, 100, spritesheet1);
    sprites.push(robo1);

    let robo2 = new Sprite(1300, 500, 100, 100, spritesheet2);
    sprites.push(robo2);

    //Robô 1
    //Quando aperta a tecla
    window.addEventListener("keydown",function(e){
		let key = e.keyCode;
		switch(key){
			case LEFT:
				plLeft = true;
				break;
			case UP:
				plUp = true;
				break;
			case RIGHT:
				plRight = true;
				break;
			case DOWN:
				plDown = true;
				break;
		}
	},false);

    //Quando solta a tecla
    window.addEventListener("keyup",function(e){
		let key = e.keyCode;
		switch(key){
			case LEFT:
				plLeft = false;
				break;
			case UP:
				plUp = false;
				break;
			case RIGHT:
				plRight = false;
				break;
			case DOWN:
				plDown = false;
				break;
		}
	},false);

    //Robô 2 
    //Quando aperta a tecla
	window.addEventListener("keydown",function(r){
		let key = r.keyCode;
		switch(key){
			case A:
				mvLeft = true;
				break;
			case W:
				mvUp = true;
				break;
			case D:
				mvRight = true;
				break;
			case S:
				mvDown = true;
				break;
		}
	},false);
	
	//Quando solta a tecla
	window.addEventListener("keyup",function(r){
		let key = r.keyCode;
		switch(key){
			case A:
				mvLeft = false;
				break;
			case W:
				mvUp = false;
				break;
			case D:
				mvRight = false;
				break;
			case S:
				mvDown = false;
				break;
		}
	},false);

    //Funções
    spritesheet1.onload = function(){
        loop();
    }

    robo1.velocidade = 6;
    function update1(){
        if(mvLeft && !mvRight){
			robo1.posX -=robo1.velocidade;
		}
		if(mvRight && !mvLeft){
			robo1.posX +=robo1.velocidade;
		}
		if(mvUp && !mvDown){
			robo1.posY -=robo1.velocidade;
		}
		if(mvDown && !mvUp){
			robo1.posY +=robo1.velocidade;
		}

		//Limites da tela
		robo1.posX = Math.max(0, Math.min(cnv.width - robo1.width, robo1.posX));
		robo1.posY = Math.max(0, Math.min(cnv.height - robo1.height, robo1.posY));	
    }

    robo2.velocidade = 6;
    function update2(){
        if(plLeft && !plRight){
			robo2.posX -=robo2.velocidade;
		}
		if(plRight && !plLeft){
			robo2.posX +=robo2.velocidade;
		}
		if(plUp && !plDown){
			robo2.posY -=robo2.velocidade;
		}
		if(plDown && !plUp){
			robo2.posY +=robo2.velocidade;
		}

		//Limites da tela
		robo2.posX = Math.max(0, Math.min(cnv.width - robo2.width, robo2.posX));
		robo2.posY = Math.max(0, Math.min(cnv.height - robo2.height, robo2.posY));
		
    }

    //Colisões
    function colisoes(){
		for(let i in sprites){
			var colisao = sprites[i];
			if(colisao.visible){
					blockRect(robo1,robo2);
			}										
		}	
		for(let i in sprites){
			var colisao = sprites[i];
			if(colisao.visible){
					blockRect(robo2,robo1);
			}										
		}	
    }

    //Desenhando os robôs
    function draw (){
        ctx.clearRect(0,0,cnv.width,cnv.height)
        robo1.draw(ctx);
        robo2.draw(ctx);
    }

    
    function loop(){
        window.requestAnimationFrame(loop,cnv);
        update1();
        update2();
        draw();
        colisoes();
    }
}())