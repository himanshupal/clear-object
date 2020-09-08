# clear-object

> Filters an Object removing undefined, null, false & empty values

## Install

```
npm i clear-object
```

## Usage

```js
const { clearObject } = require("clear-object");

// or use ES6 syntax
// import { clearObject } from "clear-object";

const object = {
	alpha: {
		alpha1: "ALPHA",
		alpha2: {
			alpha21: undefined,
			alpha22: "ALPHA22",
			alpha23: null,
		},
	},
	beta: {},
	gamma: {
		gamma1: undefined,
		gamma2: "GAMMA2",
		gamma3: {
			gamma31: {
				gamma311: false,
				gamma312: "GAMMA312",
			},
		},
	},
};

clearObject(object);

console.log(object);

// Prints
{
  "alpha": {
    "alpha1": "ALPHA",
    "alpha2": {
      "alpha22": "ALPHA22",
      "alpha23": null
    }
  },
  "gamma": {
    "gamma2": "GAMMA2",
    "gamma3": {
      "gamma31": {
        "gamma311": false,
        "gamma312": "GAMMA312"
      }
    }
  }
}
```

## API

`clearObject(source, options, depth)`

### source

Type: `Object`

Required: yes

Source Object to filter data from

### options

Type: `Object`

Required: no

Values to remove from object, possible options :

| Option             | Type      | Default | Description                                                                |
| ------------------ | --------- | ------- | -------------------------------------------------------------------------- |
| `excludeFalse`     | `Boolean` | `false` | If true; Removes all fields with false as value from the source object     |
| `excludeNull`      | `Boolean` | `false` | If true; Removes all fields with null values from the source object        |
| `excludeUndefined` | `Boolean` | `true`  | If true; Removes all fields with undefined as value from the source object |

### depth

Type: `Number`

Required: no

Select depth level to filter object upto, `0` will disable filtering
