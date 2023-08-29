import Image from "next/image.js";
import Link from "next/link.js";
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

const StyledLink = styled(Link)`
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

const ScreenReaderOnly = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

export default function ArtPiecePreview({ image, artist, title, slug }) {
  return (
    <ArtPiece>
      <Figure>
        <StyledImage src={image} alt={title} fill />
        <Caption>
          {title} by {artist}
        </Caption>
        <StyledLink href={`/art-pieces/${slug}`}>
          <ScreenReaderOnly>More Info</ScreenReaderOnly>
        </StyledLink>
      </Figure>
    </ArtPiece>
  );
}
