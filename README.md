# MiniC - Proyecto de Analizador Sintáctico

Este proyecto contiene la gramática y el código para un analizador sintáctico básico de un mini lenguaje C (MiniC) usando ANTLR4.

## Instalación

Para clonar este repositorio, ejecuta:

```bash
git clone https://github.com/Sstoc/52055.git
```

Asegúrate de tener instaladas las siguientes herramientas:

- **Node.js y npm**
- **ANTLR 4**
- **Java** (requerido por ANTLR para generar el parser)

## Uso

Instala ANTLR y las dependencias necesarias.

Genera el parser a partir del archivo `MiniC.g4`:

```bash
antlr4 -Dlanguage=JavaScript -o generated MiniC.g4
```

Ejecuta el analizador con Node.js usando `main.js`:

```bash
node main.js
```

Siempre debes usar un archivo `input.txt` para que funcione correctamente.

## Archivos importantes

- `MiniC.g4` – Gramática ANTLR para el lenguaje MiniC.
- `main.js` – Código principal para ejecutar el analizador.
- Carpeta `generated/` – Contiene el código generado automáticamente por ANTLR.
- Archivo de entrada: `input.txt`.

## Información adicional

Para ver el árbol de derivación, presiona `F5` en **Visual Studio Code**; esto mostrará el árbol completo de derivación.

Al ejecutar `node main.js`, podrás ver la lista de tokens y se traducirá a JavaScript automáticamente. Para ejecutar el código generado en JavaScript, debes escribir en la terminal:

```bash
node output.js
```

### Ejemplo con el archivo `Input_correcto_1.txt`:

Copia su contenido y pégalo en el archivo `input.txt`:

```c
while(1) {
    printf("Perro");
    break;
}
```

Si no tienes activada la vista ANTLR4 en **Visual Studio Code**, abre el archivo `MiniC.g4` y te aparecerá una columna a la izquierda.

Luego, presiona `F5` para ver el árbol de derivación.

Para ver la tabla de tokens, abre la terminal en **Visual Studio Code** y escribe:

```bash
node main.js
```

Al presionar `Enter`, se mostrarán los tokens y se generará el código en **JavaScript**. En este ejemplo, no aparecerán errores en las líneas. Finalmente, para ejecutar el código generado, escribe en la terminal:

```bash
node output.js
```

Esto mostrará la palabra **Perro**.
