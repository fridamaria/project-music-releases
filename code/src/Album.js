import React from 'react'
import { Artist } from './Artist'
import './album.css'


export const Album = (props) => {
  return (
    <div className='album-card'>
      <div className='icon-container'>
        <img className='icon' src='../icons/heart.svg' alt='icon heart' />
        <img className='icon' src='../icons/play.svg' alt='icon play' />
        <img className='icon' src='../icons/dots.svg' alt='icon dot' />
        <div className='album-cover'>
          <img src={props.item.images[1].url} alt='album cover' />
        </div>
      </div>
      <a className='album-name' href={props.item.external_urls.spotify}>{props.item.name}</a>
      <div>
        {props.item.artists.map(artist => {
          return (<Artist key={artist.id} artist={artist} />)
        })}
      </div>
    </div>
  )
}