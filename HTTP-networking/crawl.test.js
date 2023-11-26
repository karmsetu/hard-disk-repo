const {mormalizeURL} =  require('./crawl')
// const {test, expect} = require('jest')
console.log({test, expect})
test('mormalizeURL', ()=> {
    const input = ''
    const output = mormalizeURL(input)
    const expected = ''
    expect(output).toEqual(expected)
})
