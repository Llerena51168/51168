import antlr4 from 'antlr4';
import fs from 'fs';
import path from 'path';
import LogicLexer from './grammar/LogicLexer.js';
import LogicParser from './grammar/LogicParser.js';

function procesarArchivo(archivo) {
  const input = fs.readFileSync(`./input/${archivo}`, 'utf8');
  const chars = new antlr4.InputStream(input);
  const lexer = new LogicLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new LogicParser(tokens);
  parser.buildParseTrees = true;
  const tree = parser.formula();
  const errores = parser._syntaxErrors || 0;

  const salidaTokens = [];
  tokens.fill();
  tokens.tokens.forEach(token => {
    if (token.type !== -1) {
      salidaTokens.push(`TOKEN: ${parser.symbolicNames[token.type]} -> "${token.text}"`);
    }
  });

  const arbol = tree.toStringTree(parser.ruleNames);

  let traduccion = '';
  function traducir(nodo) {
    if (!nodo) return '';
    if (nodo.symbol) return nodo.symbol.text;
    if (nodo.children) {
      let hijos = nodo.children.map(traducir);
      if (nodo.ruleIndex === parser.ruleNames.indexOf('implication')) {
        return hijos.join(' ? ');
      } else if (nodo.ruleIndex === parser.ruleNames.indexOf('disjunction')) {
        return hijos.join(' || ');
      } else if (nodo.ruleIndex === parser.ruleNames.indexOf('conjunction')) {
        return hijos.join(' && ');
      } else if (nodo.ruleIndex === parser.ruleNames.indexOf('negation')) {
        return hijos.length === 2 ? `!${hijos[1]}` : hijos[0];
      } else if (nodo.ruleIndex === parser.ruleNames.indexOf('primary')) {
        return hijos.length === 3 ? `(${hijos[1]})` : hijos[0];
      } else {
        return hijos.join(' ');
      }
    }
    return '';
  }
  traduccion = traducir(tree);

  let salida = `Tabla de Tokens:\n${salidaTokens.join('\n')}\n\nArbol Sintactico:\n${arbol}\n\nTraduccion a JavaScript:\n${traduccion}\n`;
  if (errores > 0) {
    salida += `\nSe encontraron ${errores} errores de sintaxis.`;
  } else {
    salida += `\nNo se encontraron errores de sintaxis.`;
  }

  fs.writeFileSync(`./output/${archivo.replace('.txt', '.out')}`, salida);
  console.log(`Procesado: ${archivo} -> ./output/${archivo.replace('.txt', '.out')}`);
}

const archivos = fs.readdirSync('./input').filter(f => f.endsWith('.txt'));
archivos.forEach(procesarArchivo);
console.log('Procesamiento completado.');
