import { Handle } from "reactflow";
import styled from "styled-components";

export const NodeWrapper = styled.div`
  background: #fef9c3;
  height: 100px;
  width: 100px;
  border: 1px solid black;
  border-radius: 10px;
`;
export const HandleStlyed = styled(Handle)`
  background : black;
  width: 8px;
  height: 10px;
  border-radius: 3px;
}`;

export const NodeTitle = styled.h1`
  text-align: center;
  font-size: 20px;
  color: black;
  transition: 0.5s;

  &:hover {
    color: #0e7490;
  }
`;
