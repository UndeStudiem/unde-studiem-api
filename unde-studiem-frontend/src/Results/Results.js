import React from 'react';
import './Results.scss';
import CardItem2 from '../Card/CardItem2'
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import ArrowBack from '@material-ui/icons/ArrowBack';
import { useLocation } from "react-router-dom";

let list = [
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

function useQuery() {
  return new URLSearchParams(useLocation().search);
}


function Results(props) {
  let query = useQuery();

  return (
    <div className="Results">

      <div className='Pagetitle'>
        <Link to={`/`}>
          <Button variant="contained" size="large" color="primary">
            <ArrowBack fontSize="large"/>
            &nbsp;
            Inapoi la pagina principala
          </Button>
        </Link>

      </div>

      {/* {query.get("type")}
      {query.get("degree")}
      {query.get("city")} */}

      <div className='Results-list'>

        <div className='Result-title'>
          Rezultate
        </div>

        {list.map(Element => 
          <CardItem2 item={Element}/>
          
          )}
      </div>


    </div>
  );
  
}

export default Results;
