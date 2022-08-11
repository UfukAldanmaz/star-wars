import { PeopleWrapper } from "./StyledComponents/ScPeople";
import React from 'react';
import PeopleCard from "./PeopleCards";


class PeopleList extends React.Component {

    render() {
        return <PeopleWrapper>
            <div>
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

                    {this.props.data.map((item, index) => (
                        <tbody key={index}>
                            <PeopleCard item={item} />
                        </tbody>
                    ))}

                </table>
            </div>
        </PeopleWrapper>

    }
}

export default PeopleList;