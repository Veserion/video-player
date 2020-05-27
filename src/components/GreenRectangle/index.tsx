/**@jsx jsx*/
import { css, jsx } from '@emotion/core'
import React from 'react'
import styled from '@emotion/styled'
import { DataStore } from '../../stores/DataStore'
import { observer, inject } from 'mobx-react'


interface IProps {
    timestamp: number
    dataStore?: DataStore
}

@inject('dataStore')
@observer
export default class GreenRectangle extends React.Component<IProps, {}> {

    items = this.props.dataStore!.items.sort((a, b) => a.timestamp - b.timestamp)
    currentItems = this.items.filter(item => (Math.ceil(this.props.timestamp * 1000) > item.timestamp) &&
            (Math.ceil(this.props.timestamp * 1000) < (item.timestamp + item.duration)))
    render() {
        // const currentItems = this.items.filter(item => (Math.ceil(this.props.timestamp * 1000) > item.timestamp) &&
        //     (Math.ceil(this.props.timestamp * 1000) < (item.timestamp + item.duration)))
        return <div>
            {this.currentItems.map((item, key) => <Rectangle key={key}
                css={`top: ${item.zone.top}; 
                left: ${item.zone.left};
                width: ${item.zone.width};
                height: ${item.zone.height};`}
            />)}
            {
                console.log(this.currentItems.length)
            }
        </div>
    }
}

const Rectangle = styled.div`
position: absolute;
background: green;
`