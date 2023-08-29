import Image from "next/image.js";
import styled from "styled-components";

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 25rem;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;

const Wrapper = styled.div`
  text-align: center;
  display: grid;
  place-items: center;
  gap: 1rem;
`;

export default function ArtPiecePreview({ image, artist }) {
  return (
    <Wrapper>
      <ImageContainer>
        <StyledImage src={image} alt={`spotlight: ${artist}`} fill />
      </ImageContainer>
      <h2>{artist}</h2>
    </Wrapper>
  );
}
