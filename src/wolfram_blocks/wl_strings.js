const ArgumentType = require('../extension-support/argument-type');
const BlockType = require('../extension-support/block-type');

class WLStringBlocks {
    constructor (runtime) {
        this.runtime = runtime;
    }

    getInfo() {
        return {
            id: 'wlStringBlocks',
            name: 'String Manipulation',
            color1: "#FF8466",
            color2: "#ff653a",
            blocks: [
                {
                    opcode: 'stringJoin',
                    blockType: BlockType.REPORTER,
                    text: "StringJoin［[STR1],[STR2]］",
                    arguments: {
                        STR1: {
                            type: ArgumentType.STRING,
                            defaultValue: '"String"'
                        },
                        STR2: {
                            type: ArgumentType.STRING,
                            defaultValue: '"String"'
                        }
                    }
                },
                {
                    opcode: 'stringReverse',
                    blockType: BlockType.REPORTER,
                    text: "StringReverse［[STR]］",
                    arguments: {
                        STR: {
                            type: ArgumentType.STRING,
                            defaultValue: '"String"'
                        }
                    }
                }
            ]
        }
    }

    stringJoin(args, util) {
        return `StringJoin[${args.STR1},${args.STR2}]`;
    }

    stringReverse(args,util) {
        return `StringReverse[${args.STR}]`;
    }
}

module.exports = WLStringBlocks;
