import antlr4 from 'antlr4';
import { gramaticaLexer } from './gramaticaLexer.js';
import { gramaticaParser } from './gramaticaParser.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Para que funcione __dirname con módulos ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 📥 Leer archivo pasado por parámetro o usar uno por defecto
const inputArg = process.argv[2] || 'ejemplos/correcto1.txt';
const inputFilePath = path.join(__dirname, inputArg);

// ⚠️ Validar existencia del archivo
if (!fs.existsSync(inputFilePath)) {
  console.error(`❌ El archivo "${inputArg}" no existe.`);
  process.exit(1);
}

// 📄 Leer el archivo
const input = fs.readFileSync(inputFilePath, 'utf8');

// 🧠 Crear lexer y parser
const chars = new antlr4.InputStream(input);
const lexer = new gramaticaLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
tokens.fill();

// 🧩 Mostrar tokens
console.log("🧩 TOKENS:");
tokens.getTokens().forEach(token => {
  const symbolicName = lexer.symbolicNames[token.type];
  console.log(`[${symbolicName}] '${token.text}'`);
});

// 🌲 Ejecutar parser
const parser = new gramaticaParser(tokens);
parser.buildParseTrees = true;

try {
  const tree = parser.programa();
  console.log("\n🌳 ÁRBOL:");
  console.log(tree.toStringTree(parser.ruleNames));
  console.log("\n✅ Análisis sintáctico exitoso.");
} catch (e) {
  console.error("❌ Error de análisis sintáctico:");
  console.error(e.message);
}

