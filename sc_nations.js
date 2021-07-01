fetch('https://restcountries.eu/rest/v2/all')
  .then(response => response.json())
  .then(json => {
    /* use backtick = ` to spread string on multiple lines in js*/  
    var content = `
      <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="nation_flag" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">nation_name</h5>
        <p class="card-text">nation_population</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
      `
    for (i = 0; i < json.length; i++){
        var x = document.createElement('div');        
        var my = content.replace('nation_flag', json[i].flag)
        my = my.replace('nation_name', json[i].name)
        my = my.replace('nation_population', json[i].population)
        x.innerHTML = my;
        document.getElementById('myul').appendChild(x);
    }
    
  })