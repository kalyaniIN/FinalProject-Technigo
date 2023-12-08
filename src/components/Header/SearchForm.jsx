import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

export const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => navigate(`/search/${searchQuery}`);

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search for recipes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <SearchButton onClick={handleSearch}>Search</SearchButton>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  align-items: center;
  margin: 2rem;
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 0.5rem;
`;

const SearchButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: rgb(244, 183, 70);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
