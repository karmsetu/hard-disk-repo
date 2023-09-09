export default function ListReturner(props) {
    let boi= Object.keys(props)[0]
    return (
        <ul>
        {console.log(typeof((boi)))}
        {props[boi].map((listItem) => {
            return <li key={listItem}>{listItem}</li>
        })}
        </ul>
    );
}