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


1966-08-14






































1952-07-17
1952-07-17
1952-07-17
1952-07-17
1952-07-17
1952-07-17
1952-07-17
1952-07-17
1952-07-17
1952-07-17
1952-07-17
1952-07-17
1952-07-17
1952-07-17
1952-07-17
1952-07-17
1952-07-17
1952-07-17
1952-07-17
1952-07-17
1952-07-17
1952-07-17
1952-07-17
1952-07-17
1952-07-17
1952-07-17
1952-07-17
1952-07-17
1952-07-17
1952-07-17
1952-07-17
1952-07-17
1952-07-17
1952-07-17
1959-08-06
1959-08-06
1959-08-06
1995-07-27
1995-07-27
1981-07-28






1980-08-19
1980-08-19
1980-08-19
1951-08-09
1990-08-29
1990-08-29
1990-08-29
1980-07-29
1980-05-31
1980-03-30
1950-07-01
1980-05-31
1980-03-30
1980-03-31
1980-03-30
1980-05-31
1980-07-29
1980-04-02
1980-05-31





1972-08-28
1950-07-01
1970-09-10
1965-10-16
1970-09-10
1973-06-25
1970-09-10
1962-08-13
1970-09-10
1949-07-13
1970-09-10
1970-09-10
1960-06-17
1970-09-10
1970-09-10
1970-09-10

2014-06-02
2001-09-10
2001-07-25
2003-06-23
2003-08-12
2003-09-01
2003-08-08
2003-08-08
2003-08-08
2001-08-31
2001-08-31
2001-08-31
2001-07-25
2001-07-25
2001-07-25
2001-08-14
2001-07-26
2000-08-17
2001-07-26
2003-08-12
2003-07-29
2003-07-29
2003-08-12
2003-08-12
2003-07-29
2003-08-12
2000-08-18
2000-08-18
2001-07-09
2000-08-08
2000-08-18
2003-08-08
2003-07-28
2001-07-25
2001-07-25
2001-07-02
2001-07-25
2001-08-28
2001-07-25

1949-07-13
1960-06-17
1949-07-13
1968-06-27
1950-07-01

1950-07-01
1950-07-01
1950-07-01
1950-07-01
1950-07-01
1950-07-01
1950-07-01
1950-07-01
1950-07-01
1950-07-01
1950-07-01
1950-07-01
1949-07-07
1950-07-01
1952-07-19
1949-08-09
1950-07-01
1950-07-01
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

    // Determine scale factor based on canvas parent width
    const parentWidth = canvas.parentElement.offsetWidth;
    const scaleFactor = parentWidth < 365 ? parentWidth / 365 : 1;

    phenologyChart = new Chart(canvas, {
        type: "line",
        data: {
            labels: monthNames,
            datasets: [{
                label: "Observations",
                data: monthCounts,

                // Line matches map stroke
                borderColor: "rgba(51, 102, 255, 0.9)",
                borderWidth: 2 * scaleFactor,      // scale line width
                tension: 0,

                // Points match map fill
                pointRadius: 5 * scaleFactor,      // scale points
                pointBackgroundColor: "rgba(102, 153, 255, 0.8)",
                pointBorderColor: "rgba(51, 102, 255, 0.9)",

                // Hover (NO ring, NO bounce)
                pointHoverRadius: 5 * scaleFactor,
                pointHoverBorderWidth: 0,
                pointHoverBackgroundColor: "rgba(51, 102, 255, 0.9)",
                hitRadius: 0,
                pointStyle: "circle"
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: false,
            transitions: {
                active: { animation: { duration: 0 } },
                resize: { animation: { duration: 0 } }
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    displayColors: false,
                    backgroundColor: "#333",
                    titleColor: "#fff",
                    bodyColor: "#fff",
                    callbacks: {
                        label: ctx => `${ctx.raw} observations`
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        autoSkip: false,
                        font: { size: 12 * scaleFactor }  // scale font
                    }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        font: { size: 12 * scaleFactor }  // scale font
                    }
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
