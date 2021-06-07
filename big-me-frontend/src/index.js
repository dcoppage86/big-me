const newApi = new ApiService


document.addEventListener('DOMContentLoaded',() => {
    newApi.getCharts();
    
    const newChartForm = document.querySelector("#new-chart-form")
    newChartForm.addEventListener("submit", (e) =>
        createFormHandler(e)
        );

    const chartContainer =  document.querySelector("#chart-container")
    chartContainer.addEventListener("click", (e) => {
        e.preventDefault(e)
        const id = parseInt(e.target.dataset.id)
        let chart = Chart.findById(id)
        document.querySelector("#edit-chart").innerHTML = chart.renderEditChart();
        }
    );
    document.querySelector("#edit-chart").addEventListener('submit', e => {
        editFormHandler(e);
        // console.log(e.target.value)
        hideUpdateForm()

    })
    
    function hideUpdateForm() {
        const editChart = document.querySelector("#edit-chart")
        editChart.style.display = "none"
    }
})

// function hideUpdateForm() {
//     const editChart = document.querySelector("#edit-chart")
//     editChart.style.display = "none"
// }

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

// function postCharts(title, content, date, mood_id) {
//     const bodyData = {title, content, date, mood_id}
//     fetch(baseUrl, {
//         // POST request
//         method: "POST",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify(bodyData)
//     })
//     .then(response => response.json())
//     .then(chart => {
//         let newChart = new Chart(chart)

//         const newChartCard = document.querySelector('#chart-container').innerHTML += newChart.renderChartCard()
//     })
// }

// function patchChart(title, content, date, mood_id) {
//     const bodyJSON = (title, content, date, mood_id)
//     fetch(baseUrl + `/${chart.id}`,{
//         method: 'PATCH',
//         headers: {
//             "Content-Type": 'application/json',
//             Accept: 'application/json',
//         },
//         body: JSON.stringify(bodyJSON)
//     })
//     .then(response = response.json())
//     .then(updatedChart => console.log(updatedChart));
// }




function createFormHandler(e) {
    e.preventDefault()
    const titleInput = document.querySelector('#input-title').value
    const contentInput = document.querySelector('#input-content').value
    const dateInput = document.querySelector('#start').value
    const moodId = parseInt(document.querySelector('#moods').value)
    newApi.postCharts(titleInput, contentInput, dateInput, moodId)
}

function editFormHandler(e) {
    e.preventDefault()
    const id = parseInt(e.target.dataset.id)
    const chart = Chart.findById(id)
    const title = e.target.querySelector('#input-title').value
    const content = e.target.querySelector('#input-content').value
    const date = e.target.querySelector('#start').value
    const mood_id = parseInt(e.target.querySelector('#moods').value)
    newApi.patchChart(chart, title, content, date, mood_id)
}
