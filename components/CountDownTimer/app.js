const endDate = "17 Nov 2022 12:00:00 AM"


const inputs = document.querySelectorAll("input")
    // const clock = () => {

// }

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;

    if (diff < 0) return;

    // convert into days;
    document.getElementById("days").innerText = Math.floor(diff / 3600 / 24);
    document.getElementById("hours").innerText = Math.floor(diff / 3600) % 24;
    document.getElementById("minutes").innerText = Math.floor(diff / 60) % 60;
    document.getElementById("seconds").innerText = Math.floor(diff) % 60;
}

clock()

setInterval(
    () => {
        clock()
    },
    1000
)