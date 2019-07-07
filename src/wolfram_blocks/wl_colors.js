const BlockType = require('../extension-support/block-type');

class WLColors {
    constructor(runtime) {
        this.runtime = runtime;
    }

    getInfo() {
        return {
            id: 'wlColors',
            name: 'Colors',
            color1: "#E468FF",
            color2: "#dc00ff",
            blocks: [
                {
                    opcode: 'red',
                    blockType: BlockType.REPORTER,
                    text: "Red",
                },
                {
                    opcode: 'orange',
                    color1: '#FF8C00',
                    color2: '#FF8C00',
                    blockType: BlockType.REPORTER,
                    text: "Orange",
                },
                {
                    opcode: 'yellow',
                    color1: '#FFEE00',
                    color2: '#FFEE00',
                    blockType: BlockType.REPORTER,
                    text: "Yellow",
                },
                {
                    opcode: 'green',
                    color1: '#4DE94C',
                    color2: '#4DE94C',
                    blockType: BlockType.REPORTER,
                    text: "Green",
                },
                {
                    opcode: 'blue',
                    color1: '#3783FF',
                    color2: '#3783FF',
                    blockType: BlockType.REPORTER,
                    text: "Blue",
                },
                {
                    opcode: 'violet',
                    color1: '#4815AA',
                    color2: '#4815AA',
                    blockType: BlockType.REPORTER,
                    text: "Violet",
                }, {
                    opcode: 'randomColor',
                    blockType: BlockType.REPORTER,
                    text: "Random Color"
                }
            ]
        };
    }

    _colorSquare(color) {
        return ``;
    }

    red() {
        return 'RGBColor["#F60000"]';
    }

    orange() {
        return 'RGBColor["#FF8C00"]';
    }

    yellow() {
        return 'RGBColor["#FFEE00"]';
    }

    green() {
        return 'RGBColor["#4DE94C"]';
    }

    blue() {
        return 'RGBColor["#3783FF"]';
    }

    violet() {
        return 'RGBColor["#4815AA"]';
    }

    randomColor() {
        return `RandomChoice[ColorData[83, "ColorList"]]`;
    }
}

module.exports = WLColors;
