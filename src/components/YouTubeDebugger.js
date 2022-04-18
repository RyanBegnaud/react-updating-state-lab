import React, { Component }  from 'react';


export default class YoutubeDebugger extends Component {
    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: "1080p"
                }
            }
        }
    }

    updateBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    updateReso = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: "720p"
                }
            }
        })
    }

    render() {
        return(
        <div>
            <button className='bitrate' onClick={this.updateBitrate}></button>
            
            <button className='resolution' onClick={this.updateReso}></button>
        </div>
        )
    }
}