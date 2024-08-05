- Criar o nosso arquivo package.json

```bash
npm init -y
```

- Instalarmos o typescript como dependencia de desenvolvimento.

```bash
npm i -D typescript
```

- Instalar as tipagens necessárias do node.

```bash
npm i -D @types/node
```

- Instalar o `ts-node-dev` para conseguirmos executar o ts.

```bash
npm i -D ts-node-dev
```

- Inicializar o nosso arquivo `tsconfig`, responsável pelas opções do compilador TypeScript.

```bash
npx tsc --init
```

- `target`: Alterar para uma versão mais recente do ECMASCRIPT `ES2022`
- `rootDir`: Apontar o caminho onde vão estar os arquivos typescript `./src`
- `outDir`: Apontar o caminho onde os arquivos compilados javascript vão ser destinados. `./dist`
- `"exclude": ["node_modules"]`