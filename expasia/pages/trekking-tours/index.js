import Collection from "../../components/Collection"

export default function TrekkingTours({trekkingToursData}) {
    console.log("treekking tours data", {trekkingToursData});
    return (
        <>
            <Collection  />
        </>
    )
}

export async function getServerSideProps() {
    const trekkingTours = await fetch('http://localhost:1337/api/trekking-tour?populate=deep')
    const trekkingToursData = await trekkingTours.json()
    const layout = await fetch('http://localhost:1337/api/layout?populate=deep')
    const layoutData = await layout.json()
    return {
        props: {
            trekkingToursData,
            layoutData
        }
    }
}