// ======================================================
// Melissodes + Other Phenology Graph
// ======================================================

const bicoloratusOregonGraph = (() => {

    // ==========================
    // Paste ONLY the date columns here
    // ==========================
    const melissodesDates = `


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

    const otherDates = `
    `;
    // ==========================
    // Build phenology on page load
    // ==========================
    document.addEventListener("DOMContentLoaded", () => {
        generatePhenology(melissodesDates);
    });

    function generatePhenology(dates1) {
        const parseDates = (dateText) =>
            dateText.trim().split("\n").map(d => d.trim()).filter(Boolean);

        const countMonths = (dates) => {
            const monthCounts = new Array(12).fill(0);
            for (const date of dates) {
                const parts = date.split("-");
                if (parts.length < 2) continue;
                const month = parseInt(parts[1]);
                if (!isNaN(month) && month >= 1 && month <= 12) monthCounts[month - 1]++;
            }
            return monthCounts;
        };

        const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        const monthCounts1 = countMonths(parseDates(dates1));

        const canvas = document.getElementById("bicoloratusChart");
        if (!canvas) {
            console.error("Canvas #bicoloratusChart not found.");
            return;
        }

        let phenologyChart = null;

        const buildChart = () => {
            const parentWidth = canvas.parentElement.offsetWidth;
            const scaleFactor = parentWidth < 365 ? parentWidth / 365 : 1;

            if (phenologyChart) phenologyChart.destroy();

            phenologyChart = new Chart(canvas, {
                type: "line",
                data: {
                    labels: monthNames,
                    datasets: [
                        {
                            label: "M. bicoloratus Occurances",
                            data: monthCounts1,
                            borderColor: "rgba(51, 102, 255, 0.9)",
                            borderWidth: 2 * scaleFactor,
                            tension: 0,
                            pointRadius: 5 * scaleFactor,
                            pointBackgroundColor: "rgba(102, 153, 255, 0.8)",
                            pointBorderColor: "rgba(51, 102, 255, 0.9)",
                            pointHoverRadius: 5 * scaleFactor,
                            pointHoverBorderWidth: 0,
                            pointHoverBackgroundColor: "rgba(51, 102, 255, 0.9)",
                            hitRadius: 0,
                            pointStyle: "circle"
                        },

                    ]
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
                        legend: {
                            display: true,
                            position: "top",
                            labels: {
                                font: { size: 12 * scaleFactor },
                                usePointStyle: true
                            }
                        },
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
                                font: { size: 12 * scaleFactor }
                            }
                        },
                        y: {
                            beginAtZero: true,
                            ticks: {
                                font: { size: 12 * scaleFactor }
                            }
                        }
                    }
                }
            });
        };

        // Initial draw
        buildChart();

        // Redraw on resize
        let resizeTimeout;
        window.addEventListener("resize", () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(buildChart, 150);
        });
    }

})();
