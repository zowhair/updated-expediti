import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Asia({Component, pageProps}) {
    console.log("appjs",{pageProps})
    return (
        <Layout className={styles.mainContainer} pageProps={pageProps.layoutData.data.attributes.layout} >
            <Component {...pageProps} />
        </Layout>
    )
}

