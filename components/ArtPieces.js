import ArtPiecePreview from "./ArtPiecePreview";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding-left: 0;

  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

export default function ArtPieces({ pieces }) {
  return (
    <List>
      {pieces?.map((piece) => (
        <ArtPiecePreview
          key={piece.slug}
          title={piece.name}
          image={piece.imageSource}
          artist={piece.artist}
          slug={piece.slug}
        />
      ))}
    </List>
  );
}
