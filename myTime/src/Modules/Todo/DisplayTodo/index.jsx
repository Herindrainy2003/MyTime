import React, { useState } from 'react'
import Mytodos from './data';


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';




function DisplayTodo() {
  //pour gerer les boutons voir plus 
  const [expandedIndices, setExpandedIndices] = useState([]);

  const toggleExpanded = (index) => {
    if (expandedIndices.includes(index)) {
      setExpandedIndices(expandedIndices.filter((i) => i !== index));
    } else {
      setExpandedIndices([...expandedIndices, index]);
    }
  };

    return (
     <>
     <Typography variant="h4" marginTop={2} textAlign='center'>
      Votre Taches
      </Typography>
    
      <Grid container  columns={{ xs: 16, sm: 8, md: 12 }} rowGap={4} marginTop={4}>
        {Mytodos.map((todo, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Card sx={{ maxWidth: 345, height: '100%' }} key={index}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {todo.name}
                </Typography>
              
                <Typography variant="body2" color="text.secondary" style={{ height: expandedIndices.includes(index) ? 'auto' : '6em', overflow: 'hidden' }}>
                {todo.description}
              </Typography>
              {todo.description.length > 100 && (
                <Button size="small" onClick={() => toggleExpanded(index)}>
                  {expandedIndices.includes(index) ? 'Voir moins' : 'Voir plus'}
                </Button>
              )}
               
                <Typography variant="h5" color="text.secondary">
                  {todo.date}  {todo.heure}
                </Typography>
              </CardContent>
              
              <CardActions>
                <Button size="small">Finir</Button>
                {/* <Button size="small">Learn More</Button> */}
              </CardActions>
            </Card>
          </Grid>

        ))}
      </Grid>
      </>
    );

}

export default DisplayTodo
