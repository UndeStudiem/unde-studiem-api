import React from 'react';
import './Home.scss';
import CardItem from '../Card/CardItem'
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";

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

function Home(props) {

  return (
    <div className="Home">

      <div className='Pagetitle'>
        <Link to={`/search`}>
          <Button variant="contained" size="large" color="primary">
            Gaseste programe de studii
          </Button>
        </Link>

      </div>

      <div className='Sugestions'>

        <div className='SugestionsTitle'>
          Sugestii
        </div>

        {list.map(Element => 
          <CardItem item={Element}/>
          
          )}
      </div>


    </div>
  );
  
}

export default Home;
