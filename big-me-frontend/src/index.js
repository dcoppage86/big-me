const baseUrl = "http://localhost:3000/api/v1/charts"

document.addEventListener('DOMContentLoaded',() => {
    getCharts()
    postCharts()
})


function newChart() {
    fetch(baseUrl)
    .then(response => res)
}

function getCharts() {
    fetch(baseUrl)
    .then(response => response.json())
    .then(charts => {
        showCharts(charts)
    })
}

function postCharts(title, content, date, mood_id) {
    fetch(baseUrl, {
        // POST request
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            title: title, 
            content: content, 
            date: date, 
            mood_id: mood_id
        })
    })
    .then(response => response.json())
    .then(chart => {
        console.log(chart);
    })
}

function showCharts(charts) {
    charts.data.forEach(chart => {
        const chartMarkup = `
        <div data-id=${chart.id}>
            <strong>${chart.attributes.date}: ${chart.attributes.title}</strong>
            <p>${chart.attributes.content}</p>
            <br>
            <p hidden>${chart.attributes.mood_id}</p>
            <img src=${chart.attributes.mood.image_url} height= 100 width=100></img>
        </div>`;

        document.querySelector('#chart-container').innerHTML += chartMarkup
        })
}

// function chartFormHandler(e) {
//     e.preventDefault()
//     const 
// }
