import { v4 as uuidv4 } from 'uuid';
export default function ListFilter(props) {
    const listName = Object.keys(props)[0]
    let filteredList = props[listName]
    filteredList.sort()
    console.log(filteredList)
    // let count = 0
    return (
        <ul>
        {filteredList.map((listItem) => {
            
            return <li key={uuidv4()}>{listItem} </li>
        })}
        </ul>
    )
}