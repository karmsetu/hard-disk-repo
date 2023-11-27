const {JSDOM} = require('jsdom')

async function crawlPage(currURL) {
    console.log(`actively crawling:${currURL}`)
    try {
        const resp = await fetch(currURL)
        if(resp.status > 399){
            console.log(`error`)
            return
        }
        const contentType = resp.headers.get("content-type")
        if(!contentType.includes("text/html")){
            console.log(`no HTML found`)
            return
        }
        console.log(await resp.text())
    } catch (error) {
        console.log(error.message)
    }
}

function getURLsFromHTML(htmlBody, baseURL) {
    const urls = []
    const dom = new JSDOM(htmlBody)
    const linkElem = dom.window.document.querySelectorAll('a')
    linkElem.forEach(elem => {
        if (elem.href.slice(0,1) === '/') {
            try {
                const newURL = new URL(baseURL)
                urls.push(`${baseURL}${elem.href}`)
            } catch (error) {
                throw error
            }
        } else {
            try {
                const newURL = new URL(baseURL)
                urls.push(`${elem.href}`)
            } catch (error) {
                throw error
            }
        }
        // const elemURL = `${elem.href.slice(0,1) === '/' ? baseURL : ''}${elem.href}` // checks for relative & absolute path
        // urls.push(elemURL)
    })
    return urls
}

function mormalizeURL(URLstr) {
    const newURLObj = new URL(URLstr)
    const path = `${newURLObj.hostname}${newURLObj.pathname}`
    return path.length && path.slice(-1) === '/' ? path.slice(0,-1) : path
}

module.exports = {
    mormalizeURL,
    getURLsFromHTML,
    crawlPage
}