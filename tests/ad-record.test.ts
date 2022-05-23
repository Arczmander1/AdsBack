import {AdRecord} from "../records/ad.record";

const defaultObj = {
    name: 'Test Name',
    description: 'Blah',
    lat: 9,
    lon: 9,
    url: 'https//wp.pl',
    price: 0,
};

test('Can build AdRecord', () => {
    const ad = new AdRecord(defaultObj);
    expect(ad.name).toBe('Test Name')
    expect(ad.description).toBe('Blah')
});

test('Validates invalid price', () => {
    expect(() => new AdRecord({
        ...defaultObj,
        price: -3
    })).toThrow('Cena nie może być mniejsza niż 0 lub większa niż 9999999.')
});