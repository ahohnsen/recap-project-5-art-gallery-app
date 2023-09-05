import GlobalStyle from "../styles";
import useSWR from "swr";
import { useState } from "react";
import Layout from "@/components/Layout.js";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, isLoading, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
<<<<<<< HEAD

  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  function handleToggleFavorite(slug) {
    const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);
    if (artPiece) {
      setArtPiecesInfo(
        artPiecesInfo.map((pieceInfo) =>
          pieceInfo.slug === slug
            ? { slug, isFavorite: !pieceInfo.isFavorite }
            : pieceInfo
        )
      );
    } else {
      setArtPiecesInfo([...artPiecesInfo, { slug, isFavorite: true }]);
    }
  }
=======
>>>>>>> 4-art-piece-details-page

  return (
    <Layout>
      <GlobalStyle />
<<<<<<< HEAD
      <Component
        {...pageProps}
        pieces={isLoading || error ? [] : data}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={handleToggleFavorite}
      />
=======
      <Component {...pageProps} pieces={isLoading || error ? [] : data} />
>>>>>>> 4-art-piece-details-page
    </Layout>
  );
}
