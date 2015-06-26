Package.describe({
  name: 'tluyben:shen',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Programming Meteor apps in the Shen programming language.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/tluyben/Meteor-Shen.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});


Package.registerBuildPlugin({
          name: "shen-runner",
          use: ['tluyben:sheninit'],
          sources: [
            'shen-runner.js'
          ],
          npmDependencies: {
          }
});




Package.onTest(function(api) {
  api.use('tinytest');
  api.use('tluyben:shen');
  api.addFiles('shen-tests.js');
});

Npm.depends({
// 'readline-sync': '1.2.19'
});
