const requestURL = 'data/obligation.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject); 
    const obligation = jsonObject['obligation'];
    for (let i = 0; i < obligation.length; i++ ) {
        let classdiv = document.createElement('div');
        let classname = document.createElement("h3");

     
        let obligation1 = document.createElement('div');
        let obligation1num = document.createElement("p");
        let obligation1name = document.createElement("h2");
        let obligation1desc = document.createElement("p");

        let obligation2 = document.createElement('div');
        let obligation2num = document.createElement("p");
        let obligation2name = document.createElement("h2");
        let obligation2desc = document.createElement("p");

        let obligation3 = document.createElement('div');
        let obligation3num = document.createElement("p");
        let obligation3name = document.createElement("h2");
        let obligation3desc = document.createElement("p");

        let obligation4 = document.createElement('div');
        let obligation4num = document.createElement("p");
        let obligation4name = document.createElement("h2");
        let obligation4desc = document.createElement("p");

        let obligation5 = document.createElement('div');
        let obligation5num = document.createElement("p");
        let obligation5name = document.createElement("h2");
        let obligation5desc = document.createElement("p");

        let obligation6 = document.createElement('div');
        let obligation6num = document.createElement("p");
        let obligation6name = document.createElement("h2");
        let obligation6desc = document.createElement("p");

        let obligation7 = document.createElement('div');
        let obligation7num = document.createElement("p");
        let obligation7name = document.createElement("h2");
        let obligation7desc = document.createElement("p");

        let obligation8 = document.createElement('div');
        let obligation8num = document.createElement("p");
        let obligation8name = document.createElement("h2");
        let obligation8desc = document.createElement("p");

        let obligation9 = document.createElement('div');
        let obligation9num = document.createElement("p");
        let obligation9name = document.createElement("h2");
        let obligation9desc = document.createElement("p");

        let obligation10 = document.createElement('div');
        let obligation10num = document.createElement("p");
        let obligation10name = document.createElement("h2");
        let obligation10desc = document.createElement("p");

        let obligation11 = document.createElement('div');
        let obligation11num = document.createElement("p");
        let obligation11name = document.createElement("h2");
        let obligation11desc = document.createElement("p");

        let obligation12 = document.createElement('div');
        let obligation12num = document.createElement("p");
        let obligation12name = document.createElement("h2");
        let obligation12desc = document.createElement("p");

        

        classname.textContent = obligation[i].Name;

        obligation1num.textContent = "01 - 08";
        obligation1name.textContent = obligation[i].obligation1;
        obligation1desc.textContent = obligation[i].obligation1Desc;

        obligation2num.textContent = "09 - 16";
        obligation2name.textContent = obligation[i].obligation2;
        obligation2desc.textContent = obligation[i].obligation2Desc;

        obligation3num.textContent = "17 - 24";
        obligation3name.textContent = obligation[i].obligation3;
        obligation3desc.textContent = obligation[i].obligation3Desc;

        obligation4num.textContent = "25 - 32";
        obligation4name.textContent = obligation[i].obligation4;
        obligation4desc.textContent = obligation[i].obligation4Desc;
   
        obligation5num.textContent = "33 - 40";
        obligation5name.textContent = obligation[i].obligation5;
        obligation5desc.textContent = obligation[i].obligation5Desc;

        obligation6num.textContent = "41 - 48";
        obligation6name.textContent = obligation[i].obligation6;
        obligation6desc.textContent = obligation[i].obligation6Desc;

        obligation7num.textContent = "49 - 56";
        obligation7name.textContent = obligation[i].obligation7;
        obligation7desc.textContent = obligation[i].obligation7Desc;

        obligation8num.textContent = "57 - 64";
        obligation8name.textContent = obligation[i].obligation8;
        obligation8desc.textContent = obligation[i].obligation8Desc;

        obligation9num.textContent = "65 - 72";
        obligation9name.textContent = obligation[i].obligation9;
        obligation9desc.textContent = obligation[i].obligation9Desc;

        obligation10num.textContent = "73 - 80";
        obligation10name.textContent = obligation[i].obligation10;
        obligation10desc.textContent = obligation[i].obligation10Desc;

        obligation11num.textContent = "81 - 88";
        obligation11name.textContent = obligation[i].obligation11;
        obligation11desc.textContent = obligation[i].obligation11Desc;

        obligation12num.textContent = "89 - 96";
        obligation12name.textContent = obligation[i].obligation12;
        obligation12desc.textContent = obligation[i].obligation12Desc;

        classdiv.setAttribute("id", obligation[i].label + "-obligation")

        obligation1.setAttribute("class", obligation[i].labelshort + "-obligation")
        obligation1.appendChild(obligation1num);
        obligation1.appendChild(obligation1name);
        obligation1.appendChild(obligation1desc);

        obligation2.setAttribute("class", obligation[i].labelshort + "-obligation")
        obligation2.appendChild(obligation2num);
        obligation2.appendChild(obligation2name);
        obligation2.appendChild(obligation2desc);

        obligation3.setAttribute("class", obligation[i].labelshort + "-obligation")
        obligation3.appendChild(obligation3num);
        obligation3.appendChild(obligation3name);
        obligation3.appendChild(obligation3desc);

        obligation4.setAttribute("class", obligation[i].labelshort + "-obligation")
        obligation4.appendChild(obligation4num);
        obligation4.appendChild(obligation4name);
        obligation4.appendChild(obligation4desc);

        obligation5.setAttribute("class", obligation[i].labelshort + "-obligation")
        obligation5.appendChild(obligation5num);
        obligation5.appendChild(obligation5name);
        obligation5.appendChild(obligation5desc);

        obligation6.setAttribute("class", obligation[i].labelshort + "-obligation")
        obligation6.appendChild(obligation6num);
        obligation6.appendChild(obligation6name);
        obligation6.appendChild(obligation6desc);

        obligation7.setAttribute("class", obligation[i].labelshort + "-obligation")
        obligation7.appendChild(obligation7num);
        obligation7.appendChild(obligation7name);
        obligation7.appendChild(obligation7desc);

        obligation8.setAttribute("class", obligation[i].labelshort + "-obligation")
        obligation8.appendChild(obligation8num);
        obligation8.appendChild(obligation8name);
        obligation8.appendChild(obligation8desc);

        obligation9.setAttribute("class", obligation[i].labelshort + "-obligation")
        obligation9.appendChild(obligation9num);
        obligation9.appendChild(obligation9name);
        obligation9.appendChild(obligation9desc);

        obligation10.setAttribute("class", obligation[i].labelshort + "-obligation")
        obligation10.appendChild(obligation10num);
        obligation10.appendChild(obligation10name);
        obligation10.appendChild(obligation10desc);

        obligation11.setAttribute("class", obligation[i].labelshort + "-obligation")
        obligation11.appendChild(obligation11num);
        obligation11.appendChild(obligation11name);
        obligation11.appendChild(obligation11desc);

        obligation12.setAttribute("class", obligation[i].labelshort + "-obligation")
        obligation12.appendChild(obligation12num);
        obligation12.appendChild(obligation12name);
        obligation12.appendChild(obligation12desc);


        classdiv.appendChild(classname);
        classdiv.appendChild(obligation1);
        classdiv.appendChild(obligation2);
        classdiv.appendChild(obligation3);
        classdiv.appendChild(obligation4);
        classdiv.appendChild(obligation5);
        classdiv.appendChild(obligation6);
        classdiv.appendChild(obligation7);
        classdiv.appendChild(obligation8);
        classdiv.appendChild(obligation9);
        classdiv.appendChild(obligation10);
        classdiv.appendChild(obligation11);
        classdiv.appendChild(obligation12);

        
        document.querySelector('div#content').appendChild(classdiv);
        
    }
  });

//Filter Code here I couldn't get it working on its own file cause it was loading too fast but it works now woot

 
//gets obligation divs
function getElements(x){
  y= x + "-obligation";
  z = document.getElementById(y)
  return z;
}


var general = getElements("general");
var bounty = getElements("bounty");
var tech = getElements("tech");
var hired = getElements("hired-gun");
var smug = getElements("smuggler");
var exp = getElements("explorer");





//gets buttons from html
var allFilterBtn = document.getElementById("all-filter");
var generalBtn = document.getElementById("general-filter");
var bountyBtn = document.getElementById("bounty-filter");
var techBtn = document.getElementById("tech-filter");
var hgBtn = document.getElementById("hg-filter");
var smugBtn = document.getElementById("smug-filter");
var explorerBtn = document.getElementById("exp-filter");

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
smugBtn.addEventListener('click', function(){
    filterObligation("exp")
});

//hides a specfic display
function hideDisplay(y){
    y.style.display = "none";
}

function getwindowssize(){
    
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

 general = getElements("general");
 bounty = getElements("bounty");
 tech = getElements("tech");
 hired = getElements("hired-gun");
 smug = getElements("smuggler");
 exp = getElements("explorer");

    hideDisplay(general);
    hideDisplay(bounty);
    hideDisplay(tech);
    hideDisplay(hired);
    hideDisplay(smug);
    hideDisplay(exp);
}

//shows all the displays
function showAllDisplays(){

    showDisplay(general);
    showDisplay(bounty);
    showDisplay(tech);
    showDisplay(hired);
    showDisplay(smug);
    showDisplay(exp);
}

//actually filters the obligations
function filterObligation(x){

    if (x == "all"){

        showDisplay(general);
        showDisplay(bounty);
        showDisplay(tech);
        showDisplay(hired);
        showDisplay(smug);
        showDisplay(exp);
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
    else if(x == "exp"){
        hideAllDisplays();
        showDisplay(exp)
    }
    else{

    }
}



