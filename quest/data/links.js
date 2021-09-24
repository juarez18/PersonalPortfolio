const requestURL1 = "data/links.json";

fetch(requestURL1)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject); 
    const links = jsonObject['links'];
    for (let i = 0; i < links.length; i++ ) {
        let li = document.createElement("li");
        let img = document.createElement("img");
        let a = document.createElement("a");

        img.setAttribute("alt", links[i].label)
        img.setAttribute("src", links[i].image)
        a.setAttribute("href", links[i].url);

        a.appendChild(img);
        li.appendChild(a);

        document.getElementById('navigation').appendChild(li);

    }
    
});

