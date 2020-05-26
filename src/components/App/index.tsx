import React, {Component} from 'react'
import ReactPlayer from 'react-player'
import styled from '@emotion/styled'
import EventList from '../EventList'
import {observable} from 'mobx'
import {observer} from 'mobx-react'

@observer
export default class App extends Component {
  player: any;

  @observable
  state = {
    timestamp: 0

  }
  handleSeek = (sec: number)  => {
    this.player.seekTo(sec/1000)
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
      <EventList handleSeek={this.handleSeek}/>
    </Root>
  }
}


const Root = styled.div`
width: 100vw;
display: flex;
`
