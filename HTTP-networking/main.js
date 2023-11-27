const {crawlPage} =  require('./crawl')

async function main() {
    if(process.argv.length <3){
        console.log(`no website provided`)
        process.exit(1)
    } 
    if(process.argv.length >3){
        console.log(`too many website provided`)
        process.exit(1)
    } 
    const baseURL = process.argv[2]
    const pages = await crawlPage(baseURL, baseURL, {})
    for(const each in pages){
        console.log(each)
    }
}

main()