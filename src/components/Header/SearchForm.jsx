import { useState } from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { CuisineType } from "./CuisineType";
import { Link } from "react-router-dom";
import { searchRecipesByQuery } from "../../apis/fetchRecipes";

export const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = async () => {
    try {
      if (searchQuery.length > 0) {
      const data = await searchRecipesByQuery(searchQuery);
      setSearchResults(
        data.results && data.results.length > 0 ? data.results : []
      );
      }
      setSearchResults(null);
      
    } catch (error) {
      console.error("Error during search:", error);
    }
  };

  return (
    <div>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Search for recipes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <SearchButton onClick={handleSearch}><BsSearch className='btn-icon' size = {20} /></SearchButton>
      </SearchContainer>

      <CuisineType />

      <SearchResultsSection>
        {searchResults !== null && (
          <>
            {searchResults.length > 0 ? (
              <ResultsContainer>
                {searchResults.map((result) => (
                  <ResultItem key={result.id}>
                    {/* Render each search result item as needed */}
                    <Card>
                      <Link to={`recipe/${result.id}`}>
                        <Title>
                          <p>{result.title}</p>
                        </Title>
                        <img src={result.image} alt="popular food" />
                      </Link>
                    </Card>
                  </ResultItem>
                ))}
              </ResultsContainer>
            ) : (
              <NoResultsMessage>No results found.</NoResultsMessage>
            )}
          </>
        )}
      </SearchResultsSection>
    </div>
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
  padding: 5px 10px;
  background-color:  rgb(244, 183, 70);
  color: #fff;
  border: none;
  border-radius: 90px;
  cursor: pointer;
  
`;

const SearchResultsSection = styled.section`
  margin-top: 2rem;
`;

const ResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ResultItem = styled.div`
  width: 200px;
  margin: 0.5rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Card = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: fit-content;
  margin-top: 0.7rem;
  img {
    border-radius: 20px;
    object-fit: cover;
    width: 100%;
  }
`;

const Title = styled.div`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, 0%);
  width: fit-content;
  z-index: 2;
  p {
    font-size: 1rem;
    color: white;
    text-align: center;
  }
`;

const NoResultsMessage = styled.p`
  color: #777;
`;
