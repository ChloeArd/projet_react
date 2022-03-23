import './Categories.css';

export const Categories = function ({setCategory}) {

    const categories = [
        {id: 0, name: "Tout"},
        {id: 1, name: "Autres"},
        {id: 2, name: "hardware"}
    ];

    return (
        <div className="Categories">
            <select onChange={(e) => setCategory(parseInt(e.target.value))}>
                {categories.map(category => <option value={category.id} key={category.id}>{category.name}</option>)}
            </select>
        </div>
    );
}