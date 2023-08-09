'use client'
import React, { useState } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  position: relative;
  width: 350px;
  height: 250px;
  overflow: hidden;
  overflow-wrap: break-word;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
  color: white;
  border-radius: 10px;
  cursor: pointer;

  ${CardContainer}:hover & {
    opacity: 1;
  }
`;

const Title = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`;

const Role = styled.p`
  margin: 0;
  font-size: 14px;
`;

const Card = ({ imageSrc, title, role }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <CardContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardImage src={imageSrc} alt="Card Background" />
      {isHovered && (
        <Overlay>
          <Title>{title}</Title>
          <Role>{role}</Role>
        </Overlay>
      )}
    </CardContainer>
  );
};

export default Card;
