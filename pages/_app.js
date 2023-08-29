import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout.js";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} pieces={data} />
    </Layout>
  );
}
