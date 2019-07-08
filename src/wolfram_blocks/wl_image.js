const ArgumentType = require('../extension-support/argument-type');
const BlockType = require('../extension-support/block-type');

class WLImageBlocks {
    constructor (runtime) {
        this.runtime = runtime;
    }

    getInfo () {
        return {
            id: 'wlImageBlocks',
            name: 'Image Manipulation',
            color1: "#32c27c",
            color2: "#03c25a",
            blocks: [
                {
                    opcode: 'currentImage',
                    blockType: BlockType.REPORTER,
                    text: 'CurrentImage［］'
                },
                {
                    opcode: 'colorNegate',
                    blockType: BlockType.REPORTER,
                    isTerminal: true,
                    text: 'ColorNegate［[IMAGE]］',
                    arguments: {
                        IMAGE: {
                            type: ArgumentType.STRING
                        }
                    }
                },{
                    opcode: 'imageCompose',
                    blockType: BlockType.REPORTER,
                    isTerminal: true,
                    text: 'ImageCompose［[ARG1],[ARG2]］',
                    arguments: {
                        ARG1: {
                            type: ArgumentType.STRING
                        },
                        ARG2: {
                            type: ArgumentType.STRING
                        }
                    }
                }
            ],
        };
    }

    currentImage(args,util) {
        return "CurrentImage[]";
    }

    colorNegate(args, util) {
        return `ColorNegate[${args.IMAGE}]`;
    }

    imageCompose(args,util) {
        return `ImageCompose[${args.ARG1},${args.ARG2}]`;
    }
}

module.exports = WLImageBlocks;
