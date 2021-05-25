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
            <p>${chart.attributes.question_1}</p>
            <p>${chart.attributes.question_2}</p>
            <p>${chart.attributes.question_3}</p>
            <p>${chart.attributes.question_4}</p>
            <p>${chart.attributes.question_5}</p>
            <p>${chart.attributes.question_6}</p>
            <p>${chart.attributes.question_7}</p>
            <p>${chart.attributes.question_8}</p>
            <p>${chart.attributes.question_9}</p>
            <p>${chart.attributes.question_10}</p>
            <p hidden>${chart.attributes.mood_id}</p>
            <img src=${chart.attributes.mood.image_url} height= 250 width=250></img>
        </div>`;

        document.querySelector('#chart-container').innerHTML += chartMarkup
        })
    })
}

