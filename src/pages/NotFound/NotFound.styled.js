import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  position: relative;
  height: 100%;
`;

export const NotFoundContent = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 767px;
  width: 100%;
  line-height: 1.4;
  text-align: center;
`;

export const NotFound404 = styled.div`
  position: relative;
  height: 180px;
  margin-top: 310px;
  margin-bottom: 20px;
  z-index: -1;
`;

export const NotFoundTitle = styled.h1`
  font-family: 'Montserrat', sans-serif;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 224px;
  font-weight: 900;
  margin: 0;
  color: #030005;
  text-transform: uppercase;
  text-shadow: -1px -1px 0px #8400ff, 1px 1px 0px #ff005a;
  letter-spacing: -20px;
`;

export const NotFoundSubtitle = styled.h2`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Montserrat', sans-serif;
  font-size: 42px;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  text-shadow: 0px 2px 0px red;
  letter-spacing: 13px;
`;

export const NotFoundLink = styled(Link)`
  font-family: 'Montserrat', sans-serif;
  display: inline-block;
  text-transform: uppercase;
  color: #ff005a;
  text-decoration: none;
  border: 2px solid;
  background: transparent;
  padding: 10px 40px;
  font-size: 14px;
  font-weight: 700;
  transition: 0.2s all;

  &:hover {
    color: #8400ff;
  }
`;
