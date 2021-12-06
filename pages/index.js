import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

const Home = ({ exploreData, cardsData }) => {
  return (
    <div className="">
      <Head>
        <title>
          Airbnb: Holiday Rentals, Cabins, Beach Houses, Unique Homes & ...
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner />

      {/* Below Banner - Main Section */}
      <main className="px-8 mx-auto max-w-7xl sm:px-16">
        {/* Small Cards */}
        <section className="pt-6">
          <h2 className="pb-5 text-4xl font-semibold">Explore Nearby</h2>

          {/* Pull data from a server through API endpoints */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>

        {/* Medium Cards */}
        <section>
          <h2 className="py-8 text-4xl font-semibold">Live Anywhere</h2>

          <div className="flex p-3 -ml-3 space-x-3 overflow-scroll scrollbar-hide">
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        {/* Large Card */}
        <LargeCard
          img="https://i.ibb.co/XJdPT0C/2da67c1c-0c61-4629-8798-1d4de1ac9291.webp"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const exploreData = await fetch("https://jsonkeeper.com/b/I9ZO").then((res) =>
    res.json()
  );

  const cardsData = await fetch("https://jsonkeeper.com/b/ZQ1K").then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
};
