class Chart {

    constructor(chart, chartAttributes) {
        this.id = chart.id
        this.title = chartAttributes.title
        this.content = chartAttributes.content
        this.date = chartAttributes.date
        this.mood = chartAttributes.mood
        Chart.all.push(this)
    }

    renderChartCard() {
        return `
            <div data-id=${this.id} class="bg-blue-300 rounded-lg border shadow-lg p-10">
                <strong>${this.date}: ${this.title}</strong>
                <p>${this.content}</p>
                <br>
                <p hidden>${this.mood_id}</p>
                <img src=${this.mood.image_url} height= 100 width=100></img>
                <input id='submit-btn' type="submit" name="submit" value="Edit" class="submit bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded-full">
            </div>`;
    }

    static findById(id) {
        return this.all.find(chart => chart.id === id);
        debugger
    }

    renderUpdateChart() {
        return `
        <form data-id="${this.id}" >
                <h3>Edit Entry</h3>
                <strong>Enter Todays Date:</strong>
                <br>
                <input type="date" id="start" name="date-start" value="${this.date}" min="2021-05-28" max="2030-01-01">
                <br>
                <br>
                <strong>Title:</strong>
                <br>
                <input id='input-title' type="text" name="title" value="${this.title}" placeholder="Fill in title..." class="input-text">
                <br>
                <br>
                <strong>How Was Your Day?</strong>
                <br>
                <textarea id='input-content' type="text" name="content" value="${this.content}" cols="80" rows="8" placeholder="Tell us about your day..." class="input-text"></textarea>
                <br>
                <br>
                <select id='moods' name="moods" value="${this.mood.feeling}">
                    <option value="1">Happy</option>
                    <option value="2">Sad</option>
                    <option value="3">Frustrated</option>
                    <option value="4">Angry</option>
                    <option value="5">Excited</option>
                    <option value="6">Nervous</option>
                    <option value="7">Unwell</option>
                    <option value="8">Standoffish</option>
                </select>
                <br>
                <br>
                <input id='submit-btn' type="submit" name="submit" value="Submit Your Entry" class="submit bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            </form>
        `
    }

}

Chart.all = [];