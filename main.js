import antlr4 from 'antlr4';
import fs from 'fs';
import MiniCLexer from './generated/MiniCLexer.js';
import MiniCParser from './generated/MiniCParser.js';
import MiniCListener from './generated/MiniCListener.js';

// Leer input.txt
const inputCode = fs.readFileSync('input.txt', 'utf8');
console.log("Código MiniC de entrada:\n");
console.log(inputCode);

// Lexer
const inputStream = new antlr4.InputStream(inputCode);
const lexer = new MiniCLexer(inputStream);
const tokenStream = new antlr4.CommonTokenStream(lexer);
tokenStream.fill();

// Mostrar tokens
console.log("\n--- Tabla de Tokens ---\n");
tokenStream.tokens.forEach(token => {
    if (token.type !== -1) {
        const tokenName = lexer.symbolicNames?.[token.type] || `TOKEN_${token.type}`;
        console.log(`TOKEN: ${tokenName} => '${token.text}'`);
    }
});

// Parser
const parser = new MiniCParser(tokenStream);
parser.buildParseTrees = true;
const tree = parser.programa();

// Traductor
class MiniCtoJS extends MiniCListener {
    constructor() {
        super();
        this.output = '';
    }

    enterBucle(ctx) {
        const cond = ctx.condicion().getText();
        const jsCond = cond === '1' ? 'true' : cond === '0' ? 'false' : cond;
        this.output += `while(${jsCond}) {\n`;
    }

    exitBucle(ctx) {
        this.output += '}\n';
    }

    enterSalida(ctx) {
        const texto = ctx.cadena().getText();
        this.output += `    console.log(${texto});\n`;
    }

    enterTerminar(ctx) {
        this.output += '    break;\n';
    }
}

const listener = new MiniCtoJS();
antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

console.log("\n--- Código JavaScript Generado ---\n");
console.log(listener.output);

// Guardar salida
fs.writeFileSync('output.js', listener.output);
console.log("\n✅ Código traducido guardado en output.js");
