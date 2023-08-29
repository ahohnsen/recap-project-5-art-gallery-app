import styled from "styled-components";
import Image from "next/image.js";
import FavoriteButton from "@/components/FavoriteButton.js";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12rem;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 20rem;
`;

const StyledImage = styled(Image)`
  object-fit: scale-down;
`;

const List = styled.ul`
  list-style: none;
  padding-left: 0;

  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const BackButton = styled.button`
  background-color: white;
  text-decoration: none;
  border: 3px solid black;
  color: black;
  font-size: 2rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  width: 50px;
  height: 50px;
  padding: 0 0 0 0.1rem;
`;

export default function ArtPiecesDetails({
  image,
  title,
  artist,
  year,
  genre,
  onBack,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <Wrapper>
      <ActionContainer>
        <BackButton type="button" onClick={onBack} aria-label="navigate back">
          ←
        </BackButton>
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
        />
      </ActionContainer>
      <h2>{title}</h2>
      <ImageContainer>
        <StyledImage
          src={image}
          priority
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          alt={`${artist}: ${title}`}
        />
      </ImageContainer>
      <List>
        <li>{artist}</li>
        <li>{year}</li>
        <li>{genre}</li>
      </List>
    </Wrapper>
  );
}
