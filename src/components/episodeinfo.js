import React from "react"

const EpisodeInfo = ({ title, introText, audioUrl }) => (
  <div>
    <h3>{title}</h3>
    <p>{introText}</p>
    <audio src={audioUrl} controls type="audio/mp3"></audio>
  </div>
)

export default EpisodeInfo
