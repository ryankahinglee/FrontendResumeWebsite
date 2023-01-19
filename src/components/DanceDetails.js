import React from 'react';
import DanceImage from '../Dance proposal snippet.PNG';

export default function DanceDetails () {
  return (
    <div className='dance-details invisible'>
      <div className='dance-text'>
        I started dancing in 2021 and joined the <span className='neon-text-light-blue'>Ministry of Dance Society</span> executive team
        as the <span className='neon-text-light-blue'>Public Relations Director</span>. Part of my job was to find sponsors for our largest
        annual event, <span className='neon-text-light-blue'> PartyMode</span>, dedicated to connecting uni-dancers to dancers in the Greater Sydney dance scene.
        <br />
        <br />
        I created proposals  with <span className='neon-text-light-blue'>Canva</span> when reaching out to potential sponsors.
        I kept my design minimalistic with an orange/purple color palette representative of MODSOC's colours along with triangles for layout and spacing.
      </div>
      <div className='dance-design'>
      </div>
      <div>
        <img className='dance-image' src={DanceImage} alt='Screenshot of Dance proposal'></img>
      </div>
    </div>
  )
}