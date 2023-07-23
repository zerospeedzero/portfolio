import { Chip } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/Options.module.css';
import Link from 'next/link';

const Options = ({ getOptions, actionProvider }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(getOptions(actionProvider));
  }, []);

  return (
    <div className={styles.container}>
      {options.map((option) => {
        return (
          <a href={option.link || '/#' }>
            <Chip
              key={option.id}
              onClick={option.handler}
              label={option.text}
              sx={{
                marginRight: '5px',
                padding: '2px',
                fontSize: '0.85rem',
                marginBottom: '5px',
              }}
            />          
          </a>
        );
      })}
    </div>
  );
};

export default Options;
