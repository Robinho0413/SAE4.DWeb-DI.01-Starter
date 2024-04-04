import { Search } from "../../images/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SearchBar({ className, ...rest }) {

  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  function searchRedirect() {
    navigate(`/searchContent/${searchTerm}`);
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      searchRedirect();
    };
  }

  return (
    <div className='flex items-center w-80 h-9 py-1.5 px-5 bg-searchBackground rounded-md'>

      <input id="searchInput" className='bg-transparent text-searchPlaceholder text-base max-w-64 w-full pr-2.5 focus-visible:outline-none focus:bg-focusSearchBackground' type="text" placeholder='Rechercher' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyPress={handleKeyPress}/>

      <button {...rest} className={Search({ className })} onClick={searchRedirect}>
        <Search className="text-searchIcon w-5"/>
      </button>

    </div>
  )
}