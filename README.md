# babel-alias-quokka-plugin

Quokka plugin to enable babel aliases that have been loaded with [`babel-plugin-module-resolver`](https://www.npmjs.com/package/babel-plugin-module-resolver).

(these are not required, though, and aliases can be defined at the `quokka.alias` path of `package.json`.)

It uses [`babel-load-config`](https://www.npmjs.com/package/babel-load-config) to find the babel config.
It then uses it to configure a module resolver from `babel-plugin-module-resolver` and uses that to resolve modules for Quokka.

## Installation:

`yarn add babel-alias-quokka-plugin`

Then ensure this is in the top level of your `package.json`

```javascript
"quokka": {
    "babel": true, // needed for imports
    "plugins": ["babel-alias-quokka-plugin"],
}
```

Aliases can either be pulled out of the configuration of `babel-plugin-module-resolver` automatically or you can specify them in `package.json` (see below)

## Example Usages

### Via Babel config:

```json
{
  "plugins": [
    [
      "module-resolver",
      {
        "root": ["./"],
        "alias": {
          "test": "./test"
        }
      }
    ]
  ]
}
```

### Via `package.json`:

```json
  "quokka": {
    "babel": true,
    "plugins": ["babel-alias-quokka-plugin"],
    "alias": {
      "test": "./test"
    }
  }
```

# Testing

To test, open `test/index.js` in VSCode and start Quokka
