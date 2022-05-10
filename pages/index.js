import Hero from "../components/home/hero";
import Head from "next/head";
function HomePage(props) {
  return (
    <div>
      <Head>
        <title>Emmanuel Garcia</title>
        <meta
          name="description"
          content="Hi my name is Emmanuel Garcia, I am fullstack web developer and this is my portolio. I am originally from El Paso, Texas and I embarked in this journey back in 2019 when I learned Python..."
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
