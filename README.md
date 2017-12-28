# key-value
A simple utility for mapping an object to an array. This is particularly useful for iterators, which can not simply be passed an object.

## Example
```ts
import keyValue from 'key-value';

const object = {
    foo: 'bar'
};

const map = keyValue(object);
/*
    [{
        key: 'foo',
        value: 'bar'
    }]
*/
```

## Usage
### TypeScript/ES6
```ts
import keyValue from 'key-value';

keyValue(yourObject);
```

### ES5
```ts
var keyValue = require('key-value').default;

keyValue(yourObject);
```
