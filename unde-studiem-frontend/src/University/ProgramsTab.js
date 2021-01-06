import React from 'react';
import {Link} from "react-router-dom";
import './ProgramsTab.scss'

let bachelorPrograms = [
  {
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
  },
  {
    name: 'Ingineria sistemelor',
    college: 'Facultatea de Automatica si Calculatoare',
    university: 'Politehnica',
    city: 'Bucuresti',
    degree: 'Bachelor',
    fields: ['IT', 'programare'],
    lang: 'RO',
    type: 'IF',
    years: 4,
    semesters: 8,
    credits: 200,
    locuri: 250,
    buget: 100,
    loc_taxa: 150,
    taxa: 5000,
    admition: 'DOSAR',
    courses: {}
  },
  {
    name: 'Calculatoare si tehnologia informatiei',
    college: 'Facultatea de Automatica si Calculatoare',
    university: 'Politehnica',
    city: 'Bucuresti',
    degree: 'Master',
    fields: ['IT', 'programare'],
    lang: 'RO',
    type: 'IF',
    years: 4,
    semesters: 8,
    credits: 200,
    locuri: 250,
    buget: 100,
    loc_taxa: 150,
    taxa: 5000,
    admition: 'DOSAR',
    courses: {}
  },
  {
    name: 'Calculatoare si tehnologia informatiei',
    college: 'Facultatea de Automatica si Calculatoare',
    university: 'Politehnica',
    city: 'Bucuresti',
    degree: 'Doctoral',
    fields: ['IT', 'programare'],
    lang: 'RO',
    type: 'IF',
    years: 4,
    semesters: 8,
    credits: 200,
    locuri: 250,
    buget: 100,
    loc_taxa: 150,
    taxa: 5000,
    admition: 'DOSAR',
    courses: {}
  },
  {
    name: 'Calculatoare si tehnologia informatiei',
    college: 'Facultatea de Automatica si Calculatoare',
    university: 'Politehnica',
    city: 'Bucuresti',
    degree: 'Bachelor',
    fields: ['IT', 'programare'],
    lang: 'RO',
    type: 'IF',
    years: 4,
    semesters: 8,
    credits: 200,
    locuri: 250,
    buget: 100,
    loc_taxa: 150,
    taxa: 5000,
    admition: 'DOSAR',
    courses: {}
  },
]

let masterPrograms = [
  {
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
  },
  {
    name: 'Ingineria sistemelor',
    college: 'Facultatea de Automatica si Calculatoare',
    university: 'Politehnica',
    city: 'Bucuresti',
    degree: 'Bachelor',
    fields: ['IT', 'programare'],
    lang: 'RO',
    type: 'IF',
    years: 4,
    semesters: 8,
    credits: 200,
    locuri: 250,
    buget: 100,
    loc_taxa: 150,
    taxa: 5000,
    admition: 'DOSAR',
    courses: {}
  },
  {
    name: 'Calculatoare si tehnologia informatiei',
    college: 'Facultatea de Automatica si Calculatoare',
    university: 'Politehnica',
    city: 'Bucuresti',
    degree: 'Master',
    fields: ['IT', 'programare'],
    lang: 'RO',
    type: 'IF',
    years: 4,
    semesters: 8,
    credits: 200,
    locuri: 250,
    buget: 100,
    loc_taxa: 150,
    taxa: 5000,
    admition: 'DOSAR',
    courses: {}
  },
  {
    name: 'Calculatoare si tehnologia informatiei',
    college: 'Facultatea de Automatica si Calculatoare',
    university: 'Politehnica',
    city: 'Bucuresti',
    degree: 'Doctoral',
    fields: ['IT', 'programare'],
    lang: 'RO',
    type: 'IF',
    years: 4,
    semesters: 8,
    credits: 200,
    locuri: 250,
    buget: 100,
    loc_taxa: 150,
    taxa: 5000,
    admition: 'DOSAR',
    courses: {}
  },
  {
    name: 'Calculatoare si tehnologia informatiei',
    college: 'Facultatea de Automatica si Calculatoare',
    university: 'Politehnica',
    city: 'Bucuresti',
    degree: 'Bachelor',
    fields: ['IT', 'programare'],
    lang: 'RO',
    type: 'IF',
    years: 4,
    semesters: 8,
    credits: 200,
    locuri: 250,
    buget: 100,
    loc_taxa: 150,
    taxa: 5000,
    admition: 'DOSAR',
    courses: {}
  },
]


export default function ProgramsTab(props) {

  return (

    <div className='ProgramsTab'>

      
      Programe de studiu

      {bachelorPrograms.length == 0 ? '' :
        <div>
          <div className='ProgramTitle'>
            Programe de licenta
          </div>

          <div className='ProgramsList'>
            {bachelorPrograms.map(Element => 
              <div className='ProgramsListElement'>
                <Link to='/programs/1'>
                  {Element.name}
                </Link>
              </div>


            )}
          </div>
        </div>
      }

      {masterPrograms.length == 0 ? '' :
        <div>
          <div className='ProgramTitle'>
            Programe de master
          </div>

          <div className='ProgramsList'>
            {masterPrograms.map(Element => 
              <div className='ProgramsListElement'>
                <Link to='/programs/1'>
                  {Element.name}
                </Link>
              </div>


            )}
          </div>
        </div>
      }



    </div>



  );
}
