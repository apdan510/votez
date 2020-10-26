/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import useStyles from './styles';
import Card from '../Card';

import client from '../../client';

const CreateFolder = (props) => {
  const [bucket, setBucket] = useState('');
  const [path, sethPath] = useState('');

  const classes = useStyles();

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('submit');

    try {
      console.log('creating ballot box...');
      await client.createFolder({ bucket, path });
      console.log('ballot box created!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card id="2" title="Create Ballot Box">
      <form onSubmit={onSubmit} className={classes.root}>
        <TextField
          label="Ballot Box"
          variant="outlined"
          value={bucket}
          size="small"
          onChange={(e) => {
            setBucket(e.target.value);
          }}
        />

        <TextField
          label="Path"
          variant="outlined"
          value="/ballots"
          size="small"
          onChange={(e) => {
            sethPath(e.target.value);
          }}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
        >
          Ballot Box
        </Button>
      </form>
    </Card>
  );
};

export default CreateFolder;
