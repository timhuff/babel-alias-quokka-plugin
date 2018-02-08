import findBabelConfig from "find-babel-config";
import path from "path";
import { Module } from "module";
import { resolvePath } from "babel-plugin-module-resolver";

const root = path.resolve(".");

const loadLikeNormal = Module._load;

exports.before = config => {
  const moduleResolverOpts = getModuleResolverOpts(config);
  Module._load = (requireString, _module, isMain) => {
    const normalPath =
      resolvePath(requireString, _module.filename, moduleResolverOpts) ||
      requireString;
    return loadLikeNormal(normalPath, _module, isMain);
  };
};

const getModuleResolverOpts = ({ alias } = {}) => {
  if (alias) return { root, alias };
  let babelConfig = findBabelConfig.sync(root).config;
  if (babelConfig.env) {
    babelConfig =
      babelConfig.env[
        process.env.BABEL_ENV || process.env.NODE_ENV || "development"
      ];
  }
  if (!babelConfig || !babelConfig.plugins) return null;
  const moduleResolverConfig = babelConfig.plugins.find(
    pluginConfig => pluginConfig[0] === "module-resolver"
  );
  return moduleResolverConfig && moduleResolverConfig[1];
};
