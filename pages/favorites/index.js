import ArtPieces from "@/components/ArtPieces.js";
import styled from "styled-components";

const Message = styled.p`
  text-align: center;
`;

export default function FavoritesPage({
  pieces,
  artPiecesInfo,
  onArtPiecesInfo,
  onToggleFavorite,
}) {
  const favorites = pieces.filter((piece) =>
    artPiecesInfo.find(
      (artPiece) => artPiece.slug === piece.slug && artPiece.isFavorite
    )
  );

  return (
    <>
      {favorites.length === 0 && <Message>You have no favorites yet.</Message>}
      <ArtPieces
        pieces={favorites}
        onArtPiecesInfo={onArtPiecesInfo}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
