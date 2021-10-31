function main() {
    display();
}

async function display() {

    let hours = new Date().getHours();

    let data;
    let obj;
    await fetch('../json/data.json')
        .then(res => res.json())
        .then(json => {
            data = json.data;
            obj = JSON.parse(JSON.stringify(data));
        });


    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');
    let allVal = [];
    let allHour = [];


    document.getElementById("panel-capteur").innerHTML += `<h2>${data[id].name}</h2>`

    for (val in data[id].sensors) {


        let valueHours = data[id].sensors[val].valueHours;
        let countVal = Object.keys(valueHours).length;
        let chartVal = `chart-${val}`;
        let currentVal = parseFloat(valueHours[hours]);
        let extensionValue = valueHours[hours].replace(/[0-9,-]/g, '');

        let maxVal = -100;
        let minVal = 100;

        let tempAllVal = [];
        let tempAllHour = [];
        for (let i = 10; i > 0; i--) {
            let index;
            if (hours - i < 0) {
                index = hours - i + countVal;
            } else {
                index = hours - i;
            }
            tempAllHour.push(index + 'h');
            tempAllVal.push(parseFloat(valueHours[index]));

            if (parseFloat(valueHours[index]) > maxVal) {
                maxVal = parseFloat(valueHours[index]);
            }
            if (parseFloat(valueHours[index]) < minVal) {
                minVal = parseFloat(valueHours[index]);
            }
        }

        allVal.push(tempAllVal);
        allHour.push(tempAllHour);
        maxVal += extensionValue;
        minVal += extensionValue;
        currentVal += extensionValue;



        document.getElementById("panel-capteur").innerHTML += `    
        <section class="grid">
            <h3 class="title-grid">${data[id].sensors[val].type}</h3>
            <section class="red data-box">
                <h3>Live</h3>
                <p class="resume">
                    ${currentVal}
                </p>
            </section>
            <section class="data-box">
                <h3>Max</h3>
                <p id="ok" class="resume">
                    ${maxVal}
                </p>
            </section>
            <section class="data-box">
                <h3>Min</h3>
                <p class="resume">
                    ${minVal}
                </p>
            </section>

            <section class="h-box graph-box">
                <h3>Graphique</h3>
                <canvas id="${chartVal}" width="100px"></canvas>
            </section>
        </section>`;

    }

    for (val in data[id].sensors) {
        let chartVal = `chart-${val}`;
        let element = document.getElementById(chartVal);

        let chart = new Chart(
            element, {
                type: 'line',
                data: {
                    labels: allHour[val],
                    datasets: [{
                        label: data[id].sensors[val].type,
                        data: allVal[val],
                        fill: false,
                        borderColor: '#dc143c',
                        backgroundColor: '#dc143c',
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                }
            }
        );
    }


}

main()