const {mormalizeURL, getURLsFromHTML} =  require('./crawl')


test('mormalizeURL', ()=> {
    const input = 'https://jestjs.io/docs/getting-started'
    const output = mormalizeURL(input)
    const expected = 'jestjs.io/docs/getting-started'
    expect(output).toEqual(expected)
})

test('mormalizeURL strip /', ()=> {
    const input = 'https://jestjs.io/docs/getting-started/'
    const output = mormalizeURL(input)
    const expected = 'jestjs.io/docs/getting-started'
    expect(output).toEqual(expected)
})

test('getURLsFromHTML absolute', ()=> {
    const inputHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>jest test</title>
    </head>
    <body>
        <a href="https://jestjs.io/docs/getting-started">website</a>
    </body>
    </html>
    `
    const inputURL = 'https://jestjs.io/docs/getting-started'
    const output = getURLsFromHTML(inputHTML, inputURL)
    const expected = ['https://jestjs.io/docs/getting-started']
    expect(output).toEqual(expected)
})

test('getURLsFromHTML relative', ()=> {
    const inputHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>jest test</title>
    </head>
    <body>
        <a href="/path/">website</a>
    </body>
    </html>
    `
    const inputURL = 'https://jestjs.io/docs/getting-started'
    const output = getURLsFromHTML(inputHTML, inputURL)
    const expected = ['https://jestjs.io/docs/getting-started/path/']
    expect(output).toEqual(expected)
})