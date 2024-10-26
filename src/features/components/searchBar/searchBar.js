import './searchBar.css'
import { BsSearch } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { filterFromSearch } from '../../slices/postSlice'

const SearchBar = () => {
    const dispatch = useDispatch()

    const filterPost = (e) => {
        const target = e.target
        const data = target.value
        dispatch(filterFromSearch(data))
    }

    return (
        <div className='searchBarContainer'>
            <input placeholder='Search' className='searchBar' onChange={filterPost}></input>
            <BsSearch className='searchBarIcon' />
        </div>
    )
}

export default SearchBar