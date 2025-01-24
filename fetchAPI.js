var container = document.createElement("div")
container.className = "container"

var row = document.createElement("div")
row.className = "row"

let fetchObj4 = fetch("https://restcountries.com/v3.1/all").then((data4)=>data4.json()).then((data5)=>temperatureFunction(data5))


function temperatureFunction(data){
  console.log('temperatureFunction', data)
  
  data.forEach((item)=>{
    console.log('item', item)
    var col1 = document.createElement("div")
    col1.className = "col-md-4"
    col1.style = "margin-top: 20px;"
    col1.innerHTML += `<div class="card" style="width: 18rem;">
            <img src="${item.flags.png}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.name.official}</h5>
                <p class="card-text">${item.capital}</p>
            </div>
        </div>`

    row.append(col1)
    container.append(row)
    document.body.append(container)
    // let temperatureApiCall = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${item.latlng[0]}&lon=${item.latlng[0]}&appid=f51dab9e4f0810b422b2e0130e8f1a88`).then((val)=>val.json()).then((res)=>console.log(res.main.temp))
  })
}