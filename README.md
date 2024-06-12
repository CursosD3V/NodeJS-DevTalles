# NOTAS
## Factory functions
Una función factory no es más que una función que crea una función.

## Patrón adaptador
Aplicarlo nos evita tener altamente acoplado nuestro código con dependencia de tercero, en ocasiones sería imposible pero donde se pueda debemos utilizarlo.

## Async
Transforma el valor de retorno que tenemos en nuestra función en una promesa.

## Await
Podemos llamarlo como código bloqueante, ya que no seguirá con la ejecución ahasta que sea resuelto.

## Comandos
```npx nodemon src/app```
Es una forma de instalar nodemon con node package execute, es como si lo instalara globalmente en mi computadora y lo ejecuto

---
# Pasos para usar Node con TypeScript con Nodemon

Más información - [Docs Oficiales](https://nodejs.org/en/learn/getting-started/nodejs-with-typescript)

1. Instalar TypeScript y tipos de Node, como dependencia de desarrollo
```
npm i -D typescript @types/node
```
2. Inicializar el archivo de configuración de TypeScript ( Se puede configurar al gusto)
```
npx tsc --init --outDir dist/ --rootDir src
```

3. **Opcional** - Para traspilar el código, se puede usar este comando
```
npx tsc
npx tsc --watch
```

4. Configurar Nodemon y Node-TS
```
npm install -D ts-node nodemon
```
5. Crear archivo de configuración de Nodemon - **nodemon.json**
```
{
  "watch": ["src"],
  "ext": ".ts,.js",
  "ignore": [],
  "exec": "npx ts-node ./src/app.ts"
}
```
6. Crear script para correr en desarrollo en el **package.json**
```
  "dev": "nodemon"
  "dev": "npx nodemon" // En caso de no querer instalar nodemon
```

7. Instalar rimraf (Herramienta que funciona similar al rm -f) eliminar directorio
```
npm install -D rimraf
```

8. Crear scripts en el package.json para construir e iniciar en producción
```
   "build": "rimraf ./dist && tsc",
   "start": "npm run build && node dist/app.js"
```
---
# Pruebas unitarias y de integración

### Características de las pruebas
1. Fáciles de escribir.
2. Fáciles de leer.
3. Confiables.
4. Rápidas.
5. Principalmente unitarias.

Para lograr todo esto se utiliza **AAA**, es decir: 
- Arrange (Arreglar).
- Act (Actuar).
- Assert (Afirmar).
 