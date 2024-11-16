function createChart(containerId, seriesValue, color) {
    var options = {
        series: [seriesValue],
        chart: {
            height: 96,
            type: 'radialBar',
            toolbar: { show: true }
        },
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 225,
                hollow: {
                    margin: 0,
                    size: '60%',
                    background: '#fff',
                    position: 'front'
                },
                track: {
                    background: '#000',
                    strokeWidth: '100%',
                    margin: 0,
                    dropShadow: {
                        enabled: true,
                        top: 0,
                        left: 0,
                        blur: 0,
                        opacity: 1
                    }
                },
                dataLabels: {
                    show: false,
                    name: { offsetY: -10, show: true, color: '#888', fontSize: '17px' },
                    value: {
                        formatter: function(val) { return parseInt(val); },
                        color: '#111',
                        fontSize: '36px',
                        show: true
                    }
                }
            }
        },
        fill: { colors: [color] },
        stroke: { lineCap: 'round' }
    };
    var chart = new ApexCharts(document.querySelector(containerId), options);
    chart.render();
}

// Colors for the charts
var colors = ['#5DCC77', '#EE4343', '#FF773C', '#5DCC77', '#EE4343', '#FF773C'];
var seriesValues = [85, 60, 45, 75, 50, 30];

// Create 8 charts dynamically
for (let i = 1; i <= 6; i++) {
    createChart(`#chartRes${i}`, seriesValues[i - 1], colors[(i - 1) % colors.length]);
}