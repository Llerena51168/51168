// Generated from gramatica.g4 by ANTLR 4.13.0
// jshint ignore: start
import antlr4 from 'antlr4';
import gramaticaListener from './gramaticaListener.js';
const serializedATN = [4,1,20,112,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,1,0,1,0,5,0,31,8,0,10,0,12,0,34,9,0,1,0,1,0,1,1,1,1,1,1,1,1,3,
1,42,8,1,1,1,1,1,1,2,1,2,1,2,1,2,3,2,50,8,2,1,2,3,2,53,8,2,1,2,1,2,5,2,57,
8,2,10,2,12,2,60,9,2,1,2,1,2,1,3,1,3,1,3,5,3,67,8,3,10,3,12,3,70,9,3,1,4,
1,4,1,4,3,4,75,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,7,1,7,1,7,1,
7,1,7,1,7,1,8,1,8,1,8,1,8,1,9,1,9,1,9,3,9,100,8,9,1,10,1,10,3,10,104,8,10,
1,11,1,11,1,12,1,12,1,13,1,13,1,13,0,0,14,0,2,4,6,8,10,12,14,16,18,20,22,
24,26,0,1,1,0,12,16,109,0,32,1,0,0,0,2,37,1,0,0,0,4,45,1,0,0,0,6,63,1,0,
0,0,8,74,1,0,0,0,10,76,1,0,0,0,12,84,1,0,0,0,14,86,1,0,0,0,16,92,1,0,0,0,
18,99,1,0,0,0,20,103,1,0,0,0,22,105,1,0,0,0,24,107,1,0,0,0,26,109,1,0,0,
0,28,31,3,2,1,0,29,31,3,4,2,0,30,28,1,0,0,0,30,29,1,0,0,0,31,34,1,0,0,0,
32,30,1,0,0,0,32,33,1,0,0,0,33,35,1,0,0,0,34,32,1,0,0,0,35,36,5,0,0,1,36,
1,1,0,0,0,37,38,5,8,0,0,38,41,3,24,12,0,39,40,5,1,0,0,40,42,3,18,9,0,41,
39,1,0,0,0,41,42,1,0,0,0,42,43,1,0,0,0,43,44,5,2,0,0,44,3,1,0,0,0,45,46,
5,9,0,0,46,52,3,24,12,0,47,49,5,3,0,0,48,50,3,6,3,0,49,48,1,0,0,0,49,50,
1,0,0,0,50,51,1,0,0,0,51,53,5,4,0,0,52,47,1,0,0,0,52,53,1,0,0,0,53,54,1,
0,0,0,54,58,5,5,0,0,55,57,3,8,4,0,56,55,1,0,0,0,57,60,1,0,0,0,58,56,1,0,
0,0,58,59,1,0,0,0,59,61,1,0,0,0,60,58,1,0,0,0,61,62,5,6,0,0,62,5,1,0,0,0,
63,68,3,24,12,0,64,65,5,7,0,0,65,67,3,24,12,0,66,64,1,0,0,0,67,70,1,0,0,
0,68,66,1,0,0,0,68,69,1,0,0,0,69,7,1,0,0,0,70,68,1,0,0,0,71,75,3,10,5,0,
72,75,3,14,7,0,73,75,3,16,8,0,74,71,1,0,0,0,74,72,1,0,0,0,74,73,1,0,0,0,
75,9,1,0,0,0,76,77,3,24,12,0,77,78,5,1,0,0,78,79,3,12,6,0,79,80,5,3,0,0,
80,81,3,20,10,0,81,82,5,4,0,0,82,83,5,2,0,0,83,11,1,0,0,0,84,85,7,0,0,0,
85,13,1,0,0,0,86,87,5,10,0,0,87,88,5,3,0,0,88,89,3,18,9,0,89,90,5,4,0,0,
90,91,5,2,0,0,91,15,1,0,0,0,92,93,5,11,0,0,93,94,3,18,9,0,94,95,5,2,0,0,
95,17,1,0,0,0,96,100,3,22,11,0,97,100,3,26,13,0,98,100,3,24,12,0,99,96,1,
0,0,0,99,97,1,0,0,0,99,98,1,0,0,0,100,19,1,0,0,0,101,104,3,22,11,0,102,104,
3,24,12,0,103,101,1,0,0,0,103,102,1,0,0,0,104,21,1,0,0,0,105,106,5,19,0,
0,106,23,1,0,0,0,107,108,5,17,0,0,108,25,1,0,0,0,109,110,5,18,0,0,110,27,
1,0,0,0,10,30,32,41,49,52,58,68,74,99,103];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class gramaticaParser extends antlr4.Parser {

    static grammarFileName = "gramatica.g4";
    static literalNames = [ null, "'='", "';'", "'('", "')'", "'{'", "'}'", 
                            "','", "'variable'", "'funcion'", "'imprimir'", 
                            "'devolver'", "'mayusculas'", "'minusculas'", 
                            "'longitud'", "'invertir'", "'reemplazar'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             "VARIABLE", "FUNCION", "IMPRIMIR", "DEVOLVER", 
                             "MAYUSCULAS", "MINUSCULAS", "LONGITUD", "INVERTIR", 
                             "REEMPLAZAR", "NOMBRE", "NUMERO", "CADENA", 
                             "WS" ];
    static ruleNames = [ "programa", "declaracion", "funcion", "argumentos", 
                         "instrucciones", "operacion_texto", "transformacion", 
                         "impresion", "retorno", "valor", "cadena", "texto", 
                         "nombre", "numero" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = gramaticaParser.ruleNames;
        this.literalNames = gramaticaParser.literalNames;
        this.symbolicNames = gramaticaParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, gramaticaParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===8 || _la===9) {
	            this.state = 30;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 8:
	                this.state = 28;
	                this.declaracion();
	                break;
	            case 9:
	                this.state = 29;
	                this.funcion();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 34;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 35;
	        this.match(gramaticaParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaracion() {
	    let localctx = new DeclaracionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, gramaticaParser.RULE_declaracion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.match(gramaticaParser.VARIABLE);
	        this.state = 38;
	        this.nombre();
	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 39;
	            this.match(gramaticaParser.T__0);
	            this.state = 40;
	            this.valor();
	        }

	        this.state = 43;
	        this.match(gramaticaParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcion() {
	    let localctx = new FuncionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, gramaticaParser.RULE_funcion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.match(gramaticaParser.FUNCION);
	        this.state = 46;
	        this.nombre();
	        this.state = 52;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 47;
	            this.match(gramaticaParser.T__2);
	            this.state = 49;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===17) {
	                this.state = 48;
	                this.argumentos();
	            }

	            this.state = 51;
	            this.match(gramaticaParser.T__3);
	        }

	        this.state = 54;
	        this.match(gramaticaParser.T__4);
	        this.state = 58;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 134144) !== 0)) {
	            this.state = 55;
	            this.instrucciones();
	            this.state = 60;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 61;
	        this.match(gramaticaParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argumentos() {
	    let localctx = new ArgumentosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, gramaticaParser.RULE_argumentos);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        this.nombre();
	        this.state = 68;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7) {
	            this.state = 64;
	            this.match(gramaticaParser.T__6);
	            this.state = 65;
	            this.nombre();
	            this.state = 70;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instrucciones() {
	    let localctx = new InstruccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, gramaticaParser.RULE_instrucciones);
	    try {
	        this.state = 74;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 71;
	            this.operacion_texto();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 72;
	            this.impresion();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 73;
	            this.retorno();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operacion_texto() {
	    let localctx = new Operacion_textoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, gramaticaParser.RULE_operacion_texto);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.nombre();
	        this.state = 77;
	        this.match(gramaticaParser.T__0);
	        this.state = 78;
	        this.transformacion();
	        this.state = 79;
	        this.match(gramaticaParser.T__2);
	        this.state = 80;
	        this.cadena();
	        this.state = 81;
	        this.match(gramaticaParser.T__3);
	        this.state = 82;
	        this.match(gramaticaParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	transformacion() {
	    let localctx = new TransformacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, gramaticaParser.RULE_transformacion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 126976) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	impresion() {
	    let localctx = new ImpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, gramaticaParser.RULE_impresion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this.match(gramaticaParser.IMPRIMIR);
	        this.state = 87;
	        this.match(gramaticaParser.T__2);
	        this.state = 88;
	        this.valor();
	        this.state = 89;
	        this.match(gramaticaParser.T__3);
	        this.state = 90;
	        this.match(gramaticaParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	retorno() {
	    let localctx = new RetornoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, gramaticaParser.RULE_retorno);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
	        this.match(gramaticaParser.DEVOLVER);
	        this.state = 93;
	        this.valor();
	        this.state = 94;
	        this.match(gramaticaParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, gramaticaParser.RULE_valor);
	    try {
	        this.state = 99;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 96;
	            this.texto();
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 97;
	            this.numero();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 98;
	            this.nombre();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, gramaticaParser.RULE_cadena);
	    try {
	        this.state = 103;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 101;
	            this.texto();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 102;
	            this.nombre();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	texto() {
	    let localctx = new TextoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, gramaticaParser.RULE_texto);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 105;
	        this.match(gramaticaParser.CADENA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nombre() {
	    let localctx = new NombreContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, gramaticaParser.RULE_nombre);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 107;
	        this.match(gramaticaParser.NOMBRE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, gramaticaParser.RULE_numero);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 109;
	        this.match(gramaticaParser.NUMERO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

gramaticaParser.EOF = antlr4.Token.EOF;
gramaticaParser.T__0 = 1;
gramaticaParser.T__1 = 2;
gramaticaParser.T__2 = 3;
gramaticaParser.T__3 = 4;
gramaticaParser.T__4 = 5;
gramaticaParser.T__5 = 6;
gramaticaParser.T__6 = 7;
gramaticaParser.VARIABLE = 8;
gramaticaParser.FUNCION = 9;
gramaticaParser.IMPRIMIR = 10;
gramaticaParser.DEVOLVER = 11;
gramaticaParser.MAYUSCULAS = 12;
gramaticaParser.MINUSCULAS = 13;
gramaticaParser.LONGITUD = 14;
gramaticaParser.INVERTIR = 15;
gramaticaParser.REEMPLAZAR = 16;
gramaticaParser.NOMBRE = 17;
gramaticaParser.NUMERO = 18;
gramaticaParser.CADENA = 19;
gramaticaParser.WS = 20;

gramaticaParser.RULE_programa = 0;
gramaticaParser.RULE_declaracion = 1;
gramaticaParser.RULE_funcion = 2;
gramaticaParser.RULE_argumentos = 3;
gramaticaParser.RULE_instrucciones = 4;
gramaticaParser.RULE_operacion_texto = 5;
gramaticaParser.RULE_transformacion = 6;
gramaticaParser.RULE_impresion = 7;
gramaticaParser.RULE_retorno = 8;
gramaticaParser.RULE_valor = 9;
gramaticaParser.RULE_cadena = 10;
gramaticaParser.RULE_texto = 11;
gramaticaParser.RULE_nombre = 12;
gramaticaParser.RULE_numero = 13;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_programa;
    }

	EOF() {
	    return this.getToken(gramaticaParser.EOF, 0);
	};

	declaracion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclaracionContext);
	    } else {
	        return this.getTypedRuleContext(DeclaracionContext,i);
	    }
	};

	funcion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FuncionContext);
	    } else {
	        return this.getTypedRuleContext(FuncionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitPrograma(this);
		}
	}


}



class DeclaracionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_declaracion;
    }

	VARIABLE() {
	    return this.getToken(gramaticaParser.VARIABLE, 0);
	};

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterDeclaracion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitDeclaracion(this);
		}
	}


}



class FuncionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_funcion;
    }

	FUNCION() {
	    return this.getToken(gramaticaParser.FUNCION, 0);
	};

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	instrucciones = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionesContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionesContext,i);
	    }
	};

	argumentos() {
	    return this.getTypedRuleContext(ArgumentosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterFuncion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitFuncion(this);
		}
	}


}



class ArgumentosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_argumentos;
    }

	nombre = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NombreContext);
	    } else {
	        return this.getTypedRuleContext(NombreContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterArgumentos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitArgumentos(this);
		}
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_instrucciones;
    }

	operacion_texto() {
	    return this.getTypedRuleContext(Operacion_textoContext,0);
	};

	impresion() {
	    return this.getTypedRuleContext(ImpresionContext,0);
	};

	retorno() {
	    return this.getTypedRuleContext(RetornoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitInstrucciones(this);
		}
	}


}



class Operacion_textoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_operacion_texto;
    }

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	transformacion() {
	    return this.getTypedRuleContext(TransformacionContext,0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterOperacion_texto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitOperacion_texto(this);
		}
	}


}



class TransformacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_transformacion;
    }

	MAYUSCULAS() {
	    return this.getToken(gramaticaParser.MAYUSCULAS, 0);
	};

	MINUSCULAS() {
	    return this.getToken(gramaticaParser.MINUSCULAS, 0);
	};

	LONGITUD() {
	    return this.getToken(gramaticaParser.LONGITUD, 0);
	};

	INVERTIR() {
	    return this.getToken(gramaticaParser.INVERTIR, 0);
	};

	REEMPLAZAR() {
	    return this.getToken(gramaticaParser.REEMPLAZAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterTransformacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitTransformacion(this);
		}
	}


}



class ImpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_impresion;
    }

	IMPRIMIR() {
	    return this.getToken(gramaticaParser.IMPRIMIR, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterImpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitImpresion(this);
		}
	}


}



class RetornoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_retorno;
    }

	DEVOLVER() {
	    return this.getToken(gramaticaParser.DEVOLVER, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterRetorno(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitRetorno(this);
		}
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_valor;
    }

	texto() {
	    return this.getTypedRuleContext(TextoContext,0);
	};

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitValor(this);
		}
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_cadena;
    }

	texto() {
	    return this.getTypedRuleContext(TextoContext,0);
	};

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitCadena(this);
		}
	}


}



class TextoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_texto;
    }

	CADENA() {
	    return this.getToken(gramaticaParser.CADENA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterTexto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitTexto(this);
		}
	}


}



class NombreContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_nombre;
    }

	NOMBRE() {
	    return this.getToken(gramaticaParser.NOMBRE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterNombre(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitNombre(this);
		}
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_numero;
    }

	NUMERO() {
	    return this.getToken(gramaticaParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitNumero(this);
		}
	}


}




gramaticaParser.ProgramaContext = ProgramaContext; 
gramaticaParser.DeclaracionContext = DeclaracionContext; 
gramaticaParser.FuncionContext = FuncionContext; 
gramaticaParser.ArgumentosContext = ArgumentosContext; 
gramaticaParser.InstruccionesContext = InstruccionesContext; 
gramaticaParser.Operacion_textoContext = Operacion_textoContext; 
gramaticaParser.TransformacionContext = TransformacionContext; 
gramaticaParser.ImpresionContext = ImpresionContext; 
gramaticaParser.RetornoContext = RetornoContext; 
gramaticaParser.ValorContext = ValorContext; 
gramaticaParser.CadenaContext = CadenaContext; 
gramaticaParser.TextoContext = TextoContext; 
gramaticaParser.NombreContext = NombreContext; 
gramaticaParser.NumeroContext = NumeroContext; 
