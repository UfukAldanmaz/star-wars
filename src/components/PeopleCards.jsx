const PeopleCard = ({ item }) => {

    return (<div>
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Height</th>
                    <th>Gender</th>
                    <th>Films</th>
                </tr>
                <tr>
                    <td>{item.name}</td>
                    <td>{item.height}</td>
                    <td>{item.gender}</td>
                    {/* <td>{item.films}</td> */}
                    {/* <td>{film.map(item => {
        return <div>{item.title}</div>
    })}</td> */}
                </tr>
            </tbody>
        </table>

    </div>)

}

export default PeopleCard;