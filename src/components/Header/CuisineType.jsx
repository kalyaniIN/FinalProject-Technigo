import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const CuisineType = () => {
  return (
    <Wrapper>
      <SLink to={"/cuisine/indian"}>
        <FaPizzaSlice aria-hidden="true" />
        <p>Indian</p>
      </SLink>
      <SLink to={"/cuisine/american"}>
        <FaHamburger aria-hidden="true" />
        <p>American</p>
      </SLink>
      <SLink to={"/cuisine/european"}>
        <GiNoodles aria-hidden="true" />
        <p>European</p>
      </SLink>
      <SLink to={"/cuisine/chinese"}>
        <GiChopsticks aria-hidden="true" />
        <p>Chinese</p>
      </SLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 3rem;
  gap: 1rem;
  justify-content: center;
  :hover {
    background: rgb(244, 183, 70);
  }
`;

const SLink = styled(NavLink)`
  background: linear-gradient(35deg, #494949, #313131);
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border: 1px solid rgb(244, 183, 70);
  p {
    color: white;
    text-decoration: none;
    font-size: 0.7rem;
    font-weight: bold;
  }
  svg {
    color: white;
  }

  &.active {
    background: linear-gradient(to right, rgb(244, 183, 70), #e94057);
    text-decoration: none;
  }
`;
