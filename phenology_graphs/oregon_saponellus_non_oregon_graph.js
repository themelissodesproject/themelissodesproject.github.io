// ======================================================
// Melissodes + Other Phenology Graph
// ======================================================

const saponellusOregonGraph = (() => {

    // ==========================
    // Paste ONLY the date columns here
    // ==========================
    const melissodesDates = `
1997-07-09




























1963-06-10
1963-06-09
1948-05-06
1948-05-06
1949-06-24
1962-07-08
1963-06-29
1982-06-03
1982-06-03


1992-05-15
1991-06-19
1991-06-14
1983-06-15
1992-05-25
1992-05-25
1992-05-25
1982-06-04
1982-06-04
1982-06-04
1982-06-03
1959-06-02
1959-06-02
1959-06-02
1959-06-02
1959-06-02
1959-06-02
1959-06-02
1959-06-02
1959-06-02
1959-06-02
1959-06-02
1959-06-02
1950-06-24
1963-04-12
1950-06-24
1950-06-24
1987-05-22
1950-06-24
1959-06-03
1950-06-24
1987-05-22
2019-04-09
2020-07-13
2020-07-26

2013-04-26
2013-04-26
2015-05-29
2015-06-12
2015-07-12
1995-06-29
2014-06-10
2015-07-02

2023-06-24
2023-06-02
2015-05-29


2024-06-05













1957-04-18
1964-07-05
1973-09-12
1973-05-12
1969-08-11
1966-04-16
1965-06-15
1955-06-16
1966-04-14
1955-06-16
1966-04-16
1963-06-09
1959-06-02
1961-05-09
1959-06-02
1973-06-06
1973-05-12
1966-04-16
1957-04-20
1973-05-12
1950-06-24

2014-06-02
2015-06-08
2015-05-26
2012-06-21
2015-05-26
2015-06-08
2001-06-06
2001-06-06
2001-06-06
2001-06-05
2001-05-28
2001-06-05
2003-09-18
2003-09-18
2001-06-06
2003-08-12
2003-08-12
2003-08-12
2001-06-05
2001-06-05
2001-06-07
2001-06-18
2001-06-18
2003-08-12
2003-08-12
2001-06-22
2000-05-22
2001-06-05
2003-07-03
2003-06-04
2001-05-22
2001-05-22
2003-06-23
2000-06-01


2011-08-25
2011-08-25
1957-04-18
1982-06-07
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

        const canvas = document.getElementById("saponellusChart");
        if (!canvas) {
            console.error("Canvas #saponellusChart not found.");
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
                            label: "M. saponellus Occurances",
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
