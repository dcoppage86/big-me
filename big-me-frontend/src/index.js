const baseUrl = "http://localhost:3000/api/v1/charts"

document.addEventListener('DOMContentLoaded',() => {
    getCharts()
})

function getCharts() {
    fetch(baseUrl)
    .then(response => response.json())
    .then(charts => {
        showCharts(charts)
    })
}

function showCharts(charts) {
    charts.data.forEach(chart => {
        const chartMarkup = `
        <div data-id=${chart.id}>
            <h3>${chart.attributes.title}</h3>
            <strong>${chart.attributes.question_1}</strong>
            <p>${chart.attributes.content_1}</p>
            <br>
            <strong>${chart.attributes.question_2}</strong>
            <p>${chart.attributes.content_2}</p>
            <br>
            <strong>${chart.attributes.question_3}</strong>
            <p>${chart.attributes.content_3}</p>
            <br>
            <strong>${chart.attributes.question_4}</strong>
            <p>${chart.attributes.content_4}</p>
            <br>
            <strong>${chart.attributes.question_5}</strong>
            <p>${chart.attributes.content_5}</p>
            <br>
            <strong>${chart.attributes.question_6}</strong>
            <p>${chart.attributes.content_6}</p>
            <br>
            <strong>${chart.attributes.question_7}</strong>
            <p>${chart.attributes.content_7}</p>
            <br>
            <strong>${chart.attributes.question_8}</strong>
            <p>${chart.attributes.content_8}</p>
            <br>
            <strong>${chart.attributes.question_9}</strong>
            <p>${chart.attributes.content_9}</p>
            <br>
            <strong>${chart.attributes.question_10}</strong>
            <p>${chart.attributes.content_10}</p>
            <br>
            <p hidden>${chart.attributes.mood_id}</p>
            <img src=${chart.attributes.mood.image_url} height= 250 width=250></img>
        </div>`;

        document.querySelector('#chart-container').innerHTML += chartMarkup
        })
}

