// function timer() {
//     let currentTime = new Date(); 
//     let goodTime = currentTime.getHours();

//     let YearMonthDay = [];
//     YearMonthDay[0] = currentTime[0] ;
//     YearMonthDay[1] = currentTime[1] ;
//     YearMonthDay[2] = currentTime[2] ;
//     YearMonthDay[3] = currentTime[3] ;
//     // cout Time ::
//     document.getElementById("date").innerHTML = YearMonthDay;
//     if (goodTime >= 13) {
//         document.getElementById("time").innerHTML = goodTime-12+` PM`;
//         // alert(currentTime);
//     } else {
//         document.getElementById("time").innerHTML = goodTime +` AM`;
//     }
// }

// // call function
// timer();

// function TodayFocus() {


// }



function timer() {
    const now = new Date();

    // DATE
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // important
    const day = now.getDate();

    document.getElementById("date").innerHTML =
        `${day}/${month}/${year}`;

    // TIME
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let period = "AM";

    if (hours >= 12) {
        period = "PM";
        if (hours > 12) hours -= 12;
    }
    if (hours === 0) hours = 12;

    // leading zeros
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");

    document.getElementById("time").innerHTML =
        `${hours}:${minutes}:${seconds} ${period}`;
}

// run every second
setInterval(timer, 1000);

function themeSwitcher() {
    const btn = document.getElementById("darkmode");

    // load saved theme
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }

    btn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
}

//call themeSwitcher();
themeSwitcher();

function MainFucntionWorker() {
    const input = document.getElementById("focusInput");
    const display = document.getElementById("focusDisplay");

    // load saved focus
    display.innerText = localStorage.getItem("focus") || "";

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            localStorage.setItem("focus", input.value);
            display.innerText = input.value;
            input.value = "";
        }
    });
}

//call MainFunctionWorker();
MainFucntionWorker();
