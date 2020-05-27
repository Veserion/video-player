import React from 'react'
import ReactPlayer from 'react-player'
import styled from '@emotion/styled'
import EventList from '../EventList'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import GreenRectangle from '../GreenRectangle'

interface IProgress {
  played: number
  playedSeconds: number
  loaded: number
  loadedSeconds: number
}

@observer
export default class App extends React.Component {
  player: any;

  @observable
  timestamp: number = 0

  handleSeek = (sec: number) => {
    this.player.seekTo(sec / 1000)
  }
  handleProgress = (progress: IProgress) => {
    this.timestamp = progress.playedSeconds
  }

  ref = (player: any) => {
    this.player = player
  }

  render() {
    return <Root>
      <ReactPlayer url='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
        ref={this.ref}
        playing={false}
        progressInterval={100}
        onProgress={this.handleProgress}
        controls
      />
      <GreenRectangle timestamp={this.timestamp} />
      <EventList handleSeek={this.handleSeek} />
    </Root>
  }
}


const Root = styled.div`
width: 100vw;
display: flex;
`
