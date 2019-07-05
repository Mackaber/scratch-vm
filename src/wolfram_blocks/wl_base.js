const ArgumentType = require('../extension-support/argument-type');
const BlockType = require('../extension-support/block-type');

class WLBaseBlocks {
    constructor (runtime) {
        this.runtime = runtime;
        this.api  = runtime.api;
    }

    getInfo() {
        return {
            id: 'wlBaseBlocks',
            name: 'Core Blocks',
            blocks: [
                {
                    opcode: 'evaluateLine',
                    blockType: BlockType.COMMAND,
                    text: 'Evaluate [CODE]',
                    arguments: {
                        CODE: {
                            type: ArgumentType.STRING
                        }
                    }
                }
            ]
        }
    }

    evaluateLine(args,util) {
        this.runtime.api.execute(`${args.CODE}`);
        console.log(`Evaluationg... ${args.CODE}`);
    }
}

module.exports = WLBaseBlocks;
