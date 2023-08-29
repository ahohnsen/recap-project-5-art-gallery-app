import Image from "next/image.js";
import styled from "styled-components";

const ArtPiece = styled.li`
  width: 30rem;
  min-width: 10rem;
  height: 30rem;
`;

const Figure = styled.figure`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Caption = styled.figcaption`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: black;
  color: white;
  padding: 0.5rem 0.3rem;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;

export default function ArtPiecePreview({ image, artist, title }) {
  return (
    <ArtPiece>
      <Figure>
        <StyledImage src={image} alt={title} fill />
        <Caption>
          {title} by {artist}
        </Caption>
      </Figure>
    </ArtPiece>
  );
}
