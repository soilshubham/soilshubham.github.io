var momo = 0;
var imag = "1";
var face = document.querySelector(".sahilFace");
var feedBtn = document.querySelector(".btn-1");
var poopBtn = document.querySelector(".btn-2");
var heading = document.querySelector("b");

function isFinish() {
	if(momo>=45){
		
	}
}

function faceChanger() {
	if(momo>=0 && momo<=3){
		imag="1";
		heading.textContent = "Feed momos to make Sahil happy.";
	}
	else if(momo>3 && momo<=5){
		imag="2";
	}
	else if(momo>5 && momo<=8){
		imag="3";
	}
	else if(momo>8 && momo<=11){
		imag="4";
	}
	else if(momo>11 && momo<=14){
		imag="5";
	}
	else if(momo>14 && momo<=16){
		imag="6";
	}
	else if(momo>16 && momo<=20){
		imag="7";
	}
	else if(momo>20 && momo<=25){
		imag="8";
	}
	else if(momo>25 && momo<= 32){
		imag="9";
	}
	else if(momo>32 && momo<=45){
		imag="10";
		heading.textContent = "Sahil is happy,";
		heading.appendChild(document.createElement('br'));
		heading.appendChild(document.createElement('b')).textContent = "he ate 45 momooos!!";
	}
	face.src="images/"+imag+"b.png";
}

function feeded(){
	momo++;
	faceChanger();
}

function pooped() {
	momo=0;
	faceChanger();
}

feedBtn.addEventListener("click", feeded);
poopBtn.addEventListener("click", pooped);