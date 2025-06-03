grammar Logic;

formula       : implication ;
implication   : disjunction ('->' implication)? ;
disjunction   : conjunction ('v' conjunction)* ;
conjunction   : negation ('^' negation)* ;
negation      : ('¬' | '!') negation | primary ;
primary       : variable | '(' formula ')' ;

variable      : LETTER (variable_char)* ;
variable_char : LETTER | DIGIT ;

LETTER        : [a-zA-Z] ;
DIGIT         : [0-9] ;

WS            : [ \t\r\n]+ -> skip ;
