import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styled from "styled-components";

import { searchRecipesByQuery } from "../apis/fetchRecipes";
import RecipeList from "../components/RecipeList";

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
      <Title>Search Results:</Title>
      {searchResults !== null && (
        <>
          {searchResults.length > 0 ? (
            <RecipeList recipeList={searchResults} />
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

const NoResultsMessage = styled.p`
  color: #777;
`;

const Title = styled.h2`
  text-align: left;
  margin-bottom: 10px;
`;
