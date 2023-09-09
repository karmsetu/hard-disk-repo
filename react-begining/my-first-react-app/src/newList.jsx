import ListFilter from "./listFilter"
export default function NewList() {
    const oldList = [3,4,1,45,36,85,352,1,53,3]
    return (
        <div>
            <h1>Sorted numbers</h1>
            < ListFilter oldList={oldList}/>
        </div>
    );
}