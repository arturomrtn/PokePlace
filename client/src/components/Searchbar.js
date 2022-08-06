import React from 'react';
const [useState] = 'React'

const Searchbar = () => {
//const [search, setSearch] = useState("")

const changeText = (e) => {
      setSearch(e.target.value)
}

const onClick = (e) => {
      
}

    return (
        <div>
        <div>
            <input placeholder= "Search Pokemon..."
                   onChange = {changeText}/>

        <div>
            <button onChange = {onClick}/>
        </div>
        </div>
        </div>
    
    );
}

export default Searchbar;