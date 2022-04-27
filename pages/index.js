import Hero from "../components/home/hero";
import Head from "next/head";
function HomePage(props) {
  return (
    <div>
      <Head>
        <title>Emmanuel Garcia</title>
        <meta
          name="description"
          content="Emmanuel Garcia's, web developer portolio 2.0. I am a web developer native to El Paso, Texas. My coding journey began when I first learned Python back in 2019, after builing a game I decided to dive deep into web development! The rest is history."
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
