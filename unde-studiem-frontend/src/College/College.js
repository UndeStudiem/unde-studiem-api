import React from 'react';
import './College.scss';
import CollegeMenu from './CollegeMenu'

let college =  {
  name: 'Facultatea de Automatica si Calculatoare',
  university: 'Universitatea politehnica din Bucuresti',
  city: 'Bucuresti',
  degree: 'Bachelor',
  fields: ['IT', 'programare', 'stiinte ingineresti'],
  lang: 'RO',
}

function College({match}) {

  let id = match.params.id;

  return (
    <div className="College">


      <div className='PageTitle'>
        {college.name}
      </div>
      <div className='PageTitle2'>
        {college.university}
      </div>



      <CollegeMenu/>

    </div>
  );
  
}

export default College;
