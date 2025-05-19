import antlr4 from 'antlr4';
import * as gramaticaLexerModule from './gramaticaLexer.js';
import * as gramaticaParserModule from './gramaticaParser.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputArg = process.argv[2] || 'ejemplos/correcto1.txt';
const inputFilePath = path.join(__dirname, inputArg);

if (!fs.existsSync(inputFilePath)) {
  console.error(`El archivo "${inputArg}" no existe.`);
  process.exit(1);
}

const input = fs.readFileSync(inputFilePath, 'utf8');

const chars = new antlr4.InputStream(input);

const gramaticaLexer = gramaticaLexerModule.gramaticaLexer || gramaticaLexerModule.default;
const gramaticaParser = gramaticaParserModule.gramaticaParser || gramaticaParserModule.default;

const lexer = new gramaticaLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
tokens.fill();

console.log("TOKENS:");
tokens.getTokens().forEach(token => {
  const symbolicName = lexer.symbolicNames[token.type];
  console.log(`[${symbolicName}] '${token.text}'`);
});

const parser = new gramaticaParser(tokens);
parser.buildParseTrees = true;

try {
  const tree = parser.programa();
  console.log("\nÁRBOL:");
  console.log(tree.toStringTree(parser.ruleNames));
  console.log("\nAnálisis sintáctico exitoso.");
} catch (e) {
  console.error("Error de análisis sintáctico:");
  console.error(e.message);
}
