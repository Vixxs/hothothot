async function display() {

    let hours = new Date().getHours();

    let data;
    let alertMessage;

    await fetch('../json/data.json')
        .then(res => res.json())
        .then(json => {
            data = json.data;
        });

    await fetch('../json/alert.json')
        .then(res => res.json())
        .then(json => {
            alertMessage = json.alert;
        });

    console.log(hours)
    for (val in data) {
        document.getElementById("panel-capteur").innerHTML += `<section class="h-box capteur-box" id="sensor-${data[val].id}" ><p class="circle">${data[val].sensors[0].valueHours[hours]}</p><h3>${data[val].name}</h3><p class="description">${data[val].desc}</p><p class="live-text">LIVE</p></section>`;
        displayAlertByTemp(parseInt(data[val].sensors[0].valueHours[hours]), data[val].name, data[val].location, alertMessage, data[val].id);
    }

    for (val in data) {
        let url = window.location.origin + `/sensor-resume.html?id=${data[val].id}`;
        console.log(url)
        document.getElementById(`sensor-${data[val].id}`).addEventListener("click", function() { location.href = url; })

    }
}

function displayAlertByTemp(temperature, location, type, alertMessage, id) {
    let mainArea = document.getElementById("alert-box");
    let hours = new Date().getHours();
    let seconds = new Date().getSeconds();
    let time = hours + ":" + seconds;
    let url = window.location.origin + `/sensor-resume.html?id=${id}`;
    console.log(time);

    if (type == "exterieur") {
        if (temperature > 35) {

            mainArea.innerHTML += ` 
            <section class="alert">
                <p class="red">${location}</p>
                <h2>${alertMessage[0].message}</h2>
                <p>${alertMessage[0].description}</p>
                <p class="time">${time}</p>
                <img class="close-alert" src="https://img.icons8.com/material-rounded/50/000000/delete-sign.png" />
            </section>`

        }
        if (temperature < 0) {
            mainArea.innerHTML += ` 
            <section class="alert">
                <p class="red">${location}</p>
                <h2>${alertMessage[1].message}</h2>
                <p>${alertMessage[1].description}</p>
                <p class="time">${time}</p>
                <img class="close-alert" src="https://img.icons8.com/material-rounded/50/000000/delete-sign.png" />
            </section>`
        }
    }
    if (type == "interieur") {
        if (temperature > 22) {
            console.log("ici");
            mainArea.innerHTML += ` 
            <section class="alert">
                <p class="red">${location}</p>
                <h2>${alertMessage[2].message}</h2>
                <p>${alertMessage[2].description}</p>
                <p class="time">${time}</p>
                <img class="close-alert" src="https://img.icons8.com/material-rounded/50/000000/delete-sign.png" />
            </section>`

        }
        if (temperature > 50) {
            mainArea.innerHTML += ` 
            <section class="alert">
                <p class="red">${location}</p>
                <h2>${alertMessage[3].message}</h2>
                <p>${alertMessage[3].description}</p>
                <p class="time">${time}</p>
                <img class="close-alert" src="https://img.icons8.com/material-rounded/50/000000/delete-sign.png" />
            </section>`
        }
        if (temperature < 12) {
            mainArea.innerHTML += ` 
            <section class="alert">
                <p class="red">${location}</p>
                <h2>${alertMessage[4].message}</h2>
                <p>${alertMessage[4].description}</p>
                <p class="time">${time}</p>
                <img class="close-alert" src="https://img.icons8.com/material-rounded/50/000000/delete-sign.png" />
            </section>`
        }
        if (temperature < 0) {
            mainArea.innerHTML += ` 
            <section class="alert">
                <p class="red">${location}</p>
                <h2>${alertMessage[5].message}</h2>
                <p>${alertMessage[5].description}</p>
                <p class="time">${time}</p>
                <img class="close-alert" src="https://img.icons8.com/material-rounded/50/000000/delete-sign.png" />
            </section>`
        }
    }
}

function main() {
    display()
}


main();