// ======================================================
// Melissodes + Other Phenology Graph
// ======================================================

const lutulentusOregonGraph = (() => {

    // ==========================
    // Paste ONLY the date columns here
    // ==========================
    const melissodesDates = `
1959-08-06
1959-08-06
1959-09-08
1937-08-02
1930-07-24
1929-08-13
1954-07-26
1960-08-03
1960-08-03
`;

    const otherDates = `
1963-07-30
1963-08-06
1954-08-26
1954-08-26
1954-08-26
1954-08-29
1955-08-04
1955-08-04
1955-08-04
1948-08-02
1947-07-31
1948-08-02
1948-08-02
1948-08-11
1959-08-06
1959-08-06
1959-09-08
1976-08-16
1976-08-16
1976-08-21
1976-08-16
1976-08-16
1976-08-16
1976-08-24
1976-08-24
1976-08-24
1975-08-26
1976-08-16
1975-09-10
1976-08-24
1976-08-16
1976-08-16
1976-08-09
1975-08-19
1975-09-10
1975-08-19
1976-08-19
1976-08-13
1976-08-28
1976-08-05
1976-08-13
1976-08-19
1976-08-19
1976-08-19
1976-08-19
1976-08-19
1976-08-19
1976-08-19
1975-08-15
1976-08-13
1975-08-21
1975-08-28
1976-07-22
1975-08-07
1976-08-13
1976-08-24
1974-08-14









1950-08-16
1972-08-17
1980-06-27




1991-08-22
1962-08-10
1937-06-15
1949-08-12

1969-08-19
1969-08-19
1970-07-12
1935-10-03
1938-10-23
1969-08-13
1969-08-19
1969-08-19
1937-08-02
1970-07-12
1959-08-28
1916-08-29
1970-07-12
1969-08-21
1958-08-19
1919-07-20
1961-08-17
1970-07-11
1969-08-19
1970-07-12
1934-08-10
1959-08-17
1969-08-19
1958-08-19
1970-07-12
1948-08-13
1969-08-19
1969-08-19
1948-08-02
1959-08-17
1969-08-19
1943-08-07
1936-08-09
1954-09-08
1969-08-19
1961-07-22
1952-08-12
1969-08-19
1969-08-19
1950-08-02
1969-08-19
1919-07-20
1969-08-19
1969-08-19
1969-08-19
1952-07-20
1954-10-02
1962-08-09
1947-09-10
1954-09-08
1930-07-24
2015-06-30
2013-07-03
2013-06-06
2013-07-03
2013-07-09
2013-06-14
1920-09-09
2013-06-14
2013-07-03
1934-08-10
2013-07-03
2013-07-03
1920-09-09
1920-09-09
1934-08-10
1920-09-09

1971-08-18
2013-07-17
1976-08-24
2014-07-16
2014-07-03
2013-07-09
2013-07-25
2013-07-25
2013-07-25
1972-08-12
2013-07-25
2013-07-25













1955-09-13
1976-08-19
1976-09-10
1975-08-15
1929-08-13
1975-09-10
1954-07-26
1975-08-26
1963-07-10
1958-08-19
1968-09-08
1995-08-19
1976-08-13
1957-07-17
1970-07-12
1958-07-20
1957-07-27
1956-06-11
1976-08-19
1976-08-09
1974-08-30
1957-07-27
1976-08-13
1957-07-27
1968-09-02
1960-08-03
1969-08-19
1960-09-18
1965-09-03
1975-08-28
1975-09-10
1976-08-24
1969-08-19
1976-08-24
1962-09-03

1969-08-19
1966-08-22
1975-08-19
1976-08-24
1960-08-03
1976-08-16
1975-08-28
1976-08-16
1976-08-24
1968-09-05
1976-08-28
1974-09-01
1929-08-10
1970-07-12
1976-08-28
1976-08-24
1976-08-24
1919-07-27
1969-08-11
1968-09-05
1957-09-18

2003-07-31
2003-07-31
2003-07-31
2003-09-10
2003-09-10
2001-08-22
2003-08-05
2003-08-05
2003-08-05
2003-08-05
2003-08-05
2003-08-05
2003-08-05
2003-08-05
2003-08-05
2003-08-05
2003-08-05
2003-08-05
2001-08-21
2001-08-21
2001-08-21
2001-08-21
2001-08-21
2001-08-22
2003-09-03
2003-08-15
2003-07-31
2003-07-31
2001-06-25
2000-08-11
2000-08-11
2000-08-11
2000-08-11
2000-08-10
2000-07-27
2001-08-01
2003-08-15
2003-08-15
2003-09-03
2003-09-03
2003-07-31
2003-07-31
2003-09-03
2001-08-22
2001-08-22
2003-08-15
2003-09-05
2003-09-05
2002-08-02
2003-09-10
2003-09-10
2003-09-10
2003-09-10
2003-09-10
2000-08-11
2003-08-20
2003-08-20
2003-08-20
2003-08-20
2003-08-20
2003-08-20
2003-08-20
2003-08-20
2003-08-20
2002-08-15
2001-06-29
2001-06-29
2000-09-07
2000-07-27
2000-07-27
2000-08-11
2003-09-24
2001-08-22
2001-08-01
2001-08-01
2003-08-05
2003-08-05
2003-09-10
2003-08-05
2000-08-11




































1969-08-02
1953-08-24























2011-08-29
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

        const canvas = document.getElementById("lutulentusChart");
        if (!canvas) {
            console.error("Canvas #lutulentusChart not found.");
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
                            label: "M. lutulentus in Oregon",
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
                            label: "M. lutulentus in and outside Oregon",
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
