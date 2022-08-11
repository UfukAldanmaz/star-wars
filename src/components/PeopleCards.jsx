import React, { useEffect, useState } from "react";

const PeopleCard = ({ item }) => {

    const [filmDetails, setFilmDetails] = useState([]);

    const deletePerson = (e) => {
        e.target.parentElement.parentElement.remove()
    }
    const getFilms = () => {
        setFilmDetails([]);
        item.films.forEach(film => {

            const filmId = film.charAt(film.length - 2);
            const filmDetail = JSON.parse(localStorage.getItem(`film-${filmId}`));
            setFilmDetails(oldArray => [...oldArray, filmDetail]);
        });
    }

    useEffect(() => {
        getFilms();
        // fetchFilms();
    }, [])


    // function below is the second method for retrieving the data 
    // but doing this with the localstorage is more effective.


    // const [fetchedFilms, setFetchedFilms] = useState([]);

    // function fetchFilms() {

    //     setFetchedFilms([])
    //     item.films.forEach(filmUrl => {

    //         axios.get(filmUrl).then((res) => {
    //             setFetchedFilms(old => [...old, res.data])
    //         })
    //     })
    // }


    return <tr className="people">
        <td className="people-table">{item.name}</td>
        <td className="people-table">{item.height}</td>
        <td className="people-table">{item.gender}</td>
        <td className="people-table-films">{
            filmDetails.map(film => {
                return film.title;
            }).join(', ')
        }</td>
        <td className="people-table-btn">
            <button onClick={deletePerson} className="remove-btn">❌</button>
        </td>
    </tr>
}

export default PeopleCard;