// ======================================================
// Melissodes + Other Phenology Graph
// ======================================================

const compositusOregonGraph = (() => {

    // ==========================
    // Paste ONLY the date columns here
    // ==========================
    const melissodesDates = `
datefound
2016-09-25
2016-10-14
2016-10-03
2016-10-12
2016-10-03
2015-07-19
2014-08-18
2014-08-04
2014-08-04
2014-08-04
2012-08-18
2012-08-18
2012-08-18
2012-09-01
2012-09-01
2012-09-02
2012-09-01
2012-09
2009-09-12
2007-08-14
2003-08-19
2003
2002-09-16
2000-08-27
1999-09-17
1999-09-22
1985-09-14
1985-09-14
1985-09-13
1985-09-14
1981-09-02
1979-10-14
1978-08-10
1977-08-31
1977-08-27
1977-08-27
1977-08-27
1977-09-10
1974-08
1969-08-20
1969-08-21
1969-08-20
1969-08-20
1968-08-15
1967-09-24
1966-05-30
1965-08-25
1965-08-26
1965-08-11
1965-09-21
1965-09-21
1965-09-21
1965-09-21
1965-09-21
1965-09-21
1965-09-21
1965-09-21
1965-09-21
1965-09-21
1965-09-21
1965-09-28
1965-09-21
1965-09-21
1965-09-21
1965-09-21
1964-08-15
1964-08-15
1964-08-15
1964-08-15
1963-08-20
1963-08-20
1963-08-04
1963-08-04
1963-08-04
1963-08-04
1963-08-04
1963-08-04
1963-08-06
1963-08-04
1963-08-20
1963-09-06
1963-09-06
1962-08-11
1962-08-11
1962-09-11
1961-08-21
1961-08-23
1961-08-17
1961-08-25
1960-09-24
1960-09-08
1958-08-19
1958-08-31
1958-09-09
1958-09-03
1958-09-03
1957-08-08
1957-08-08
1957-08-08
1957-08-08
1957-08-08
1957-08-08
1957-08-08
1957-08-08
1957-08-08
1957-08-08
1957-08-08
1957-08-24
1956-09-09
1956-09-24
1956-09-24
1956-09-24
1956-09-24
1956-09-24
1956-09-24
1955-09-13
1955-09-13
1955-09-14
1955-09-13
1955-09-13
1955-09-13
1955-09-13
1954-08-19
1954-08-25
1954-08-28
1954-08-19
1954-08-19
1954-08-19
1954-08-27
1954-08-28
1954-08-19
1954-08-19
1954-08-27
1954-08-19
1954-08-28
1954-10-13
1953-08-30
1952-07-27
1952-07-27
1951-07-27
1950-08-17
1949-08-24
1943-08-04
1935-08-13
1934-08-23
1934-08-21
1934-08-21
1934-08-21

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

        const canvas = document.getElementById("compositusChart");
        if (!canvas) {
            console.error("Canvas #compositusChart not found.");
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
                            label: "M. compositus Occurances",
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
