import styled, { keyframes } from "styled-components";
import { slideInRight } from 'react-animations'

export const DocsCloseButton = styled.span`
  position: absolute;
  right: 5px;
  top: 5px;
  height: 45px;
  width: 45px;
  cursor: pointer;
`;

export const DocsContentWrap = styled.div`
  position: relative;
`;

const slideInAnimation = keyframes`${slideInRight}`;
 
export const SlideInDiv = styled.div`
  animation: 1s ${slideInAnimation};
`;
