const baseUrl = "http://localhost:3000/api/v1"

document.addEventListener('DOMContentLoaded',() => {
    getCharts()
})

function getCharts() {
    fetch(baseUrl + "/charts")
    .then(response => response.json())
    .then(charts => {
        charts.data.forEach(chart => {
        const chartMarkup = `
        <div data-id=${chart.id}>
            <h3>${chart.attributes.title}</h3>
        </div>`;

        document.querySelector('#chart-container').innerHTML += chartMarkup
        })
    })
}

