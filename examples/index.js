var dict = require( './../lib' );

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