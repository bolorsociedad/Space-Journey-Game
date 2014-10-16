function drawTutorial(ctx) {
	if (tutorial==1) {
 		ctx.save();
 		ctx.scale(1, 3);
 		ctx.beginPath();
 		ctx.fillStyle="rgba(255, 255, 255, 0.4)";
		
 		ctx.arc(0.05*W, 0.5*H/3, 0.05*W, 0, 2*Math.PI);
 		ctx.arc(0.95*W, 0.5*H/3, 0.05*W, 0, 2*Math.PI);

 		ctx.fill();
 		ctx.restore();

 		ctx.save();
 		ctx.fillStyle="white";
 		ctx.font = 0.04*W + "px LeagueGothic";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		text="Touch right or left to move inside a planet";
		ctx.fillText(text, 0.5*W, 0.5*H);
		
		ctx.drawImage(fingerImage, 0.02*W, 0.6*H, 0.05*W, 0.05*W*99/52);
 		
 		ctx.scale(-1, 1);
		ctx.drawImage(fingerImage, -0.97*W, 0.6*H, 0.05*W, 0.05*W*99/52);
 		ctx.restore();
 	}

 	if (tutorial==2) {
 		ctx.save();
 		ctx.scale(1.5, 1);
 		ctx.beginPath();
 		ctx.fillStyle="rgba(255, 255, 255, 0.4)";
		
 		ctx.arc(0.5*W/1.5, 0.5*H, 0.3*H, 0, 2*Math.PI);

 		ctx.fill();
 		ctx.restore();

 		ctx.save();
 		ctx.fillStyle="white";
 		ctx.font = 0.04*W + "px LeagueGothic";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		text="Touch the center of the screen to jump from planet to planet";
		ctx.fillText(text, 0.5*W, 0.5*H);
		ctx.drawImage(fingerImage, 0.5*W-0.05*W, 0.6*H, 0.05*W, 0.05*W*99/52);

 		ctx.restore();
 	}
 	if (tutorial==3) {


 		ctx.save();
 		ctx.fillStyle="white";
 		ctx.font = 0.03*W + "px LeagueGothic";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		text="Try to reach the portal. You'll have to get all the balls to get 3 stars";
		ctx.fillText(text, 0.5*W, 0.5*H);

 		ctx.restore();
 	}

 		if (tutorial==4.1) {
 		ctx.save();
 		ctx.scale(1, 3);
 		ctx.beginPath();
 		ctx.fillStyle="rgba(255, 255, 255, 0.4)";
		
 		ctx.arc(0.5*W, 0.5*H/3, 0.04*H, 0, 2*Math.PI);

 		ctx.fill();
 		ctx.restore();

 		ctx.save();
 		ctx.fillStyle="white";
 		ctx.font = 0.04*W + "px LeagueGothic";
		ctx.textAlign = "center";
		ctx.textBaseline = "bottom";
		text="Be careful with the asteroids!";
		ctx.fillText(text, 0.5*W, 0.9*H);
		
 		ctx.restore();
 	}
	if (tutorial==4.2) {
 		ctx.save();
 		ctx.scale(1, 3);
 		ctx.beginPath();
 		ctx.fillStyle="rgba(255, 255, 255, 0.4)";
		
 		ctx.arc(0.5*W, 0.5*H/3, 0.04*H, 0, 2*Math.PI);

 		ctx.fill();
 		ctx.restore();

 		ctx.save();
 		ctx.fillStyle="white";
 		ctx.font = 0.04*W + "px LeagueGothic";
		ctx.textAlign = "center";
		ctx.textBaseline = "bottom";
		text="They have very little mass, but they kill you";
		ctx.fillText(text, 0.5*W, 0.9*H);
		
 		ctx.restore();
 	}

	if (tutorial==6.1) {
 		ctx.save();
 		ctx.scale(1, 2);
 		ctx.beginPath();
 		ctx.fillStyle="rgba(255, 255, 255, 0.2)";
		
 		ctx.arc(0.5*W, 0.5*H/2, 0.06*W, 0, 2*Math.PI);

 		ctx.fill();
 		ctx.restore();

 		ctx.save();
 		ctx.fillStyle="white";
 		ctx.font = 0.04*W + "px LeagueGothic";
		ctx.textAlign = "center";
		ctx.textBaseline = "bottom";
		text="Black holes are very heavy, and they will instantly kill you";
		ctx.fillText(text, 0.5*W, 0.9*H);
		
 		ctx.restore();
 	}
	if (tutorial==9.1) {
 		ctx.save();
 		ctx.scale(1, 2);
 		ctx.beginPath();
 		ctx.fillStyle="rgba(255, 255, 255, 0.2)";
		
 		ctx.arc(0.35*W, 0.5*H/2, 0.06*W, 0, 2*Math.PI);
 		ctx.arc(0.65*W, 0.5*H/2, 0.06*W, 0, 2*Math.PI);

 		ctx.fill();
 		ctx.restore();

 		ctx.save();
 		ctx.fillStyle="white";
 		ctx.font = 0.04*W + "px LeagueGothic";
		ctx.textAlign = "center";
		ctx.textBaseline = "bottom";
		text="Use Teleportation Gates to move through space";
		ctx.fillText(text, 0.5*W, 0.9*H);
		
 		ctx.restore();
 	}


}

function renderControls(ctx) {
	ctx.save();
	//Left
 	ctx.beginPath();
 	ctx.lineWidth=3;
 	ctx.arc(0.5*W, 0.5*H, 0.48*W, 0.9*Math.PI, 0.99*Math.PI);
 	var grad= ctx.createLinearGradient(0, 0.5*H, 0.05*W, 0.5*H);
	grad.addColorStop(0, "white");
	grad.addColorStop(1, "transparent");
	ctx.strokeStyle=grad;
 	ctx.stroke();

 	ctx.beginPath();
 	ctx.lineWidth=3;
 	ctx.arc(0.5*W, 0.5*H, 0.48*W, 1.01*Math.PI, 1.1*Math.PI);
 	var grad= ctx.createLinearGradient(0, 0.5*H, 0.05*W, 0.5*H);
	grad.addColorStop(0, "white");
	grad.addColorStop(1, "transparent");
	ctx.strokeStyle=grad;
 	ctx.stroke();
 	

 	ctx.beginPath();

 	ctx.moveTo(0.015*W, 0.5*H);
 	ctx.lineTo(0.025*W, 0.49*H);
 	ctx.lineTo(0.025*W, 0.51*H);

 	ctx.fillStyle="rgba(255, 255, 255, 0.3)";
 	ctx.fill();

 	//Right

 	 	ctx.beginPath();
 	ctx.lineWidth=3;
 	ctx.arc(0.5*W, 0.5*H, 0.48*W, 0.01*Math.PI, 0.1*Math.PI);
 	var grad= ctx.createLinearGradient(W, 0.5*H, 0.95*W, 0.5*H);
	grad.addColorStop(0, "white");
	grad.addColorStop(1, "transparent");
	ctx.strokeStyle=grad;
 	ctx.stroke();

 	ctx.beginPath();
 	ctx.lineWidth=3;
 	ctx.arc(0.5*W, 0.5*H, 0.48*W, -0.1*Math.PI, -0.01*Math.PI);
 	var grad= ctx.createLinearGradient(W, 0.5*H, 0.95*W, 0.5*H);
	grad.addColorStop(0, "white");
	grad.addColorStop(1, "transparent");
	ctx.strokeStyle=grad;
 	ctx.stroke();
 	

 	ctx.beginPath();

 	ctx.moveTo(W-0.015*W, 0.5*H);
 	ctx.lineTo(W-0.025*W, 0.49*H);
 	ctx.lineTo(W-0.025*W, 0.51*H);

 	ctx.fillStyle="rgba(255, 255, 255, 0.3)";
 	ctx.fill();



 	ctx.restore();
}

function downGame(x, y) {
	if (tutorial==0&&play==1&&completedLevel==0&&Math.sqrt(Math.pow(x-pauseImage.px-pauseImage.w*0.5, 2) + Math.pow(y-pauseImage.py-pauseImage.h*0.5, 2))<0.5*pauseImage.w) {
		return 0;
	}

	if (completedLevel==1||pause) {
		return 0;
	};
	if (tutorial==1 || tutorial==2) {
		tutorial+=1;
		return 0;
	}
	if (tutorial==3) {
		tutorial=0;
		return 0;
	}
	if (tutorial==4.1) {
		tutorial=4.2;
		return 0;
	}
	if (tutorial==4.2) {
		tutorial=0;
		return 0;
	}
	if (tutorial==6.1) {
		tutorial=0;
		return 0;
	}
	if (tutorial==9.1) {
		tutorial=0;
		return 0;
	}


	if (play!=-1) {

		if (play==0) {
			/*lvl(lv);
			play=1;*/
		} else {
		if (x>=0.8*W && a.j==0) {
			a.d = -1;
		}
		else if (x<=0.2*W && a.j==0) {
			a.d = 1;
		}
		else if (a.j==0) {
			
				a.j=1;


				a.d = 0;
				a.t = 0;
				a.v = [(a.c[0]-a.p.c[0])/a.p.r, (a.c[1]-a.p.c[1])/a.p.r];

				a.p=0;
		}
		}
	}
}

function upGame(x, y) {

	if (tutorial==0&&play==1&&completedLevel==0&&Math.sqrt(Math.pow(x-pauseImage.px-pauseImage.w*0.5, 2) + Math.pow(y-pauseImage.py-pauseImage.h*0.5, 2))<0.5*pauseImage.w) {
		pause=!pause;
		return 0;
	}

	if (completedLevel==0) a.d=0;

	if (play==-1 || (play==1 && completedLevel==0&&!pause)) return 0;

	if (Math.sqrt(Math.pow(0.5*W-x, 2) + Math.pow(0.82*H-y, 2))<0.5*0.12*W) {
		if (play==1) {//Play
			completedLevel=0;
			if (pause) {
				pause=false;
			} else {
				lvl(lv+1);
			}
		} else {//Repeat
			completedLevel=0;
			lvl(lv);
		}
	}

	if (Math.sqrt(Math.pow(0.62*W-x, 2) + Math.pow(0.82*H-y, 2))<0.5*0.07*W) {//Menu
		if (play!=1) {//Play
			completedLevel=0;
			lvl(lv+1);
		} else {//Repeat
			completedLevel=0;
			lvl(lv);
		}
	}

	if (Math.sqrt(Math.pow(0.38*W-x, 2) + Math.pow(0.82*H-y, 2))<0.5*0.07*W) {//Repeat
		completedLevel=0;
		levels();

	}


	if (Math.sqrt(Math.pow(x-musicImage.px-musicImage.w*0.5, 2) + Math.pow(y-musicImage.py-musicImage.h*0.5, 2))<0.5*musicImage.w) {
		musicToggle();
	}



}


function P(cx, cy, r, ty, co, binary) {
	this.readyCollide=true;
	this.r = r;
	this.binary=binary;
	this.c = [cx, cy];
	this.c0 = [cx, cy];

	this.t = (co==6)?Math.random()*2*Math.PI:0;
	this.ti=0;
	this.ty=ty;
	this.co=co;
	this.u = function() {
		switch(this.ty) {
			case 0:
				break;
			case 1:
				this.c[1]-=1;
				break;
			case 2:
				this.ti+=0.02;
				this.c=[this.c0[0]+Math.sin(this.ti)*50, this.c0[1]+Math.cos(this.ti)*50];
				break;
			case 3:
				this.ti+=0.03;
				this.c=[this.c0[0]-Math.sin(this.ti)*30, this.c0[1]+Math.cos(this.ti)*30];
				break;
			case 4:
				this.ti+=0.03;
				this.c=[this.c0[0], 50*Math.sin(this.ti)+this.c0[1]];
				break;
			case 5:
				this.ti+=0.015;
				this.c=[0.1*W*Math.sin(this.ti)+this.c0[0], this.c0[1]];
				break;
			case 6:
				this.ti+=0.02;
				this.c=[this.c0[0]-Math.sin(this.ti)*0.13*W, this.c0[1]+Math.cos(this.ti)*0.13*W];
				break;
			default:
				this.ti+=0.02;

				this.c=[this.c0[0]+Math.sin(this.ty + this.ti)*0.13*W, this.c0[1]+Math.cos(this.ty+this.ti)*0.13*W];
				break;
		}
	}
}

function E(cx, cy, r, co) {
	this.r = r;
	this.c = [cx, cy];
	this.co=co;
	this.d=0;
}


function A(cx, cy, p) {
	this.r = 0.022*W;
	this.c = [cx, cy];
	this.t = 0;
	this.j=0;
	this.v = [0, 0];
	this.p=p;
	this.d = 0;
	this.x0 = 0;
	this.u = function(p) {
		if (this.j != 0) {
			
			g=[0, 0];
			G = 50;
			//
			player=this;
			p.forEach(function(pl) {
				if (pl.co!=0&&pl.co!=5&&pl.co!=6&&pl.co!=7) {

					gM = G * pl.r / (Math.pow(pl.c[0]-player.c[0], 2)+Math.pow(pl.c[1]-player.c[1], 2));
					if (pl.co==4) gM*=2;
					
					gu = [pl.c[0]-player.c[0], pl.c[1]-player.c[1]];

					gu[0]/=Math.sqrt(gu[0]*gu[0]+gu[1]*gu[1]);
					gu[1]/=Math.sqrt(gu[0]*gu[0]+gu[1]*gu[1]);
					gu[0]*=gM;
					gu[1]*=gM;
					g[0]+=gu[0];
					g[1]+=gu[1];
				}

			});


			//console.log(g);
			//
			//g=-5;
			var v=40/643*H;
			if (this.x0==0) {
				this.x0 = this.c;
				this.c[0]+=0.05*this.v[0]*v;
			this.c[1]+=3*0.05*this.v[1]*v;
			this.v[0]+=0.05*g[0];
			this.v[1]+=0.05*g[1];
			}

			//console.log(g);
			this.c[0]+=0.05*this.v[0]*v;

			this.c[1]+=0.05*this.v[1]*v;

			this.v[0]+=0.05*g[0];
			this.v[1]+=0.05*g[1];

			
			//this.c = [Math.floor(this.x0[0] + 3*this.v[0]*this.t + 0.5*g[0]*this.t*this.t), Math.floor(this.x0[1] + 30*this.v[1]*this.t + 0.5*g[1]*this.t*this.t)];
		} else {
			this.c[0] = Math.floor(-(this.p.r+this.r) * Math.sin(this.t) + this.p.c[0]);
			this.c[1] = Math.floor(-(this.p.r+this.r) * Math.cos(this.t) + this.p.c[1]);

		}
		
					

	}
}

function ls(ctx) {
		ctx.fillStyle = "rgb(250, 250, 250)";
ctx.font = "24px Helvetica";
ctx.textAlign = "left";
ctx.textBaseline = "top";
ctx.fillText("You were lost into the deep space!", 100, 130);
ctx.fillText("There's nothing out there... but you.", 100, 180);

ctx.fillStyle = "rgb(250, 0, 0)";
ctx.font = "18px Helvetica";
ctx.fillText("Press any button to start again", 160, 250);
}

function u(e) {
	k = ('which' in e) ? e.which : e.keyCode;
	if (k==39 || k==37&&play==1) {
		a.d = 0;
	}
}

function d(e) {
	if (play!=-1) {

		if (play==0) {
			lvl(lv);
			play=1;
		} else {
		k = ('which' in e) ? e.which : e.keyCode;
		if (k==39 && a.j==0) {
			a.d = -1;
		}
		if (k==37 && a.j==0) {
			a.d = 1;
		}
		if (k==38 && a.j==0) {
			
				a.j=1;


				a.d = 0;
				a.t = 0;
				a.v = [(a.c[0]-a.p.c[0])/a.p.r, (a.c[1]-a.p.c[1])/a.p.r];

				a.p=0;
		}
		}
	}

}


function setStars(cv) {

	 	for (var j=1;j<50;j++){
    cv.save();
    cv.fillStyle = '#fff';
    cv.translate(Math.floor(Math.random()*W),
                  Math.floor(Math.random()*H));
    drawStar(cv,Math.floor(Math.random()*4)+2);
    cv.restore();
  	}
}
function drawStar(ctx,r){
  ctx.save();
  ctx.beginPath();
  ctx.fillStyle = 'rgba(255,255,255,0.5)';
  ctx.moveTo(r,0);
  for (var i=0;i<9;i++){
    ctx.rotate(Math.PI/5);
    if(i%2 == 0) {
      ctx.lineTo((r/0.525731)*0.200811,0);
    } else {
      ctx.lineTo(r,0);
    }
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

// Draw everything
var drawGame = function () {
	ctx.drawImage(m_canvas, 0, 0);

	ctx.save();



 	// Show Planets

 	p.forEach(function(pl) {
 		ctx.save();
 		ctx.translate(pl.c[0], pl.c[1]);
 		if (pl.co==4) {
 			pl.t+=(pl.co==4)?0.02:0.005;
 			ctx.rotate(pl.t);
 		} else if (pl.co==6) {
 			ctx.rotate(pl.t);
 		}
 		ctx.drawImage(planetImages[pl.co], - pl.r, - pl.r, 2*pl.r, 2*pl.r);
 		ctx.restore();


 	});
 

 	//Show elements

 	el.forEach(function(ele) {
 		 	ctx.save();
 		if (ele.co != 4&&ele.c[0]>=0) {
 			ctx.beginPath();
		 	ctx.arc(ele.c[0], ele.c[1], ele.r, 0, 2*Math.PI);
			ctx.strokeStyle = 'rgba(0,0,0,0)';
			ctx.strokeStyle = '#F6E3CE';
			switch (ele.co) {
				case 1:
					ctx.fillStyle = "red";
					break;
				case 2:
					ctx.fillStyle="#0174DF";
					break;
				case 3:
					ctx.fillStyle="#8A4B08";
					break;
				case 4:
					ctx.fillStyle="#BDBDBD";
					break;
			}
			ctx.fillStyle="#D7DF01";
			ctx.fill();
		 	//ctx.stroke();
		 	ctx.restore();
		 } else if (completedLevel==0) {
		 	ctx.save();
		 	ctx.translate(ele.c[0], ele.c[1]);
		 	ctx.rotate(portalImage.t);

		 	portalImage.t+=0.01;
		 	ctx.drawImage(portalImage, -ele.r, -ele.r, 2*ele.r, 2*ele.r);
		 	ctx.restore();
		 }
	 	

 	});

 	// Show player
 	if (a.r>2&&completedLevel==0&&!asteroid) {
 		if (play!=1||completedLevel!=0) {
	 		a.r-=0.0015*W;
		}
		ctx.save();
	 	ctx.translate(a.c[0], a.c[1]);
	 	ctx.rotate(-a.t);
	 	ctx.drawImage(characterImage[localStorage["character"]], -a.r, -a.r, 2*a.r, 2*a.r);//Draw back
	 	ctx.restore();
	} else if (completedLevel==0) {
		play=0;
		
	}

 	renderControls(ctx);

 	//Tutorial

 	drawTutorial(ctx);

	if (tutorial==0&&play==1&&completedLevel==0) ctx.drawImage(pauseImage, pauseImage.px, pauseImage.py, pauseImage.w, pauseImage.h);//Draw pause



};

function move(ctx) {
	
	if (a.j != 0) {
		a.t += 0.05;
	for (i=0; i<p.length; i++) {
		var multiplier=1;
		if (p[i].co==5) multiplier=0.7;
		if (Math.sqrt(Math.pow(a.c[0]-p[i].c[0], 2)+Math.pow(a.c[1]-p[i].c[1], 2))<=multiplier*(p[i].r + a.r-5)) {
			if (!p[i].readyCollide) {
				continue;
			}
			if (p[i].co==5) {
				
				partner=p[p[i].binary].readyCollide=false;;
				
				//a.c=[partner.c[0]+Math.floor(a.c[0]*0.0001-p[i].c[0]*0.0001), partner.c[1]+Math.floor(a.c[1]*0.0001-p[i].c[1]*0.0001)];
				var x=p[p[i].binary].c[0];
				var y=p[p[i].binary].c[1];
				a.c=[x, y];
				
				a.u(p);
			}
			else if (p[i].co==4||p[i].co==6){
				play=0;
				if (p[i].co==6) {asteroid=true;} else {asteroid=false;}
				
			} else {
			
				a.p = p[i];
				//Find t
				dr=[a.c[0]-a.p.c[0], a.c[1]-a.p.c[1]];
				a.t=Math.atan2(dr[0],dr[1])+Math.PI;
				a.j=0;
				a.d=1;
				a.u(p);
				a.d=0;
				a.x0=0;				
			}
			
			//

		} else {
			p[i].readyCollide=true;
		}
	}

	} else if (a.d!=0) {
	a.t += 0.025*a.d;
	}
	a.u(p);
	// Check if lost

	if ((a.c[0]+a.r<0 || a.c[0]-a.r>W || a.c[1]+a.r<0 || a.c[1]-a.r>H)&&a.j!=0) {
		play=0;

	}

	// Check if touching element

	el.forEach(function(ele) {
		if (play!=0&&ele.d==0&&Math.pow(a.c[0]-ele.c[0], 2)+Math.pow(a.c[1]-ele.c[1], 2)<=Math.pow(a.r+ele.r, 2)) {
			
			got+=1;
			//ele.c=[30+(ele.r+ele.r*2.5)*got,30];
			ele.c=[-100, -100];
			ele.d=1;
			//var wav = new Audio('a.wav');
			//wav.play();
			if (got==4) {
				//lv+=1;
				//setTimeout(function() {lvl(lv); }, 4000);

			}
			cLevel=(lv-1);
			
			if (ele.co==4) {
				if (localStorage["level"+cLevel]<got-1) {
					record=true;
				}
				if (localStorage["audio"]==1) successAudio.play();
				completedLevel=1;play=1;nlvl(ctx, 1);localStorage["level"+cLevel]=Math.max(localStorage["level"+cLevel], got-1);}
		}
	});

}

function nlvl(ctx, win) {
		//ctx.clearRect(0,0,W,H); // clear canvas

	ctx.save();

	ctx.beginPath();
	ctx.fillStyle="rgba(0,0,0,0.4)";
	ctx.fillRect(0.5*0.3*W, 0.15*H, 0.7*W, 0.7*H);
	ctx.fill();

	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = 0.07*H + "px LeagueGothic";
	if (win==0||win==2) ctx.font = 0.1*H + "px LeagueGothic";
	ctx.textAlign = "center";
	ctx.textBaseline = "top";
	//lvv=lv-1;
	lvv=lv;
	if (win==1) {
		text="LEVEL " + lvv + " COMPLETED!";	
	} else if (win==0) {
		text="YOU DIED";
	} else {
		text="PAUSE";
	}
	
	
	if (win==0||win==2) {
		ctx.textBaseline="bottom";
		ctx.fillText(text, 0.5*W, 0.5*H);	
	} else {
		ctx.fillText(text, 0.5*W, 0.28*H);
	}
	
	if (win==1) {
		var sImage;
		sImage = (got>=2)?starImageHD:noStarImageHD;
		ctx.drawImage(sImage, (0.39-0.5*0.1)*W, 0.45*H, 0.1*W, 0.1*W);
		sImage = (got>=3)?starImageHD:noStarImageHD;
		ctx.drawImage(sImage, (0.5-0.5*0.1)*W, 0.45*H, 0.1*W, 0.1*W);
		sImage = (got>=4)?starImageHD:noStarImageHD;
		ctx.drawImage(sImage, (0.61-0.5*0.1)*W, 0.45*H, 0.1*W, 0.1*W);
	}
	if (record) ctx.drawImage(recordImage, 0.8*W-0.07*W, 0.15*H-0.02*W, 0.2*W, 0.2*W);
	
	ctx.drawImage(menuImage, 0.38*W-0.5*0.07*W, 0.82*H-0.025*W, 0.07*W, 0.07*W);
	if (win==1||win==2) {
		ctx.drawImage(repeatImage, 0.62*W-0.5*0.07*W, 0.82*H-0.025*W, 0.07*W, 0.07*W);
		ctx.drawImage(playImage, 0.5*W-0.5*0.12*W, 0.82*H-0.5*0.12*W, 0.12*W, 0.12*W);
	
	} else {
		ctx.drawImage(playImage, 0.62*W-0.5*0.07*W, 0.82*H-0.025*W, 0.07*W, 0.07*W);
		ctx.drawImage(repeatImage, 0.5*W-0.5*0.12*W, 0.82*H-0.5*0.12*W, 0.12*W, 0.12*W);
	
	}


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

	ctx.restore();


}

// The main game loop
var gameMain = function () {
	if (!pause) {
		if (play==-1) {
						ctx.clearRect(0,0,W,H); // clear canvas
				ctx.fillStyle = "rgb(250, 250, 250)";
				ctx.font = "24px Helvetica";
				ctx.textAlign = "left";
				ctx.textBaseline = "top";
				ctx.fillText("You've completed all the levels", 130, 180);
		}
		else if (play==1) {
			if (completedLevel==1) {

				nlvl(ctx, 1);

			} else {
				move(ctx);//Move player
				//Update planets
				for (i=0;i<p.length;i++) {
					p[i].u();
				}


				//drawGame();
			}
		} else {
				//ls(ctx);
				nlvl(ctx, 0);
				if (!gameOver) {
					if (localStorage["audio"]==1) gameOverAudio.play();
					gameOver=true;

				}
				move(ctx);//Move player


		}
	}
	if (pause) {
		nlvl(ctx, 2);

	}

};

function lvl(l) {
	gameOver=false;
	pause=false;
	asteroid=false;
	
	if (l!=1 && localStorage["level" + (l-2)]==-1) {

		menu();
		return 0;
	}
	completedLevel=0;
	play=1;
	record=false;
	place="game";
	p=[];
	el=[];
	got=0;
	lv=l;
	tutorial=(l==1)?1:0;
	if (l==4) {tutorial=4.1;}
	if (l==6) {tutorial=6.1;}
	if (l==9) {tutorial=9.1;}

	switch (l) {
		case 1:
			p.push(new P(0.3*W, 0.5*H, 0.1*W, 0, 1, -1));
			p.push(new P(0.7*W, 0.5*H, 0.3*H, 0, 3, -1));
			/*p.push(new P(0.5*W, 0.2*H, 0.1*H, 0, 5, 3));
			p.push(new P(0.5*W, 0.8*H, 0.1*H, 0, 5, 2));*/
			/*p.push(new P(0.5*W-0.06*H, 0.2*H, 0.02*H, 0, 6, -1));
			p.push(new P(0.5*W-0.02*H, 0.2*H, 0.02*H, 0, 6, -1));
			p.push(new P(0.5*W+0.02*H, 0.2*H, 0.02*H, 0, 6, -1));
			p.push(new P(0.5*W+0.06*H, 0.2*H, 0.02*H, 0, 6, -1));
			p.push(new P(0.5*W+0.10*H, 0.2*H, 0.02*H, 0, 6, -1));
			p.push(new P(0.5*W+0.14*H, 0.2*H, 0.02*H, 0, 6, -1));*/
			
			a = new A(100, 200 - 55, p[0]);

			el.push(new E(0.4*W, 0.4*H, 0.005*W, 1));
			el.push(new E(0.7*W, 0.195*H, 0.005*W, 2));
			el.push(new E(0.7*W-0.25*H, 0.3*H, 0.005*W, 3));
			el.push(new E(0.7*W, 0.88*H, 0.03*W, 4));
			break;
		case 2:

			p.push(new P(0.3*W, 0.5*H, 0.1*W, 0, 2, -1));
			p.push(new P(0.7*W, 0.3*H, 0.07*W, 0, 1, -1));
			p.push(new P(0.6*W, 0.8*H, 0.07*W, 0, 3, -1));

			a = new A(-200, -200 - 55, p[0]);

			el.push(new E(0.4*W, 0.6*H, 0.005*W, 1));
			el.push(new E(0.62*W, 0.3*H, 0.005*W, 2));
			el.push(new E(0.65*W, 0.67*H, 0.005*W, 3));
			el.push(new E(0.81*W, 0.3*H, 0.03*W, 4));
			break;
		case 3:

			p.push(new P(0.7*W, 0.5*H, 0.15*W, 0, 1, -1));
			p.push(new P(0.2*W, 0.5*H, 0.05*W, 5, 2, -1));

			a = new A(-200, -200 - 55, p[0]);

			el.push(new E(0.4*W, 0.6*H, 0.005*W, 1));
			el.push(new E(0.86*W, 0.5*H+0.06*W, 0.005*W, 2));
			el.push(new E(0.05*W, 0.5*H, 0.005*W, 3));
			el.push(new E(0.7*W+Math.sqrt(2)*0.5*0.19*W, 0.5*H-Math.sqrt(2)*0.5*0.19*W, 0.03*W, 4));
			break;
		case 4:

			p.push(new P(0.68*W, 0.5*H, 0.1*W, 0, 2, -1));
			p.push(new P(0.32*W, 0.5*H, 0.1*W, 0, 3, -1));

			p.push(new P(0.5*W, 0.5*H-2*0.02*W, 0.01*W, 0, 6, -1));
			p.push(new P(0.5*W, 0.5*H-0.02*W, 0.01*W, 0, 6, -1));
			p.push(new P(0.5*W, 0.5*H, 0.01*W, 0, 6, -1));
			p.push(new P(0.5*W, 0.5*H+0.02*W, 0.01*W, 0, 6, -1));

			a = new A(-200, -200 - 55, p[0]);

			el.push(new E(0.5*W, 0.6*H+0.04*W, 0.005*W, 1));
			el.push(new E(0.5*W, 0.4*H-0.04*W, 0.005*W, 2));
			el.push(new E(0.1*W, 0.5*H, 0.005*W, 3));
			el.push(new E(0.68*W+Math.sqrt(2)*0.5*0.21*W, 0.5*H+Math.sqrt(2)*0.5*0.21*W, 0.03*W, 4));
			break;


		case 5:

			p.push(new P(0.8*W, 0.5*H, 0.03*W, 6, 2, -1));
			p.push(new P(0.1*W, 0.8*H, 0.05*W, 0, 3, -1));

			p.push(new P(0.2*W, 0.5*H, 0.03*W, 5, 6, -1));



			for (i=0;i<15;i++) p.push(new P(0.5*W, 0.6*H+i*0.02*W, 0.01*W, 0, 6, -1));
			for (i=0;i<15;i++) p.push(new P(0.5*W, 0.4*H-i*0.02*W, 0.01*W, 0, 6, -1));

			a = new A(-200, -200 - 55, p[0]);

			el.push(new E(0.8*W, 0.5*H+0.17*W, 0.005*W, 1));
			el.push(new E(0.5*W, 0.5*H, 0.005*W, 2));
			el.push(new E(0.25*W, 0.8*H, 0.005*W, 3));
			el.push(new E(0.3*W, 0.8*H, 0.03*W, 4));
			break;

		case 6:

			p.push(new P(0.22*W, 0.8*H, 0.03*W, 0, 2, -1));
			p.push(new P(0.22*W, 0.2*H, 0.03*W, 0, 1, -1));
			p.push(new P(0.78*W, 0.8*H, 0.03*W, 0, 1, -1));
			p.push(new P(0.78*W, 0.2*H, 0.03*W, 0, 2, -1));

			p.push(new P(0.5*W, 0.5*H, 0.04*W, 0, 4, -1));

			a = new A(-200, -200 - 55, p[0]);

			el.push(new E(0.18*W, 0.5*H, 0.005*W, 1));
			el.push(new E(0.78*W, 0.5*H, 0.005*W, 2));
			el.push(new E(0.78*W, 0.2*H-0.035*W, 0.005*W, 3));
			el.push(new E(0.05*W, 0.2*H, 0.03*W, 4));
			break;



		case 7:

			p.push(new P(0.6*W, 0.4*H, 0.03*W, 0, 3, -1));


			p.push(new P(0.0*W, 0.0*H, 0.4*W, 0, 4, -1));
			//p.push(new P(0.1*W, 1.0*H, 0.3*W, 0, 4, -1));

			//p.push(new P(0.9*W, 0.4*H, 0.2*W, 0, 4, -1));
			


			for (i=1;i<27;i++) p.push(new P(0.6*W, 0.4*H, 0.01*W, i/(2*Math.PI), 6, -1));
			
			a = new A(-200, -200 - 55, p[0]);

			el.push(new E(0.6*W-0.1*W, 0.4*H+0.12*W, 0.005*W, 1));
			el.push(new E(0.6*W-0.2*W, 0.4*H+0.14*W, 0.005*W, 2));
			el.push(new E(0.6*W-0.23*W, 0.4*H+0.14*W, 0.005*W, 3));
			el.push(new E(0.6*W-0.35*W, 0.4*H+0.11*W, 0.03*W, 4));
			break;


		case 8:

			p.push(new P(0.2*W, 0.9*H, 0.04*W, 0, 3, -1));

			p.push(new P(0.4*W, 0.85*H, 0.06*W, 0, 3, -1));
			for (i=1;i<21;i++) p.push(new P(0.4*W + Math.cos(2*i/(2*Math.PI))*0.1*W, 0.85*H + Math.sin(2*i/(2*Math.PI))*0.1*W, 0.01*W, 0, 6, -1));
			
			p.push(new P(0.25*W, 0.4*H, 0.05*W, 0, 3, -1));
			for (i=1;i<21;i++) p.push(new P(0.25*W + Math.cos(2*i/(2*Math.PI))*0.09*W, 0.4*H + Math.sin(2*i/(2*Math.PI))*0.09*W, 0.01*W, 0, 6, -1));
			
			p.push(new P(0.65*W, 0.5*H, 0.03*W, 0, 3, -1));
			for (i=1;i<21;i++) p.push(new P(0.65*W + Math.cos(2*i/(2*Math.PI))*0.085*W, 0.5*H + Math.sin(2*i/(2*Math.PI))*0.085*W, 0.01*W, 0, 6, -1));
			
			p.push(new P(0.85*W, 0.1*H, 0.06*W, 0, 3, -1));
			for (i=1;i<21;i++) p.push(new P(0.85*W + Math.cos(2*i/(2*Math.PI))*0.1*W, 0.1*H + Math.sin(2*i/(2*Math.PI))*0.1*W, 0.01*W, 0, 6, -1));
			

			p.push(new P(0.22*W, 0.05*H, 0.07*W, 0, 4, -1));
			p.push(new P(0.9*W, 0.5*H, 0.1*W, 0, 4, -1));
	
			a = new A(-200, -200 - 55, p[0]);

			el.push(new E(0.325*W, 0.62*H, 0.005*W, 1));
			el.push(new E(0.45*W, 0.475*H, 0.005*W, 2));
			el.push(new E(0.65*W, 0.45*H-0.13*W, 0.005*W, 3));
			el.push(new E(0.7*W, 0.4*H-0.13*W, 0.03*W, 4));
			break;

		case 9:

			p.push(new P(0.1*W, 0.5*H, 0.03*W, 0, 2, -1));
			
			p.push(new P(0.35*W, 0.5*H, 0.04*W, 0, 5, 2));
			p.push(new P(0.65*W, 0.5*H, 0.04*W, 0, 5, 1));

			p.push(new P(0.9*W, 0.5*H, 0.03*W, 0, 1, -1));

			p.push(new P(0.5*W, 0.5*H, 0.01*W, 0, 6, -1));
			p.push(new P(0.48*W, 0.45*H, 0.01*W, 0, 6, -1));
			p.push(new P(0.52*W, 0.55*H, 0.01*W, 0, 6, -1));
			p.push(new P(0.47*W, 0.57*H, 0.01*W, 0, 6, -1));
			p.push(new P(0.5*W, 0.63*H, 0.01*W, 0, 6, -1));
			p.push(new P(0.5*W, 0.3*H, 0.01*W, 0, 6, -1));
			p.push(new P(0.48*W, 0.25*H, 0.01*W, 0, 6, -1));
			p.push(new P(0.52*W, 0.35*H, 0.01*W, 0, 6, -1));
			p.push(new P(0.47*W, 0.37*H, 0.01*W, 0, 6, -1));
			p.push(new P(0.5*W, 0.43*H, 0.01*W, 0, 6, -1));
			p.push(new P(0.5*W, 0.7*H, 0.01*W, 0, 6, -1));
			p.push(new P(0.48*W, 0.65*H, 0.01*W, 0, 6, -1));
			p.push(new P(0.52*W, 0.75*H, 0.01*W, 0, 6, -1));
			p.push(new P(0.47*W, 0.77*H, 0.01*W, 0, 6, -1));
			p.push(new P(0.5*W, 0.83*H, 0.01*W, 0, 6, -1));
			p.push(new P(0.5*W, 0.9*H, 0.01*W, 0, 6, -1));
			p.push(new P(0.48*W, 0.85*H, 0.01*W, 0, 6, -1));
			p.push(new P(0.52*W, 0.95*H, 0.01*W, 0, 6, -1));
			p.push(new P(0.47*W, 0.97*H, 0.01*W, 0, 6, -1));
			p.push(new P(0.5*W, 1.03*H, 0.01*W, 0, 6, -1));
			p.push(new P(0.5*W, 0.1*H, 0.01*W, 0, 6, -1));
			p.push(new P(0.48*W, 0.05*H, 0.01*W, 0, 6, -1));
			p.push(new P(0.52*W, 0.15*H, 0.01*W, 0, 6, -1));
			p.push(new P(0.47*W, 0.17*H, 0.01*W, 0, 6, -1));
			p.push(new P(0.5*W, 0.23*H, 0.01*W, 0, 6, -1));


			a = new A(-200, -200 - 55, p[0]);

			el.push(new E(0.25*W, 0.5*H, 0.005*W, 1));
			el.push(new E(0.78*W, 0.5*H, 0.005*W, 2));
			el.push(new E(0.9*W, 0.5*H-0.05*W, 0.005*W, 3));
			el.push(new E(0.9*W, 0.6*H+0.1*W, 0.03*W, 4));
			break;

		case 10:

			p.push(new P(0.5*W, 0.98*H-0.1*W, 0.1*W, 0, 2, -1));


			
			p.push(new P(0.3*W, 0.6*H, 0.04*W, 0, 5, 2));
			p.push(new P(0.65*W, 0.5*H, 0.04*W, 0, 5, 1));
			p.push(new P(0.65*W, 0.3*H, 0.04*W, 0, 5, 4));
			p.push(new P(0.25*W, 0.3*H, 0.04*W, 0, 5, 3));


			p.push(new P(0.1*W, 0.98*H-0.03*W, 0.1*W, 0, 3, -1));


			p.push(new P(0.5*W, 0.5*H-0.1*W, 0.1*W, 0, 4, -1));
	
			a = new A(-200, -200 - 55, p[0]);

			el.push(new E(0.38*W, 0.98*H-0.1*W, 0.005*W, 1));
			el.push(new E(0.7*W, 0.98*H-0.1*W, 0.005*W, 2));
			el.push(new E(0.61*W, 0.98*H-0.1*W, 0.005*W, 3));
			el.push(new E(0.2*W, 0.15*H, 0.03*W, 4));
			break;


		case 11:

			p.push(new P(0.7*W, 0.5*H, 0.05*W, 6, 1, -1));


			
			p.push(new P(0.7*W, 0.5*H, 0.03*W, 0, 5, 2));
			p.push(new P(0.2*W, 0.23*H-0.04*W, 0.04*W, 0, 5, 1));

			p.push(new P(0.7*W, 0.95*H, 0.03*W, 5, 1, -1));


			p.push(new P(0.35*W, 0.35*H-0.08*W, 0.08*W, 0, 4, -1));
			p.push(new P(0.03*W, 0.15*H-0.07*W, 0.02*W, 0, 3, -1));


			
			a = new A(-200, -200 - 55, p[0]);

			el.push(new E(0.15*W, 0.23*H-0.06*W, 0.005*W, 1));
			el.push(new E(0.7*W, 0.8*H, 0.005*W, 2));
			el.push(new E(0.8*W, 0.95*H, 0.005*W, 3));
			el.push(new E(0.37*W, 0.45*H, 0.03*W, 4));
			break;


		case 12:

			p.push(new P(0.1*W, 0.95*H-0.05*W, 0.03*W, 0, 2, -1));

			p.push(new P(0.3*W, 0.2*H-0.03*W, 0.03*W, 0, 5, 2));
			p.push(new P(0.7*W, 0.23*H-0.04*W, 0.04*W, 0, 5, 1));
			p.push(new P(0.45*W, 0.9*H-0.05*W, 0.03*W, 0, 5, 4));
			p.push(new P(0.05*W, 0.15*H-0.04*W, 0.03*W, 0, 5, 3));

			p.push(new P(0.12*W, 0.4*H-0.05*W, 0.03*W, 0, 2, -1));
			p.push(new P(0.9*W, 0.3*H-0.05*W, 0.05*W, 0, 2, -1));

			p.push(new P(0.3*W, 0.75*H-0.05*W, 0.03*W, 0, 4, -1));

			
			p.push(new P(0.11*W, 0.5*H, 0.02*W, 0, 6, -1));
			p.push(new P(0.05*W, 0.5*H, 0.02*W, 0, 6, -1));
			p.push(new P(0.25*W, 0.95*H-0.05*W, 0.02*W, 0, 6, -1));
			p.push(new P(0.35*W, 0.99*H-0.05*W, 0.02*W, 0, 6, -1));

			for (i=0;i<35;i++) p.push(new P(0.5*W, i*0.02*W, 0.01*W, 0, 6, -1));


			
			a = new A(-200, -200 - 55, p[0]);

			el.push(new E(0.14*W, 0.95*H-0.05*W, 0.005*W, 1));
			el.push(new E(0.16*W, 0.4*H-0.05*W, 0.005*W, 2));
			el.push(new E(0.9*W, 0.3*H-0.05*W+0.06*W, 0.005*W, 3));
			el.push(new E(0.6*W, 0.45*H, 0.03*W, 4));
			break;

		case 13:

			p.push(new P(0.8*W, 0.5*H, 0.1*W, 0, 1, -1));
			p.push(new P(0.3*W, 0.4*H, 0.05*W, 0, 1, -1));

			p.push(new P(0.4*W, 0.3*H-0.05*W, 0.03*W, 0, 5, 3));
			p.push(new P(0.9*W, 0.3*H, 0.03*W, 0, 5, 2));


			p.push(new P(0.45*W, 0.5*H, 0.03*W, 0, 4, -1));
			p.push(new P(0.2*W, 0.8*H, 0.03*W, 0, 4, -1));
			p.push(new P(0.75*W, 0.8*H, 0.03*W, 0, 4, -1));

			
			
			a = new A(-200, -200 - 55, p[0]);

			el.push(new E(0.24*W, 0.4*H, 0.005*W, 1));
			el.push(new E(0.36*W, 0.4*H, 0.005*W, 2));
			el.push(new E(0.69*W, 0.5*H, 0.005*W, 3));
			el.push(new E(0.8*W, 0.5*H+0.12*W, 0.02*W, 4));
			break;

		case 14:

			p.push(new P(0.3*W, 0.4*H, 0.05*W, 0, 1, -1));
			p.push(new P(0.5*W, 0.5*H, 0.05*W, 4, 1, -1));
			p.push(new P(0.8*W, 0.3*H, 0.05*W, 6, 1, -1));
			
			p.push(new P(0.8*W, 0.8*H, 0.03*W, 0, 5, 4));
			p.push(new P(0.32*W, 0.8*H, 0.03*W, 0, 5, 3));
			p.push(new P(0.3*W, 0.9*H, 0.03*W, 0, 5, 6));
			p.push(new P(0.3*W, 0.1*H, 0.03*W, 0, 5, 5));
			p.push(new P(0.15*W, 0.4*H, 0.03*W, 0, 5, 8));
			p.push(new P(0.2*W, 0.9*H, 0.03*W, 0, 5, 7));


			
			a = new A(-200, -200 - 55, p[0]);

			el.push(new E(0.24*W, 0.4*H, 0.005*W, 1));
			el.push(new E(0.36*W, 0.4*H, 0.005*W, 2));
			el.push(new E(0.8*W, 0.74*H, 0.005*W, 3));
			el.push(new E(0.1*W, 0.9*H, 0.02*W, 4));
			break;


		case 15:
			p.push(new P(100*W/600, 200*H/400, 20*W/600, 0, 3));
			p.push(new P(100*W/600, 200*H/400, 10*W/600, 6, 2));
			p.push(new P(500*W/600, 200*H/400, 20*W/600, 0, 3));
			p.push(new P(500*W/600, 200*H/400, 10*W/600, 6, 2));
			
			a = new A(-100, -200 - 55, p[0]);

			el.push(new E(100*W/600, 310*H/400, 0.005*W, 1));
			el.push(new E(500*W/600, 310*H/400, 0.005*W, 2));
			el.push(new E(500*W/600, 230*H/400, 0.005*W, 3));
			el.push(new E(300*W/600, 350*H/400, 0.02*W, 4));
			

			break;


		default:

			levels();
			break;

			//4: BLACK HOLE
			//5: TELETRANSPORT
			//6: ASTEROID


	}
}



var then = Date.now();
var p=[];
var a;
var play=1;
var el=[];
var got=0;
var lv=1;
var record=false;
var asteroid=false;
var tutorial, completedLevel=0;
var pause=false;
var gameOver=false;