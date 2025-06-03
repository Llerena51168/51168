import antlr4 from 'antlr4';
import fs from 'fs';
import path from 'path';
import LogicLexer from './grammar/LogicLexer.js';
import LogicParser from './grammar/LogicParser.js';

function procesarArchivo(archivo) {
  const inputPath = `./input/${archivo}`;
  const outputPath = `./output/${archivo.replace('.txt', '.out')}`;

  const input = fs.readFileSync(inputPath, 'utf8');
  const chars = new antlr4.InputStream(input);
  const lexer = new LogicLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new LogicParser(tokens);
  parser.buildParseTrees = true;

  const tree = parser.formula();
  const erroresSintaxis = parser._syntaxErrors || 0;

  tokens.fill();
  const tablaTokens = tokens.tokens
    .filter(token => token.type !== -1)
    .map(token => {
      const tipo = parser.symbolicNames[token.type] || token.type;
      return {
        lexema: token.text,
        token: tipo,
        linea: token.line,
        columna: token.column
      };
    });

  const arbol = tree.toStringTree(parser.ruleNames);

  function traducir(nodo) {
    if (!nodo) return '';
    if (nodo.symbol) return nodo.symbol.text;
    if (nodo.children) {
      const hijos = nodo.children.map(traducir);
      const regla = parser.ruleNames[nodo.ruleIndex];
      switch (regla) {
        case 'implication': return hijos.join(' ? ');
        case 'disjunction': return hijos.join(' || ');
        case 'conjunction': return hijos.join(' && ');
        case 'negation': return hijos.length === 2 ? `!${hijos[1]}` : hijos[0];
        case 'primary': return hijos.length === 3 ? `(${hijos[1]})` : hijos[0];
        default: return hijos.join(' ');
      }
    }
    return '';
  }
  const traduccion = traducir(tree);

  console.log(`\nAnalizando: ${inputPath}`);

  console.log('Tabla de lexemas y tokens:');
  if (tablaTokens.length === 0) {
    console.log('(no se encontraron tokens)');
  } else {
    console.table(tablaTokens);
  }

  console.log('\nÁrbol sintáctico:');
  console.log(arbol);

  console.log('\nTraducción a JavaScript:');
  console.log(traduccion || '(no se pudo traducir)');

  if (erroresSintaxis > 0) {
    console.log(`\nSe encontraron ${erroresSintaxis} errores de sintaxis.\n`);
  } else {
    console.log('\nNo se encontraron errores de sintaxis.\n');
  }

  const salida = [
    'Tabla de Tokens:',
    tablaTokens.map(t => `TOKEN: ${t.token} -> "${t.lexema}" (Línea ${t.linea}, Columna ${t.columna})`).join('\n'),
    '\nÁrbol Sintáctico:',
    arbol,
    '\nTraducción a JavaScript:',
    traduccion,
    erroresSintaxis > 0
      ? `\nSe encontraron ${erroresSintaxis} errores de sintaxis.`
      : '\nNo se encontraron errores de sintaxis.'
  ].join('\n\n');

  fs.writeFileSync(outputPath, salida);
  console.log(`Resultado guardado en: ${outputPath}`);
}

const archivos = fs.readdirSync('./input').filter(f => f.endsWith('.txt'));
archivos.forEach(procesarArchivo);
console.log('\nProcesamiento completado.\n');
