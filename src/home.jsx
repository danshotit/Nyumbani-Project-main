import HomePage from "../components/home-page-components/homePage";

const Home = () => {
  useEffect(() => {
    document.title = "Quick Homes";
  }, []);
  return <HomePage />;
};

export default Home;
