import React from 'react'
import Title from '../components/Title'
class ItemDetail extends React.Component {
    render() {
        const id = this.props.match.params.id
        return (
            <Title title={`Item ID : ${id}`}>asdasdasdasdasdas</Title>
        )
    }
}

export default ItemDetail