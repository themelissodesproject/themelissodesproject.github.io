// ======================================================
// Melissodes Phenology (Paste ONLY the date column here)
// ======================================================
//
// Example format:
// 2012-07-21
// 2010-08-27
// 2007-08-14
//
// One date per line — nothing else.
//

const dateList = `
1951-09-13
1965-09-22
1965-09-22
1965-09-22
1927-09-06
1953-07-16
1966-09-17
1966-09-17
1966-09-17
1966-09-17
1966-09-17
1966-09-17
1966-09-17
1966-09-17
1966-09-17
1966-09-17
1966-09-17
1966-09-17
1966-09-17
1966-09-17
1966-09-17
1966-09-17
1981-09-15
1985-08-28
1959-08-25
1953-09-20
1953-09-10
1959-08-25

1953-09-20
1953-09-20
1953-09-20
1950-08-20

1936-10-10
1953-09-20
1959-08-25


1953-09-20
1955-09-10
1959-08-25
1953-09-10
1953-09-20
1953-09-20
1970-09-16
1934-09-13
1970-09-16
1953-08-30
1961-07-31
1953-09-20
1935-09-28
1953-08-15
1953-09-20
1970-08-30
1970-09-16
1948-09-22
1970-09-16
1970-09-16
1953-09-20
1953-09-20
1953-09-20
1951-09-22
1953-09-20
1953-09-10
1957-09-09
1970-09-17
1959-08-25
1953-09-20
1953-09-20





1970-09-16

1966-09-17
1966-09-17
1955-10-25
1925-09-22
1965-09-22
1959-08-25
1927-10-13
1959-08-25



1950-08-20
1933-10-17

1927-10-09
1931-09-20
1927-09-18
1926-10-19
1926-09-14
1925-09-09
1932-09-01
1924-05-15
1926-07-29

1956-09-09
1954-09-22
`;



// ===========================
// Globals for clean resizing
// ===========================
let phenologyChart = null;
let monthCounts_global = null;
let monthNames_global = null;


// ============================
// Build phenology on page load
// ============================
document.addEventListener("DOMContentLoaded", () => {
    generatePhenology(dateList);
});



function generatePhenology(dateText) {
    const lines = dateText
        .trim()
        .split("\n")
        .map(d => d.trim())
        .filter(Boolean);

    const monthCounts = new Array(12).fill(0);

    for (const date of lines) {
        const parts = date.split("-");
        if (parts.length < 2) continue;

        const month = parseInt(parts[1]);
        if (!isNaN(month) && month >= 1 && month <= 12) {
            monthCounts[month - 1]++;
        }
    }

    const monthNames = [
        "Jan","Feb","Mar","Apr","May","Jun",
        "Jul","Aug","Sep","Oct","Nov","Dec"
    ];

    // Save globally for redraw on resize
    monthCounts_global = monthCounts;
    monthNames_global = monthNames;

    const canvas = document.getElementById("phenologyChart");
    if (!canvas) {
        console.error("Canvas #phenologyChart not found.");
        return;
    }

    buildPhenologyChart(canvas, monthNames, monthCounts);
}



function buildPhenologyChart(canvas, monthNames, monthCounts) {
    // Destroy previous chart if it exists
    if (phenologyChart) {
        phenologyChart.destroy();
    }

    phenologyChart = new Chart(canvas, {
        type: "line",
        data: {
            labels: monthNames,
            datasets: [{
    label: "Observations",
    data: monthCounts,

    // Line matches map stroke
    borderColor: "rgba(51, 102, 255, 0.9)",   // #3366ff
    borderWidth: 2,
    tension: 0,

    // Points match map fill
    pointRadius: 5,
    pointBackgroundColor: "rgba(102, 153, 255, 0.8)", // #6699ff
    pointBorderColor: "rgba(51, 102, 255, 0.9)",      // #3366ff

    // ===== Hover (NO ring, NO bounce) =====
    pointHoverRadius: 5,                 // stays the same size → no bounce
    pointHoverBorderWidth: 0,            // <-- removes the dark ring entirely
    pointHoverBackgroundColor: "rgba(51, 102, 255, 0.9)",

    hitRadius: 0,
    pointStyle: "circle"
}]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,  // allow flexible height on phones
            animation: false,
            transitions: {
                active: { animation: { duration: 0 } },
                resize: { animation: { duration: 0 } }
            },
           plugins: {
    legend: { display: false },
    tooltip: {
        displayColors: false,   // no mini color box
    backgroundColor: "#333", // <-- opaque #333 background
    titleColor: "#fff",
    bodyColor: "#fff",
    callbacks: {
        label: ctx => `${ctx.raw} observations`
        }
    }
},
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}



// =====================================
// Redraw cleanly when switching devices
// =====================================

let resizeTimeout;

window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);

    resizeTimeout = setTimeout(() => {
        const canvas = document.getElementById("phenologyChart");
        if (canvas && monthCounts_global) {
            buildPhenologyChart(canvas, monthNames_global, monthCounts_global);
        }
    }, 150);
});
