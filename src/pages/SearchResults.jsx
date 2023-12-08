import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import styled from "styled-components";

import { searchRecipesByQuery } from "../apis/fetchRecipes";

export const SearchResults = () => {
  const { query: searchQuery } = useParams();
  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    searchRecipe(searchQuery);
  }, [searchQuery]);

  const searchRecipe = async (query) => {
    try {
      const data = await searchRecipesByQuery(query);
      setSearchResults(
        data.results && data.results.length > 0 ? data.results : []
      );
    } catch (error) {
      console.error("Error during search:", error);
    }
  };

  return (
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
  );
};

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
