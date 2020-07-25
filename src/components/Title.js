import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin-top :40px;
    margin-left : 40px;
    line-height : 1.5;
    border-left : 4px solid #3f51b5;
`
const Title = styled.h1`
    padding-left:20px;
`

class TitleComponent extends React.Component {
    render() {
        return (

            <Container >
                <Title style={{ paddingLeft: 20 }}>{this.props.title}</Title>
            </Container>
        )
    }
}

export default TitleComponent