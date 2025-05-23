const form = document.getElementById('fruitform')
const fruit = document.getElementById("fruitname")
const price =  document.getElementById('fruitprice')

form.addEventListener('submit', (e) =>
{
    e.preventDefault()
    const obj = {
        name: fruit.value,
        price: price.value
    }

    fetch("http://127.0.0.1:63013/fruits", {method:"post", headers:{"Content-Type": "application/json"}, body:JSON.stringify(obj)}).then((response)=>{
        const resopnse = response.json()
        console.log(resopnse)
    })
})


