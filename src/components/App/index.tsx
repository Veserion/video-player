import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import styled from '@emotion/styled'
import EventList from '../EventList'

export default class App extends Component {
  
  handleSeekMouseUp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>)  => {
    this.player.seekTo(parseFloat(e.target.value))
  }
  ref = (player: any) => {
    this.player = player
  }
  render() {
    return <Root>
      <ReactPlayer url='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
        ref={this.ref}
        playing={false}
        controls
      />
      <EventList />
    </Root>
  }
}


const Root = styled.div`
width: 100vw;
display: flex;
`