module.exports = {
  entryPoints: ['src/'],
  entryPointStrategy: 'expand',
  out: 'doc',
  plugin: [
    'typedoc-plugin-rename-defaults',
    '@zamiell/typedoc-plugin-not-exported',
  ],
};
