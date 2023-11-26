url = `http://testUser:pass@website.com:8080/path?value=test#testHash`
// settings = ""

// const response = await fetch(url, settings)
// const responseData = await response.json()

const urlObj = new URL(url)
// console.log(urlObj)
/*URL {
  href: 'http://testUser:pass@website.com:8080/path?value=test#testHash',
  origin: 'http://website.com:8080',
  protocol: 'http:',
  username: 'testUser',
  password: 'pass',
  host: 'website.com:8080',
  hostname: 'website.com',
  port: '8080',
  pathname: '/path',
  search: '?value=test',
  searchParams: URLSearchParams { 'value' => 'test' },       
  hash: '#testHash'
} */

// MailTo
console.log(`mailto:karmsetu8@gmail.com`)

// Declaring a promise

const getRandomBool = () => Math.random() >= 0.5;

const selfMadePromise = new Promise((resolve, reject) => {
    setTimeout(()=> {
        getRandomBool() ? resolve("resolved") : reject("rejected")
    }, 1000)
})


selfMadePromise
    .then(mess => console.log(mess))
    .catch(err => console.log(err))

// await keyword
const printPromise =async()=>{
    try {
        const message = await selfMadePromise
        console.log({message})
    } catch (error) {
        console.log({error})   
    }
}

printPromise()

let myHeaders = new Headers({
"Content-Type": "text/xml",
});

console.log(myHeaders.get("Content-Type"))