//gets obligation divs
var general = document.getElementById("general-obligation");
var bounty = document.getElementById("bounty-obligation");
var tech = document.getElementById("tech-obligation");
var hired = document.getElementById("hired-gun-obligation");
var smug = document.getElementById("smuggler-obligation");

//gets buttons from html
var allFilterBtn = document.getElementById("all-filter");
var generalBtn = document.getElementById("general-filter");
var bountyBtn = document.getElementById("bounty-filter");
var techBtn = document.getElementById("tech-filter");
var hgBtn = document.getElementById("hg-filter");
var smugBtn = document.getElementById("smug-filter");

//adds onclick event listeners to buttons
allFilterBtn.addEventListener('click' , function(){
    filterObligation("all")
});
generalBtn.addEventListener('click', function(){
    filterObligation("general")
});
bountyBtn.addEventListener('click', function(){
    filterObligation("bounty")
});
techBtn.addEventListener('click', function(){
    filterObligation("tech")
});
hgBtn.addEventListener('click', function(){
    filterObligation("hg")
});
smugBtn.addEventListener('click', function(){
    filterObligation("smug")
});

//hides a specfic display
function hideDisplay(y){
    y.style.display = "none";
}

function getwindowssize(){
    console.log(window.innerWidth)
    return window.innerWidth;
}

//shows a specfic display
function showDisplay(z){
    var a = getwindowssize();
    if(a > 700){
        z.style.display = "grid";
    }
    else{
        z.style.display = "block"
    }
}

//Hides all the divs
function hideAllDisplays(){
    hideDisplay(general);
    hideDisplay(bounty);
    hideDisplay(tech);
    hideDisplay(hired);
    hideDisplay(smug);
}

//shows all the displays
function showAllDisplays(){
    showDisplay(general);
    showDisplay(bounty);
    showDisplay(tech);
    showDisplay(hired);
    showDisplay(smug);
}

//actually filters the obligations
function filterObligation(x){
    if (x == "all"){
        showDisplay(general);
        showDisplay(bounty);
        showDisplay(tech);
        showDisplay(hired);
        showDisplay(smug);
    }

    else if (x == "general"){
        hideAllDisplays();
        showDisplay(general);
    }

    else if(x == "bounty"){
        hideAllDisplays();
        showDisplay(bounty)
    }
    else if(x == "tech"){
        hideAllDisplays();
        showDisplay(tech)
    }
    else if(x == "hg"){
        hideAllDisplays();
        showDisplay(hired)
    }
    else if(x == "smug"){
        hideAllDisplays();
        showDisplay(smug)
    }
    else{

    }
}


showAllDisplays();



