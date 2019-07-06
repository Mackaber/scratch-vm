const ArgumentType = require('../extension-support/argument-type');
const BlockType = require('../extension-support/block-type');
const WLArgumentTypes = require('../wolfram_blocks/wl_argument_types');

const blockIconURI = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHRpdGxlPm11c2ljLWJsb2NrLWljb248L3RpdGxlPjxkZWZzPjxwYXRoIGQ9Ik0zMi4xOCAyNS44NzRDMzIuNjM2IDI4LjE1NyAzMC41MTIgMzAgMjcuNDMzIDMwYy0zLjA3IDAtNS45MjMtMS44NDMtNi4zNzItNC4xMjYtLjQ1OC0yLjI4NSAxLjY2NS00LjEzNiA0Ljc0My00LjEzNi42NDcgMCAxLjI4My4wODQgMS44OS4yMzQuMzM4LjA4Ni42MzcuMTguOTM4LjMwMi44Ny0uMDItLjEwNC0yLjI5NC0xLjgzNS0xMi4yMy0yLjEzNC0xMi4zMDIgMy4wNi0xLjg3IDguNzY4LTIuNzUyIDUuNzA4LS44ODUuMDc2IDQuODItMy42NSAzLjg0NC0zLjcyNC0uOTg3LTQuNjUtNy4xNTMuMjYzIDE0LjczOHptLTE2Ljk5OCA1Ljk5QzE1LjYzIDM0LjE0OCAxMy41MDcgMzYgMTAuNDQgMzZjLTMuMDcgMC01LjkyMi0xLjg1Mi02LjM4LTQuMTM2LS40NDgtMi4yODQgMS42NzQtNC4xMzUgNC43NS00LjEzNSAxLjAwMyAwIDEuOTc1LjE5NiAyLjg1NS41NDMuODIyLS4wNTUtLjE1LTIuMzc3LTEuODYyLTEyLjIyOC0yLjEzMy0xMi4zMDMgMy4wNi0xLjg3IDguNzY0LTIuNzUzIDUuNzA2LS44OTQuMDc2IDQuODItMy42NDggMy44MzQtMy43MjQtLjk4Ny00LjY1LTcuMTUyLjI2MiAxNC43Mzh6IiBpZD0iYSIvPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjx1c2UgZmlsbD0iI0ZGRiIgeGxpbms6aHJlZj0iI2EiLz48cGF0aCBzdHJva2Utb3BhY2l0eT0iLjEiIHN0cm9rZT0iIzAwMCIgZD0iTTI4LjQ1NiAyMS42NzVjLS4wMS0uMzEyLS4wODctLjgyNS0uMjU2LTEuNzAyLS4wOTYtLjQ5NS0uNjEyLTMuMDIyLS43NTMtMy43My0uMzk1LTEuOTgtLjc2LTMuOTItMS4xNDItNi4xMTMtLjczMi00LjIyMy0uNjkzLTYuMDUuMzQ0LTYuNTI3LjUtLjIzIDEuMDYtLjA4IDEuODQuMzUuNDE0LjIyNyAyLjE4MiAxLjM2NSAyLjA3IDEuMjk2IDEuOTk0IDEuMjQyIDMuNDY0IDEuNzc0IDQuOTMgMS41NDggMS41MjYtLjIzNyAyLjUwNC0uMDYgMi44NzYuNjE4LjM0OC42MzUuMDE1IDEuNDE2LS43MyAyLjE4LTEuNDcyIDEuNTE2LTMuOTc1IDIuNTE0LTUuODQ4IDIuMDIzLS44MjItLjIyLTEuMjM4LS40NjUtMi4zOC0xLjI2N2wtLjA5NS0uMDY2Yy4wNDcuNTkzLjI2NCAxLjc0LjcxNyAzLjgwMy4yOTQgMS4zMzYgMi4wOCA5LjE4NyAyLjYzNyAxMS42NzRsLjAwMi4wMTJjLjUyOCAyLjYzNy0xLjg3MyA0LjcyNC01LjIzNiA0LjcyNC0zLjI5IDAtNi4zNjMtMS45ODgtNi44NjItNC41MjgtLjUzLTIuNjQgMS44NzMtNC43MzQgNS4yMzMtNC43MzQuNjcyIDAgMS4zNDcuMDg1IDIuMDE0LjI1LjIyNy4wNTcuNDM2LjExOC42MzYuMTg3em0tMTYuOTk2IDUuOTljLS4wMS0uMzE4LS4wOS0uODM4LS4yNjYtMS43MzctLjA5LS40Ni0uNTk1LTIuOTM3LS43NTMtMy43MjctLjM5LTEuOTYtLjc1LTMuODktMS4xMy02LjA3LS43MzItNC4yMjMtLjY5Mi02LjA1LjM0NC02LjUyNi41MDItLjIzIDEuMDYtLjA4MiAxLjg0LjM1LjQxNS4yMjcgMi4xODIgMS4zNjQgMi4wNyAxLjI5NSAxLjk5MyAxLjI0MiAzLjQ2MiAxLjc3NCA0LjkyNiAxLjU0OCAxLjUyNS0uMjQgMi41MDQtLjA2NCAyLjg3Ni42MTQuMzQ4LjYzNS4wMTUgMS40MTUtLjcyOCAyLjE4LTEuNDc0IDEuNTE3LTMuOTc3IDIuNTEzLTUuODQ3IDIuMDE3LS44Mi0uMjItMS4yMzYtLjQ2NC0yLjM3OC0xLjI2N2wtLjA5NS0uMDY1Yy4wNDcuNTkzLjI2NCAxLjc0LjcxNyAzLjgwMi4yOTQgMS4zMzcgMi4wNzggOS4xOSAyLjYzNiAxMS42NzVsLjAwMy4wMTNjLjUxNyAyLjYzOC0xLjg4NCA0LjczMi01LjIzNCA0LjczMi0zLjI4NyAwLTYuMzYtMS45OTMtNi44Ny00LjU0LS41Mi0yLjY0IDEuODg0LTQuNzMgNS4yNC00LjczLjkwNSAwIDEuODAzLjE1IDIuNjUuNDM2eiIvPjwvZz48L3N2Zz4=';


class WLElseBlocks {
    constructor(runtime) {
        this.runtime = runtime;
    }

    getInfo() {
        return {
            id: 'wlElseBlocks',
            name: 'Blocks without classification',
            color1: '#4D97FF',
            color2: '#1975ff',
            blocks: [
                {
                    opcode: 'romanNumeral',
                    blockType: BlockType.REPORTER,
                    text: "Roman Number #[NUMBER]",
                    arguments: {
                        STR1: {
                            type: ArgumentType.STRING
                        },
                        STR2: {
                            type: ArgumentType.STRING
                        }
                    }
                }, {
                    opcode: 'drawDisk',
                    blockType: BlockType.REPORTER,
                    text: "Draw a Disk starting in [DEG1] ending in [DEG2]",
                    arguments: {
                        DEG1: {
                            type: ArgumentType.NUMBER,
                            defaultValue: "90"
                        },
                        DEG2: {
                            type: ArgumentType.NUMBER,
                            defaultValue: "180"
                        }
                    }
                }, {
                    opcode: 'colorReplace',
                    blockType: BlockType.REPORTER,
                    text: "Replace [IMAGE] color [COLOR1] with [COLOR2]",
                    arguments: {
                        IMAGE: {
                            type: ArgumentType.STRING
                        },
                        COLOR1: {
                            type: ArgumentType.STRING,
                            defaultValue: "Blue"
                        },
                        COLOR2: {
                            type: ArgumentType.STRING,
                            defaultValue: "Red"
                        }
                    }
                },{
                    opcode: 'barChart',
                    blockType: BlockType.REPORTER,
                    text: "Make a BarChart of [DATA]",
                    arguments: {
                        DATA: {
                            type: ArgumentType.STRING,
                        }
                    }
                },{
                    opcode: 'counts',
                    blockType: BlockType.REPORTER,
                    text: "Count the elements in [LIST]",
                    arguments: {
                        LIST: {
                            type: ArgumentType.STRING,
                        }
                    }
                },{
                    opcode: 'characters',
                    blockType: BlockType.REPORTER,
                    text: "Get the characters from [STR]",
                    arguments: {
                        STR: {
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
                },{
                    opcode: 'randomColor',
                    blockType: BlockType.REPORTER,
                    text: "Random Color"
                }
            ],
            menus:  {
                LINES: [
                    'Arrow',
                    'Line'
                ]
            }
        }
    }

    romanNumeral(args, util) {
        return "";
    }

    drawDisk(args) {
        return "Disk[{}]";
    }

    colorReplace(args,util) {
        return `ColorReplace[${args.IMAGE},{${args.COLOR1} -> ${args.COLOR2}}]`;
    }

    barChart(args,util) {
        return `BarChart[${args.DATA}, {ChartLabels->Automatic}]`;
    }

    counts(args,util) {
        return `Counts[${args.LIST}]`;
    }

    characters(args,util) {
        return `Characters[ToString[${args.STR}]]`;
    }

    popularCurvePlot(args,util) {
        return `Entity["PopularCurve", "${args.CURVE}Curve"]["Plot"]`;
    }

    drawPlotLines(args,util) {
        return `Graphics[{Thickness[${args.THICK}],Cases[${args.PLOT}, Line[x_] :> {${args.COLOR}, ${args.LINE}[x]},
        Infinity]}]`;
    }

    randomColor(args,util) {
        return `RandomChoice[ColorData[83, "ColorList"]]`;
    }

}

module.exports = WLElseBlocks;
