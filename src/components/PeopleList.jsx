import { PeopleWrapper } from "./StyledComponents/ScPeople";
import React from 'react';
import PeopleCard from "./PeopleCards";


class PeopleList extends React.Component {
    render() {
        return (
            <div className="people-list">
                <PeopleWrapper>
                    {this.props.data.map(item => (
                        <div key={item.name}><PeopleCard item={item} />
                            <button onClick={this.props.delete}>X</button>
                        </div>
                    ))}
                </PeopleWrapper>
            </div>
        )
    }
}

export default PeopleList;