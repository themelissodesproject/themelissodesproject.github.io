// ======================================================
// Floral Host Distribution (Paste TSV table here)
// ======================================================
//
// Format: three tab-separated columns with a header row:
// FLOWER_TAXON    RAW_TOTAL    DEDUP_EVENTS
// Ericameria nauseosa    139    60
//
// Canvas IDs: rawBarChart, dedupBarChart
// ======================================================
(() => {  
const FlowerTaxonGraph = (() => {

    const tsvData = `FLOWER_TAXON	RAW_TOTAL	DEDUP_EVENTS
Lamiaceae	19	9
Cactaceae	7	3
Asteraceae	5	4
Asparagaceae	3	2
Boraginaceae	2	1
Aizoaceae	2	0
Malvaceae	2	0
Plantaginaceae	1	1
Convolvulaceae	1	1
Brassicaceae	1	0
Hydrophyllaceae	1	0`;

    let rawChart         = null;
    let dedupChart       = null;
    let labels_global    = null;
    let rawVals_global   = null;
    let dedupVals_global = null;

    document.addEventListener("DOMContentLoaded", () => {
        generate();
    });

    function generate() {
        const lines = tsvData.trim().split("\n");
        lines.shift();

        const data = lines
            .map(line => {
                const parts = line.split("\t");
                return {
                    taxon: parts[0].trim(),
                    raw:   parseInt(parts[1], 10),
                    dedup: parseInt(parts[2], 10)
                };
            })
            .filter(d => d.taxon && !isNaN(d.raw))
            .sort((a, b) => b.raw - a.raw);

        labels_global    = data.map(d => d.taxon);
        rawVals_global   = data.map(d => d.raw);
        dedupVals_global = data.map(d => d.dedup);

        const rawCanvas   = document.getElementById("rawBarChartalopex");
        const dedupCanvas = document.getElementById("dedupBarChartalopex");

        if (!rawCanvas)   console.error("Canvas #rawBarChart not found.");
        if (!dedupCanvas) console.error("Canvas #dedupBarChart not found.");

        if (rawCanvas)   build(rawCanvas,   labels_global, rawVals_global,   "raw",   "raw records");
        if (dedupCanvas) build(dedupCanvas, labels_global, dedupVals_global, "dedup", "unique events");
    }

    function build(canvas, labels, values, chartKey, tooltipLabel) {
        if (chartKey === "raw"   && rawChart)   { rawChart.destroy();   rawChart   = null; }
        if (chartKey === "dedup" && dedupChart) { dedupChart.destroy(); dedupChart = null; }

        // Parent must have position:relative and an explicit height for
        // Chart.js responsive:true + maintainAspectRatio:false to fill correctly.
        // CSS gives it width:100%; we set height here.
        const parent = canvas.parentElement;
        parent.style.position = "relative";
        parent.style.height   = "300px";

        // Canvas fills the parent; Chart.js does the rest.
        canvas.style.width  = "100%";
        canvas.style.height = "100%";

        const vw = parent.offsetWidth || window.innerWidth;
        const fontSize = Math.max(9, Math.round(12 * (vw < 500 ? vw / 500 : 1)));
        const maxLabelColWidth = Math.max(55, Math.floor(vw * 0.38));
        const maxChars = Math.floor(maxLabelColWidth / (fontSize * 0.58));

        const chart = new Chart(canvas, {
            type: "bar",
            data: {
                labels: labels,
                datasets: [{
                    label: tooltipLabel,
                    data: values,
                    backgroundColor: "rgba(102, 153, 255, 0.75)",
                    borderColor: "rgba(51, 102, 255, 0.9)",
                    borderWidth: 1,
                }]
            },
            options: {
                indexAxis: "y",
                responsive: true,
                maintainAspectRatio: false,
                animation: false,
                transitions: {
                    active: { animation: { duration: 0 } },
                    resize: { animation: { duration: 0 } }
                },
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        displayColors: false,
                        backgroundColor: "#333",
                        titleColor: "#fff",
                        bodyColor: "#fff",
                        callbacks: {
                            // Always show the full untruncated label in the tooltip
                            title: ctx => labels[ctx[0].dataIndex],
                            label: ctx => `${ctx.raw} ${tooltipLabel}`
                        }
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        ticks: {
                            precision: 0,
                            font: { size: fontSize }
                        }
                    },
                    y: {
                        afterFit(axis) {
                            // Hard-cap the label column so bars always have space
                            if (axis.width > maxLabelColWidth) axis.width = maxLabelColWidth;
                        },
                        grid: { display: false },
                        ticks: {
                            autoSkip: false,
                            font: { size: fontSize },
                            callback(val, idx) {
                                const label = labels[idx];
                                // Truncate with ellipsis if the label is too long for the column
                                return label.length > maxChars
                                    ? label.slice(0, maxChars - 1) + "…"
                                    : label;
                            }
                        }
                    }
                }
            }
        });

        if (chartKey === "raw")   rawChart   = chart;
        if (chartKey === "dedup") dedupChart = chart;
    }

    let resizeTimeout;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const rawCanvas   = document.getElementById("rawBarChart");
            const dedupCanvas = document.getElementById("dedupBarChart");
            if (rawCanvas   && labels_global) build(rawCanvas,   labels_global, rawVals_global,   "raw",   "raw records");
            if (dedupCanvas && labels_global) build(dedupCanvas, labels_global, dedupVals_global, "dedup", "unique events");
        }, 150);
    });

    return { generate };

})();
})();