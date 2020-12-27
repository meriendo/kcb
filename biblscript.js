var links = document.getElementsByClassName('r1ow');

var confirmIt = function (cbox){
        if (!confirm('Are you sure you wish to leave the page?')) 
        	cbox.preventDefault();
    		};

    for(var i=0, length=links.length; i<length; i++){
        links[i].addEventListener('click', confirmIt, false);
    		}


var links = document.getElementsByClassName('r1ow1');

var confirmIt = function (cbox){
        if (!confirm('Are you sure you wish to leave the page?')) 
        	cbox.preventDefault();
    		};

    for(var i=0, length=links.length; i<length; i++){
        links[i].addEventListener('click', confirmIt, false);
    		}


window.onscroll = function() {toStick()};

var tempnav = document.getElementById("nav");
var stnav = tempnav.offsetTop;

function toStick(){
  if (window.pageYOffset >= stnav) {
    tempnav.classList.add("stnav")
  	}

  else{
    tempnav.classList.remove("stnav");
  	}
}
