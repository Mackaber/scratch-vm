const ArgumentType = require('../extension-support/argument-type');
const BlockType = require('../extension-support/block-type');

class WLImageBlocks {
    constructor (runtime) {
        this.runtime = runtime;
        this.api  = runtime.api;
    }

    getInfo () {
        return {
            id: 'wlImageBlocks',
            name: 'Image Manipulation',
            blocks: [
                {
                    opcode: 'execLine',
                    blockType: BlockType.COMMAND,
                    text: 'Execute [CODE]',
                    arguments: {
                        CODE: {
                            type: ArgumentType.STRING
                        }
                    }
                },
                {
                    opcode: 'currentImage',
                    blockType: BlockType.REPORTER,
                    text: 'Current Image'
                },
                {
                    opcode: 'colorNegate',
                    blockType: BlockType.REPORTER,
                    isTerminal: true,
                    text: 'Negate color of [IMAGE]',
                    arguments: {
                        IMAGE: {
                            type: ArgumentType.STRING
                        }
                    }
                },{
                    opcode: 'imageCompose',
                    blockType: BlockType.REPORTER,
                    isTerminal: true,
                    text: 'Combine image [ARG1] with image [ARG2]',
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
            menus: {
            }
        };
    }

    execLine(args,util) {
        this.runtime.api.execute(`${args.CODE}`);
        console.log(`Executing... ${args.CODE}`);
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
