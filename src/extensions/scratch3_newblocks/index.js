const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
const log = require('../../util/log');
const nets = require('nets');

class Scratch3NewBlocks {
    constructor (runtime) {
        this.runtime = runtime;
        this.lastOutputId = "";
    }

    getInfo () {
        return {
            id: 'newblocks',
            name: 'New Blocks',
            blocks: [
                {
                    opcode: 'getLastOutput',
                    blockType: BlockType.REPORTER,
                    text: 'Last Output',
                },
                {
                    opcode: 'getCurrentImage',
                    blockType: BlockType.COMMAND,
                    text: 'Get Current Image',
                    arguments: {
                        CODE: {
                            type: ArgumentType.STRING,
                            defaultValue: 'StringReverse["Hello World"]'
                        }
                    }
                },
                {
                    opcode: 'addBackdrop',
                    blockType: BlockType.COMMAND,
                    text: 'Add Backdrop',
                    arguments: {
                        CODE: {
                            type: ArgumentType.STRING,
                            defaultValue: 'StringReverse["Hello World"]'
                        }
                    }
                },
                {
                    opcode: 'doSomething',
                    blockType: BlockType.COMMAND,
                    text: 'Command [CODE]',
                    arguments: {
                        CODE: {
                            type: ArgumentType.STRING,
                            defaultValue: 'StringReverse["Hello World"]'
                        }
                    }
                },
                {
                    opcode: 'doNothing_1',
                    blockType: BlockType.COMMAND,
                    text: 'Command [CODE] on [THING]',
                    arguments: {
                        CODE: {
                            type: ArgumentType.STRING,
                            defaultValue: 'StringReverse["Hello World"]'
                        },
                        THING: {
                            type: ArgumentType.STRING,
                            defaultValue: 'default'
                        }
                    }
                },
                {
                    opcode: 'doNothing_2',
                    blockType: BlockType.REPORTER,
                    text: 'Reporter [CODE]',
                    arguments: {
                        CODE: {
                            type: ArgumentType.STRING,
                            defaultValue: 'StringReverse["Hello World"]'
                        }
                    }
                },
                {
                    opcode: 'doNothing_3',
                    blockType: BlockType.LOOP, // implied branchCount of 1 unless otherwise stated
                    isTerminal: false,
                    text: [
                        'loopty [MANY] loops'
                    ],
                    arguments: {
                        MANY: {
                            type: ArgumentType.NUMBER
                        }
                    }
                }
            ],
            menus: {
            }
        };
    }

    getLastOutput() {

    }

    getCurrentImage() {
        const runtime = this.runtime;
        console.log(runtime);


        // Super Hacky!, but I don't know how Scratch 3.0 works...
        let stage = document.getElementById('stage');
        let img = new Image();
        stage.children[0].children[0].style.display = 'none';
        stage.children[0].appendChild(img)

        nets({method: 'GET',
            url: `http://localhost:18000/?code=CurrentImage[]`,
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
        }, (err, resp, body) => {
            const json = JSON.parse(body);
            console.log(json);
            img.src= "data:image/PNG;base64," + json.result;
            this.lastOutputId = json.id;
        });
    }

    doNothing_1 (args, util) {

    }

    doNothing_2 (args, util) {

    }

    doNothing_3 (args, util) {
        console.log("thing");
    }

    doSomething (args, util) {
        const runtime = this.runtime;
        nets({method: 'GET',
            url: `http://localhost:18000/?code=${args.CODE}`,
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
        }, (err, resp, body) => {
            const json = JSON.parse(body);
            console.log(json);
            runtime.emit('SAY', util.target, 'say', json.result);
        });
    }

    doSomethingElse (args, util) {
        const runtime = this.runtime;
        nets({method: 'GET',
            url: `http://localhost:18000/?code=${args.CODE}`,
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
        }, (err, resp, body) => {
            const json = JSON.parse(body);
            console.log(json);
            runtime.emit('SAY', util.target, 'say', json.result);
        });
    }
}

module.exports = Scratch3NewBlocks;
