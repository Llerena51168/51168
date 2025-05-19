grammar gramatica;

programa
    : (declaracion | funcion)* EOF
    ;

declaracion
    : VARIABLE nombre ('=' valor)? ';'
    ;

funcion
    : FUNCION nombre ('(' argumentos? ')')? '{' instrucciones* '}'
    ;

argumentos
    : nombre (',' nombre)*
    ;

instrucciones
    : operacion_texto
    | impresion
    | retorno
    ;

operacion_texto
    : nombre '=' transformacion '(' cadena ')' ';'
    ;

transformacion
    : MAYUSCULAS
    | MINUSCULAS
    | LONGITUD
    | INVERTIR
    | REEMPLAZAR
    ;

impresion
    : IMPRIMIR '(' valor ')' ';'
    ;

retorno
    : DEVOLVER valor ';'
    ;

valor
    : texto
    | numero
    | nombre
    ;

cadena
    : texto
    | nombre
    ;

texto
    : CADENA
    ;

nombre
    : NOMBRE
    ;

numero
    : NUMERO
    ;

// Lexer rules

VARIABLE: 'variable';
FUNCION: 'funcion';
IMPRIMIR: 'imprimir';
DEVOLVER: 'devolver';

MAYUSCULAS: 'mayusculas';
MINUSCULAS: 'minusculas';
LONGITUD: 'longitud';
INVERTIR: 'invertir';
REEMPLAZAR: 'reemplazar';

NOMBRE: [a-zA-Z_][a-zA-Z0-9_]* ;
NUMERO: [0-9]+ ;

CADENA: '"' (~["\r\n])* '"' ;

WS: [ \t\r\n]+ -> skip ;

