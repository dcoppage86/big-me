const baseUrl = "http://localhost:3000/api/v1/charts"

document.addEventListener('DOMContentLoaded',() => {
    getCharts()
})

let questions = ["What special power are we feeling today?", "What did you dream about?", "What could we do today to be our best BigMe?", "What would be an awesome BigMe Reward?", "What is a green zone feeling today?", "What is a yellow zone feeling today?", "What is a blue zone feeling today?", "What is a red zone feeling today?", "What is the hardest thing you had to do yesterday?", "What is the best thing you did yesterday?"]

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

function showCharts(charts) {
    charts.data.forEach(chart => {
        const chartMarkup = `
        <div data-id=${chart.id}>
            <strong>${questions[0]}</strong>
            <p>${chart.attributes.content_1}</p>
            <br>
            <strong>${questions[1]}</strong>
            <p>${chart.attributes.content_2}</p>
            <br>
            <strong>${questions[2]}</strong>
            <p>${chart.attributes.content_3}</p>
            <br>
            <strong>${questions[3]}</strong>
            <p>${chart.attributes.content_4}</p>
            <br>
            <strong>${questions[4]}</strong>
            <p>${chart.attributes.content_5}</p>
            <br>
            <strong>${questions[5]}</strong>
            <p>${chart.attributes.content_6}</p>
            <br>
            <strong>${questions[6]}</strong>
            <p>${chart.attributes.content_7}</p>
            <br>
            <strong>${questions[7]}</strong>
            <p>${chart.attributes.content_8}</p>
            <br>
            <strong>${questions[8]}</strong>
            <p>${chart.attributes.content_9}</p>
            <br>
            <strong>${questions[9]}</strong>
            <p>${chart.attributes.content_10}</p>
            <br>
            <p hidden>${chart.attributes.mood_id}</p>
            <img src=${chart.attributes.mood.image_url} height= 250 width=250></img>
        </div>`;

        document.querySelector('#chart-container').innerHTML += chartMarkup
        })
}

// function chartFormHandler(e) {
//     e.preventDefault()
//     const 
// }
