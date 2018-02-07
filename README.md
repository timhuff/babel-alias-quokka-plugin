# babel-alias-quokka-plugin
Quokka plugin to enable babel aliases that have been loaded with [`babel-plugin-module-resolver`](https://www.npmjs.com/package/babel-plugin-module-resolver).
(these are not required, though, and aliases can be defined at the `quokka.alias` path of `package.json`.

Installation: `yarn add babel-alias-quokka-plugin`

It uses [`babel-load-config`](https://www.npmjs.com/package/babel-load-config) to find the babel config.
It then uses it to configure a module resolver from `babel-plugin-module-resolver` and uses that to resolve modules for Quokka.

