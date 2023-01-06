"use strict";


var draw = Chart.controllers.line.prototype.draw;
Chart.controllers.lineShadow = Chart.controllers.line.extend({
	draw: function () {
		draw.apply(this, arguments);
		var ctx = this.chart.chart.ctx;
		var _stroke = ctx.stroke;
		ctx.stroke = function () {
			ctx.save();
			ctx.shadowColor = '#00000075';
			ctx.shadowBlur = 10;
			ctx.shadowOffsetX = 8;
			ctx.shadowOffsetY = 8;
			_stroke.apply(this, arguments)
			ctx.restore();
		}
	}
});

//------------------------------------------------------------------------------------------
var ctx = document.getElementById('line-chart3').getContext("2d");


var gradientStroke = ctx.createLinearGradient(500, 0, 0, 0);
gradientStroke.addColorStop(0, 'rgba(155, 89, 182, 1)');
gradientStroke.addColorStop(1, 'rgba(231, 76, 60, 1)');


var myChart = new Chart(ctx, {
	type: 'lineShadow',
	data: {
		labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
		type: 'line',
		defaultFontFamily: 'Poppins',
		datasets: [{
			label: "Foods",
			data: [0, 30, 10, 120, 50, 63, 10],
			borderColor: gradientStroke,
			pointBorderColor: gradientStroke,
			pointBackgroundColor: gradientStroke,
			pointHoverBackgroundColor: gradientStroke,
			pointHoverBorderColor: gradientStroke,
			pointBorderWidth: 10,
			pointHoverRadius: 10,
			pointHoverBorderWidth: 1,
			pointRadius: 1,
			fill: false,
			borderWidth: 4,
		}, {
			label: "Electronics",
			data: [0, 50, 40, 80, 40, 79, 120],
			borderColor: gradientStroke,
			pointBorderColor: gradientStroke,
			pointBackgroundColor: gradientStroke,
			pointHoverBackgroundColor: gradientStroke,
			pointHoverBorderColor: gradientStroke,
			pointBorderWidth: 10,
			pointHoverRadius: 10,
			pointHoverBorderWidth: 1,
			pointRadius: 1,
			fill: false,
			borderWidth: 4,
		}]
	},
	options: {
		legend: {
			position: "bottom"
		},
		tooltips: {
			mode: 'index',
			titleFontSize: 12,
			titleFontColor: '#fff',
			bodyFontColor: '#fff',
			backgroundColor: '#000',
			titleFontFamily: 'Poppins',
			bodyFontFamily: 'Poppins',
			cornerRadius: 3,
			intersect: false,
		},
		scales: {
			yAxes: [{
				ticks: {
					fontColor: "#9aa0ac", // Font Color
					fontStyle: "bold",
					beginAtZero: true,
					maxTicksLimit: 5,
					padding: 20
				},
				gridLines: {
					drawTicks: false,
					display: false
				}

			}],
			xAxes: [{
				gridLines: {
					zeroLineColor: "transparent"
				},
				ticks: {
					padding: 20,
					fontColor: "#9aa0ac", // Font Color
					fontStyle: "bold"
				}
			}]
		}
	}
});
//------------------------------------------------------------------------------------------
