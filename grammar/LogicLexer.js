// Generated from Logic.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,10,48,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,1,0,1,0,1,1,1,1,1,2,1,
2,1,3,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,4,9,43,8,9,11,
9,12,9,44,1,9,1,9,0,0,10,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,1,
0,3,2,0,65,90,97,122,1,0,48,57,3,0,9,10,13,13,32,32,48,0,1,1,0,0,0,0,3,1,
0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,
1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,1,21,1,0,0,0,3,24,1,0,0,0,5,26,1,0,0,0,
7,28,1,0,0,0,9,31,1,0,0,0,11,33,1,0,0,0,13,35,1,0,0,0,15,37,1,0,0,0,17,39,
1,0,0,0,19,42,1,0,0,0,21,22,5,45,0,0,22,23,5,62,0,0,23,2,1,0,0,0,24,25,5,
118,0,0,25,4,1,0,0,0,26,27,5,94,0,0,27,6,1,0,0,0,28,29,5,194,0,0,29,30,5,
172,0,0,30,8,1,0,0,0,31,32,5,33,0,0,32,10,1,0,0,0,33,34,5,40,0,0,34,12,1,
0,0,0,35,36,5,41,0,0,36,14,1,0,0,0,37,38,7,0,0,0,38,16,1,0,0,0,39,40,7,1,
0,0,40,18,1,0,0,0,41,43,7,2,0,0,42,41,1,0,0,0,43,44,1,0,0,0,44,42,1,0,0,
0,44,45,1,0,0,0,45,46,1,0,0,0,46,47,6,9,0,0,47,20,1,0,0,0,2,0,44,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class LogicLexer extends antlr4.Lexer {

    static grammarFileName = "Logic.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'->'", "'v'", "'^'", "'\\u00C2\\u00AC'", 
                         "'!'", "'('", "')'" ];
	static symbolicNames = [ null, null, null, null, null, null, null, null, 
                          "LETTER", "DIGIT", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", 
                      "LETTER", "DIGIT", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

LogicLexer.EOF = antlr4.Token.EOF;
LogicLexer.T__0 = 1;
LogicLexer.T__1 = 2;
LogicLexer.T__2 = 3;
LogicLexer.T__3 = 4;
LogicLexer.T__4 = 5;
LogicLexer.T__5 = 6;
LogicLexer.T__6 = 7;
LogicLexer.LETTER = 8;
LogicLexer.DIGIT = 9;
LogicLexer.WS = 10;



