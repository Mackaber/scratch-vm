const ArgumentType = require('../extension-support/argument-type');
const BlockType = require('../extension-support/block-type');

class WLFnMaps {

    constructor(runtime) {
        this.runtime = runtime;
        this.api = runtime.api;
    }

    getInfo() {
        return {
            id: 'wlFnMaps',
            name: 'Function Maps',
            blocks: [
                {
                    opcode: 'map',
                    blockType: BlockType.REPORTER,
                    text: "Map［[ARG1],[ARG2]］",
                    arguments: {
                        ARG1: {
                            type: ArgumentType.STRING
                        },
                        ARG2: {
                            type: ArgumentType.STRING
                        }
                    }
                },{
                    opcode: 'hash',
                    blockType: BlockType.REPORTER,
                    text: "#"
                },
            ]
        }
    }

}

module.exports = WLFnMaps;
