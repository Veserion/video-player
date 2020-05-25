import React, { Component } from 'react'
import styled from '@emotion/styled'
import Loader from 'react-loader-spinner'
import { IItem } from '../../stores/DataStore'

interface IProps {
    item: IItem
}

export default class Event extends React.Component<IProps, {}> {
    render() {
        return <Root>
            <div>{this.props.item.id}</div>
            <div>{this.props.item.timestamp}</div>
            <div>{this.props.item.duration}</div>
        </Root>
    }
}

const Root = styled.div`
margin-left: 10px;
display: flex;
justify-content: flex-start;
> div {
    flex: 1;
    display: flex;
    align-items: center;
    border: 1px solid #9D998E;
    padding-left: 5px;
}
`