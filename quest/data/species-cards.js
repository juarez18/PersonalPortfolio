const requestURL = 'data/species.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject); 
    const species = jsonObject['species'];
    for (let i = 0; i < species.length; i++ ) {
        let card = document.createElement('section');
        let stats = document.createElement("div");
        let table = document.createElement("table")
        let attribute = document.createElement("tr")
        let stat = document.createElement("tr")
        let h2 = document.createElement('h2');
        let p1 = document.createElement("th");
        let p2 = document.createElement("th");
        let p3 = document.createElement("th");
        let p4 = document.createElement("th");
        let p5 = document.createElement("th");
        let p6 = document.createElement("th");
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        let td4 = document.createElement("td")
        let td5 = document.createElement("td")
        let td6 = document.createElement("td")
        let p7 = document.createElement("p");
        let p8 = document.createElement("p");
        let p9 = document.createElement("p");
        let p10 = document.createElement("h3");
        let a1 = document.createElement("a");
        let img = document.createElement("img")

        h2.textContent = species[i].name;
        p1.textContent = "B";
        p2.textContent = "A";
        p3.textContent = "I"; 
        p4.textContent = "C"; 
        p5.textContent = "W";
        p6.textContent = "P";
        td1.textContent = species[i].Brawn;
        td2.textContent = species[i].Agility;
        td3.textContent = species[i].Intellect;
        td4.textContent = species[i].Cunning;
        td5.textContent = species[i].Willpower;
        td6.textContent = species[i].Presence;
        p7.textContent = "Wound Threshold: " + species[i].WoundThreshold + " + Brawn";
        p8.textContent = "Strain Threshold: " + species[i].StrainThreshold + " + Willpower";
        p9.textContent = "Starting Experience: " + species[i].StartingExperience;
        p10.textContent = "Starting Abilities:"
        a1.textContent = "For more information click here";
        a1.setAttribute('href', species[i].info);
        img.setAttribute('src', species[i].image);
        img.setAttribute('alt', species[i].name);

        card.appendChild(h2);
        attribute.appendChild(p1);
        attribute.appendChild(p2);
        attribute.appendChild(p3);
        attribute.appendChild(p4);
        attribute.appendChild(p5);
        attribute.appendChild(p6);
        stat.appendChild(td1);
        stat.appendChild(td2);
        stat.appendChild(td3);
        stat.appendChild(td4);
        stat.appendChild(td5);
        stat.appendChild(td6);
        table.appendChild(attribute);
        table.appendChild(stat);
        stats.appendChild(table);
        card.appendChild(stats);
        card.appendChild(p7);
        card.appendChild(p8);
        card.appendChild(p9);
        let ul = document.createElement("ul");
        ul.appendChild(p10);
        for (let a = 0; a < species[i].SpecialAbility.length; a++){
          let li = document.createElement("li");
          li.textContent = species[i].SpecialAbility[a]
          ul.appendChild(li);
        }
        card.appendChild(ul);
        card.appendChild(img);
        card.appendChild(a1);

        document.querySelector('div.species').appendChild(card);
    }
  });