fetch('http://localhost:3000')
  .then(response => response.json())
  .then(json => {
    for (i = 0; i < json.length; i++){
        var x = document.createElement('li');                
        x.innerHTML = json[i].username;
        document.getElementById('myul').appendChild(x);
    }
    
  })