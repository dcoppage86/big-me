const baseUrl = "http://localhost:3000/"

document.addEventListener('DOMContentLoaded',() => {
    getChart()
})

function getChart() {
    fetch(baseUrl + "charts")
    .then(response => response.json())
    .then(charts => {
        console.log(charts);
    })
}