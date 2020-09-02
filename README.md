# PackenNg

This is a project to test PackenNg Lib.

## Getting started

### Build packen-ng

``` 
ng build packen-ng --prod
```

### Test views

1. Go to `package.json` and remove `"packen-ng": "file:dist/packen-ng"` .
2. Execute `npm install`
3. Add again `"packen-ng": "file:dist/packen-ng"` in `package.json` .
4. Execute `ng s`

### PackenNg lib documentation

* [README](./projects/packen-ng/README.md)

### Publish PackenNG lib to NPM

``` 
cd dist/packen-ng
npm publish
```
