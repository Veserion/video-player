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
    render() {
        const items = this.props.dataStore!.items.sort((a, b) => a.timestamp - b.timestamp)
        const currentItems = items.filter(item => (Math.ceil(this.props.timestamp * 1000) > item.timestamp) &&
            (Math.ceil(this.props.timestamp * 1000) < (item.timestamp + item.duration)))
        return items && items.length
            ? <div>
                {currentItems.map((item, key) => <Rectangle key={key}
                    css={css`top: ${item.zone.top}px; 
                left: ${item.zone.left}px;
                width: ${item.zone.width}px;
                height: ${item.zone.height}px;`}
                />)}
                {
                    console.log(currentItems.length)
                }
            </div>
            : null
    }
}

const Rectangle = styled.div`
position: absolute;
background: linear-gradient(to top right, lightgreen, darkgreen);
`