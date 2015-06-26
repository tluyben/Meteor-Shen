Package.describe({
  name: 'tluyben:sheninit',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Programming Meteor apps in the Shen programming language.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/tluyben/Meteor-Shen.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});


Package.onUse(function(api) {
          api.versionsFrom('1.1.0.2');
          api.export("ShenJsRuntime");
});





Package.onTest(function(api) {
  api.use('tinytest');
  api.use('tluyben:sheninit');
  api.addFiles('shen-tests.js');
});

Npm.depends({
// 'readline-sync': '1.2.19'
});
