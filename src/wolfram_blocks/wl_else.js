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
                }, {
                    opcode: 'counts',
                    blockType: BlockType.REPORTER,
                    text: "Count the elements in [LIST]",
                    arguments: {
                        LIST: {
                            type: ArgumentType.STRING,
                        }
                    }
                }, {
                    opcode: 'characters',
                    blockType: BlockType.REPORTER,
                    text: "Characters from [STR]",
                    arguments: {
                        STR: {
                            type: ArgumentType.STRING,
                        }
                    }
                }, {
                    opcode: 'dictionaryStartingWith',
                    blockType: BlockType.REPORTER,
                    text: "Words starting with [CHAR]",
                    arguments: {
                        CHAR: {
                            type: ArgumentType.STRING,
                            defaultValue: "M"
                        }
                    }
                },
                {
                    opcode: 'firstPart',
                    blockType: BlockType.REPORTER,
                    text: "First [NUMBER] elements of [LIST]",
                    arguments: {
                        NUMBER: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 100
                        },
                        LIST: {
                            type: ArgumentType.STRING,
                        }
                    }
                }, {
                    opcode: 'randomSample',
                    blockType: BlockType.REPORTER,
                    text: "Get a random [NUMBER] of elements from [LIST]",
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
                    opcode: 'tableList',
                    blockType: BlockType.REPORTER,
                    text: "Repeat [ELEMENT], [NUMBER] of times",
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
                    text: "Write [STR] with size [SIZE] and font [FONT]",
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
                    opcode: 'joinStrings',
                    blockType: BlockType.REPORTER,
                    text: "Join the words in [LIST]",
                    arguments: {
                        LIST: {
                            type: ArgumentType.STRING,
                        }
                    }
                }

            ], menus: {
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

    romanNumeral(args, util) {
        return "";
    }

    drawDisk(args) {
        return "Disk[{}]";
    }

    colorReplace(args, util) {
        return `ColorReplace[${args.IMAGE},{${args.COLOR1} -> ${args.COLOR2}}]`;
    }

    counts(args, util) {
        return `Counts[${args.LIST}]`;
    }

    characters(args, util) {
        return `Characters[ToString[${args.STR}]]`;
    }

    dictionaryStartingWith(args, util) {
        return `DictionaryLookup[ToString[${args.CHAR}]~~ ___]`;
    }

    firstPart(args, util) {
        return `${args.LIST}[[;;${args.NUMBER}]]`;
    }

    randomSample(args, util) {
        return `RandomSample[${args.LIST}, ${args.NUMBER}]`;
    }

    tableList(args, util) {
        return `Table[${args.ELEMENT}, ${args.NUMBER}]`;
    }

    drawInside(args, util) {
        return `DrawInside[${args.ELEMENT},${args.LIST}] `;
    }

    fontStyle(args, util) {
        return `Style[ToString[${args.STR}], ${args.SIZE}, FontFamily -> "${args.FONT}"]`;
    }

    joinStrings(args, util) {
        return `StringRiffle[${args.LIST}]`;
    }


}

module.exports = WLElseBlocks;
