import React from 'react';
import './Programs.scss';
import ProgramsMenu from './ProgramsMenu'

let program =  {
  name: 'Calculatoare si tehnologia informatiei',
  college: 'Facultatea de Automatica si Calculatoare',
  university: 'Universitatea politehnica din Bucuresti',
  city: 'Bucuresti',
  degree: 'Bachelor',
  fields: ['IT', 'programare', 'stiinte ingineresti'],
  lang: 'RO',
  type: 'IF',
  years: 4,
  semesters: 8,
  credits: 200,
  locuri: 250,
  buget: 100,
  loc_taxa: 150,
  taxa: 5000,
  admition: 'DOSAR, EXAMEN',
  courses: {}
}

function Programs({match}) {

  let id = match.params.id;

  return (
    <div className="Programs">


      <div className='PageTitle'>
        {program.name}
      </div>
      <div className='PageTitle2'>
        {program.college}
      </div>



      <ProgramsMenu/>

    </div>
  );
  
}

export default Programs;
