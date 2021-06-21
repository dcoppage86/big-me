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
        console.log(chartContainer.children)
        editChart.innerHTML = ""
    });

    homeBtn.addEventListener('click', function (e) {
        e.preventDefault()
        showGreeting();
        hideChartForm();
        hideCharts();
    });

    showChtBtn.addEventListener('click', function(e) {
        e.preventDefault()
        hideGreeting();
        showChartForm();
        hideCharts();
        hideEditForm();
    });

    allChtsBtn.addEventListener('click', function(e) {
        e.preventDefault()
        hideGreeting();
        hideChartForm();
        showCharts();
    
    });

    moodSelector.addEventListener('change', function(e) {
        let chartArr = Chart.all
        let filteredCharts = chartArr.filter(mood_id => mood_id >= "1")
        let sortedCharts = filteredCharts.sort()
        debugger
        if(e.target.children[0].childNodes[0].nodeType) {
            console.log("1")
        }
        if(e.target.children[1]) {
            console.log("2")
        }
        if(e.target.children[2]) {
            console.log("3")
        }
        if(e.target.children[3]) {
            console.log("4")
        }
        if(e.target.children[4]) {
            console.log("5")
        }
        if(e.target.children[5]) {
            console.log("6")
        }
        if(e.target.children[6]) {
            console.log("7")
        }
        if(e.target.children[7]) {
            console.log("8")
        }
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
}

function showGreeting() {
    greetingContainer.style.display = "contents"
};
// function moodSelecter() {
//         `<select id='mood-org' name="moods">
//             <option class="opt-sel-1" value="1">Happy</option>
//             <option class="opt-sel-2" value="2">Sad</option>
//             <option class="opt-sel-3" value="3">Frustrated</option>
//             <option class="opt-sel-4" value="4">Angry</option>
//             <option class="opt-sel-5" value="5">Excited</option>
//             <option class="opt-sel-6" value="6">Nervous</option>
//             <option class="opt-sel-7" value="7">Unwell</option>
//             <option class="opt-sel-8" value="8">Standoffish</option>
//         </select>`
// }

function moodSwitch() {
    switch (chartsByMood(filteredCharts)) {
        case 1:
            moodId = 1;
            
            break;
        case 2:
            moodId = 2;
            
            break;
        case 3:
            moodId = 3;
                
            break;
        case 4:
            moodId = 4;
            
            break;
        case 5:
            moodId = 5;
            
            break;
        case 6:
            moodId = 6;
            
            break;
        case 7:
            moodId = 7;
                
            break;
        case 8:
            moodId = 8;
            
            break;
                
        default:
            break;
    };
};



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
    chart.date = e.target.querySelector('#start').value
    console.log(chartContainer.children)
    newApi.patchChart(chart, chart.title, chart.content, chart.date)
    chartContainer.innerHTML = ""
    Chart.all.forEach(c => chartContainer.innerHTML += c.renderChartCard())
};



