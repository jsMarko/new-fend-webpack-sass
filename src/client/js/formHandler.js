const baseUrl =
   "https://api.openweathermap.org/data/2.5/weather?q=Broken+Arrow&units=imperial&appid="
const apiKey = "3a8b21781d624f82a82ceb29137dda93"
let city = "Broken Arrow"

function handleSubmit(event) {
   event.preventDefault()

   // check what text was put into the form field
   let formText = document.getElementById("name").value
   Client.checkForName(formText)
   // this is for a test
   console.log("::: Form Submitted :::")
   fetch("http://localhost:8081/test")
      .then((res) => res.json())
      .then(function (res) {
         document.getElementById("results").innerHTML = res.message
      })
   //**************************************** */
   fetch(baseUrl + apiKey)
      .then((res) => res.json())
      .then((data) => {
         document.querySelector("#grid-1").innerHTML = data.name
         document.querySelector("#mainTemp").innerHTML = `${
            Math.round(data.main.temp) + "º"
         }`
         document.querySelector("#feelsLike").innerHTML = `Feels like: ${
            Math.round(data.main.feels_like) + "º"
         }`
         document.querySelector("#description").innerHTML =
            data.weather[0].description
         document.querySelector(
            "#grid-4"
         ).innerHTML = `Humidity: ${data.main.humidity}%`

         //  Building icon url for display
         const weatherIcon = data.weather[0].icon + "@2x.png"
         const iconURL = "http://openweathermap.org/img/wn/" + weatherIcon

         document.querySelector(
            "#icon"
         ).style.backgroundImage = `url(${iconURL})`

         // for debugging
         console.log(data)
         console.log(data.name)
         console.log(`Temperature: ${Math.round(data.main.temp)}º`)
         console.log(` Feels Like: ${Math.round(data.main.feels_like)}º`)
         console.log(`   Humidity: ${data.main.humidity}%`)
         console.log(`${data.weather[0].description}`)
      })
}

export { handleSubmit }
