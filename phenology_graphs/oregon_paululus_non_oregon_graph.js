// ======================================================
// Melissodes + Other Phenology Graph
// ======================================================

const paululusOregonGraph = (() => {

    // ==========================
    // Paste ONLY the date columns here
    // ==========================
    const melissodesDates = `
1997-09-28
1997-09-14
1997-08-31
1997-08-17
1997-08-17
1997-08-17
1997-08-04
1997-08-10
1998-05-26
1998-05-26
1998-05-26
1998-05-17
1998-06-23
1998-06-16
1998-07-28
1998-06-16
`;

    const otherDates = `
1936-10-10
1936-10-10
1936-10-10
1934-09-29
1955-10-29
1934-09-25
1997-09-20
1997-09-20
1997-09-13
1997-09-06
1997-09-06
1997-09-06
1997-09-06
1997-09-06
1997-09-06
1997-08-30
1997-08-09
1997-09-28
1997-09-14
1997-08-31
1997-08-17
1997-08-17
1997-08-17
1997-08-04
1997-08-10
1998-06-24
1998-06-16
1998-05-26
1998-05-26
1998-05-26
1998-05-17
1998-06-23
1998-06-16
1998-07-28
1998-06-16







1998-06-27
1998-06-27
1998-06-27
1998-07-28
1998-07-22
1998-07-17
1936-09-10

1959-08-21
1950-09-11
1953-09-10
1953-09-10
1950-09-11

1954-09-16


1914-10-03

1952-09-03

1953-09-10
1953-09-20
1953-09-07
1954-10-05
1953-09-20
1916-10-06
1953-09-10

1914-10-03
1948-09-08
1953-09-20
1953-09-20
1916-09-18


1953-09-20
1948-09-08
1953-09-10
1954-09-26
1953-09-20


1953-09-20
1916-09-18
1953-09-10
2014-09-26
1934-09-16








































1970-09-10
1916-10-03
1970-09-10
1953-10-07
1970-09-10
1953-09-20
1916-09-18




1970-09-10


1955-11-01
1916-10-01
1953-09-20

1916-10-03
1970-09-10

1966-09-23

1970-09-10


1953-09-12
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

        const canvas = document.getElementById("paululusChart");
        if (!canvas) {
            console.error("Canvas #paululusChart not found.");
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
                            label: "M. paululus in Oregon",
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
                            label: "M. paululus in and outside Oregon",
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
