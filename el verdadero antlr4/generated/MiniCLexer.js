// Generated from c:/Users/aandr/Downloads/antlr/antlr-c-proyecto/el verdadero antlr4/MiniC.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,15,79,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,
4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,
8,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,14,4,14,74,8,14,11,14,
12,14,75,1,14,1,14,0,0,15,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,
21,11,23,12,25,13,27,14,29,15,1,0,4,2,0,65,90,97,122,1,0,48,57,4,0,33,47,
58,64,91,95,123,125,3,0,9,10,13,13,32,32,79,0,1,1,0,0,0,0,3,1,0,0,0,0,5,
1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,
17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,
0,0,0,29,1,0,0,0,1,31,1,0,0,0,3,37,1,0,0,0,5,39,1,0,0,0,7,41,1,0,0,0,9,43,
1,0,0,0,11,45,1,0,0,0,13,52,1,0,0,0,15,54,1,0,0,0,17,60,1,0,0,0,19,62,1,
0,0,0,21,64,1,0,0,0,23,66,1,0,0,0,25,68,1,0,0,0,27,70,1,0,0,0,29,73,1,0,
0,0,31,32,5,119,0,0,32,33,5,104,0,0,33,34,5,105,0,0,34,35,5,108,0,0,35,36,
5,101,0,0,36,2,1,0,0,0,37,38,5,40,0,0,38,4,1,0,0,0,39,40,5,41,0,0,40,6,1,
0,0,0,41,42,5,123,0,0,42,8,1,0,0,0,43,44,5,125,0,0,44,10,1,0,0,0,45,46,5,
112,0,0,46,47,5,114,0,0,47,48,5,105,0,0,48,49,5,110,0,0,49,50,5,116,0,0,
50,51,5,102,0,0,51,12,1,0,0,0,52,53,5,59,0,0,53,14,1,0,0,0,54,55,5,98,0,
0,55,56,5,114,0,0,56,57,5,101,0,0,57,58,5,97,0,0,58,59,5,107,0,0,59,16,1,
0,0,0,60,61,5,48,0,0,61,18,1,0,0,0,62,63,5,49,0,0,63,20,1,0,0,0,64,65,5,
34,0,0,65,22,1,0,0,0,66,67,7,0,0,0,67,24,1,0,0,0,68,69,7,1,0,0,69,26,1,0,
0,0,70,71,7,2,0,0,71,28,1,0,0,0,72,74,7,3,0,0,73,72,1,0,0,0,74,75,1,0,0,
0,75,73,1,0,0,0,75,76,1,0,0,0,76,77,1,0,0,0,77,78,6,14,0,0,78,30,1,0,0,0,
2,0,75,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class MiniCLexer extends antlr4.Lexer {

    static grammarFileName = "MiniC.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'while'", "'('", "')'", "'{'", "'}'", "'printf'", 
                         "';'", "'break'", "'0'", "'1'", "'\"'" ];
	static symbolicNames = [ null, null, null, null, null, null, null, null, 
                          null, null, null, null, "LETRA", "DIGITO", "SIMBOLO", 
                          "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", 
                      "T__7", "T__8", "T__9", "T__10", "LETRA", "DIGITO", 
                      "SIMBOLO", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

MiniCLexer.EOF = antlr4.Token.EOF;
MiniCLexer.T__0 = 1;
MiniCLexer.T__1 = 2;
MiniCLexer.T__2 = 3;
MiniCLexer.T__3 = 4;
MiniCLexer.T__4 = 5;
MiniCLexer.T__5 = 6;
MiniCLexer.T__6 = 7;
MiniCLexer.T__7 = 8;
MiniCLexer.T__8 = 9;
MiniCLexer.T__9 = 10;
MiniCLexer.T__10 = 11;
MiniCLexer.LETRA = 12;
MiniCLexer.DIGITO = 13;
MiniCLexer.SIMBOLO = 14;
MiniCLexer.WS = 15;



