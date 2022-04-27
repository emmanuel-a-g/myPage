import Hero from "../components/home/hero";
function HomePage(props) {
  console.log("Props: ", props.message);
  return (
    <div>
      <Hero />
    </div>
  );
}

export default HomePage;
export function getStaticProps() {
  return {
    props: {
      message: "Hi from Emmanuel worker."
    }
  } 
}