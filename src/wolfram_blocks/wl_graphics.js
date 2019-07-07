const ArgumentType = require('../extension-support/argument-type');
const BlockType = require('../extension-support/block-type');

class WLGraphics {
    constructor(runtime) {
        this.runtime = runtime;
    }

    getInfo() {
        return {
            id: 'wlGraphics',
            name: 'Graphics',
            color1: '#C73AE8',
            color2: '#c608e8',
            blocks: [
                {
                    opcode: 'barChart',
                    blockType: BlockType.REPORTER,
                    text: "Make a BarChart of [DATA]",
                    arguments: {
                        DATA: {
                            type: ArgumentType.STRING,
                        }
                    }
                },{
                    opcode: 'popularCurvePlot',
                    blockType: BlockType.REPORTER,
                    text: "Draw the plot of [CURVE]",
                    arguments: {
                        CURVE: {
                            type: ArgumentType.STRING,
                            defaultValue: 'Mario',
                        }
                    }
                },{
                    opcode: 'drawPlotLines',
                    blockType: BlockType.REPORTER,
                    text: "Draw the [LINE]s of Plot [PLOT] with the color [COLOR] and thickness [THICK]",
                    arguments: {
                        THICK: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0.001
                        },
                        PLOT: {
                            type: ArgumentType.STRING,
                        },
                        COLOR: {
                            type: ArgumentType.STRING,
                            defaultValue: 'Green',
                        },
                        LINE: {
                            type: ArgumentType.LINE,
                            defaultValue: 'Line',
                            menu: 'LINES'
                        }
                    }
                }
            ], menus: {
                LINES: [
                    'Arrow',
                    'Line'
                ]
            }
        };
    }

    popularCurvePlot(args, util) {
        return `Entity["PopularCurve", "${args.CURVE}Curve"]["Plot"]`;
    }

    drawPlotLines(args, util) {
        return `Graphics[{Thickness[${args.THICK}],Cases[${args.PLOT}, Line[x_] :> {${args.COLOR}, ${args.LINE}[x]},
        Infinity]}]`;
    }

    barChart(args, util) {
        return `BarChart[${args.DATA}, {ChartLabels->Automatic}]`;
    }
}

module.exports = WLGraphics;
