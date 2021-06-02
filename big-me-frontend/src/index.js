const baseUrl = "http://localhost:3000/api/v1/charts"

document.addEventListener('DOMContentLoaded',() => {
    getCharts()
    
    const newChartForm = document.querySelector("#new-chart-form")

    newChartForm.addEventListener("submit", (e) => 
    createFormHandler(e))

    const chartContainer = document.querySelector("#chart-container")
    chartContainer.addEventListener('click', e => {
        console.log('clicked');
    });
})




function getCharts() {
    fetch(baseUrl)
    .then(response => response.json())
    .then(charts => {
        charts.data.forEach(chart => {
            let newChart = new Chart(chart, chart.attributes)

            document.querySelector('#chart-container').innerHTML += newChart.renderChartCard();
        })
    })
}

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
        console.log(chart);
        const chartData = chart.data
        render(chartData)
    })
}



function createFormHandler(e) {
    e.preventDefault()
    const titleInput = document.querySelector('#input-title').value
    const contentInput = document.querySelector('#input-content').value
    const dateInput = document.querySelector('#start').value
    const moodId = parseInt(document.querySelector('#moods').value)
    postCharts(titleInput, contentInput, dateInput, moodId)
}
