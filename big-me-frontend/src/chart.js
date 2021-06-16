class Chart {
    static all = []

    constructor(chart) {
        this.id = chart.id
        this.title = chart.title
        this.content = chart.content
        this.date = chart.date
        this.mood_id = chart.mood_id
        Chart.all.push(this)
        console.log(chart)
    };

    static findById(id) {
        return this.all.find(chart => chart.id === id)
    };


    renderChartCard() {
        return `
            <div data-id=${this.id} id="chart-${this.id}" class="bg-blue-300 rounded-lg border shadow-lg p-10">
                <strong>${this.date}: ${this.title}</strong>
                <p>${this.content}</p>
                <br>
                <br>
                <p>${this.mood_id}</p>
                <button data-id=${this.id} class="edit-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded-full"> Edit </button><button data-id=${this.id} class="dlt-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded-full">Delete</button>
            </div>`;
    };

    renderEditChart(chart) {
        return `
        <form data-id=${this.id} >
                <h3>Edit Your Chart</h3>
                <strong>Title:</strong>
                <br>
                <input id='input-title' type="text" name="title" value="${this.title}" placeholder="Fill in title..." class="input-text">
                <br>
                <input type="date" id="start" name="date-start" value="${this.date}" min="2021-05-28" max="2030-01-01">
                <br>
                <strong>How Was Your Day?</strong>
                <br>
                <textarea id='input-content' type="text" name="content" value="" cols="80" rows="8" placeholder="Tell us about your day..." class="input-text">${this.content}</textarea>
                <br>
                <br>
                <select id='moods' name="moods" value"${this.mood_id}">
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
                <input id='edit-btn' type="submit" name="submit" value="Edit Chart" class="submit bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                
            </form>
        `
    }



}