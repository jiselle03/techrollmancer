import React, { useState, useEffect } from 'react';

import { Character } from '../../api/character';
import { CharacterStats } from './CharacterStats';
import { CharacterSpells } from './CharacterSpells';
import { CharacterInventory } from './CharacterInventory';
import { CharacterFeatures } from './CharacterFeatures';
import { CharacterTraits } from './CharacterTraits';
import { CharacterJournal } from './CharacterJournal';
import { BackgroundImage } from '../styles/BackgroundImage';
import { CharacterNav } from '../styles/CharacterNav';

import { Box, CircularProgress, Typography, Tab, Tabs } from '@material-ui/core';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`wrapped-tabpanel-${index}`}
        aria-labelledby={`wrapped-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }
  

export const CharacterShowPage = props => {
    const [value, setValue] = useState(0);
    const [character, setCharacter] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
        Character.one(props.match.params.id).then(character => { 
            setCharacter(character);
          setIsLoading(false);
        });
    }, [props.match.params.id]);
  
    if (isLoading) {
      return(
          <CircularProgress variant="determinate" />
      );
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    return (
      <BackgroundImage
        image={require('../../assets/d20.png')} 
      >
        <CharacterNav>
          <Tabs
              value={value}
              indicatorColor="secondary"
              textColor="secondary"
              onChange={handleChange}
              className="tabs"
              variant="scrollable"
              scrollButtons="auto"
          >
              <Tab label="STATS" value={0} />
              <Tab label="SPELLS" value={1} />
              <Tab label="INVENTORY" value={2} />
              <Tab label="FEATURES" value={3} />
              <Tab label="TRAITS" value={4} />
              <Tab label="JOURNAL" value={5} />
          </Tabs>
          <TabPanel value={value} index={0}>
              <CharacterStats character={character} />
          </TabPanel>
          <TabPanel value={value} index={1}>
              <CharacterSpells character={character} />
          </TabPanel>
          <TabPanel value={value} index={2}>
              <CharacterInventory character={character} />
          </TabPanel>
          <TabPanel value={value} index={3}>
              <CharacterFeatures character={character} />
          </TabPanel>
          <TabPanel value={value} index={4}>
              <CharacterTraits character={character} />
          </TabPanel>
          <TabPanel value={value} index={5}>
              <CharacterJournal character={character} />
          </TabPanel>
        </CharacterNav>
      </BackgroundImage>
    );
};
