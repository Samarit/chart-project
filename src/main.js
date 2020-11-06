const elem = document.body.querySelector('h1')
const elem2 = document.body.querySelector('h2')

setTimeout(() => {
    elem.innerText = 'I`m ready as fuck'
}, 2000)

async function test () {
    let fetched = await fetch('/api/answer')
    let data = await fetched.json()
    console.log(data.message);
    elem2.innerText = data.message
}

test()