var windowHeight;
var chart;
var j1 = "Benjamin";
var j2 = "Erwan";
var j3 = "Franck";
var j4 = "Richard";
var j5 = "Tarik";
var scores = new Array(j1,j2,j3,j4,j5);

$(document).ready(function (){
    windowHeight = $(window).height();
    windowWidth = $(window).width();
    $("div#graphScores").click(function(){
        graphScores();
    });
    $("div#graphFriendSuccess").click(function(){
        graphFriendSuccess();
    });
    $("div#graphDealer").click(function(){
        graphDealer();
    });
    $("div#graphLuck").click(function(){
        graphLuck();
    });
    $("div#graphWinRate").click(function(){
        graphWinRate();
    });
    
    initScores();
    calculateScores();
});

function initScores(){
    scores[j1] = new Array();
    scores[j2] = new Array();
    scores[j3] = new Array();
    scores[j4] = new Array();
    scores[j5] = new Array();
    
    scores[j1].push(0);
    scores[j2].push(0);
    scores[j3].push(0);
    scores[j4].push(0);
    scores[j5].push(0);
}

function calculateScores(){
    var compteur = 30;
    var i = 1;
    for(i; i<compteur; i++){
        scores[j1].push(scores[j1][i-1]+Math.floor((Math.random()-0.5))*10);
        scores[j2].push(scores[j1][i-1]+Math.floor((Math.random()-0.5))*20);
        scores[j3].push(scores[j1][i-1]+Math.floor((Math.random()-0.5))*30);
        scores[j4].push(scores[j1][i-1]+Math.floor((Math.random()-0.5))*40);
        scores[j5].push(scores[j1][i-1]+Math.floor((Math.random()-0.5))*50);
    }
}

function graphScores(){
    $("div#graph").highcharts({
        chart: {
            zoomType: 'x',
            animation: false
        },
        title: {
            text: 'Evolution des scores',
            x: -20 //center
        },
        yAxis: {
            title: {
                text: 'Points'
            },
            plotLines: [{
                value: 0,
                width: 3,
                color: 'black'
            }]
        },
        tooltip: {
            formatter: function () {
                return 'The value for <b>' + this.x +
                    '</b> is <b>' + this.y + '</b>';
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        plotOptions: {
            series: {
                animation: false
            }
        },
        series: [{
            name: j1,
            data: scores[j1]
        }, {
            name: j2,
            data: scores[j2]
        }, {
            name: j3,
            data: scores[j3]
        }, {
            name: j4,
            data: scores[j4]
        },{
            name: j5,
            data: scores[j5]
        }]
    },function(){
        chart = $("#graph").highcharts();
        chart.setSize(windowWidth,windowHeight*(4/5));
    });

    
}

function graphFriendSuccess(){
    $('#graph').highcharts({
        chart: {
            type: 'area',
            animation: false
        },
        title: {
            text: 'US and USSR nuclear stockpiles'
        },
        subtitle: {
            text: 'Source: <a href="http://thebulletin.metapress.com/content/c4120650912x74k7/fulltext.pdf">' +
                'thebulletin.metapress.com</a>'
        },
        xAxis: {
            allowDecimals: false,
            labels: {
                formatter: function () {
                    return this.value; // clean, unformatted number for year
                }
            }
        },
        yAxis: {
            title: {
                text: 'Nuclear weapon states'
            },
            labels: {
                formatter: function () {
                    return this.value / 1000 + 'k';
                }
            }
        },
        tooltip: {
            pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
        },
        plotOptions: {
            area: {
                pointStart: 1940,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            },
            series: {
                animation: false
            }
        },
        series: [{
            name: 'USA',
            data: [null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640,
                1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
                27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
                26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
                24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
                22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
                10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104]
        }, {
            name: 'USSR/Russia',
            data: [null, null, null, null, null, null, null, null, null, null,
                5, 25, 50, 120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322,
                4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
                15915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049,
                33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000, 37000,
                35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
                21000, 20000, 19000, 18000, 18000, 17000, 16000]
        }]
    },function(){
        chart = $("#graph").highcharts();
        chart.setSize(windowWidth,windowHeight*(4/5));
    });
}

function graphDealer(){
     $('#graph').highcharts({
        chart: {
            type: 'column',
            animation: false
        },
        title: {
            text: 'Monthly Average Rainfall'
        },
        subtitle: {
            text: 'Source: WorldClimate.com'
        },
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Rainfall (mm)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            },
            series: {
                animation: false
            }
        },
        series: [{
            name: 'Tokyo',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

        }, {
            name: 'New York',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

        }, {
            name: 'London',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

        }, {
            name: 'Berlin',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

        }]
    },function(){
        chart = $("#graph").highcharts();
        chart.setSize(windowWidth,windowHeight*(4/5));
    });
}

function graphLuck(){
    $('#graph').highcharts({
        chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                animation: false
            },
            title: {
                text: 'Browser market shares at a specific website, 2014'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                },
                series: {
                    animation: false
                }
            },
            series: [{
                type: 'pie',
                name: 'Browser share',
                data: [
                    ['Firefox',   45.0],
                    ['IE',       26.8],
                    {
                        name: 'Chrome',
                        y: 12.8,
                        sliced: true,
                        selected: true
                    },
                    ['Safari',    8.5],
                    ['Opera',     6.2],
                    ['Others',   0.7]
                ]
            }]
        },function(){
            chart = $("#graph").highcharts();
            chart.setSize(windowWidth,windowHeight*(4/5));
        });
}

function graphWinRate(){
   $('#graph').highcharts({
        chart: {
            animation: false,
            zoomType: 'xy'
        },
        title: {
            text: 'Average Monthly Temperature and Rainfall in Tokyo'
        },
        subtitle: {
            text: 'Source: WorldClimate.com'
        },
        xAxis: [{
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}°C',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            title: {
                text: 'Temperature',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }, { // Secondary yAxis
            title: {
                text: 'Rainfall',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                format: '{value} mm',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 120,
            verticalAlign: 'top',
            y: 100,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },plotOptions: {
            line: {
                animation: false
            }
        },
        series: [{
            name: 'Rainfall',
            type: 'column',
            yAxis: 1,
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            tooltip: {
                valueSuffix: ' mm'
            }

        }, {
            name: 'Temperature',
            type: 'spline',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
            tooltip: {
                valueSuffix: '°C'
            }
        }]
    },function(){
        chart = $("#graph").highcharts();
        chart.setSize(windowWidth,windowHeight*(4/5));
    });
}
