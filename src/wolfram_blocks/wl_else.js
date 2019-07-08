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
                    opcode: 'colorReplace',
                    blockType: BlockType.REPORTER,
                    text: "ColorReplace［[IMAGE],{ [COLOR1]->[COLOR2]}］",
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
                }, {
                    opcode: 'counts',
                    blockType: BlockType.REPORTER,
                    text: "Counts［[LIST]］",
                    arguments: {
                        LIST: {
                            type: ArgumentType.STRING,
                        }
                    }
                }, {
                    opcode: 'characters',
                    blockType: BlockType.REPORTER,
                    text: "Characters［[STR]］",
                    arguments: {
                        STR: {
                            type: ArgumentType.STRING,
                            defaultValue: '"String"'
                        }
                    }
                }, {
                    opcode: 'dictionary',
                    blockType: BlockType.REPORTER,
                    text: "DictionaryLookup［[STR]］",
                    arguments: {
                        STR: {
                            type: ArgumentType.STRING,
                        }
                    }
                },
                {
                    opcode: 'part',
                    blockType: BlockType.REPORTER,
                    text: "［[NUMBER1];;[NUMBER2]］",
                    arguments: {
                        NUMBER1: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 1
                        },
                        NUMBER2: {
                            type: ArgumentType.STRING,
                            defaultValue: 100
                        }
                    }
                }, {
                    opcode: 'randomSample',
                    blockType: BlockType.REPORTER,
                    text: "RandomSample［[LIST],[NUMBER]］",
                    arguments: {
                        NUMBER: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 100
                        },
                        LIST: {
                            type: ArgumentType.STRING,
                        }
                    }
                },
                {
                    opcode: 'table',
                    blockType: BlockType.REPORTER,
                    text: "Table［[ELEMENT],[NUMBER]］",
                    arguments: {
                        ELEMENT: {
                            type: ArgumentType.STRING,
                            defaultValue: "M"
                        },
                        NUMBER: {
                            type: ArgumentType.STRING,
                            defaultValue: 100
                        }
                    }
                }, {
                    opcode: 'drawInside',
                    blockType: BlockType.REPORTER,
                    text: "Draw [LIST] Inside [ELEMENT]",
                    arguments: {
                        LIST: {
                            type: ArgumentType.STRING
                        },
                        ELEMENT: {
                            type: ArgumentType.STRING
                        }
                    }
                }, {
                    opcode: 'fontStyle',
                    blockType: BlockType.REPORTER,
                    text: "Style［[[STR],[SIZE],FontFamily -> [FONT]］",
                    arguments: {
                        STR: {
                            type: ArgumentType.STRING,
                            defaultValue: "M"
                        },
                        SIZE: {
                            type: ArgumentType.STRING,
                            defaultValue: 100
                        },
                        FONT: {
                            type: ArgumentType.STRING,
                            defaultValue: 'Arial',
                            menu: 'FONTS'
                        }
                    }
                }, {
                    opcode: 'stringRiffle',
                    blockType: BlockType.REPORTER,
                    text: "StringRiffle［[LIST]］",
                    arguments: {
                        LIST: {
                            type: ArgumentType.STRING,
                        }
                    }
                }, {
                    opcode: 'mapAt',
                    blockType: BlockType.REPORTER,
                    text: "[ARG1][OP][ARG2]",
                    arguments: {
                        ARG1: {
                            type: ArgumentType.STRING,
                        },
                        OP: {
                            type: ArgumentType.STRING,
                            defaultValue: '@',
                            menu: 'MAPS'
                        },
                        ARG2: {
                            type: ArgumentType.STRING,
                        }
                    }
                }, {
                    opcode: 'anon',
                    blockType: BlockType.REPORTER,
                    text: "[FUN]&",
                    arguments: {
                        FUN: {
                            type: ArgumentType.STRING,
                        }
                    }
                }, {
                    opcode: 'hash',
                    blockType: BlockType.REPORTER,
                    text: "#"
                }, {
                    opcode: 'keys',
                    blockType: BlockType.REPORTER,
                    text: "Keys［[ASSOC]］",
                    arguments: {
                        ASSOC: {
                            type: ArgumentType.STRING
                        }
                    }
                },{
                    opcode: 'reverseSort',
                    blockType: BlockType.REPORTER,
                    text: "ReverseSort［[LIST]］",
                    arguments: {
                        LIST: {
                            type: ArgumentType.STRING
                        }
                    }
                },{
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
                    opcode: 'first',
                    blockType: BlockType.REPORTER,
                    text: "First［[LIST]］",
                    arguments: {
                        LIST: {
                            type: ArgumentType.STRING
                        }
                    }
                }
            ], menus: {
                MAPS: [
                    '@',
                    '/@',
                    '//'
                ],
                FONTS: [
                    'Arial',
                    'Arial Black',
                    'Helvetica',
                    'Times',
                    'Times New Roman',
                    'Courier',
                    'Comic Sans MS'
                ]
            }
        }
    }

    colorReplace(args, util) {
        return `ColorReplace[${args.IMAGE},{${args.COLOR1} -> ${args.COLOR2}}]`;
    }

    counts(args, util) {
        return `Counts[${args.LIST}]`;
    }

    characters(args, util) {
        return `Characters[${args.STR}]`;
    }

    dictionary(args, util) {
        return `DictionaryLookup[${args.STR}]`;
    }

    part(args, util) {
        return `[${args.NUMBER1};;${args.NUMBER2}]`;
    }

    randomSample(args, util) {
        return `RandomSample[${args.LIST}, ${args.NUMBER}]`;
    }

    table(args, util) {
        return `Table[${args.ELEMENT}, ${args.NUMBER}]`;
    }

    drawInside(args, util) {
        return `DrawInside[${args.ELEMENT},${args.LIST}] `;
    }

    fontStyle(args, util) {
        return `Style[ToString[${args.STR}], ${args.SIZE}, FontFamily -> "${args.FONT}"]`;
    }

    stringRiffle(args, util) {
        return `StringRiffle[${args.LIST}]`;
    }

    mapAt(args,util) {
        return `${args.ARG1} ${args.OP} ${args.ARG2}`;
    }

    anon(args,util) {
        return `${args.FUN} &`;
    }

    hash(args,util) {
        return "#";
    }

    keys(args,util) {
        return `Keys[${args.ASSOC}]`;
    }

    reverseSort(args,util) {
        return `ReverseSort[${args.LIST}]`;
    }

    map(args,util) {
        return `Map[${args.ARG1},${args.ARG2}]`;
    }

    first(args,util) {
        return `First[${args.LIST}]`;
    }

}

module.exports = WLElseBlocks;
