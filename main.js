 function getWidth()
  {
    xWidth = null;

    if(window.innerWidth != null)
      return window.innerWidth;

    if(document.body != null)
      return document.body.clientWidth;
    if(window.screen != null)
      return window.screen.availWidth;


    return xWidth;
  }
function getHeight() {
  xHeight = null;

  if(window.innerHeight != null)
    return   window.innerHeight;

  if(document.body != null)
    return document.body.clientHeight;
  if(window.screen != null)
    return window.screen.availHeight;


  return xHeight;
}

function hideTab() {
	if (loaded&&localStorage["audio"]==1) audioControl.pause();
}
function showTab() {
	if (loaded&&localStorage["audio"]==1) audioControl.play();
}

function musicToggle() {
	if (localStorage["audio"]==1) {
	    audioControl.pause();
		localStorage.audio=0;
	} else {
		audioControl.play();
		localStorage["audio"]=1;
	}
	
}

function wrapText(context, text, x, y, maxWidth, lineHeight) {
        var cars = text.split("\n");

        for (var ii = 0; ii < cars.length; ii++) {

            var line = "";
            var words = cars[ii].split(" ");

            for (var n = 0; n < words.length; n++) {
                var testLine = line + words[n] + " ";
                var metrics = context.measureText(testLine);
                var testWidth = metrics.width;

                if (testWidth > maxWidth) {
                    context.fillText(line, x, y);
                    line = words[n] + " ";
                    y += lineHeight;
                }
                else {
                    line = testLine;
                }
            }

            context.fillText(line, x, y);
            y += lineHeight;
        }
     }

function down(x, y) {
	switch(place) {
		case "menu":
			downMenu(x, y);
			break;
		case "about":
			downAbout(x, y);
			break;
		case "cloths":
			downCloths(x, y);
			break;
		case "levels":
			downLevels(x, y);
			break;
		case "game":
			downGame(x, y);
			break;

	}
}

function up(x, y) {
	switch(place) {
		case "menu":
			upMenu(x, y);
			break;
		case "about":
			upAbout(x, y);
			break;
		case "cloths":
			upCloths(x, y);
			break;
		case "levels":
			upLevels(x, y);
			break;
		case "game":
			upGame(x, y);
			break;
	}
}


function u(e) {//Key up
	e.preventDefault();
	k = ('which' in e) ? e.which : e.keyCode;
	//esk: 39
	//ezk: 37
	//gora: 38;
	//behera: 40;
	//space: 32;
	if (k==37) {up(0,0);}
	if (k==39) {up(W,0);}
	if (k==40||k==38||k==32) {down(0.5*W,0);}

}

function d(e) {//Key down
	e.preventDefault();
	k = ('which' in e) ? e.which : e.keyCode;
	if (k==37) {down(0,0);}
	if (k==39) {down(W,0);}

}


// Draw everything
var render = function () {
	ctx.clearRect(0,0,W,H); // clear canvas

	switch(place) {
		case "menu":
			drawMenu();
			break;
		case "about":
			drawAbout();
			break;
		case "cloths":
			drawCloths();
			break;
		case "levels":
			drawLevels();
			break;
		case "game":
			drawGame();
			break;


	}

};
function getHiddenProp(){
    var prefixes = ['webkit','moz','ms','o'];
    
    // if 'hidden' is natively supported just return it
    if ('hidden' in document) return 'hidden';
    
    // otherwise loop over all the known prefixes until we find one
    for (var i = 0; i < prefixes.length; i++){
        if ((prefixes[i] + 'Hidden') in document) 
            return prefixes[i] + 'Hidden';
    }

    // otherwise it's not supported
    return null;
}

function isHidden() {
    var prop = getHiddenProp();
    if (!prop) return false;
    
    return document[prop];
}
// use the property name to generate the prefixed event name
var visProp = getHiddenProp();
if (visProp) {
  var evtname = visProp.replace(/[H|h]idden/,'') + 'visibilitychange';
  document.addEventListener(evtname, visChange);
}

function visChange() {

      if (isHidden())
         hideTab();
      else
         showTab();
}
// The main game loop
var main = function () {
	
	if (place!="") {
		render();	
	}

	switch (place) {
		case "menu":
			menuMain();
			break;
		case "about":
			aboutMain();
			break;
		case "cloths":
			clothsMain();
			break;
		case "levels":
			levelsMain();
			break;
		case "game":
			gameMain();
			break;

	}
	
	


	// Request to do this again ASAP
	requestAnimationFrame(main);
};

//Start everything
function init() {
	loadStars();
	loadImages();
	main();
}

// Create the canvas
var c = document.createElement("canvas");
var ctx = c.getContext("2d");

W=getWidth();
H=getHeight();

var computer=2;

if (computer==1) {W=600;H=400;}
if (computer==2) {W=710;H=400;}


c.height = H;
c.width = W;

document.body.appendChild(c);
place="";

c.addEventListener('mousedown', function(evt) {
	event.preventDefault();
        down(evt.clientX, evt.clientY);
      }, false);

c.addEventListener('mouseup', function(evt) {
	event.preventDefault();
        up(evt.clientX, evt.clientY);
      }, false);

c.addEventListener('touchstart', function(e) {
        down(e.touches[0].clientX, e.touches[0].clientY);
      }, false);

c.addEventListener('touchend', function(e) {
        up(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
      }, false);

c.setAttribute("tabindex", "0");
c.focus();
init();
