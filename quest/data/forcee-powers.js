const requestURL3 = 'data/force-powers.json';

fetch(requestURL3)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject); 
    const forcepowers = jsonObject['forcepowers'];
    for (let i = 0; i < forcepowers.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement("h3");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
    
        h2.textContent = forcepowers[i].Name;
        p1.textContent = forcepowers[i].Forcereq
        p2.textContent = forcepowers[i].Forcecost
        p3.textContent = forcepowers[i].Forcedesc
        

        card.appendChild(h2);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(p3)
        
        
        document.querySelector('div.forcepowersjs').appendChild(card);
    }
  });