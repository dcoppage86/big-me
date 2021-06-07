const newApi = new ApiService


document.addEventListener('DOMContentLoaded',() => {
    newApi.getCharts();
    
    const newChartForm = document.querySelector("#new-chart-form")
    newChartForm.addEventListener("submit", (e) => {
        createFormHandler(e)
        hideChartForm()
    });

    const chartContainer =  document.querySelector("#chart-container")
    const editChart = document.querySelector("#edit-chart")
    const chartFormContainer = document.querySelector(".chart-form-container")
    const homeBtn = document.querySelector(".home-btn")

    chartContainer.addEventListener("click", (e) => {
        e.preventDefault(e)
        const id = parseInt(e.target.dataset.id)
        let chart = Chart.findById(id)
        editChart.innerHTML = chart.renderEditChart();
        }
    );
    
    editChart.addEventListener('submit', e => {
        editFormHandler(e);
        hideUpdateForm()

    })

    homeBtn.addEventListener('click', (e) => {
        e.preventDefault(e);
        showChartForm()
    });

    function hideChartForm() {
        chartFormContainer.style.display = "none"
    }

    function showChartForm() {
        chartFormContainer.style.display = "block"
    }
    
    function hideUpdateForm() {
        const editChart = document.querySelector("#edit-chart")
        editChart.style.display = "none"
    }


})

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
