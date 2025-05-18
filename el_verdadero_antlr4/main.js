import antlr4 from 'antlr4'; 
import fs from 'fs'; 
import MiniCLexer from './MiniCLexer.js'; 
import { MiniCParser } from './MiniCParser.js'; 
import MiniCListener from './MiniCListener.js'; 

// Leer el código fuente desde el archivo de entrada
const input = fs.readFileSync('input.txt', 'utf8');
const chars = new antlr4.InputStream(input);
const lexer = new MiniCLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new MiniCParser(tokens);

parser.buildParseTrees = true;
const tree = parser.programa();

console.log('🎯 Análisis sintáctico completado.\n');

// 🪪 **Tabla de Tokens**
console.log('🪪 Tokens encontrados:');
tokens.fill();
tokens.tokens.forEach(token => {
  const symbolic = lexer.symbolicNames[token.type] || 'DESCONOCIDO';
  console.log(`Token: ${symbolic}, Lexema: '${token.text}', Línea: ${token.line}`);
});

// 🌳 **Árbol sintáctico**
console.log('\n🌳 Árbol sintáctico generado:');
function printTree(node, indent = '') {
  if (node.children) {
    console.log(indent + node.constructor.name.replace('Context', ''));
    for (let child of node.children) {
      printTree(child, indent + '  ');
    }
  } else {
    console.log(indent + node.getText());
  }
}
printTree(tree);

// 🧠 **Traducción a JavaScript**
console.log('\n🧠 Código traducido a JavaScript:');

function traducir(node) {
  if (!node.children) return '';

  const text = node.getText();
  const ruleName = node.constructor.name.replace('Context', '');

  switch (ruleName) {
    case 'Programa':
    case 'Instrucciones':
      return node.children.map(traducir).join('\n');

    case 'Instruccion':
      return traducir(node.children[0]);

    case 'Bucle':
      const condicion = traducir(node.children[2]) === '1' ? 'true' : 'false';
      const cuerpo = traducir(node.children[5]);
      return `while (${condicion}) {\n${cuerpo}\n}`;

    case 'Sentencia':
      return node.children.map(traducir).join('\n');

    case 'Salida':
      const cadenaRaw = node.children[2].getText();
      const contenido = cadenaRaw.match(/"([^"]*)"/)?.[1] || '';
      return `console.log("${contenido}");`;

    case 'Terminar':
      return 'break;';

    default:
      return node.children.map(traducir).join(' ');
  }
}

const traduccion = traducir(tree);
console.log(traduccion);

// 💻 **Ejecutar el código traducido**
console.log('\n💻 Ejecutando...');
try {
  eval(traduccion);
} catch (e) {
  console.error('❌ Error al ejecutar:', e.message);
}