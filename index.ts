import * as isObject from 'is-object';

export default function keyValue(data: any) {
    if (isObject(data) && !Array.isArray(data)) {
        let array: Array<{ key: string; value: any }> = [];
        for (let i in data) {
            if (data.hasOwnProperty(i)) {
                array.push({
                    key: i,
                    value: data[i]
                });
            }
        }
        return array;
    } else {
        throw new Error('The construct passed into keyValue() was not an object. See call stack for more information.');
    }
}

