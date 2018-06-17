'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var polymerElement_js = require('@polymer/polymer/polymer-element.js');

/**
 * `WhcgChart`
 * 
 * @customElement
 * @polymer
 */

class WhcgChart extends polymerElement_js.PolymerElement {
    static get template() {
        return polymerElement_js.html `
        <style>
        :host {
            display: inline-block;
        }
        </style>
    <div>
        <canvas id="myChart" width$="{{width}}" height$="{{height}}"></canvas>
    </div>
        `
    }
    static get properties() {
        return {
            type: {
                type: String,
                notify: false,
                readOnly: false,
            },
    
            jsondata: {
                type: String,
                notify: false,
                readOnly: false,
                observer: '_jsondataChanged'
            },
            width: {
                type: String,
                notify: false,
                readOnly: false,
                value: '400px' 
            },
            height: {
                type: String,
                notify: false,
                readOnly: false,
                value: '400px' 
            },
            legendposition: {
                type: String,
                notify: false,
                readOnly: false,  
                value: 'right'
            },

            legendfontsize: {
                type: Number,
                notify: false,
                readOnly: false,
                value: 12  
            },

            legendfontfamily: {
                type: String,
                notify: false,
                readOnly: false,
                value: 'Arial' 
            },
        }
    }

    _jsondataChanged() {
      
        this._chartJs(JSON.parse(this.jsondata));
    }

    _chartJs(data) {
        var ctx = this.$.myChart;
        var myChart = new Chart(ctx, {
            type: this.type,
            data: data,
            options: {
                legend: {
                    position: this.legendposition,
                    labels: {
                        fontFamily: this.legendfontfamily,
                        fontSize: this.legendfontsize
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
    }
}

window.customElements.define('whcg-chart', WhcgChart);

exports.WhcgChart = WhcgChart;
