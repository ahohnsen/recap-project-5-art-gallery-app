import Image from "next/image.js";
import styled from "styled-components";
import FavoriteButton from "@/components/FavoriteButton.js";

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

export default function Spotlight({
  image,
  artist,
  onToggleFavorite,
  isFavorite,
}) {
  return (
    <Wrapper>
      <ImageContainer>
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
          positionAbsolute={true}
        />
        <StyledImage src={image} alt={`spotlight: ${artist}`} fill />
      </ImageContainer>
      <h2>{artist}</h2>
    </Wrapper>
  );
}
