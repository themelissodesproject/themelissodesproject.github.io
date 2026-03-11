// ======================================================
// Melissodes + Other Phenology Graph
// ======================================================

const vernalisOregonGraph = (() => {

    // ==========================
    // Paste ONLY the date columns here
    // ==========================
    const melissodesDates = `
datefound
2014-06-04
2012-05-05
2012-07
2011-06-23
2011-08
2011-08
2005-05-14
1998-05-21
1998-05-21
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1998
1997-05-01
1997-05-01
1997
1997
1997
1997
1982-10-08
1982-10-08
1982-10-08
1982-10-08
1982-10-08
1982-10-08
1972-06-28
1961-05-09
1959-04-24
1959-05-06
1959-05-04
1952-04-26
1952-06-12
1952-06-12
1949-04-28
1945-05-24
1944-05-11
1941-02-03
1941-02-03
1941-06-04
1941-06-07
1940-04-07
1939-04-16
1939-04-08
1939-05-06
1939-06-05
1939-06-05
1937-05-30
1937-05-30
1937-05-22
1937-05-22
1937-05-19
1937-06-01
1937-06-15
1937-06-15
1937-06-01
1937-06-01
1936-04-09
1935-04-20
1933-04-23

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

        const canvas = document.getElementById("vernalisChart");
        if (!canvas) {
            console.error("Canvas #vernalisChart not found.");
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
                            label: "M. vernalis Occurances",
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
