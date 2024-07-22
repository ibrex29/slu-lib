import React, { useState } from 'react';
import { Box, Typography, Button, MenuItem, Select, FormControl, InputLabel, Grid, Paper, Divider } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import StarRating from './StarRating';

interface SearchResultsProps {
  results: any[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  const [sortBy, setSortBy] = useState('title');

  const handleSortChange = (event: SelectChangeEvent<string>) => {
    setSortBy(event.target.value);
  };

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingY: 2,
        }}
      >
        <FormControl variant="outlined" sx={{ minWidth: 120 }}>
          <InputLabel>Resort results by</InputLabel>
          <Select value={sortBy} onChange={handleSortChange} label="Resort results by">
            <MenuItem value="title">Title</MenuItem>
            <MenuItem value="author">Author</MenuItem>
            <MenuItem value="abstract">Abstract</MenuItem>
            <MenuItem value="accessionNumber">Accession Number</MenuItem>
            <MenuItem value="classificationNumber">Classification Number</MenuItem>
            <MenuItem value="anywhere">Anywhere</MenuItem>
          </Select>
        </FormControl>
        <Typography>Found {results.length} Results</Typography>
        <Box>
          <Button variant="outlined">Save This Query</Button>
          <Button variant="outlined" sx={{ ml: 1 }}>Subscribe To RSS Feed</Button>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {results.map((result, index) => (
          <Grid item xs={12} key={result.id}>
            <Paper sx={{ padding: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box component="img" src={result.imageUrl} alt="Search result" sx={{ width: 80, height: 80, mr: 2 }} />
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="h6">{result.title}</Typography>
                  <Typography variant="body2">Author(s): {result.author}</Typography>
                  <Typography variant="body2">Subjects: {result.subjects}</Typography>
                  <Typography variant="body2">Publisher: {result.publisher}</Typography>
                  <Typography variant="body2">ISBN: {result.isbn}</Typography>
                  <Typography variant="body2">Call number: {result.callNumber}</Typography>
                  <Typography variant="body2">Type: {result.type}</Typography>
                  <Typography variant="body2">Availability: {result.availability}</Typography>
                  
                  {/* Adjusted reviews view */}
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <Typography variant="body2" sx={{ mr: 1 }}>Reviews:</Typography>
                    <StarRating rating={result.reviews} />
                    <Typography variant="body2" sx={{ ml: 1 }}>{result.reviews} Star{result.reviews > 1 ? 's' : ''}</Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
                <Box>
                  <Button size="small">Quick view ↓</Button>
                  <Button size="small">Tag This Record</Button>
                  <Button size="small">Add To Favourites</Button>
                  <Button size="small">Reserve This Item</Button>
                </Box>
                <Box>
                  <Button size="small">Print Record</Button>
                  <Button size="small">Email Record</Button>
                  <Button size="small">Add Record To Buffer</Button>
                </Box>
              </Box>
            </Paper>
            {index < results.length - 1 && <Divider sx={{ my: 2 }} />}
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
        {/* Pagination controls can go here */}
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        {/* ... */}
      </Box>
    </Box>
  );
};

export default SearchResults;
