import styled from "styled-components";
import Head from "next/head.js";
import Navigation from "./Navigation.js";

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 5rem auto 4rem;
`;

const Heading = styled.h1`
  text-align: center;
`;

const Main = styled.main`
  overflow-y: scroll;
`;

export default function Layout({ children }) {
  return (
    <Wrapper>
      <Head>
        <title>ArtGallery</title>
      </Head>
      <Heading>Art Gallery</Heading>
      <Main>{children}</Main>
      <Navigation />
    </Wrapper>
  );
}
