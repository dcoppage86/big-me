
const newApi = new ApiService


document.addEventListener('DOMContentLoaded',() => {
    newApi.getCharts();


    const newChartForm = document.querySelector("#new-chart-form")
    const chartContainer =  document.querySelector("#chart-container")
    const editChart = document.querySelector("#edit-chart")
    const chartFormContainer = document.querySelector(".chart-form-container")
    const homeBtn = document.querySelector(".home-btn")
    const delBtn = document.querySelector(".del-btn")

    newChartForm.addEventListener("submit", (e) => {
        createFormHandler(e)
        hideChartForm()
    });

    chartContainer.addEventListener("click", (e) => {
        e.preventDefault(e)
        showEditForm()
        console.log("clicked", e)
        const id = parseInt(e.target.dataset.id)
        let chart = Chart.findById(id)
        editChart.innerHTML = chart.renderEditChart();
        }
    );
    
    editChart.addEventListener('submit', e => {
        editFormHandler(e);
        hideChartForm();
        console.log(chartContainer.children)
        editChart.innerHTML = ""
    })

    homeBtn.addEventListener('click', (e) => {
        e.preventDefault(e);
        showChartForm()
        hideUpdateForm()
    });



    function hideChartForm() {
        chartFormContainer.style.display = "none"
    }

    function showChartForm() {
        chartFormContainer.style.display = "center block"
    }

    function showEditForm() {
        editChart.style.display = "block"
    }

    function hideUpdateForm() {
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
    chart.title = e.target.querySelector('#input-title').value
    chart.content = e.target.querySelector('#input-content').value
    chart.date = e.target.querySelector('#start').value
    chart.mood_id = parseInt(e.target.querySelector('#moods').value)
    newApi.patchChart(chart)
    const chartContainer =  document.querySelector("#chart-container")
    chartContainer.innerHTML = ""
    Chart.all.forEach(c => chartContainer.innerHTML += c.renderChartCard())
}


