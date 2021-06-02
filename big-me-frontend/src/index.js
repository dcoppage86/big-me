const baseUrl = "http://localhost:3000/api/v1/charts"

document.addEventListener('DOMContentLoaded',() => {
    getCharts()
    
    const newChartForm = document.querySelector("#new-chart-form")

    newChartForm.addEventListener("submit", (e) => 
    createFormHandler(e))

    const chartContainer = document.querySelector("#chart-container")
    chartContainer.addEventListener('click', e => {
        const id = parseInt(e.target.dataset.id);
        const chart = Chart.findById(id);
        document.querySelector('#edit-chart').innerHTML += chart.renderUpdateChart();
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

function updateChartHandler(e) {
    e.preventDefault();
    const id = parseInt(e.target.dataset.id);
    const chart = Chart.findById(id);
    const title = e.target.querySelector('#input-title').value;
    const content = e.target.querySelector('#input-content').value;
    const date = e.target.querySelector('#start').value;
    const mood_id = e.target.querySelector('#moods').value;
    patchChart(title, content, date, mood_id)
}