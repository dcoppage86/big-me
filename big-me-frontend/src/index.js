const newApi = new ApiService
const newChartForm = document.querySelector("#new-chart-form")


function init(){
    newApi.getCharts()
    
    newChartForm

    addEventListener("submit", (e) => 
        createFormHandler(e))
    
    
}

// function getCharts() {
//     fetch(baseUrl)
//     .then(response => response.json())
//     .then(charts => {
//         // let charts = Chart.all
//         charts.forEach(chart => {
            
//             const newChart = new Chart(chart)

//             document.querySelector('#chart-container').innerHTML += newChart.renderChartCard();
//         })
//         return charts
//     })
// }

function eventListener() {
    newChartForm.addEventListener("submit", (e) =>
    createFormHandler(e))
};

function postCharts(title, content, date, mood_id) {
    const bodyData = {title, content, date, mood_id}
    fetch(baseUrl, {
        // POST request
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyData)
    })
    .then(response => response.json())
    .then(chart => {
        let newChart = new Chart(chart)

        const newChartCard = document.querySelector('#chart-container').innerHTML += newChart.renderChartCard()
    })
}

function patchChart(title, content, date, mood_id) {
    const bodyJSON = (title, content, date, mood_id)
    fetch(baseUrl + `/${chart.id}`,{
        method: 'PATCH',
        headers: {
            "Content-Type": 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(bodyJSON)
    })
    .then(response = response.json())
    .then(updatedChart => console.log(updatedChart));
}



function createFormHandler(e) {
    e.preventDefault()
    const titleInput = document.querySelector('#input-title').value
    const contentInput = document.querySelector('#input-content').value
    const dateInput = document.querySelector('#start').value
    const moodId = parseInt(document.querySelector('#moods').value)
    postCharts(titleInput, contentInput, dateInput, moodId)
}

init()