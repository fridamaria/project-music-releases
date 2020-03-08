import React from 'react'
import './artist.css'

export const Artist = (props) => {
  return (
    <a class="artist" href={props.artist.external_urls.spotify}>
      {props.artist.name}</a>
  )
}