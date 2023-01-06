$(function (e) {
    'use strict'

    /* Chart data*/
    var chartdata = [
        {
            name: 'Actual Run Time',
            type: 'bar',
            data: [11, 14, 8, 16, 11, 13,30]
        },        
        {
            name: 'Available Run Time',
            type: 'bar',
            data: [10, 14, 10, 15, 9, 25,30]
        },
		{
            name: 'Efficiency  ',
            type: 'line',
            smooth: true,
			lineStyle:{width:4},
            data: [10, 7, 17, 11, 15,15,32],
            symbolSize: 15,
		    
        }
    ];

    /* Bar chart echartopt1*/
    var chart = document.getElementById('echart_bar_line');
    var barChart = echarts.init(chart);

    var option = {
        grid: {
            top: '6',
            right: '0',
            bottom: '17',
            left: '25',
        },
        xAxis: {
            data: ['Day1', 'Day2', 'Day3', 'Day4', 'Day5', 'Day6', 'Day7'],
            axisLine: {
                lineStyle: {
                    color: '#eaeaea' 
                }
            },
            axisLabel: {
                fontSize: 10,
                color: '#17202A'
            },
		
        },
	
        tooltip: {
            show: true,
            showContent: true,
            alwaysShowContent: false,
            triggerOn: 'mousemove',
            trigger: 'axis',
            axisPointer:
            {
                label: {
                    show: false,
                }
            }

        },
        yAxis: {
            splitLine: {
                lineStyle: {
                    color: '#eaeaea'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#eaeaea'
                }
            },
            axisLabel: {
                fontSize: 10,
                color: '#17202A'
            }
        },
        series: chartdata,
        color: ['#9f78ff', '#32cafe', '#fa626b',]
    };

    barChart.setOption(option);


   



    /* Bar chart */

    


    /* Bar Graph */
    var chart = document.getElementById('echart_graph_line');
    var barChart = echarts.init(chart);

    barChart.setOption({
        tooltip: {
            trigger: "axis"
        },
        legend: {
            textStyle: { color: '#9aa0ac' },
            data: ["Production"]
        },
        toolbox: {
            show: !1
        },
        calculable: !1,
        xAxis: [{
            type: "category",
            data: ["Day1", "Day2", "Day3", "Day4", "Day5", "Day6"],
            axisLabel: {
                fontSize: 10,
                color: '#17202A'
            }
        }],
        yAxis: [{
            type: "value",
            axisLabel: {
                fontSize: 10,
                color: '#17202A'
            }
        }],
        series: [{
            name: "Production",
            type: "bar",
            data: [50, 54, 37, 99, 25.6, 76],
            markPoint: {
                data: [{
                    type: "max",
                    name: "???"
                }, {
                    type: "min",
                    name: "???"
                }]
            },
            markLine: {
                data: [{
                    type: "average",
                    name: "???"
                }]
            }
        }],
        color: ['#2ECC71']

    });

   
    /* line chart */
      /* line chart */
    var chart = document.getElementById('echart_area_line');
    var lineChart = echarts.init(chart);

    lineChart.setOption({
        tooltip: {
            trigger: "axis"
        },
        legend: {
            textStyle: { color: '#9aa0ac' },
            data: ["Deal"]
        },
        calculable: !0,
        xAxis: [{
            type: "category",
            boundaryGap: !1,
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            axisLabel: {
                fontSize: 10,
                color: '#17202A'
            }
        }],
        yAxis: [{
            type: "value",
            axisLabel: {
                fontSize: 10,
                color: '#17202A'
            }
        }],
        series: [{
            name: "Spin Finish Oil",
            type: "line",
            smooth: !0,
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: "default"
                    }
                }
            },
            data: [30, 182, 434, 791, 390, 30, 10]
        }],
        color: ['#32cafe',]
    });    
       /* Power line chart */
    var chart = document.getElementById('echart_area_line_consumaption');
    var lineChart = echarts.init(chart);

    lineChart.setOption({
        tooltip: {
            trigger: "axis"
        },
        legend: {
            textStyle: { color: '#9aa0ac' },
            data: ["Pre-order"]
        },
        calculable: !0,
        xAxis: [{
            type: "category",
            boundaryGap: !1,
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            axisLabel: {
                fontSize: 10,
                color: '#17202A'
            }
        }],
        yAxis: [{
            type: "value",
            axisLabel: {
                fontSize: 10,
                color: '#17202A'
            }
        }],
        series: [{
            name: "Power",
            type: "line",
            smooth: !0,
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: "default"
                    }
                }
            },
            data: [10, 12, 21, 54, 260, 830, 710]
        }],
        color: ['#fa626b']
    });

    /* Donut Chart */
  

});

