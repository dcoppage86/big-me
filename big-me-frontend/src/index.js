const baseUrl = "http://localhost:3000/api/v1/charts"

document.addEventListener('DOMContentLoaded',() => {
    getCharts()
    
    const newChartForm = document.querySelector("#new-chart-form")

    newChartForm.addEventListener("submit", (e) => 
    createFormHandler(e))
})



function getCharts() {
    fetch(baseUrl)
    .then(response => response.json())
    .then(charts => {
        charts.data.forEach(chart => {
            render(chart)
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

function render(chart) {
    const chartMarkup = `
        <div data-id=${chart.id} class="bg-blue-300 rounded-lg border shadow-lg p-10">
            <strong>${chart.attributes.date}: ${chart.attributes.title}</strong>
            <p>${chart.attributes.content}</p>
            <br>
            <p hidden>${chart.attributes.mood_id}</p>
            <img src=${chart.attributes.mood.image_url} height= 100 width=100></img>
            <input id='submit-btn' type="submit" name="submit" value="Edit" class="submit bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded-full">
        </div>`;
    
        document.querySelector('#chart-container').innerHTML += chartMarkup
}


function createFormHandler(e) {
    e.preventDefault()
    const titleInput = document.querySelector('#input-title').value
    const contentInput = document.querySelector('#input-content').value
    const dateInput = document.querySelector('#start').value
    const moodId = parseInt(document.querySelector('#moods').value)
    postCharts(titleInput, contentInput, dateInput, moodId)
}
