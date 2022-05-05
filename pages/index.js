import Hero from "../components/home/hero";
import Head from "next/head";
function HomePage(props) {
  return (
    <div>
      <Head>
        <title>Emmanuel Garcia</title>
        <meta
          name="description"
          content="Hi my name is Emmanuel Garcia, I am fullstack web developer and this is my portolio. I like to build and deploy things to the web from my home town El Paso, Texas. My journey began back in 2019 when I first build a game with Python, after this I decided to dive deep into web dev! The rest is history as they say."
        />
      </Head>
      <Hero />
    </div>
  );
}

export default HomePage;
export function getStaticProps() {
  return {
    props: {
      message: "Hi from Emmanuel worker.",
    },
  };
}
