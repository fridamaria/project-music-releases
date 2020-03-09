import React from 'react'
import data from './data.json'
import { Album } from 'Album.js';
import './app.css'

export const App = () => {
  return (
    <section className="album-container">
      {data.albums.items.map(item => {
        return (<Album key={item.id} item={item} />);
      })}
    </section>
  );
};

