import React, { useState } from 'react';
import { Box, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

interface SearchWithFilterProps {
  onSearch: (query: string, filter: string) => void;
}

const SearchWithFilter: React.FC<SearchWithFilterProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('title');

  const handleFilterChange = (event: SelectChangeEvent<string>) => {
    setFilter(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query, filter);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 2 }}>
      <TextField
        label="Search"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        sx={{ flexGrow: 1 }}
      />
      <FormControl variant="outlined" sx={{ minWidth: 120 }}>
        <InputLabel>Filter</InputLabel>
        <Select value={filter} onChange={handleFilterChange} label="Filter">
          <MenuItem value="title">Title</MenuItem>
          <MenuItem value="author">Author</MenuItem>
          <MenuItem value="abstract">Abstract</MenuItem>
          <MenuItem value="accessionNumber">Accession Number</MenuItem>
          <MenuItem value="classificationNumber">Classification Number</MenuItem>
          <MenuItem value="anywhere">Anywhere</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </Box>
  );
};

export default SearchWithFilter;
