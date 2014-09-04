HTML Element Dictionary
=======================
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Dictionary of HTML elements.

Dictionary built from the HTML language markup [reference](http://www.w3.org/TR/html-markup/).


## Notes

This is currently a __work-in-progress__. For many elements the information is incomplete. Use with caution.


## Installation

``` bash
$ npm install html-element-dictionary --save
```


## Usage

The module is simply a JSON object, so use as you would a normal JavaScript object.

``` javascript
var dict = require( 'html-element-dictionary' );

console.log( JSON.stringify( dict ) );
/**
* Returns:
*	{
		"a": {
			"desc": "...",
			"url": "...",
			"type": "normal",
			"attributes": [...]
		},
		...
	}
*/

console.log( dict[ 'a' ].type );
// Returns 'normal'
```

## Examples

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ open reports/coverage/lcov-report/index.html
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.



[npm-image]: http://img.shields.io/npm/v/html-element-dictionary.svg
[npm-url]: https://npmjs.org/package/html-element-dictionary

[travis-image]: http://img.shields.io/travis/element-io/html-element-dictionary/master.svg
[travis-url]: https://travis-ci.org/element-io/html-element-dictionary

[coveralls-image]: https://img.shields.io/coveralls/element-io/html-element-dictionary/master.svg
[coveralls-url]: https://coveralls.io/r/element-io/html-element-dictionary?branch=master

[dependencies-image]: http://img.shields.io/david/element-io/html-element-dictionary.svg
[dependencies-url]: https://david-dm.org/element-io/html-element-dictionary

[dev-dependencies-image]: http://img.shields.io/david/dev/element-io/html-element-dictionary.svg
[dev-dependencies-url]: https://david-dm.org/dev/element-io/html-element-dictionary

[github-issues-image]: http://img.shields.io/github/issues/element-io/html-element-dictionary.svg
[github-issues-url]: https://github.com/element-io/html-element-dictionary/issues