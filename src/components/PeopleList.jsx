import { PeopleWrapper } from "./StyledComponents/ScPeople";
import React from 'react';
import PeopleCard from "./PeopleCards";


class PeopleList extends React.Component {
    deletePerson = (e) => {
        e.target.parentElement.remove();
    }
    render() {
        return (
            <div className="people-list">
                <PeopleWrapper>
                    <table className="table-wrap">
                        <thead>
                            <tr className="titles">
                                <th className="table-title">Name</th>
                                <th className="table-title">Height</th>
                                <th className="table-title">Gender</th>
                                <th className="table-title">Films</th>
                                <th className="table-title-act">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.data.map(item => (
                                <tr className="people" key={item.name}>
                                    <PeopleCard item={item} />
                                    <td className="people-table-btn"><button onClick={this.deletePerson} className='remove-btn'>❌</button></td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </PeopleWrapper>
            </div>
        )
    }
}

export default PeopleList;