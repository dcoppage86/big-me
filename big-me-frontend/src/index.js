
const newApi = new ApiService

const newChartForm = document.querySelector("#new-chart-form")
const editChart = document.querySelector("#edit-chart")
const chartFormContainer = document.querySelector(".chart-form-container")
const editBtn = document.querySelector(".edt-btn")
const chartContainer =  document.querySelector("#chart-container")
const homeBtn = document.querySelector(".home-btn")
const showChtBtn = document.querySelector(".shw-cht-btn")


document.addEventListener('DOMContentLoaded',() => {
    newApi.getCharts();
    eventListeners()
    

})

function eventListeners(){
    newChartForm.addEventListener("submit", function(e) {
        createFormHandler(e)
        hideChartForm()
    });

    chartContainer.addEventListener("click", function(e) {
        e.preventDefault(e)
        showEditForm()
        hideChartForm()
        hideCharts()
        const id = parseInt(e.target.dataset.id)
        let chart = Chart.findById(id)
        editChart.innerHTML = chart.renderEditChart();
        }
    );
        
    editChart.addEventListener('submit', function (e) {
        editFormHandler(e);
        showChartForm()
        showCharts()
        console.log(chartContainer.children)
        editChart.innerHTML = ""
    })


}
    

function hideChartForm() {
    chartFormContainer.style.display = "none"
}

function showChartForm() {
    chartFormContainer.style.display = "block"
}

function hideCharts() {
    chartContainer.style.display = "none"
}

function showCharts() {
    chartContainer.style.display = "block"
}
    

function showEditForm() {
    editChart.style.display = "block"
}

function createFormHandler(e) {
    e.preventDefault()
    const titleInput = document.querySelector('#input-title').value
    const contentInput = document.querySelector('#input-content').value
    const dateInput = document.querySelector('#start').value
    const moodId = parseInt(document.querySelector('#moods').value)
    const mood = document.querySelector('#moods').value
    newApi.postCharts(titleInput, contentInput, dateInput, moodId)
}

function editFormHandler(e) {
    e.preventDefault()
    const id = parseInt(e.target.dataset.id)
    const chart = Chart.findById(id)
    chart.title = e.target.querySelector('#input-title').value
    chart.content = e.target.querySelector('#input-content').value
    chart.date = e.target.querySelector('#start').value
    chart.mood_id = parseInt(e.target.querySelector('#moods').value)
    newApi.patchChart(chart)
    const chartContainer =  document.querySelector("#chart-container")
    chartContainer.innerHTML = ""
    Chart.all.forEach(c => chartContainer.innerHTML += c.renderChartCard())
}


