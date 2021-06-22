const newApi = new ApiService

const newChartForm = document.querySelector("#new-chart-form")
const greetingContainer = document.querySelector(".greeting-container")
const editChart = document.querySelector(".edit-chart-container")
const chartFormContainer = document.querySelector(".chart-form-container")
const editBtn = document.querySelector(".edt-btn")
const chartContainer =  document.querySelector("#chart-container")
const homeBtn = document.querySelector(".home-btn")
const showChtBtn = document.querySelector(".shw-cht-btn")
const allChtsBtn = document.querySelector(".chts-btn")
const moodSelector= document.querySelector("#mood-org")




document.addEventListener('DOMContentLoaded',() => {
    newApi.getCharts();
    hideCharts();
    hideChartForm();
    eventListeners();


});

function eventListeners(){
    newChartForm.addEventListener("submit", function(e) {
        e.preventDefault()
        createFormHandler(e)
        hideChartForm()
        showCharts()
    });

    document.addEventListener("click", function(e) {
        if(e.target.matches(".edit-btn")){
            e.preventDefault(e);
            console.log("clicked");
            showEditForm();
            hideChartForm();
            hideCharts();
            let id = e.target.dataset.id;
            let chart = Chart.findById(id);
            console.log(chart)
            editChart.innerHTML += chart.renderEditChart();
        }}
    );

    document.addEventListener("click", function(e) {
        if(e.target.matches(".dlt-btn")){
            console.log('clicked');
            e.preventDefault();
            let id = parseInt(e.target.dataset.id);
            newApi.deleteChart(id);
            e.target.parentNode.remove();
        }
    });
        
    editChart.addEventListener('submit', function (e) {
        editFormHandler(e);
        hideChartForm()
        showCharts()
        hideSelector();
        console.log(chartContainer.children)
        editChart.innerHTML = ""
    });

    homeBtn.addEventListener('click', function (e) {
        e.preventDefault()
        showGreeting();
        hideChartForm();
        hideCharts();
        hideSelector();
    });

    showChtBtn.addEventListener('click', function(e) {
        e.preventDefault()
        hideGreeting();
        showChartForm();
        hideCharts();
        hideEditForm();
        hideSelector();
    });

    allChtsBtn.addEventListener('click', function(e) {
        e.preventDefault()
        hideGreeting();
        hideChartForm();
        showCharts();
        showSelector();
    
    });

    moodSelector.addEventListener('change', function(e) {
        let chartArr = Chart.all
        let filteredCharts = chartArr.filter(chart => chart.mood_id === parseInt(e.target.value))
        chartContainer.innerHTML = ""
        filteredCharts.forEach(c => chartContainer.innerHTML += c.renderChartCard())
    })

};
    

function hideChartForm() {
    chartFormContainer.style.display = "none"
};

function showChartForm() {
    chartFormContainer.style.display = "block"
};

function hideCharts() {
    chartContainer.style.display = "none"
};

function showCharts() {
    chartContainer.style.display = "block"
};
    
function showEditForm() {
    editChart.style.display = "block"
};

function hideGreeting() {
    greetingContainer.style.display = "none"
};

function hideEditForm() {
    editChart.style.display = "none"
};

function showGreeting() {
    greetingContainer.style.display = "contents"
};

function hideSelector() {
    moodSelector.style.display = "none"
};

function showSelector() {
    moodSelector.style.display = "block"
}


function createFormHandler(e) {
    e.preventDefault()
    const titleInput = document.querySelector('#input-title').value
    const contentInput = document.querySelector('#input-content').value
    const dateInput = document.querySelector('#start').value
    const moodId = document.querySelector('#moods').value
    newApi.postCharts(titleInput, contentInput, dateInput, moodId)
};

function editFormHandler(e) {
    e.preventDefault()
    let id = e.target.dataset.id
    console.log(e.target.dataset.id)
    let chart = Chart.findById(id)
    chart.title = e.target.querySelector('#input-title').value
    chart.content = e.target.querySelector('#input-content').value
    console.log(chartContainer.children)
    newApi.patchChart(chart, chart.title, chart.content)
    chartContainer.innerHTML = ""
    Chart.all.forEach(c => chartContainer.innerHTML += c.renderChartCard())
};



