import ArtPieces from "@/components/ArtPieces.js";

export default function ArtPiecesPage({
  pieces,
  onArtPiecesInfo,
  artPiecesInfo,
  onToggleFavorite,
}) {
  return (
    <ArtPieces
      pieces={pieces}
      onArtPiecesInfo={onArtPiecesInfo}
      artPiecesInfo={artPiecesInfo}
      onToggleFavorite={onToggleFavorite}
    />
  );
}
