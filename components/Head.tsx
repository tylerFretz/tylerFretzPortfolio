import Head from "next/head";

interface HeadProps {
  title: string;
}

const CustomHead = ({ title }: HeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Tyler Fretz is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="tyler fretz, tyler, fretz, web developer portfolio, tyle web developer, tyle developer, mern stack, tyler fretz portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Tyler Fretz's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: "Tyler Fretz",
};