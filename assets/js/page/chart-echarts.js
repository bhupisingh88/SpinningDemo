$(function (e) {
    'use strict'

    /* Chart data*/
    var chartdata = [
        {
            name: 'Actual Run Time',
            type: 'bar',
            data: [11, 14, 8, 16, 11, 13,30,40,20,30]
        },        
        {
            name: 'Available Run Time',
            type: 'bar',
            data: [10, 14, 10, 15, 9, 25,30,9, 25,30]
        },
		{
            name: 'Efficiency  ',
            type: 'line',
            smooth: true,
			lineStyle:{width:4},
            data: [10, 7, 17, 11, 15,15,32,10, 7, 17],
            symbolSize: 15,
		    
        }
    ];

    /* Bar chart echartopt1*/
    var chart = document.getElementById('echart_bar_line');
    var barChart = echarts.init(chart);

    var option = {
        /*grid: {
            top: '40',
            right: '30',
            bottom: '22',
            left: '25',
        },*/
        xAxis: {
            data: ['Day1', 'Day2', 'Day3', 'Day4', 'Day5', 'Day6', 'Day7','Day8','Day9','Day10'],
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
        legend: {display: true,
            position: "top",
            horizontalAlign: "center",
            floating: true,
            offsetY: -4,
            offsetX: -0
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
        color: ['#9f78ff ', '#32cafe', '#fa626b',]
    };

    barChart.setOption(option);

    /* Production Graph */
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
            data: ["Day1", "Day2", "Day3", "Day4", "Day5", "Day6", "Day7","Day8","Day9","Day10"],
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
            data: [50, 54, 37, 99, 25.6, 76,50, 54, 37, 99.5],
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

   
 
      /* Consumption line chart */
    var chart = document.getElementById('echart_area_line');
    var lineChart = echarts.init(chart);

    lineChart.setOption({
        tooltip: {
            trigger: "axis"
        },
        legend: {
            textStyle: { color: '#9aa0ac' },
            data: ["Consumption"]
        },
        calculable: !0,
        xAxis: [{
            type: "category",
            boundaryGap: !1,
            data: ["Day1", "Day2", "Day3", "Day4", "Day5", "Day6", "Day7","Day8","Day9","Day10"],
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
            name: "Consumption",
            type: "line",
            smooth: !0,
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: "default"
                    }
                }
            },
            data: [30, 182, 434, 791, 390, 50, 40,390, 30, 10]
        }],
        color: ['#32cafe',]
    });    
       /* Waste line chart */
    var chart = document.getElementById('echart_area_line_consumaption');
    var lineChart = echarts.init(chart);

    lineChart.setOption({
        tooltip: {
            trigger: "axis"
        },
        legend: {
            textStyle: { color: '#9aa0ac' },
            data: ["Power"]
        },
        calculable: !0,
        xAxis: [{
            type: "category",
            boundaryGap: !1,
            data: ["Day1", "Day2", "Day3", "Day4", "Day5", "Day6", "Day7","Day8","Day9","Day10"],
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
            data: [10, 12, 21, 54, 260, 830, 710, 260, 830, 710]
        }],
        color: ['#fa626b']
    });

    /* Donut Chart */
  /* Bar chart Stoppage Pump*/
  
   /* Bar Graph */
    var chart = document.getElementById('echart_Stoppage_Pump_line');
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
            data: ["Pump1", "Pump2", "Pump3", "Pump4", "Pump5", "Pump6", "Pump7","Pump8","Pump9","Pump10","Pump11", "Pump12", "Pump13", "Pump14", "Pump15", "Pump16", "Pump17","Pump18","Pump19","Pump20","Pump21", "Pump22", "Pump23", "Pump24", "Pump25", "Pump26", "Pump27","Pump28","Pump29","Pump30","Pump31", "Pump32", "Pump33", "Pump34", "Pump35", "Pump36", "Pump37","Pump38","Pump39","Pump40"],
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
            data: [6, 54, 37, 29, 25, 76,50, 54, 37, 9,50, 54, 37, 10, 25, 76,50, 54, 37, 49,50, 54, 37, 4, 5, 76,50, 54, 37,77,50, 54, 37, 99, 25, 76,50, 54, 37, 44],
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
        color: ['#3498DB']

    });
});

