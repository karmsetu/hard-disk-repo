function sortPages(pages) {
    const pagesArr = Object.entries(pages)
    pagesArr.sort((a,b)=> {
        // const aHits = a[1]
        // const bHits = b[1]
        return b[1] - a[1]
    }) 
    return pagesArr
}

module.exports = {
    sortPages
}