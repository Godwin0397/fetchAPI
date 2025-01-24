var h1tag = document.createElement("h1")
h1tag.innerHTML = "Live Weather"
h1tag.style = "text-align: center;"
document.body.append(h1tag)
var container = document.createElement("div")
container.className = "container"
container.style = "width: 1200px; height: 120%;"

var row = document.createElement("div")
row.className = "row"

let fetchObj4 = fetch("https://restcountries.com/v3.1/all").then((data4)=>data4.json()).then((data5)=>temperatureFunction(data5))


function temperatureFunction(data){
  console.log('temperatureFunction', data)
  
  data.forEach((item)=>{
    console.log('item', item)
    var col1 = document.createElement("div")
    col1.className = "col-md-4"
    
    col1.innerHTML += `<div class="card text-center">
                            <div class="card-header">${item.name.official}</div>
                            <div class="card-body">
                                <img src="${item.flags.png}" class="card-img-top" alt="..." style>
                                <h5 class="card-title" style="margin-top: 20px;"><b>Capital:</b> ${item.capital}</h5>
                                <p class="card-text"><b>Region:</b> ${item.region}</p>
                                <p class="card-text"><b>Country-Code:</b> ${item.altSpellings[0]}</p>
                                <p class="card-text"><b>Population:</b> ${item.population}</p>
                            </div>
                            <div class="card-footer text-muted">
                                <a href="#" class="btn btn-danger">Clikc of weather</a>
                            </div>
                        </div>`
                        
    row.append(col1)
    container.append(row)
    document.body.append(container)
    // let temperatureApiCall = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${item.latlng[0]}&lon=${item.latlng[0]}&appid=f51dab9e4f0810b422b2e0130e8f1a88`).then((val)=>val.json()).then((res)=>console.log(res.main.temp))
  })
}
