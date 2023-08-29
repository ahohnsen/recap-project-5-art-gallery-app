import Spotlight from "@/components/Spotlight.js";

export default function SpotlightPage({ pieces }) {
  const spotlightPiece = pieces
    ? pieces[Math.floor(Math.random() * pieces.length)]
    : null;

  return (
    <div>
      {spotlightPiece && (
        <Spotlight
          image={spotlightPiece.imageSource}
          artist={spotlightPiece.artist}
        />
      )}
    </div>
  );
}
