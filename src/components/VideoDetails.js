import React from 'react'

const VideoDetails = ({ video }) => {
    
    if (!video) { 
        return null
    }

     
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <div>

            <div className="ui embed">
                <iframe src={videoSrc}  title="video player" allow="autoplay"/>
            </div>
            <div className="ui segment">

                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
                </div>
        </div>
    )
}


export default  VideoDetails