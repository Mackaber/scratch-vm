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
                    text: "Join word [STR1] with [STR2]",
                    arguments: {
                        STR1: {
                            type: ArgumentType.STRING
                        },
                        STR2: {
                            type: ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: 'stringReverse',
                    blockType: BlockType.REPORTER,
                    text: "Reverse word [STR]",
                    arguments: {
                        STR: {
                            type: ArgumentType.STRING
                        }
                    }
                }
            ]
        }
    }

    stringJoin(args, util) {
        return `StringJoin[ToString[${args.STR1}],ToString[${args.STR2}]]`;
    }

    stringReverse(args,util) {
        return `StringReverse[ToString[${args.STR}]]`;
    }
}

module.exports = WLStringBlocks;
