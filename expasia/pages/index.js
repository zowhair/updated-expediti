import Head from 'next/head';
import styles from '../styles/Home.module.css';
import NavBar from '../components/Nav';
import Carousel from '../components/Carousel';
// import Card from '../components/Cards';
import Card from '../components/card/Card';
import PackageCards from '../components/packageCard';
import Packages from '../components/Packages';
import Hero from '../components/Hero';
import Layout from '../components/Layout';


export default function Home({homePageData}) {
  console.log("homepage ", {homePageData})
  const carouselData = homePageData.data.attributes.carousel.images.data
  const richText = homePageData.data.attributes.richText
  return (
    <div >
      <Head>
        <title>Expedition Asia Trek & Tours</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Carousel carouselImages={carouselData} />
        <Hero richText={richText} />
        <Card cardData={homePageData.data.attributes.cards} />
        <PackageCards packageProps={homePageData.data.attributes.bottomPackages} />
        <Packages />
   
      

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}


export async function getServerSideProps() {
  const homePage = await fetch('http://localhost:1337/api/home-page?populate=deep');
  const homePageData = await homePage.json();

  const layout = await fetch('http://localhost:1337/api/layout?populate=deep')
  const layoutData = await layout.json()
  
  return  {
      props: {
        homePageData,
        layoutData
      }
  }
}
