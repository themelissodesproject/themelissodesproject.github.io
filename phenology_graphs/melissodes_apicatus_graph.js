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
1961-04-07
1949-04-28
2001-07-24
2025-06-27
2025-06-27
2025-07-18
2025-06-27
2025-06-27
2025-06-27
2025-06-27
2011-04-08

2021-06-08
2021-06-08
2021-06-08

2024-06-13
2023-07-15
1957-07-02
2000-08-25
1919-05-10
1959-07-05
1956-03-31
1980-07-24
1960-07-15
1980-07-24
1980-07-24
1956-03-31
1955-04-30
1953
1960-07-16
1982-07-08
1960-07-18

1956-03-31
1919-05-10
1980-07-24
1956-03-31
1956-03-31
1954-03-26
1971-06-20

1957-07-01
2024-07-19
2024-07-25
2022-08-12
2022-09-16
2022-08-09
2019-07-08
2019-07-09
2018-07-09
2019-07-10
2019-07-09
2019-07-09
2018-07-09
2024-07-04
2024-07-01










2023-07-03
2014-07-27
2016-07-02
2016-07-02
2016-07-02
2014-07-27
2016-07-02
2016-07-02
2016-07-02
2014-07-27
2014-07-26
2021-04-09
2007-06-29
2007-06-29
2007-06-29
2007-06-29
2007-06-29
2023-07-24
2023-06-28
2023-07-01
2023-06-29
2009-07-10
2012-06-12
2009-07-10
2020-07-04
2020-07-18
2022-07-09
2014-08-09
2019-07-05
2009-07-30
2009-08-01
2009-07-12
2009-07-19
2019-06-26
2008-07-26
2008-07-16
2018-07-08
2016-07-12
2012-06-29
2013-07-14
2015-08-06
2022-07-13
2020-07-12


1986-07-01
1986-07-01
1986-07-01
1986-07-01
1986-07-01
1917-04-23
1987-06-02
1988-07-07
1917-04-23
1918-11-14
1975-05-13
1987-06-02
1918-11-14
1955-04-12
1987-06-02
1986-07-01
1986-07-01
1986-07-01
1986-07-01
1986-07-01
1986-07-01
1986-07-01
1955-04-13
1975-05-13
1975-05-13
1956-04-17
1975-05-13
1917-04-25
1987-06-02
1986-07-01
1917-04-25
1986-07-01
1997-09-15
1986-07-01
1986-07-01
1986-07-01
1987-07-09
1975-05-13
1986-07-01
1964-04-10
1987-06-02
1917-04-23
1987-06-02
1918-11-14
1987-06-02
1987-06-02
1986-07-01
1986-07-01
1986-07-01
1987-07-09
1986-07-01
1986-07-01
1917-04-07
1975-05-11
1987-06-02
1987-06-02
1987-06-02
1918-11-14
1987-06-02
1987-06-02
1918-11-14
1987-06-02
1917-04-23
1956-03-31
1987-06-02
1987-06-02
2019-07-28
2021-08-22
2019-07-25



2020-06-27
2020-05-20
2020-07-07
1956-04-17










2007-06-29
2007-06-29
2007-06-29
2007-06-29
2007-06-29

2017-06-26
2017-06-26
2017-06-26
2017-06-26
1955-07-09
1955-07-09
1964-04-13
1997-03-17
2015-06-30
2015-06-30

2004-06-12
2004-06-12
1904-07-21

1990-07-14




1955-04-12
1955-07-09
1955-07-09
1955-04-12
1955-04-12
1955-04-12
1955-04-12
1966-04-07
1955-07-09
1955-04-07
1955-04-12
1955-04-12
1955-04-12
1955-04-12
1955-04-12
1934-05-20
1964-04-10
1964-04-10
1955-04-07
1955-04-07
1955-04-07
1964-04-10
1955-04-07
1964-04-10
1964-04-10
1966-04-06
1991-04-15
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
