# portfolio - ts animations

this repository is used as a testing ground for web graphics animations. a web graphic animation will be used as the background for the second iteration of my portfolio site (portfolio-2.0).


### dependencies

[node](https://nodejs.org/en) <br>
[npm](https://www.npmjs.com/) <br>


### set up new directory

install dependencies

```
npm init -y
npm install three typescript @types/three vite
```

create typescript config

```
touch tsconfig.json
echo '{
  "compilerOptions": {
    "target": "ES6",
    "module": "ESNext",
    "strict": true,
    "esModuleInterop": true,
    "moduleResolution": "Node",
    "outDir": "./dist",
    "sourceMap": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}' > tsconfig.json
```

create vite config

```
touch vite.config.ts
echo 'import { defineConfig } from "vite";

export default defineConfig({
    build: {
        outDir: "dist"
    }
});' > vite.config.ts
```

add scripts

```
// update scripts section in package.json
"scripts": {
  "dev": "vite",
  "build": "vite build"
}
```

create source files

```
mkdir src
touch src/index.ts
touch index.html
```

### run sample

```
npm run dev
```
