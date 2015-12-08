/**
 * Theme for Highcharts JS, Dutch version
 * @author Laurens Zwakhals
 * @date 2015-12-08
 **/

Highcharts.setOptions({
	lang: {
		months: ['januari', 'februari', 'maart', 'april', 'mei', 'juni',  'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
		weekdays: ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'],
		numericSymbols: null,
		decimalPoint: ',',
		thousandsSep: '.',
		loading: 'laden...',
		contextButtonTitle: 'Exporteer grafiek',
		printChart: 'Print grafiek',
		downloadPNG: 'Download als PNG',
		downloadPDF: 'Download als PDF',
		downloadSVG: 'Download als SVG'
	}
});
 
Highcharts.theme = {
	colors: ['#d95f02', '#1b9e77', '#7570b3'],
	credits: {
		text: '',
		position: {
            verticalAlign: 'bottom'
        }
	},
	title: {
		align: 'left',
		style: {
			fontSize: '13px',
			color: '#333333'
			},
		margin: 30, //This setting seems to have a bug
		x: -8
	},
	subtitle: {
		align: 'left',
				style: {
					fontSize: '9pt',
					color: '#333333'
				},
				x: -8,
				y: 30 //Default, bij een regel van de titel is het 30, bij twee regels 43
	},
	xAxis: {
		tickLength: 3,
		tickColor: '#c0c0c0',
		lineColor: '#c0c0c0',
		labels: {
			style: {
				color: '#707070'
			},
			staggerLines: 1,
			overflow: 'justify'
		},
		title: {
			align: 'high'
		}
	},
	yAxis: {
        title: {
			align: 'high',
			//font: '9pt Trebuchet MS, Verdana, sans-serif',
			rotation: 0,
			y: -9
        },
		labels: {
			style: {
				color: '#707070'
			}
		},
		lineWidth: 1,
		lineColor: '#c0c0c0',
		gridLineDashStyle: 'dash'
    },
	legend: {
		margin: 0,
		symbolWidth: 24,
		symbolHeight: 12,
		y: -10,
		itemStyle: {
			//font: '9pt Trebuchet MS, Verdana, sans-serif',
			color: '#707070'
		},
		itemHoverStyle: {
			color: '#000000'
		},
		itemHiddenStyle: {
			color: '#c8c8c8'
		}
	},
	tooltip: {
		/*crosshairs: true,
		shared: true,*/
		hideDelay: 0,
		backgroundColor: 'rgba(255, 255, 255, 0.85)',
		borderColor: '#c0d0e0',
		shadow: true
	},
	plotOptions: {
		line: {
			marker: {
				enabled: false
			}
		},
		areaspline: {
			marker: {
				enabled: false
			}
		}
	},
	labels: {
		style: {
			color: '#707070'
		}
	},
	navigation: {
        buttonOptions: {
			symbolStroke: "#c0c0c0"
        }
    },
	exporting: {
        buttons: {
            contextButton: {
           		menuItems: [{
					textKey: 'printChart',
					onclick: function () {
					this.print();
					}
				},{
					separator: true
				},{
					textKey: 'downloadPNG',
					onclick: function () {
					this.exportChart();
					}
				},{
					textKey: 'downloadPDF',
					onclick: function () {
						this.exportChart({
						type: 'application/pdf'
						});
					}
				},{
					textKey: 'downloadSVG',
					onclick: function () {
						this.exportChart({
						type: 'image/svg+xml'
						});
					}
				}]
            }
        }
    }
};

// Setting the theme
var highchartsOptions = Highcharts.setOptions(Highcharts.theme);
