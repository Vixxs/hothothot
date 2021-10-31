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
    let alert = document.getElementsByClassName("alert");
    let mainArea = document.getElementById("alert-box");
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let time = hours + ":" + minutes;
    let url = window.location.origin + `/sensor-resume.html?id=${id}`;
    console.log(time);

    if (type == "exterieur") {
        if (temperature > 35) {
            mainArea.append(alertTemplate(location, alertMessage[0].message, alertMessage[0].description, time, url));
        }
        if (temperature < 0) {
            mainArea.append(alertTemplate(location, alertMessage[1].message, alertMessage[1].description, time, url));
        }
    }
    if (type == "interieur") {
        if (temperature > 22) {
            mainArea.append(alertTemplate(location, alertMessage[2].message, alertMessage[2].description, time, url));
        }
        if (temperature > 50) {
            mainArea.append(alertTemplate(location, alertMessage[3].message, alertMessage[3].description, time, url));
        }
        if (temperature < 12) {
            mainArea.append(alertTemplate(location, alertMessage[4].message, alertMessage[4].description, time, url));
        }
        if (temperature < 0) {
            mainArea.append(alertTemplate(location, alertMessage[5].message, alertMessage[5].description, time, url));
        }
    }
}

function alertTemplate(name, message, description, time, url) {
    let alert = document.createElement("section");
    alert.classList.add("alert");
    alert.innerHTML += `<p class="red">${name}</p>
                        <h2>${message}</h2>
                        <p>${description}</p>
                        <p class="time">${time}</p>`;

    console.log(url);
    let close = document.createElement("img");
    close.classList.add("close-alert");
    close.src = "https://img.icons8.com/material-rounded/50/000000/delete-sign.png";
    alert.append(close);
    alert.onclick = function() { location.href = url; }
    close.onclick = function() {
        window.event.stopPropagation();
        alert.style.display = "none";
    }

    return alert;
}

function main() {

    display()
}


main();