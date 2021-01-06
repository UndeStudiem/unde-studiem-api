import React from 'react';
import './Filter.scss';
import Chip from '@material-ui/core/Chip'; 


function Filter(props) {

  return (
    <div className="Filter">

      <div className='Filter-degree'>
        Program de:&nbsp;
        {/* {props.degree.map(Element => <><Chip label={Element} /> &nbsp;</>)} */}
        <Chip label={props.degree}/>
      </div>


      <div className='Filter-fields'>
        Domenii:&nbsp;
        {props.fields.map(Element => <><Chip label={Element} /> &nbsp;</>)}
      </div>

      <div className='Filter-city'>
        Orase:&nbsp;
        {props.cities.map(Element => <><Chip label={Element} /> &nbsp;</>)}
      </div>

    </div>
  );
  
}

export default Filter;
