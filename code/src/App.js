import React from 'react'
import data from './data.json'
import { Album } from 'Album.js';
import './app.css'

console.log(data)

export const App = () => {
  return (
    <div className="album-container">
      {data.albums.items.map(item => {
        return (<Album key={item.id} item={item} />);
      })}
    </div>
  );
};

