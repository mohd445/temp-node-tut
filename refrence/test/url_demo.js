const url = require('url')

const myUrl = new URL('https://www.youtube.com/watch?v=SBvmnHTQIPY')

// Serialized URL
console.log(myUrl.href)
console.log(myUrl.toString())

// Host (root domain)
console.log(myUrl.host)

// Host ( does not get port )
console.log(myUrl.hostname)

// Path name
console.log(myUrl.pathname)

// Serialized Query
console.log(myUrl.search)

// Params Object
console.log(myUrl.searchParams)

// Add param
myUrl.searchParams.append('abc', '123')
console.log(myUrl.searchParams)

// Loop thorugh param
myUrl.searchParams.forEach((value, name) => console.log(`${value} : ${name}`))