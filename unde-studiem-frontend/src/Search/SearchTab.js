import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link} from "react-router-dom";
import Chip from '@material-ui/core/Chip';


import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
}));

let fields = [
  'Drept', 'Finante', 'Contabilitate', 'Tehnologia informatiei', 'Stiinte', 'Matematica'
];

let allCities = [
  'Bucuresti', 'Cluj', 'Timisoara', 'Iasi', 'Brasov', 'Constanta'
]



export default function SearchTab(props) {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    degree: '',
    field: [],
    cities: [],
    name: [],

  });


  const handleChange = (prop) => (event) => {

    setValues({ ...values, [prop]: event.target.value });
  };

  return (

    <div className='SearchTab'>

      {props.type === 0 ?
       <FormControl className={classes.formControl}>
        <InputLabel id="degree-label">Tip studii</InputLabel>
        <Select
          labelId="degree-label"
          id="degree"
          value={values.degree}
          onChange={handleChange('degree')}
        >
          <MenuItem value={'Bachelor'}>Licenta</MenuItem>
          <MenuItem value={'Master'}>Master</MenuItem>
          <MenuItem value={'Doctoral'}>Doctorat</MenuItem>
        </Select>
      </FormControl>
      : 
      <FormControl className={classes.formControl}>
        <TextField id="standard-basic" label="Nume" />
      </FormControl>


      }

      <FormControl className={classes.formControl}>
      <InputLabel id="city-label">Oras</InputLabel>
        <Select
          labelId="city-label"
          id="city"
          multiple
          value={values.cities}
          onChange={handleChange('cities')}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
        >
          {allCities.map(Element => 
              <MenuItem value={Element}>{Element}</MenuItem>
            )}
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
      <InputLabel id="field-label">Domeniu</InputLabel>
        <Select
          labelId="field-label"
          id="field"
          multiple
          value={values.field}
          onChange={handleChange('field')}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
        >

          {fields.map(Element => 
              <MenuItem value={Element}>{Element}</MenuItem>
            )}
        </Select>
      </FormControl>

      <br/><br/><br/>
      <Link to="/results?type=programs&degree=master&fields=IT-stiinte sociale&cities=Bucuresti-Constanta">
        <Button variant="contained" color="primary" size="large">
          Cauta
        </Button>
      </Link>


    </div>



  );
}
