function menu() {
	place="menu";
	menuPlanet.t=0;
	musicImage.w = 0.07*W;
	musicImage.h = musicImage.w;
	musicImage.px=0.05*W;
	musicImage.py=0.08*H;


}

function downMenu(x, y) {

}

function upMenu(x, y) {
	ctx.save();
	ctx.fillStyle="white";

	ctx.font=0.15*H + "px LeagueGothic";
	lg=ctx.measureText("Space Journey").width;
	ctx.restore();
	var menu1={}, menu2={};
	menu1.px = 0.85*W - lg, 0.3*H;
	menu1.py = 0.3*H;
	menu1.w = 0.15*W + lg;
	menu1.h = 0.2*H;

	menu2.px = 0.85*W - lg, 0.3*H;
	menu2.py = 0.6*H;
	menu2.w = 0.15*W + lg;
	menu2.h = 0.2*H;

	if (menu1.px <= x && menu1.py <= y && menu1.py + menu1.h >= y) { levels(); return 0; };
	if (menu2.px <= x && menu2.py <= y && menu2.py + menu2.h >= y) { about(); return 0; };
	if (Math.sqrt(Math.pow(x-musicImage.px-musicImage.w*0.5, 2) + Math.pow(y-musicImage.py-musicImage.h*0.5, 2))<0.5*musicImage.w) {
		musicToggle();
	}

	if (Math.sqrt(Math.pow(x-clothImage.px-clothImage.w*0.5, 2) + Math.pow(y-clothImage.py-clothImage.h*0.5, 2))<0.5*clothImage.w) {
		cloths();
	}





}



function menuMain() {
	menuPlanet.t+=0.006;
}

function drawMenu() {

	ctx.drawImage(m_canvas, 0, 0);//Draw bg


	//Draw and rotate person
	ctx.save();



	menuPlanet.w = 0.25*W;
	menuPlanet.h = menuPlanet.w*1.335;
	
	menuPlanet.px = 0.1*W;
	menuPlanet.py = 0.5*H - menuPlanet.h * 0.64;

	ctx.translate(menuPlanet.px + menuPlanet.w*0.5, menuPlanet.py +menuPlanet.h*0.64);
	ctx.rotate(menuPlanet.t);

	
	ctx.drawImage(menuCharacterImage[localStorage["character"]], -menuPlanet.w*0.5, -menuPlanet.h*0.64, menuPlanet.w, menuPlanet.h);
	ctx.restore();
	///////

	

	ctx.save();
	ctx.fillStyle="white";

	ctx.font=0.15*H + "px LeagueGothic";
	lg=ctx.measureText("Space Journey").width;
	ctx.textBaseline = "middle";
	ctx.fillText("Space Journey",0.9*W - lg,0.18*H);

	ctx.beginPath();
	ctx.fillStyle="#bdc837";
	ctx.fillRect(0.85*W - lg, 0.3*H, 0.15*W + lg, 0.2*H);
	ctx.fillRect(0.85*W - lg, 0.6*H, 0.15*W + lg, 0.2*H);

	ctx.fillStyle="white";
	ctx.textBaseline="top";
	ctx.font=0.12*H + "px LeagueGothic";
	ctx.fillText("Play",0.9*W - lg,0.32*H);
	ctx.fillText("About",0.9*W - lg,0.62*H);


	musicImage.w = 0.07*W;
	musicImage.h = musicImage.w;
	musicImage.px=0.90*W;
	musicImage.py=0.98*H-musicImage.h;

	music2Image.w = 0.07*W;
	music2Image.h = musicImage.w;
	music2Image.px=0.90*W;
	music2Image.py=0.98*H-musicImage.h;

	if (localStorage["audio"]==1) {
		ctx.drawImage(musicImage, musicImage.px, musicImage.py, musicImage.w, musicImage.h);//Draw back
	
	} else {
		ctx.drawImage(music2Image, musicImage.px, musicImage.py, musicImage.w, musicImage.h);//Draw back	
	}
	
	
		clothImage.w = 0.07*W;
		clothImage.h = clothImage.w;
		clothImage.px=0.80*W;
		clothImage.py=0.98*H-clothImage.h;

		ctx.drawImage(clothImage, clothImage.px, clothImage.py, clothImage.w, clothImage.h);//Draw back



	ctx.restore();

}