import Link from 'next/link';

function Product({title, data}) {
    return (
        <>
            <div className="productDetailPageContainer">
                <div className="productPageTopHead">
                    <div className="productHeading">
                    </div>
                    <div className="productDescription">
                    </div>
                </div>
                <div className="productPageBottomHead">
                    <div className="productLeftContainer">
                        <div className="productTabs">
                            <h1>{title} {data}</h1>

                        </div>

                    </div>
                    <div className="productRightContainer">
                        {/* make card here, checkout and price */}
                    </div>
                </div>
            </div>
            <style jsx global>{`
                html,
                body {
                    query: 0;
                    margin: 0;
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                    sans-serif;
                }
                * {
                    box-sizing: border-box;
                }
            `}</style>
        </>

    )
}

export async function getServerSideProps(context) {
    console.log({context})
    return {
        props: {
            title: "This is title and rest is data",
            data: context.params.slug
        }
    }
}
export default Product;