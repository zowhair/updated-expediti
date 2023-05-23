import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import { Container } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';


import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function PDP() {
    return (
        <>
            <div className="images">
                <img className="bg" src="https://bookatrekking.com/data/images/2018/06/Panorama-Kilimanjaro__header.jpg" />



            </div>

            <div className="white-portion">
                <div className="flex-row">

                    <div className="left-white">
                        <p>
                            <a className="hover-green">
                                Kilimanjaro
                            </a>
                            <a className="hover-green">
                                Machame Route
                            </a>
                        </p>
                        <h1>Machame Route</h1>
                        <h2>Enosa Expeditions - 7 days</h2>
                        <div className="grey">
                            <h2>Regular days with</h2>
                            <ul className="icon-text">
                                <li> 15 - 20 km per day</li>
                                <li>500 - 1000m ascent per day</li>
                                <li> T3 Trails</li>
                            </ul>

                        </div>


                        <Tabs aria-label="Basic tabs" defaultValue={0} sx={{ borderRadius: 'lg' }}>

                            <TabList className="big">
                                <Tab className="option">Overview</Tab>
                                <Tab className="option">Itinerary</Tab>
                                <Tab className="option">Included</Tab>
                                <Tab className="option">Accomodaion</Tab>
                                <Tab className="option">FAQ</Tab>
                                <Tab className="option">Training</Tab>
                                <Tab className="option">Paking List</Tab>
                                <Tab className="option">Enosa Expeditions</Tab>
                                <Tab className="option">Safety</Tab>
                                <Tab className="option">How to Book</Tab>

                            </TabList>


                            <TabPanel value={0} className="details">
                                <p>Trek through France, Italy, and Switzerland
                                    Spend your nights in mountain huts
                                    Complete the full Tour du Mont Blanc

                                    This hike is one of the most famous in Europe and traditionally crosses 3 countries: France, Italy, and Switzerland. The famous Tour du Mont Blanc is a 170-kilometer long circuit, which encircles the Mont Blanc massif and has 10 kilometers of ascent/descent. The trek can be completed in 7 to 11 days, depending on the route and physical condition.

                                    Our 10-day trek starts in Chamonix, France, and goes around the beautiful Mont Blanc massif. Along the way, you spend the nights in French, Italian and Swiss mountain huts. There you will meet other hikers and enjoy delicious local dishes. During this 10-day adventure, you'll enjoy magnificent views of the mountains, snow-capped peaks and small picturesque mountain villages. You don't have to worry about the logistics of reserving the huts. We'll take care of that for you, so all you have to do is enjoy this unforgettable adventure.
                                </p>
                            </TabPanel>

                            <TabPanel value={1} className="details">
                                <p>rance, Italy, and Switzerland
                                    Spend your nights in mountain huts
                                    Complete the full Tour du Mont Blanc

                                    This hike is one of the most famous in Europe and traditionally crosses 3 countries: France, Italy, and Switzerland. The famous Tour du Mont Blanc is a 170-kilometer long circuit, which encircles the Mont Blanc massif and has 10 kilometers of ascent/descent. The trek can be completed in 7 to 11 days, depending on the route and physical condition.

                                    Our 10-day trek starts in Chamonix, France, and goes around the beautiful Mont Blanc massif. Along the way, you spend the nights in French, Italian and Swiss mountain huts. There you will meet other hikers and enjoy delicious local dishes. During this 10-day adventure, you'll enjoy magnificent views of the mountains, snow-capped peaks and small picturesque mountain villages. You don't have to worry about the logistics of reserving the huts. We'll take care of that for you, so all you have to do is enjoy this unforgettable adventure.
                                </p>
                            </TabPanel>

                            <TabPanel value={2} className="details">
                                <p>Trplete the full Tour du Mont Blanc

                                    This hike is one of the most famous in Europe and traditionally crosses 3 countries: France, Italy, and Switzerland. The famous Tour du Mont Blanc is a 170-kilometer long circuit, which encircles the Mont Blanc massif and has 10 kilometers of ascent/descent. The trek can be completed in 7 to 11 days, depending on the route and physical condition.

                                    Our 10-day trek starts in Chamonix, France, and goes around the beautiful Mont Blanc massif. Along the way, you spend the nights in French, Italian and Swiss mountain huts. There you will meet other hikers and enjoy delicious local dishes. During this 10-day adventure, you'll enjoy magnificent views of the mountains, snow-capped peaks and small picturesque mountain villages. You don't have to worry about the logistics of reserving the huts. We'll take care of that for you, so all you have to do is enjoy this unforgettable adventure.
                                </p>
                            </TabPanel>

                            <TabPanel value={3} className="details">
                                <p>Trplete the full Tour du Mont Blanc

                                    This hike is one of the most famous in Europe and traditionally crosses 3 countries: France, Italy, and Switzerland. The famous Tour du Mont Blanc is a 170-kilometer long circuit, which encircles the Mont Blanc massif and has 10 kilometers of ascent/descent. The trek can be completed in 7 to 11 days, depending on the route and physical condition.

                                    Our 10-day trek starts in Chamonix, France, and goes around the beautiful Mont Blanc massif. Along the way, you spend the nights in French, Italian and Swiss mountain huts. There you will meet other hikers and enjoy delicious local dishes. During this 10-day adventure, you'll enjoy magnificent views of the mountains, snow-capped peaks and small picturesque mountain villages. You don't have to worry about the logistics of reserving the huts. We'll take care of that for you, so all you have to do is enjoy this unforgettable adventure.
                                </p>
                            </TabPanel>

                            <TabPanel value={4} className="details">
                                <p>Trplete the full Tour du Mont Blanc

                                    This hike is one of the most famous in Europe and traditionally crosses 3 countries: France, Italy, and Switzerland. The famous Tour du Mont Blanc is a 170-kilometer long circuit, which encircles the Mont Blanc massif and has 10 kilometers of ascent/descent. The trek can be completed in 7 to 11 days, depending on the route and physical condition.

                                    Our 10-day trek starts in Chamonix, France, and goes around the beautiful Mont Blanc massif. Along the way, you spend the nights in French, Italian and Swiss mountain huts. There you will meet other hikers and enjoy delicious local dishes. During this 10-day adventure, you'll enjoy magnificent views of the mountains, snow-capped peaks and small picturesque mountain villages. You don't have to worry about the logistics of reserving the huts. We'll take care of that for you, so all you have to do is enjoy this unforgettable adventure.
                                </p>
                            </TabPanel>
                        </Tabs>
                        <div className="gallery">
                            <h3>Gallery</h3>
                            <img className="small-imgs" src="https://bookatrekking.com/data/images/2022/09/peaks-of-the-balkans-2__product.jpg" />
                        </div>


                    </div>
                    <div className="white-right">
                        <div className="card-white">
                            <div className="align-center">
                                <p>From</p>
                                <div className="flex-row" >
                                    <p>USD $</p>
                                    <h1 className="green">1564</h1>

                                </div>
                                <p>per person</p>

                            </div>
                            <p>See Group Discount</p>
                            <div className="input-div">
                                <span className=".input">
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>

                                        <DatePicker label="Select Dates" />

                                    </LocalizationProvider>

                                </span>
                                {/* <input type="text" name="data" value="05-05-2023"/> */}


                            </div>
                            <div className="input-div">
                                <input name="persons" type="number" min="1" max="100" value="2" />

                            </div>
                            <button className="button">Book Now</button>
                        </div>
                        <div>
                            <a>See our <strong> 270 </strong>
                                reviews on
                                <span className="green">
                                    <StarIcon />
                                </span>
                                <strong> Trustpilot</strong>
                            </a>

                        </div>

                    </div>
                </div>
                <div className="align-center">
                    <h2>These treks you might like</h2>
                    <div className="picture-cards flex-row">
                        <div className="cards">
                            <div className="images-container">
                                <img src="https://bookatrekking.com/data/images/2019/12/shutterstock-161001695__product.jpg" />
                            </div>
                            <div className="info-container">
                                <h3>Fast Track W-Treks</h3>
                                <p>
                                    This is the faster way to visit the three main valleys of the famous W trail in the Torres Del Paine National park.
                                </p>
                                <div className="info-clear">
                                    <p className="clear">Patagonia </p>
                                    <p className="clear"> 3 Days</p>

                                </div>
                                <img className="logo-right" src="https://bookatrekking.com/data/images/2019/06/Logo-Chile-Nativo.png" />
                            </div>
                        </div>
                        <div className="cards">
                            <div className="images-container">
                                <img src="https://bookatrekking.com/data/images/2019/12/shutterstock-161001695__product.jpg" />
                            </div>
                            <div className="info-container">
                                <h3>Fast Track W-Treks</h3>
                                <p>
                                    This is the faster way to visit the three main valleys of the famous W trail in the Torres Del Paine National park.
                                </p>
                                <div className="info-clear">
                                    <p className="clear">Patagonia </p>
                                    <p className="clear"> 3 Days</p>

                                </div>
                                <img className="logo-right" src="https://bookatrekking.com/data/images/2019/06/Logo-Chile-Nativo.png" />
                            </div>
                        </div>
                        <div className="cards">
                            <div className="images-container">
                                <img src="https://bookatrekking.com/data/images/2019/12/shutterstock-161001695__product.jpg" />
                            </div>
                            <div className="info-container">
                                <h3>Fast Track W-Treks</h3>
                                <p>
                                    This is the faster way to visit the three main valleys of the famous W trail in the Torres Del Paine National park.
                                </p>
                                <div className="info-clear">
                                    <p className="clear">Patagonia </p>
                                    <p className="clear"> 3 Days</p>

                                </div>
                                <img className="logo-right" src="https://bookatrekking.com/data/images/2019/06/Logo-Chile-Nativo.png" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <style jsx global>{`
               
                body {
                    font-size: 14px;
                    font-weight: 400;
                    letter-spacing: 0.01em;
                    line-height: 1.6em;
                    font-family: "AvenirNext", Arial, Helvetica, sans-serif;
                    text-rendering: optimizeLegibility;
                    
                }
                .navi{   
                    /* background-color: rgb(139, 137, 137); */
                    color: white;
                    top: 70px;
                    overflow: hidden;
                    position: fixed;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    left:0;
                    right: 0;
                }
                
                .right {
                    display: flex;
                    align-items: center;
                    list-style: none;
                }
                .right li {
                    padding-left: 20px;
                
                }
                .right a {
                    color: white;
                    text-decoration: none;
                
                }
                
                .images .bg {
                    height:400px;
                    filter:brightness(60%);
                    width: 100%;
                    position: relative;
                    left: 0;
                    right: 0;
                    top: 0;
                
                
                }
                .tops {
                    background-color: white;
                    position: fixed;
                    left: 0;
                    right: 0;
                    top: 0;
                    display:flex;
                    justify-content: space-around;
                    border-bottom: 1px solid rgb(255, 255, 255);
                }
                .green {
                    color:  green;
                }
                .Green a {
                    color: green;
                    text-decoration: none;
                }
                .black a {
                    color: black;
                    text-decoration: none;
                }
                /*white-portion*/
                .white-portion {
                    background-color: #F1F1F1;
                    border-top-right-radius: 60px;
                    border-top-left-radius: 60px;
                    position: relative;
                    top: -70px;
                    padding-left: 100px;
                    text-align: center;
                }
                /*grey*/
                .grey {
                    color: rgb(83, 83, 83);
                }
                /*icon-text*/
                .icon-text {
                    list-style: none;
                    display: flex;
                }
                .icon-text li {
                    padding-left: 15px;
                
                }
                /*flex- with display row*/
                .flex-row{
                    display: flex;
                    
                }
                @media only screen and (max-width: 750px){
                    * {
                        margin: auto;
                        text-align: center;
                        over-flow: hidden;                     
                    }
                }
                @media only screen and (max-width: 500px){
                    .card-white{
                        margin: 0 !important;
                    }
                }
                @media only screen and (max-width: 1085px){
                    .cards{
                        width:150px;
    
                    }
                    .gallery .small-imgs {                       
                        width: 150px;
                        height: 150px;
                    }
                    
                    .flex-row {
                        flex-flow: row wrap;
                    }

                }
               
                /*big*/
                .big {
                    background: white;
                    list-style: none;
                    display: flex;
                    flex-wrap: wrap;
                    
                }
                .option {
                    margin: 10px;
                    border-radius: 10px;
                    padding: 3px;
                    border: 1px solid green;                 
                    font-size: large;                  
                }
                .hover-green:hover  {
                    color: green;
                }                       
                .details {
                    background: white;
                    border: none;
                    border-radius: 15px;
                    padding: 10px;
                    font-size: 18px;
                    font-weight: 200;
                    box-shadow: 0px 20px 40px 0 rgba(0, 0, 0, 0.1);

                }
                /*card*/
                .white-right{
                    display: flex;
                    align-items: center;
                    flex-flow: column wrap;
                }
                .card-white {
                    background: #fff;
                    border-radius: 24px;
                    box-shadow: 0px 20px 40px 0 rgba(0, 0, 0, 0.1);
                    height: 400px;
                    text-align: left;
                    position: relative;
                    margin: 130px;
                    z-index: 2;                    
                    padding: 15px 10px 0 10px;
                }
                
                .align-center {
                    display: flex;
                    flex-flow: column wrap;
                    justify-content: flex-start;
                    align-items: center;
                    font-weight: 600;
                }

                .input-div {
                    border: solid 2px rgba(62, 137, 82, 0.2);  
                    border:none;                                     

                }
                input{ 
                    outline: none;  
                    padding: 0 54px;
                    line-height: 46px;
                    height: 46px;
                    margin: 5px 0 0 12px;
                    border-radius: 24px;
                    vertical-align: top;
                    font-weight: 600;
                    color: #161A2B;
                    font-size: 1em;
                    background: transparent;
                    box-shadow: none;
                }
                .button {                    
                    background: #FF5800;
                    line-height: 48px;
                    margin: 40px 0 -24px 0;
                    border: 0;
                    border-radius: 24px;
                    text-align: center;
                    font-weight: 600;
                    color: #fff;
                    font-size: 1em;
                    cursor: pointer;
                    box-shadow: 0px 12px 24px -8px rgba(255, 88, 0, 0.8);
                    letter-spacing: 0.04em;
                    width: 100%;
                }
                .button:hover {
                    letter-spacing: 0.1em;
                    box-shadow: 0px 12px 24px 0px rgba(255, 88, 0, 0.8)

                }
                .gallery .small-imgs {
                    width: 220px;
                    height: 150px;
                    border-radius: 30px;
                }
                .picture-cards {
                    align-items: center;
                    justify-content: center;
                    flex-flow:row now-rap;
                    margin-left: 0px;
                    flex: 0 0 33.3333%;
                    display: flex;
                    margin-bottom: 24px;
                    position: relative;
                    opacity: 1;
                    font-weight: 400;
                    transform: translate(0, 0px) scale(1)
                }
                .cards {
                    margin: 10px;
                    box-shadow: 0px 20px 40px 0 rgba(0, 0, 0, 0.1);
                    width: 300px;
                    font-size: 16px;
                    cursor: pointer;
                    font-weight: 400;
                    overflow: hidden;
                    border-radius: 30px;
                    background-color: white;
                }
                .info-container {
                    position: relative;
                    top: -60px;
                    background-color: white;
                    padding:15px 15px 0 15px;
                    border-top-right-radius: 20px;
                    border-top-left-radius: 20px;
                    z-index: 1;
                }
                .info-clear {
                    display: flex;
                }
                .info-clear .clear {
                    padding-left: 15px;

                }
               
                
            `}
            </style>
        </>
    )
}