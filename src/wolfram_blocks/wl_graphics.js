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
                }
            ], menus: {
                LINES: [
                    'Arrow',
                    'Line'
                ]
            }
        };
    }

    drawPlotLines(args, util) {
        return `Graphics[{Thickness[${args.THICK}],Cases[${args.PLOT}, Line[x_] :> {${args.COLOR}, ${args.LINE}[x]},
        Infinity]}]`;
    }

}

module.exports = WLGraphics;
