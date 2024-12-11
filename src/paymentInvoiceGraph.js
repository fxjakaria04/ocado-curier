        function createChart(containerId, seriesValue, color) {
            var options = {
                series: [seriesValue],
                chart: {
                    height: 100,
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
        var colors = ['#16A7D3', '#FF7D00', '#57CC99', '#FFBB00','#16A7D3', '#FF7D00', '#57CC99', '#FFBB00'];
        var seriesValues = [70, 55, 80, 90, 40, 65, 75, 10];

        // Create 8 charts dynamically
        for (let i = 1; i <= 8; i++) {
            createChart(`#chartRes${i}`, seriesValues[i - 1], colors[(i - 1) % colors.length]);
        }