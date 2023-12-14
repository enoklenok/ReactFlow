import styled from "styled-components";

export const NodeWrapper = styled.div`
  height: 100px;
  width: 100px;
  border: 1px solid black;
  border-radius: 10px;
`;

export const NodeTitle = styled.h1`
  text-align: center;
  font-size: 20px;
  color: black;
  transition: 0.5s;

  &:hover {
    color: #0e7490;
  }
`;
