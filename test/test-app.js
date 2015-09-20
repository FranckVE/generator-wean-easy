'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('wean:app', function () {
    before(function (done) {
        helpers.run(path.join(__dirname, '../generators/app'))
            .withOptions({
                skipInstall: true
            })
            .withPrompts({
                name: true
            })
            .on('end', done);
    });

    it('creates configs', function () {
        assert.file([
          'bower.json',
          'package.json',
        ]);
    });

    it('creates project files', function () {
        assert.file([
          '.editorconfig',
          '.jshintrc'
        ]);
    });

    it('creates app/', function () {
        assert.file([
          'app/app.js',
          'app/index.html',
        ]);
    });

    it('creates app/routes/', function () {
        assert.file([
          'app/routes/index.js',
        ]);
    });

    it('creates app/views', function () {
        assert.file([
          'app/views/index.ejs',
        ]);
    });

    it('creates app/public', function () {
        assert.file([
            'app/public/css/app.css',
            'app/public/js/app.js',
            'app/public/partials/header.html',
        ]);
    });
});