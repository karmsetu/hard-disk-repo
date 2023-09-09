import ListReturner from "./assets/listReturner"
export default function MyFruitList() {
    const fruitList = [`pear`, `apple`, `berries`]
    return (
        <div>
            <h1>My Fruit List:</h1>
            <ListReturner fruitList={fruitList} />
            {/* <ul>
                {fruitList.map((eachFruit)=> {
                    return <li key={eachFruit}>{eachFruit}</li>
                })}
            </ul> */}
        </div>
    )
}