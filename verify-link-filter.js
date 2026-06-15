const fs = require('fs');
const path = require('path');
const vm = require('vm');
const code = fs.readFileSync('.eleventy.js', 'utf8');
const filters = {};
const noOp = () => {};
const config = new Proxy({
  addFilter(name, fn) { filters[name] = fn; },
  setFrontMatterParsingOptions: noOp,
  setLibrary: noOp,
  addTransform: noOp,
  addPlugin: noOp,
  addPassthroughCopy: noOp,
  addWatchTarget: noOp,
  addLayoutAlias: noOp,
  addExtension: noOp,
  setBrowserSyncConfig: noOp,
  setDataDeepMerge: noOp,
  setLiquidOptions: noOp,
}, {
  get(target, prop) {
    return prop in target ? target[prop] : noOp;
  }
});
const sandbox = { require, module: { exports: {} }, exports: {}, __dirname: __dirname, __filename: path.join(__dirname, '.eleventy.js'), process, console, fs, path, vm };
vm.createContext(sandbox);
vm.runInContext(code, sandbox);
const fn = sandbox.module.exports;
fn(config);
console.log('link filter exists:', typeof filters.link);
const samples = ['[[Soldier]]', '[[Aeon Guard|AG]]', '[[aeon stone#Aeon Stone, Clear Spindle | clear spindle aeon stone]]'];
samples.forEach(s => console.log(JSON.stringify(s), '=>', filters.link(s)));
