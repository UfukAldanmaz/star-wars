import { useState, useEffect } from "react"
import axios from "axios";
import { Wrapper } from "./StyledComponents/ScMainPage";
import PeopleList from "./PeopleList";
import { TailSpin } from 'react-loader-spinner';
import Logout from "./Logout";

const MainPage = () => {

    const [people, setPeople] = useState([]);
    const [search, setSearch] = useState('');
    const [film, setFilm] = useState([]);
    const [selectedGender, setSelectedGender] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const getData = async () => {
        let res = await axios.get('https://swapi.dev/api/people/?format=json');
        setPeople(res.data.results);
        setIsLoading(false);
    }

    const getFilm = async () => {
        let res = await axios.get('https://swapi.dev/api/films/?format=json');
        setFilm(res.data.results);


        res.data.results.forEach(film => {
            const filmId = film.url.charAt(film.url.length - 2);
            const key = `film-${filmId}`;
            localStorage.removeItem(key)
            localStorage.setItem(key, JSON.stringify(film));
        });

    }

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        getData();
        getFilm();
    }, [])

    const filteredData = people.filter(item => {
        if (search === '' && selectedGender === '') {
            // There is no filter. Show all data.
            return true;
        }

        if (search !== '' && selectedGender === '') {
            // Just seach term entered and no gender selected. Filter only by name.
            return item.name.toLowerCase().includes(search.toLowerCase());
        }

        if (search !== '' && selectedGender !== '') {
            // seach term entered and a gender selected. Filter both by name and gender.
            return item.name.toLowerCase().includes(search.toLowerCase()) && item.gender === selectedGender;
        }

        if (search === '' && selectedGender !== '') {
            // Just a gender selected. Filter only by gender.
            return item.gender === selectedGender
        }

        return false;
    })

    return (
        <Wrapper>
            <h1 className="header">STAR WARS</h1>
            <div className="input-drop-container">
                <input placeholder="Search" value={search} onChange={handleChange} className='search'></input>
                <select value={selectedGender} onChange={(e) => setSelectedGender(e.target.value)} className='selection'>
                    <option value=''>All genders</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='n/a'>n/a</option>
                </select>
            </div>
            <Logout />
            {isLoading ? <TailSpin
                height="80"
                width="80"
                radius="9"
                color='yellow'
                ariaLabel='three-dots-loading'
                wrapperStyle
                wrapperClass
            /> : <PeopleList data={filteredData} />}
        </Wrapper>
    )
}

export default MainPage;