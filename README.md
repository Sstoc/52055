# MiniC - Proyecto de Analizador Sintáctico

Este proyecto contiene la gramática y el código para un analizador sintáctico básico para un mini lenguaje C (MiniC) usando ANTLR4.

## Instalación

Para clonar este repositorio, ejecuta:

```bash
git clone https://github.com/Sstoc/52055.git
```

Asegúrate de tener instaladas las siguientes herramientas:

- Node.js y npm
- ANTLR 4
- Java (requerido por ANTLR para generar el parser)


## Uso

1. Instala ANTLR y las dependencias necesarias.

2. Genera el parser a partir del archivo `MiniC.g4`:

```bash
antlr4 -Dlanguage=JavaScript -o generated MiniC.g4
```

3. Ejecuta el analizador con Node.js usando `main.js`:

```bash
node main.js
```

4. Siempre debes usar un archivo `input.txt` para que funcione correctamente.

## Archivos importantes

- `MiniC.g4` – Gramática ANTLR para el lenguaje MiniC.
- `main.js` – Código principal para ejecutar el analizador.
- Carpeta `generated/` – Contiene el código generado automáticamente por ANTLR.
- Archivo de entrada:
   - `input.txt`

## Información adicional

Para ver el arbol de derivación se deberá ejecutar `f5` en visual studio code y
este nos mostrará el arbol completo de derivación. Al ejecutar `node main.js` 
podremos ver la lista de tokens y se traducirá a javascript automaticamente, 
para su ejecución en javascript se deberá escribir en la terminal `node output.js`
