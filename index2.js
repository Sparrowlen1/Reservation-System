const parks = [
    {name: 'Abadare National Park'},
    {name: 'Hells Gate National Park'},
    {name: 'Masai Mara National Park'},
    {name: 'Nairobi National Park'},
    {name: 'Lake Nakuru National Park'},
    {name: 'Shimba Hills National Reserve'},
    {name: 'Tsavo East National Park'},
    {name: 'Sibiloi National Park'}
];

const list = document.getElementById('list')
function setList(group) {
clearList();
for(let park of group) {
    const item = document.createElement('li');
    item.classList.add('list-group-item');
    const text = document.createTextNode(park.name)
    item.appendChild(text);
    list.appendChild(item);
}
if(group.length === 0) {
    setNoResults()
}
}

function clearList() {
    while(list.firstChild){
        list.removeChild(list.firstChild)
    }
}

function setNoResults() {
    const item = document.createElement('li');
    item.classList.add('list-group-item');
    const text = document.createTextNode('No results found')
    item.appendChild(text);
    list.appendChild(item);
}

function getRelevancy (value, searchTerm) {
    if(value === searchTerm) {
        return 3;
    } else if(value.startsWith(searchTerm)) {
        return 2;
    } else if(value.includes(searchTerm)){
        return 1;
    } else{
        return 0;
    }
}

const searchInput = document.getElementById('srch');

searchInput.addEventListener('input', (event) => {
    let value = event.target.value;

    if(value && value.trim().length > 0){
        value = value.trim().toLowerCase();
        setList(parks.filter(park => {
            return park.name.includes(value); 
        }))
    }else {
        clearList();
    }
});
