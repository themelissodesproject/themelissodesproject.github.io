// ======================================================
// Melissodes + Other Phenology Graph
// ======================================================

const semilupinusOregonGraph = (() => {

    // ==========================
    // Paste ONLY the date columns here
    // ==========================
    const melissodesDates = `
1997-10-05
1926-08-10

1961-09-14
`;

    const otherDates = `
1959-09-17
1959-09-17
1965-09-21
1965-09-21
1965-09-21
1965-09-21
1965-09-21


1997-10-05
1940-09-17
1966-09-15
1966-09-15
1966-09-21
1979-09-16
1979-09-16
1979-09-16
1979-09-16
1979-09-16
1979-09-16
1979-09-16
1979-09-16
1979-09-16
1983-09-13
1983-09-13
1983-09-13
1983-09-13
1983-09-13
1983-09-13
1983-09-13
1983-09-14
1983-09-13
1983-09-13
1983-09-13
1983-09-13
1983-09-13
1983-09-13
1983-09-13
1983-09-14
1983-09-14
1983-09-14
1983-09-14
1983-09-14
1980-09-16
1982-09-21
1980-09-16
1982-09-21
1982-09-21
1982-09-21
1982-09-23
1982-09-23
1982-09-23
1982-09-23
1982-09-23
1982-09-23
1982-09-23
1982-09-23
1982-09-23
1982-09-22
1982-09-22
1981-09-12
1981-09-12
1985-09-21
1979-09-15
1983-09-13
1983-09-13
1983-09-13
1983-09-13
1983-09-13
1983-09-13
1983-09-13
1983-09-13
1983-09-13
1983-09-13
1983-09-13
1982-10-05
1984-10-03
1984-10-03
1984-10-03
1984-10-03
1984-10-03
1984-10-03
1981-10-02
1981-10-02












1943-08-25
1931-08-01
1949-08-24
1981-09-15



















































1980-09-16
1980-09-16
1985-08-27




1966-09-24
1934-10-28

1934-10-28
1934-10-28
2019-09-19
2019-09-19
2020-08-06
2019-07-23
2019-07-23
2007-09-12

1995-09-01
1995-09-01
1995-08-23
1995-08-23
1995-09-01
1995-08-23
1995-08-23
2024-09-14
2024-09-10
1934-08-02
1976-08-24
1956-08-28
2023-09-02
2023-09-06
2023-09-06
2023-09-06
2024-08-27
2024-08-31
2024-08-29
2024-08-29
2024-08-29
2024-08-29
2024-09-01
2024-10-06
1978-08-16
1902-08-01
1902-08-01
1927-07-17
1917-08-21
1933-08-08
1930-08-10
1966-10-06
1995-09-01
1995-08-23
1955-08-24
1941-08-01
1966-09-15
1965-09-21
1963-09-26

1958-10-14
1966-08-21
1966-08-21
1955-08-20
1961-09-14
2001-09-12
2001-09-12
2001-09-12
2001-09-12
2001-09-12
2001-09-12
2001-09-12
2001-09-12
2001-09-12
2001-09-12
2002-10-10
2002-10-10
2001-09-29
2001-09-17
2001-09-17
2001-09-12
2001-09-12
2003-09-11
2003-10-01
2003-08-12
2003-08-04
2002-08-28
2002-09-27
2002-09-10
2002-09-10
2003-08-19
2001-09-17
2003-09-01
2001-09-17
2001-09-17
2003-08-19
2003-08-22
2003-08-19
2003-08-19
2003-08-19
2003-08-22
2001-09-12
2001-09-12
2003-08-19
2000-09-14
2001-08-22
2003-08-19
2003-08-11
2003-08-05
2001-09-12
2001-08-23
2003-08-20
2000-08-28
2003-09-01
2003-09-01
2003-08-20
2003-08-20
2003-08-20
2003-08-20
2001-09-29
2001-08-23
2001-09-20
2001-09-20
2001-09-20
2003-08-20
2003-08-13
2000-10-04
2000-08-31
2001-08-27
2001-08-27
2001-08-27
2001-08-27
2003-09-01
2000-09-20
2000-08-08
2000-08-18
2000-08-31
2000-08-17
2003-10-01
2003-10-01
2003-10-01
2003-09-01
2003-09-01
2001-08-23
2000-08-17
2003-10-04
2001-08-16
2003-09-22
2003-08-07
2003-08-07
2003-09-12
2003-09-12
2003-09-19
2003-09-11
2000-09-13
2003-09-24
2003-09-23
2003-09-23
2002-09-26
2003-08-19
2003-08-19
2003-08-19
2003-08-19
2003-09-01
2001-10-05
2001-09-17
2001-09-17
2001-09-17
2003-09-12
2001-09-10
2001-09-17
2001-09-17
2001-09-17
2001-09-17
2001-09-05
2001-09-05
2001-09-05
2000-09-14
2001-09-17
2001-09-17
2001-09-17
2001-09-17
2001-09-17
2001-07-04
2001-09-12
2001-09-12
2001-09-12
2001-09-12
2001-08-28
2001-08-28
2001-08-28
2001-08-28
2003-09-02
2003-08-07
2003-08-07
2003-09-11
2003-09-11
2000-08-17
2003-08-07
2002-09-10
2002-08-28
2002-09-20
2002-09-27
2002-09-10




1966-09-20
1969-09-14
1897-09-26
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

        const canvas = document.getElementById("semilupinusChart");
        if (!canvas) {
            console.error("Canvas #semilupinusChart not found.");
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
                            label: "M. semilupinus in Oregon",
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
                            label: "M. semilupinus in and outside Oregon",
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
