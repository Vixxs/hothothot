function main() {

    document.getElementById("sensors").onclick = function() {
        location.href = window.location.origin + `/index.html`;
    };

    document.getElementById("account").onclick = function() {
        location.href = window.location.origin + `/account.html`;
    };

    document.getElementById("settings").onclick = function() {
        location.href = window.location.origin + `/parameter.html`;
    };

    document.getElementById("logout").onclick = logout;
    document.getElementById("close").onclick = closeMenu;
    document.getElementById("menu").onclick = openMenu;

}

function logout() {
    document.location = "home.html";
}

function closeMenu() {
    document.getElementById("side-menu").style.display = "none";
    document.getElementById("close").style.display = "none";
}

function openMenu() {
    document.getElementById("side-menu").style.display = "flex";
    document.getElementById("close").style.display = "flex";
}

function openForm() {
    document.getElementById("form-box").style.display = "flex";
    document.getElementById("home").style.filter = "blur(6px)";
}

async function settings(node) {

    let settings;
    let style = document.getElementById("darkmode");

    await fetch('../json/settings.json')
        .then(res => res.json())
        .then(json => {
            data = json.settings;
            settings = data;
        });

    console.log(settings.darkmode);
    let darkmodeBool = JSON.parse(settings.darkmode);
    if (darkmodeBool == true) {
        style.media = '';
    }
}

main();

settings();