class Chart {

    static all = []

    constructor(chart) {
        this.id = chart.id
        this.title = chart.attributes.title
        this.content = chart.attributes.content
        this.date = chart.attributes.date
        this.mood = chart.attributes.mood
        this.mood_id = chart.attributes.mood_id
        this.showCharts()
        Chart.all.push(this)
        console.log(this)
    };

    static findById(id) {
        return this.all.find(chart => chart.id === id)
    };

    static filterMood() {
        return this.all.filter(function(mood) {
            return mood === mood
        })
    }

    

    showCharts() {
        return document.querySelector('#chart-container').innerHTML += this.renderChartCard();
    }

    showEdit() {
        return document.querySelector('#edit-chart-container').innerHTML += this.renderEditChart();
    }


    // renderMoodSelector() {
    //     return `
    //     <select id='mood-org' name="moods" onclick="">
    //             <option class="opt-sel-1" value="1">Happy</option>
    //             <option class="opt-sel-2" value="2">Sad</option>
    //             <option class="opt-sel-3" value="3">Frustrated</option>
    //             <option class="opt-sel-4" value="4">Angry</option>
    //             <option class="opt-sel-5" value="5">Excited</option>
    //             <option class="opt-sel-6" value="6">Nervous</option>
    //             <option class="opt-sel-7" value="7">Unwell</option>
    //             <option class="opt-sel-8" value="8">Standoffish</option>
    //     </select>
    //     `
    // };

    renderChartCard() {
        return `
            <div data-id=${this.id} id="chart-${this.id}" class="bg-blue-300 rounded-lg border shadow-lg p-10">
                <strong>${this.date}: ${this.title}</strong>
                <p>${this.content}</p>
                <br>
                <img src=${this.mood.image_url} height=50 width=50>
                <br>
                <p>${this.mood.feeling}</p>
                <br>
                <p hidden>${this.mood_id}</p>
                <button data-id=${this.id} class="edit-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded-full"> Edit </button><button data-id=${this.id} class="dlt-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded-full">Delete</button>
            </div>`;
    };

    renderEditChart() {
        return `
        <form data-id=${this.id} >
                <strong>Edit Your Chart</strong>
                <br>
                <br>
                <strong>Title:</strong>
                <br>
                <input id='input-title' type="text" name="title" value="${this.title}" placeholder="Fill in title..." class="input-text">
                <br>
                <br>
                <strong>Date</strong>
                <p>${this.date}</p>
                <br>
                <strong>How Was Your Day?</strong>
                <br>
                <textarea id='input-content' type="text" name="content" value="" cols="80" rows="8" placeholder="Tell us about your day..." class="input-text">${this.content}</textarea>
                <br>
                <br>
                <strong>${this.mood.feeling}</strong>
                <br>
                <br>
                <input id='edit-btn' type="submit" name="submit" value="Edit Chart" class="submit bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                
            </form>
        `
    }



}