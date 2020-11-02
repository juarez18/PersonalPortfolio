const requestURL = "index-files/links.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject); 
    const links = jsonObject['links'];
    for (let i = 0; i < links.length; i++ ) {
        let li = document.createElement("li");
        let ul = document.createElement("ul");
        let li2 = document.createElement("li");
        let a = document.createElement("a");

        li2.textContent = links[i].description;
        a.textContent = links[i].label;
        a.setAttribute("href", links[i].url);

        li.appendChild(a);
        ul.appendChild(li2);
        li.appendChild(ul);

        document.getElementById('project-list').appendChild(li);

    }
    
});