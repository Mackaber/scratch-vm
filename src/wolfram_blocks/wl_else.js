const ArgumentType = require('../extension-support/argument-type');
const BlockType = require('../extension-support/block-type');

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
                }
            ],

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

    counts(args,util) {
        return `Counts[${args.LIST}]`;
    }

    characters(args,util) {
        return `Characters[ToString[${args.STR}]]`;
    }

}

module.exports = WLElseBlocks;
