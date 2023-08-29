import { useRouter } from "next/router";
import ArtPiecesDetails from "@/components/ArtPieceDetails.js";

export default function ArtPieceDetailsPage({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;

  const selectedArtPiece = pieces.find((piece) => piece.slug === slug);

  if (!selectedArtPiece) {
    return null;
  }

  return (
    <ArtPiecesDetails
      onBack={() => router.back()}
      image={selectedArtPiece.imageSource}
      title={selectedArtPiece.name}
      artist={selectedArtPiece.artist}
      year={selectedArtPiece.year}
      genre={selectedArtPiece.genre}
    />
  );
}
