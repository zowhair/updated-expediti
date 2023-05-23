import TopBanner from './TopBanner';
import ResponsiveAppBar from './NavR';
import Hero from './Hero';
import Footer from './Footer';

export default function Layout({children, pageProps}) {
    console.log("layout", {pageProps})
    return (
        <>
            <TopBanner bannerProps={pageProps.topBanner} />
            <ResponsiveAppBar navProps={pageProps.nav} />
            {children}
            <Footer footerProps={pageProps.footer} />
        </>

    )
}