const {sortPages} = require('./report')

test('sortPages', ()=> {
    const input = {"https://wagslane.dev":3}
    const actual = sortPages(input)
    const expected = [
        ['https://wagslane.dev', 3]
    ]
    expect(actual).toEqual(expected)
})
