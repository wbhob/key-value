import { expect } from 'chai';

import keyValue from '../index';

describe('Simple Objects', () => {
    let object: any;
    beforeEach(() => {
        object = {
            one: 'hello',
            two: 2
        }
    });
    it('should return an array', () => {
        expect(keyValue(object)).to.be.an('array');
    });
    it('should have a `key` property', () => {
        expect(keyValue(object)[0]).to.have.property('key');
    });
    it('should have a `value` property', () => {
        expect(keyValue(object)[0]).to.have.property('value');
    });
    it('should have "one" as the key in the first index', () => {
        expect(keyValue(object)[0].key).to.be.equal('one');
    });
    it('should have "hello" as the value in the first index', () => {
        expect(keyValue(object)[0].value).to.be.equal(object.one);
    })
    it('should have 2 as the value in the second index', () => {
        expect(keyValue(object)[1].value).to.be.equal(object.two);
    })
});

describe('Nested Objects', () => {
    let object: any;

    beforeEach(() => {
        object = {
            baz: {
                foo: 'bar',
                yum: 54
            },
            two: ['candy']
        }
    });

    it('should return an array', () => {
        expect(keyValue(object)).to.be.an('array');
    });
    it('should have a `key` property', () => {
        expect(keyValue(object)[0]).to.have.property('key');
    });
    it('should have a `value` property', () => {
        expect(keyValue(object)[0]).to.have.property('value');
    });
    it('should have "baz" as the first index\'s key', () => {
        expect(keyValue(object)[0].key).to.be.equal('baz');
    });
    it('should have an object as the value in the first index', () => {
        expect(keyValue(object)[0].value).to.be.equal(object.baz);
    })
    it('should have an array as value of the second index', () => {
        expect(keyValue(object)[1].value).to.be.equal(object.two);
    })
});


describe('Error Handling', () => {
    let string: string;
    let number: number;
    let array: any[];

    const errorMessage = 'The construct passed into keyValue() was not an object. See call stack for more information.';

    beforeEach(() => {
        string = 'hello';
        number = 12;
        array = ['foo'];
    });

    it('should throw if passed a string', () => {
        expect(keyValue.bind(string)).to.throw(errorMessage);
    });
    it('should throw if passed a number', () => {
        expect(keyValue.bind(number)).to.throw(errorMessage);
    });
    it('should throw if passed an array', () => {
        expect(keyValue.bind(array)).to.throw(errorMessage);
    });
});
