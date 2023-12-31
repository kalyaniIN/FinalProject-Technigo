import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

export const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => navigate(`/search/${searchQuery}`);

  return (
    <SearchContainer>
      <SearchInput
        id="searchInput"
        name="searchText"
        type="text"
        placeholder="Search for recipes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        aria-label="Search for recipes"
      />
      <SearchButton
        id="searchButton"
        title="Click to search"
        disabled={!searchQuery.trim()}
        onClick={handleSearch}
      >
        <BsSearch className="btn-icon" size={20} />
      </SearchButton>
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
  border-radius: 50px;
`;

const SearchButton = styled.button`
  padding: 5px 10px;
  background-color: rgb(244, 183, 70);
  color: #fff;
  border: none;
  border-radius: 90px;
  cursor: pointer;
  vertical-align: middle;
  background-color: rgb(244, 183, 70);
  cursor: ${({ disabled }) => (!disabled ? "pointer" : null)};
`;
