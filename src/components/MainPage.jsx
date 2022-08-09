import { useState, useEffect } from "react"
import axios from "axios";
import { Wrapper } from "./StyledComponents/ScMainPage";
import PeopleList from "./PeopleList";
import GenderSelection from "./GenderSelection";

const MainPage = () => {

    const [people, setPeople] = useState([]);
    const [search, setSearch] = useState('');
    const [film, setFilm] = useState([]);

    const getData = async () => {
        let res = await axios.get('https://swapi.dev/api/people/?format=json');
        setPeople(res.data.results);
    }

    const getFilm = async () => {
        let res = await axios.get('https://swapi.dev/api/films/?format=json');
        setFilm(res.data.results);

    }

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const deletePerson = (e) => {
        e.target.parentElement.remove();
    }

    useEffect(() => {
        getData();
        getFilm();
    }, [])

    const filteredData = people.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <Wrapper>
            <h1> STAR WARS</h1>
            <input placeholder="Search" value={search} onChange={handleChange}></input>
            <PeopleList data={filteredData} delete={deletePerson} />

            <GenderSelection data={filteredData} />

        </Wrapper>
    )
}

export default MainPage;