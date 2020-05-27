import React, { Component } from 'react'
import styled from '@emotion/styled'
import Loader from 'react-loader-spinner'
import { DataStore } from '../../stores/DataStore'
import { observer, inject } from 'mobx-react'
import Event from './Event'

interface IProps {
    dataStore?: DataStore
    handleSeek: (sec: number) => void
}

@inject('dataStore')
@observer
export default class EventList extends Component<IProps, {}>{
    render() {
        const items = this.props.dataStore!.items
        return items && items.length
            ? <Root>
                <Title>Список аналитики</Title>
                <TableHeader />
                {items?.sort((a, b) => a.timestamp - b.timestamp)
                .map((item, key) => <Event key={key} item={item} handleSeek={this.props.handleSeek}/>)}
            </Root>
            : <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
            />

    }
}


const Root = styled.div`
flex: 1;
`
const Title = styled.div`
font-family: sans-serif;
font-size: 20px;
margin: 10px;
`
class TableHeader extends React.Component {
    render() {
        return <RootTableHeader>
            <div>Id</div>
            <div>Timestamp</div>
            <div>Duration</div>
        </RootTableHeader>
    }
}


const RootTableHeader = styled.div`
margin-left: 10px;
display: flex;
justify-content: flex-start;
> div {
    flex: 1;
    display: flex;
    align-items: center;
    border: 1px solid #9D998E;
    padding: 3px 0 3px 5px;
    font-size: 18px;
}
`