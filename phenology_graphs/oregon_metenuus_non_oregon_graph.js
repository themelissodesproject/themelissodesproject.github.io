// ======================================================
// Melissodes + Other Phenology Graph
// ======================================================

const metenuusOregonGraph = (() => {

    // ==========================
    // Paste ONLY the date columns here
    // ==========================
    const melissodesDates = `
2019-06-05
2019-06-27
2019-06-25
2019-06-25
2019-06-13
2019-06-25
2019-06-25
2019-06-25
2019-06-25
2019-06-05
2019-06-25
2019-06-27
2019-06-13
2019-06-25
2019-06-25
2019-06-25
2019-07-14
2019-07-15
2019-07-07
2019-07-25
2019-07-12
2019-07-18
2019-07-15
2019-07-27
2019-07-18
2019-07-03
2019-07-07
2019-07-25
2019-07-25
2019-07-30
2019-07-27
2019-07-19
2019-07-14
2019-07-24
2019-07-24
2019-07-24
2019-07-20
2019-07-07
2019-07-25
2019-07-12
2019-07-18
2019-07-15
2019-07-27
2019-07-18
2019-07-03
2019-07-25
2019-07-25
2019-07-14
2019-07-24
2019-07-24
2019-07-24
2019-07-07
2019-07-30
2019-07-27
2019-07-19
2019-07-20
2019-08-27
2019-08-10
2019-08-16
2019-08-15
2019-08-16
2019-08-12
2019-08-01
2019-08-01
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-15
2019-08-01
2019-08-15
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-01
2019-08-16
2019-08-15
2019-08-08
2019-08-16
2019-08-27
2019-08-12
2019-08-10
2019-08-15
2019-08-16
2019-08-01
2019-08-01
2019-08-15
2019-08-01
2019-08-15
2019-08-01
2019-08-16
2019-08-15
2019-08-08
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-09-02
2019-09-02
2019-09-02
2019-09-02
2012-06-28
1953-09-11
1953-09-11
1951-07-09
1951-07-09
1930-06
1925-06-28
1922-08-09
1908
1906


1945-07-29
1945-07-29
1941-06-26
1929-07-30
1907-07-10
`;

    const otherDates = `
datefound
2024-07-16
2024-07-24
2024-08-09
2023-06-29
2023-06-29
2023-06-15
2019-06-05
2019-06-27
2019-06-25
2019-06-25
2019-06-13
2019-06-25
2019-06-25
2019-06-25
2019-06-25
2019-06-05
2019-06-25
2019-06-27
2019-06-13
2019-06-25
2019-06-25
2019-06-25
2019-07-14
2019-07-15
2019-07-07
2019-07-25
2019-07-12
2019-07-18
2019-07-15
2019-07-27
2019-07-18
2019-07-03
2019-07-07
2019-07-25
2019-07-25
2019-07-30
2019-07-27
2019-07-19
2019-07-14
2019-07-24
2019-07-24
2019-07-24
2019-07-20
2019-07-07
2019-07-25
2019-07-12
2019-07-18
2019-07-15
2019-07-27
2019-07-18
2019-07-03
2019-07-25
2019-07-25
2019-07-14
2019-07-24
2019-07-24
2019-07-24
2019-07-07
2019-07-30
2019-07-27
2019-07-19
2019-07-20
2019-08-27
2019-08-10
2019-08-16
2019-08-15
2019-08-16
2019-08-12
2019-08-01
2019-08-01
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-15
2019-08-01
2019-08-15
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-01
2019-08-16
2019-08-15
2019-08-08
2019-08-16
2019-08-27
2019-08-12
2019-08-10
2019-08-15
2019-08-16
2019-08-01
2019-08-01
2019-08-15
2019-08-01
2019-08-15
2019-08-01
2019-08-16
2019-08-15
2019-08-08
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-08-16
2019-09-02
2019-09-02
2019-09-02
2019-09-02
2014-07-24
2012-05-07
2012-05-29
2012-06-28
2012-06-12
2012-06-12
2012-06-22
2012-06-22
2012-06-22
2012-07
2012-07
2012-07
2012-07
2012-07
2012-07
2012-07
2012-07
2012-07
2012-07
2012-07
2012-07
2012-07-17
2012-08
2012-08
2011-09
2011-09
2011
2009-08-28
1965-07-03
1964-07-05
1962-07-14
1962-07-27
1962-08-06
1961-07-15
1960-06-23
1960-07-25
1960-08-15
1958-07-17
1958-07-18
1958-07-18
1958-07-18
1958-07-18
1958-07-17
1958-07-18
1958-07-18
1958-07-18
1958-07-18
1958-07-18
1958-07-17
1958-07-17
1958-07-18
1956-06-09
1956-06-09
1956-06-09
1956-06-09
1955-08-26
1953-09-11
1953-09-11
1951-07-09
1951-07-09
1950-08-09
1949-08-16
1949-08-16
1945-07-29
1945-07-29
1941-06-26
1940-08-04
1935-07-15
1935-07-15
1935-07-15
1935-07-15
1935-07-15
1935-07-15
1930-06
1929-07-30
1925-06-28
1922-08-09
1908
1907-07-10
1906

`;

    // ==========================
    // Build phenology on page load
    // ==========================
    document.addEventListener("DOMContentLoaded", () => {
        generatePhenology(melissodesDates, otherDates);
    });

    function generatePhenology(dates1, dates2) {
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
        const monthCounts2 = countMonths(parseDates(dates2));

        const canvas = document.getElementById("metenuusChart");
        if (!canvas) {
            console.error("Canvas #metenuusChart not found.");
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
                            label: "M. metenuus in Oregon",
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
                        {
                            label: "M. metenuus in and outside Oregon",
                            data: monthCounts2,
                            borderColor: "rgba(255, 0, 0, 0.9)",
                            borderWidth: 2 * scaleFactor,
                            tension: 0,
                            pointRadius: 5 * scaleFactor,
                            pointBackgroundColor: "rgba(255, 102, 102, 0.8)",
                            pointBorderColor: "rgba(255, 0, 0, 0.9)",
                            pointHoverRadius: 5 * scaleFactor,
                            pointHoverBorderWidth: 0,
                            pointHoverBackgroundColor: "rgba(255, 0, 0, 0.9)",
                            hitRadius: 0,
                            pointStyle: "circle"
                        }
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
