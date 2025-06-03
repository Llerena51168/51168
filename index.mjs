import antlr4 from 'antlr4';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Importar ANTLR lexer y parser como módulos ES
import LogicLexer from './grammar/LogicLexer.js';
import LogicParser from './grammar/LogicParser.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function procesarArchivo(archivo) {
  const inputPath = path.join(__dirname, 'input', archivo);
  const outputPath = path.join(__dirname, 'output', archivo.replace('.txt', '.out'));

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
    .map(token => ({
      lexema: token.text,
      token: parser.symbolicNames[token.type] || token.type,
      linea: token.line,
      columna: token.column
    }));

  const arbol = tree.toStringTree(parser.ruleNames);

  // Traducción simplificada (adaptala a tu gramática)
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
  console.table(tablaTokens);
  console.log('\nÁrbol sintáctico:\n', arbol);
  console.log('\nTraducción a JavaScript:\n', traduccion || '(no se pudo traducir)');
  console.log(erroresSintaxis > 0 ? `\nSe encontraron ${erroresSintaxis} errores de sintaxis.` : '\nNo se encontraron errores de sintaxis.');

  const salida = [
    'Tabla de Tokens:',
    tablaTokens.map(t => `TOKEN: ${t.token} -> "${t.lexema}" (Línea ${t.linea}, Columna ${t.columna})`).join('\n'),
    '\nÁrbol Sintáctico:',
    arbol,
    '\nTraducción a JavaScript:',
    traduccion,
    erroresSintaxis > 0 ? `\nSe encontraron ${erroresSintaxis} errores de sintaxis.` : '\nNo se encontraron errores de sintaxis.'
  ].join('\n\n');

  fs.writeFileSync(outputPath, salida);
  console.log(`Resultado guardado en: ${outputPath}`);
}

const archivos = fs.readdirSync(path.join(__dirname, 'input')).filter(f => f.endsWith('.txt'));
for (const archivo of archivos) {
  procesarArchivo(archivo);
}

console.log('\nProcesamiento completado.\n');
