import { useState } from "react";
import styled from "styled-components";
import { CuisineType } from "./CuisineType";

export const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = async () => {
    try {
      const apiKey = "6956b057226e408db3573c050e8af970";
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${searchQuery}&number=10`
      );

      if (response.ok) {
        const data = await response.json();

        if (data.results && data.results.length > 0) {
          // If there are results, update the state with the search results
          setSearchResults(data.results);
        } else {
          // If no results, update the state to indicate no results
          setSearchResults([]);
        }
      } else {
        console.error("Error fetching search results");
      }
    } catch (error) {
      console.error("Error during search:", error);
    }
  };

  return (
    <div>
      <StyledHeader>
        <Logo to="/">Your Logo</Logo>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Search for recipes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <SearchButton onClick={handleSearch}>Search</SearchButton>
        </SearchContainer>
      </StyledHeader>
      <CuisineType/>

      <SearchResultsSection>
        {searchResults !== null && (
          <>
            {searchResults.length > 0 ? (
              <ResultsContainer>
                {searchResults.map((result) => (
                  <ResultItem key={result.id}>
                    {/* Render each search result item as needed */}
                    <Card>
                        <Title>
                        <p>{result.title}</p>
                        </Title>
                        <img src={result.image} alt="popular food" />
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

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f2f2f2;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 0.5rem;
`;

const SearchButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
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


