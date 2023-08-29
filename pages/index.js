import Spotlight from "@/components/Spotlight.js";
import ArtPieces from "@/components/ArtPieces.js";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  const spotlightPiece = data
    ? data[Math.floor(Math.random() * data.length)]
    : null;

  return (
    <div>
      {spotlightPiece && (
        <Spotlight
          image={spotlightPiece.imageSource}
          artist={spotlightPiece.artist}
        />
      )}
      <ArtPieces pieces={data} />
    </div>
  );
}
