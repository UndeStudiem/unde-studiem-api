import React from 'react';
import './Results.scss';
import CardItem2 from '../Card/CardItem2'
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import ArrowBack from '@material-ui/icons/ArrowBack';
import { useLocation } from "react-router-dom";

let list = [
  {
    name: 'Abc123',
    college: 'Abc123',
    degree: 'Bachelor',
    field: 'Abc123'

  },
  {
    name: 'Abc123',
    college: 'Abc123',
    degree: 'Bachelor',
    field: 'Abc123'

  },
  {
    name: 'Abc123',
    college: 'Abc123',
    degree: 'Bachelor',
    field: 'Abc123'

  },
  {
    name: 'Abc123',
    college: 'Abc123',
    degree: 'Bachelor',
    field: 'Abc123'

  },
  {
    name: 'Abc123',
    college: 'Abc123',
    degree: 'Bachelor',
    field: 'Abc123'

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

      {query.get("type")}
      {query.get("degree")}
      {query.get("city")}

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
