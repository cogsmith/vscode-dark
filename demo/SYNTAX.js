// VSCODE-DARK //

/* COMMENT-BLOCK */

const DIV = '---'; console.log("\n" + DIV + "\n");

const CONST = 'variable.other.constant';
var VAR = 'variable.other.readwrite';
let LET = 'variable.other.readwrite';

const OBJECT = { KEY: 'VAL', get GETSET() { }, set GETSET(val) { } };
const OBJECTNEW = new Object();

const FX = async function (arg, arg2) { return arg; };
OBJECT.FX = FX;

const FXARROW = async (arg, arg2) => { return arg; };
function FXFX(z) {
	z = 123; z += 11;
	if (z < 99 || false) { return undefined; }
	return z;
};

const DUMPTEST = {
	null: null,
	undefined: undefined,
	boolean: true,
	string: 'HELLOWORLD',
	number: 1234,
	float: 3.14,
	bigint: BigInt(123456789),
	date: new Date(),
	object: { foo: 999 },
	regexp: new RegExp('/\n/g'),
	symbol: Symbol('SYMTEST'),
	special: (new Proxy({ a: 1, z: 9 }, {})),
};

require('util').inspect.styles = { name: 'whiteBright', null: 'underline', undefined: 'magentaBright', module: 'underline', bigint: 'yellow', number: 'yellow', boolean: 'cyanBright', date: 'yellowBright', regexp: 'green', special: 'blueBright', string: 'greenBright', symbol: 'cyan' };
console.log({ DUMPTEST: DUMPTEST }); console.log("\n");

if (false) {
	nope.ok(); nope.ok;
}

const FOO = OBJECT.FX(123); console.log(FOO);
const KEYS = Object.keys({ a: 1, z: 9 }); console.log(KEYS);

console.log("\n---\n");










