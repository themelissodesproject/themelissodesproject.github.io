// ======================================================
// Melissodes + Other Phenology Graph
// ======================================================

const lustrusOregonGraph = (() => {

    // ==========================
    // Paste ONLY the date columns here
    // ==========================
    const melissodesDates = `
1959-08-06
1959-08-06
1959-08-06
1959-08-06
1959-08-06
1959-08-06
1959-08-06
1959-08-06
1959-08-06
1959-08-06
1959-08-06
1959-08-06
1959-08-06
1959-08-06
1959-08-06
1959-08-06
1959-08-06
1959-08-06
1959-08-06
1959-08-06
1959-08-06
1959-08-06
1959-08-06
1959-08-06
1959-08-06
1959-08-06
1937-08-18
2019-08-24






1925-08-29
1925-08-29
1945-08-21
1929-08-12
1925-08-29
1950-09-04
1950-09-04
1929-08-10
1932-08-20
1968-09-05
`;

    const otherDates = `
1954-08-21
1954-08-21


1949-08-13
1959-08-06
1959-08-06
1959-08-06
1959-08-06
1959-08-06
1959-08-06
1959-08-06
1959-08-06
1959-08-06
1959-08-06
1959-08-06
1959-08-06
1959-08-06
1959-08-06
1959-08-06
1959-08-06
1959-08-06
1959-08-06
1959-08-06
1959-08-06
1959-08-06
1959-08-06
1959-08-06
1959-08-06
1959-08-06
1959-08-06
1934-07-31
1965-08-27
1958-08-14
1958-08-14
1958-08-14
1958-08-14
1958-08-08
1958-08-08
1958-08-07
1958-08-07
1958-08-07
1958-08-07
1958-08-14
1958-08-07
1952-09-14
1936-08-05
1949-08-06
1969-08-19

1937-09-10
1957-09-05
1957-09-05
1957-09-20
1957-09-13
1957-09-13
1932-08-06
1958-08-01
1906-05-01
2023-08-10
2024-09-21
2024-09-21
2024-09-21
2024-09-21
2024-09-21
2024-09-21
2024-09-21
2024-09-21
2024-09-21
2024-09-21
2024-09-23
2024-09-23
2024-09-21
2024-09-21
2024-09-21
2024-09-21
2024-09-21
2024-09-21
2024-09-21
2024-09-21
2024-09-21
2024-09-21
2024-09-21
2024-09-21
2024-09-21
2024-09-21
2024-09-21
2024-09-21
2024-09-21
2024-09-21
2024-09-21
2024-09-21
2024-09-21
2024-09-21
2024-09-21
2024-09-21
2024-09-21
2024-09-21
2024-09-21
2024-09-23
2024-09-23
2024-09-23
2024-09-23
2024-09-23
2024-09-23
2024-09-23
2024-09-23
2024-09-23
2024-09-23
2024-09-23
2024-09-23
2024-09-23
2024-09-23
2024-09-23
2024-09-23
2024-09-23
2024-09-23
2024-09-23
2024-09-23
2024-09-23
2024-09-21
2024-09-21
2024-09-21
2024-09-21
2024-09-21
2024-09-21
2024-09-21
2024-09-21
2024-09-21
2023-10-07
2023-10-07
2023-10-07
2023-10-07
2023-10-07
2023-10-07
2023-10-06
2023-10-06
2023-10-06
2023-10-06
2023-10-06
2023-10-06
2023-10-06
2023-10-06
2023-10-07
2023-10-07
2023-09-19
2023-09-21
2023-09-21
2023-09-21
2023-09-21
2023-09-21
2023-09-21
2023-09-21
2023-09-21
2023-09-21
2023-09-21
2023-09-21
2023-09-21
2023-09-21
2023-09-21
2024-08-26
2024-08-26
2024-08-26
2024-08-26
2024-08-26
2024-08-26
1917
2006-09-30









1970-09-10
1967-10-19
1957-09-13


1932-08-22
1970-03-23
1959-08-06


1965-09-21
1937-08-18

1957-09-05
1965-09-21

2019-08-24
2019-11-12
2019-10-15








2019-09-11
2000-09-07
2000-09-07
2012-09-18
2012-09-18
2012-09-18
2012-09-18
1925-08-29
1932-08-22
1925-08-29
1948-08-26
1924-10-20
1926-10-10
1932-08-22
1925-10-28
1952-10-11
1945-08-21
1925-10-28
1936-08-09
1922-09-17
1932-08-22
1952-10-11
1962-08-24
1954-08-28
1936-08-09
1932-08-22
1925-07-25
1932-08-22
1929-08-12
1929-10-28
1925-08-29
1964-09-10
1950-09-04
1950-09-04
1940-09-29
1962-08-24
1954-08-28
1954-08-28
1929-08-10
1912-09-01
1941-10-07
1948-09-25
1962-08-24
1912-09-01
1937-08-18
1925-07-25
1954-08-19
1932-08-20
1962-08-24
1910-08-14
1954-08-28
1932-08-22
1932-08-22
1954-08-28
1932-08-22
1954-08-19
1912-09-01
1962-08-24
1954-08-19
1932-08-22
1936-08-09
1968-09-05
1910-08-14
1952-10-12
1912-09-01
1925-07-21
1948-10-15
1954-08-19
1933-08-22
1933-08-22
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

        const canvas = document.getElementById("lustrusChart");
        if (!canvas) {
            console.error("Canvas #lustrusChart not found.");
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
                            label: "M. lustrus in Oregon",
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
                            label: "M. lustrus in and outside Oregon",
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
