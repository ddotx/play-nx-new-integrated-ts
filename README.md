# NX Integrated Monorepo

- initial setup
- Nx Console
- @nrwl/js to generate libs with preconfigured build, test, lint...
- linking via TS path mappings
- running target for a single or multiple projects

```
nx generate @nrwl/js:library is-even --importPath=@ddotx/is-even --publishable
```

```
npx nx build is-even
```

```
npx nx generate @nrwl/js:library is-odd --importPath=@ddotx/is-old --publishable --dry-run
```

### Link the package
tsconfig.base.json
```json
{
      "paths": {
      "@ddotx/is-even": ["packages/is-even/src/index.ts"],
      "@ddotx/is-old": ["packages/is-odd/src/index.ts"]
    }
}

```

```
npx nx graph
```

### Build one package before one package
nx.json
```json
{
    "targetDefaults": {
    "build": {
      "dependsOn": ["^build"],
      "inputs": ["production", "^production"]
    },
    "lint": {
      "inputs": ["default", "{workspaceRoot}/.eslintrc.json"]
    },
    "test": {
      "inputs": ["default", "^production", "{workspaceRoot}/jest.preset.js"]
    }
  },
}
```
### Demo
```
npx nx build is-odd
npx nx run-many --target=build
```
