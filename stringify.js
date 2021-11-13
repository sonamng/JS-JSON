/*stringify json data ko string me convert karta hai . it is json farmet but output is string farmet*/

const boi_data={
     name:"sonam",
     age:20,
     city:"Ghazipur"
}
const jsondata=JSON.stringify(boi_data)
console.log(jsondata)

/*this is output
{"name":"sonam","age":20,"city":"Ghazipur"}*/

