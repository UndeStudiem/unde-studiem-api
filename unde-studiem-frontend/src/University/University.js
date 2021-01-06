import React from 'react';
import './College.scss';
import CollegeMenu from './CollegeMenu'

let university =  {
  name: 'Universitatea Politehnica din Bucuresti',
  city: 'Bucuresti',
  lang: 'RO',
}

function University({match}) {

  let id = match.params.id;

  return (
    <div className="University">


      <div className='PageTitle'>
        {university.name}
      </div>



      <UniversityMenu/>

    </div>
  );
  
}

export default University;
