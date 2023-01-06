import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '2%'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function TimePickers({onChange}) {
  const classes = useStyles();

  return (
    <div className={classes.container} noValidate>
      <TextField
        id="time"
        type="time"
        defaultValue="00:00"
        className={classes.textField}
        onChange={(e) => onChange(e)}
        required 
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
    </div>
  );
}
