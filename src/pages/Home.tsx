// import SubMenu from '../component/home/SubMenu';
// import SearchWithFilter from '../component/home/SearchWithFilter';
// import SearchResults from '../component/home/SearchResults';
import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import SubMenu from '../component/home/SubMenu';
import SearchWithFilter from '../component/home/SearchWithFilter';
import SearchResults from '../component/home/SearchResults';
import { dummyResults } from '../dummy/dummyData';


const Home: React.FC = () => {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filter, setFilter] = useState<string>('title');

  const handleSearch = (query: string, filter: string) => {
    setSearchQuery(query);
    setFilter(filter);

    // Filter dummyResults based on query and filter
    const filteredResults = dummyResults.filter(result => {
      switch (filter) {
        case 'title':
          return result.title.toLowerCase().includes(query.toLowerCase());
        case 'author':
          return result.author.toLowerCase().includes(query.toLowerCase());
        case 'abstract':
          return result.subjects.toLowerCase().includes(query.toLowerCase());
        case 'accessionNumber':
          return result.isbn.toLowerCase().includes(query.toLowerCase());
        case 'classificationNumber':
          return result.callNumber.toLowerCase().includes(query.toLowerCase());
        case 'anywhere':
          return Object.values(result).some(val =>
            val.toString().toLowerCase().includes(query.toLowerCase())
          );
        default:
          return false;
      }
    });

    // Update search results state
    setSearchResults(filteredResults);
  };

  return (
    <Box>
      <SubMenu />
      <SearchWithFilter onSearch={handleSearch} />
      {searchResults.length > 0 && <SearchResults results={searchResults} />}
      {searchResults.length === 0 && (
        <Typography variant="body1">
         More content follows
        </Typography>
      )}
    </Box>
  );
};

export default Home;