import axios from "axios"


function FetchDataFromApi()
{
async function FetchData()
{
    const result = await axios.get("https://fakestoreapi.com/products")
    console.log(result)
}
FetchData()
}
export default FetchDataFromApi