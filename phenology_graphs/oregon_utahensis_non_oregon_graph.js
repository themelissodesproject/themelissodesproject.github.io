// ======================================================
// Melissodes + Other Phenology Graph
// ======================================================

const utahensisOregonGraph = (() => {

    // ==========================
    // Paste ONLY the date columns here
    // ==========================
    const melissodesDates = `
2020-07-28
2020-08-10
2020-08-07
`;

    const otherDates = `
2024-08-29
2024-09-04
2024-09-04
2024-09-04
2023-07-23
2023-09-02
2020-07-28
2020-08-10
2020-08-07
2019-08-01
2019-08-01
2019-08-01
2019-08-01
2018-07-11
2018-07-11
2018-07-11
2018-07-11
2018-07-11
2018-07-11
2018-07-11
2018-07-11
2018-07-13
2018-07-25
2018-07-11
2018-07-11
2018-07-11
2018-07-11
2017-07-21
2017-07-21
2017-07-21
2017-07-21
2017-08-10
2017-08-10
2017-08-10
2017-08-10
2017-08-10
2017-08-01
2014-06-30
2014-06-27
2014-09-25
2014-09-25
2014-09-25
2014-09-25
2014-09-25
2014-09-25
2013-08-01
2013-08-11
2013-08-10
2013-08-21
2013-08-20
2012-08-17
2012-08-17
2012-08-17
2012-08-17
2012-08-17
2012-09-01
2003-07-31
2003-07-31
2003-07-31
2003-07-31
2003-07-05
2003-07-28
2003-07-28
2003-07-05
2003-07-19
2003-07-19
2003-07-19
2003-07-19
2003-07-19
2003-07-19
2003-07-19
2003-07-19
2003-07-19
2003-07-19
2003-07-19
2003-08-18
2003-08-08
2003-08-04
2003-08-05
2003-08-05
2003-08-05
2003-08-05
2003-08-05
2003-08-05
2003-08-22
2003-08-22
2003-08-19
2003-08-19
2003-08-19
2003-08-08
2003-08-06
2003-08-06
2003-08-05
2003-08-22
2003-08-06
2003-08-12
2003-08-18
2003-08-20
2003-08-20
2003-08-18
2003-08-05
2003-08-05
2003-08-22
2003-08-20
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
2003-08-05
2003-08-19
2003-08-19
2003-08-22
2003-08-03
2003-08-20
2003-09-04
2003-09-02
2003-09-04
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2003
2002-08-28
2002-08-08
2002-08-08
2002-08-21
2002-08-09
2002-08-12
2002-08-12
2002-08-12
2002-08-19
2002-08-28
2002-08-08
2002-08-08
2002-08-09
2002-08-28
2002-08-28
2002-08-28
2002-08-28
2002-08-28
2002-08-30
2002-08-09
2002-08-09
2002-08-09
2002-08-08
2002-08-08
2002-10-01
2002
2002
2002
2002
2002
2002
2002
2002
2002
2002
2002
2002
2002
2002
2002
2002
2002
2002
2002
2002
2002
2002
2002
2002
2002
2001-07-03
2001-07-03
2001-07-03
2001-07-03
2001-07-24
2001-07-02
2001-07-02
2001-07-02
2001-07-03
2001-08-06
2001-08-06
2001-08-17
2001-08-21
2001-08-16
2001-08-06
2001-08-06
2001-08-31
2001
2001
2001
2001
2001
2001
2001
2001
2001
2001
2001
2001
2001
2001
2001
2001
2001
2000-07-28
2000-07-28
2000-07-28
2000-07-28
2000-07-28
2000-07-27
2000-07-28
2000-07-28
2000-07-28
2000-08-10
2000-08-18
2000-08-18
2000-08-03
2000
2000
2000
2000
2000
2000
2000
2000
2000
2000
2000
2000
2000
1998
1998
1998
1997
1997
1997
1997
1997
1997
1997
1993-09-04
1993-09-04
1992-09-20
1991-09-08
1990-08-17
1985-08-28
1985-08-28
1985-08-28
1985-08-28
1985-08-28
1985-08-28
1985-08-28
1985-08-28
1985-08-28
1985-08-28
1985-08-28
1985-08-28
1985-08-28
1985-08-28
1985-08-28
1985-08-28
1983-07-21
1983-07-21
1983-07-21
1983-07-21
1983-07-21
1982-07-27
1981-09-12
1980-08-25
1979-08-22
1979-08-22
1979-08-22
1979-08-22
1979-08-22
1979-08-22
1979-08-22
1979-08
1978-06-27
1973-07-31
1973-08-07
1973-08-07
1973-08-07
1973-08-07
1973-08-07
1973-08-07
1973-08-07
1973-08-07
1973-09-12
1973-09-12
1973-09-12
1973-09-12
1973-09-12
1973-09-12
1973-09-12
1973-09-12
1973-09-12
1973-09-12
1973-09-12
1973-09-12
1972-08-17
1972-08-11
1972-08
1972-08
1972-09-21
1971-08-25
1971-08-25
1971-08-31
1971-08-31
1970-09-01
1970-09-01
1970-09-01
1970-09-01
1969-08-15
1969-08-15
1969-09-05
1969-09-19
1965-08-17
1965-08-18
1965-10-15
1964-06-30
1964-07-29
1964-09-07
1963-07-30
1962-08-09
1962-08-10
1962-08-10
1962-08-10
1961-08-02
1960-08-02
1960-09-24
1959-08-18
1958-07-20
1957-08-20
1957-08-20
1957-08-21
1957-08-20
1957-08-21
1957-08-21
1956-09-10
1956-09-10
1955-08-15
1955-08-15
1955-08-15
1955-08-15
1955-08-10
1954-07
1952-07-31
1952-08-23
1951-07-01
1949-07-20
1949-07-20
1949-07-20
1949-07-20
1949-07-20
1949-07-20
1949-07-20
1949-07-20
1949-08-12
1949-08-04
1949-08-24
1949-08-04
1944-08-10
1939-08-19
1938-09-11
1919-07-27
1912-08-18
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

        const canvas = document.getElementById("utahensisChart");
        if (!canvas) {
            console.error("Canvas #utahensisChart not found.");
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
                            label: "M. utahensis in Oregon",
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
                            label: "M. utahensis in and outside Oregon",
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
