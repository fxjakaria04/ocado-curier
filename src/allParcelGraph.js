// Chart 1 configuration
var options1 = {
    series: [75],
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
    fill: { colors: ['#5DCC77'] },
    stroke: { lineCap: 'round' }
};
var chart1 = new ApexCharts(document.querySelector("#chartRes1"), options1);
chart1.render();

// Chart 2 configuration
var options2 = {
    series: [50],
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
    fill: { colors: ['#EE4343'] },
    stroke: { lineCap: 'round' }
};
var chart2 = new ApexCharts(document.querySelector("#chartRes2"), options2);
chart2.render();

// Chart 3 configuration
var options3 = {
    series: [30],
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
    fill: { colors: ['#FF773C'] },
    stroke: { lineCap: 'round' }
};
var chart3 = new ApexCharts(document.querySelector("#chartRes3"), options3);
chart3.render();

// Chart 4 configuration
var options4 = {
    series: [85],
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
    fill: { colors: ['#5DCC77'] },
    stroke: { lineCap: 'round' }
};
var chart4 = new ApexCharts(document.querySelector("#chartRes4"), options4);
chart4.render();

// Chart 5 configuration
var options5 = {
    series: [60],
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
    fill: { colors: ['#EE4343'] },
    stroke: { lineCap: 'round' }
};
var chart5 = new ApexCharts(document.querySelector("#chartRes5"), options5);
chart5.render();

// Chart 6 configuration
var options6 = {
    series: [45],
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
    fill: { colors: ['#FF773C'] },
    stroke: { lineCap: 'round' }
};
var chart6 = new ApexCharts(document.querySelector("#chartRes6"), options6);
chart6.render();


// JavaScript to handle checking/unchecking
document.getElementById('checkbox-parent').addEventListener('change', function() {
    // Get the checked status of the parent checkbox
    const isChecked = this.checked;
    
    // Select all child checkboxes and set their checked status to match the parent
    document.querySelectorAll('.checkbox-child').forEach(child => {
        child.checked = isChecked;
    });
});
