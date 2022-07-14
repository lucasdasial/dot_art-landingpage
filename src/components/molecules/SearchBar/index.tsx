import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
export function SearchBar() {
  const SearchContainer = styled.div`
    height: 30px;
    max-width: 400px;
    width: 100%;
    padding: 0 8px;
    background-color: var(--light-soft);
    border: solid 2px var(--light-soft);
    border-radius: 4px;
    display: flex;
    align-items: center;
    &:hover {
      border: solid 2px var(--grey);
    }
  `;
  const SearchInput = styled.input`
    width: 100%;
    height: 100%;
    padding: 0 8px;
    background: transparent;
    border: none;
  `;

  return (
    <SearchContainer>
      <SearchInput placeholder="Buscar" type="text" />
      <FaSearch />
    </SearchContainer>
  );
}
