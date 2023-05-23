
export default function Collection() {
    return (
        <>
        <div className="image">
            <img src="https://bookatrekking.com/data/images/2020/07/austria-hiking__header.jpg"/>

        </div>
        <div className="whole-div">
            <div className="flex-row">
                <div className="card-portion shadow">
                   
                    
                </div>
                <div className="text-portion">
                    <div className="flex-row">
                        <div className="flex-grow">
                            <span>Order By</span>
                            <select className="shadow">
                                <option>Recomanded</option>
                                <option>Price</option>
                                <option>Duration</option>
                            </select>
                            <select className="shadow">
                                <option>Descending</option>
                                <option>Ascending</option>
                            </select>

                        </div>
                        <div>
                            <p> 26 results</p>
                        </div>

                    </div>
                    <hr/>
                    <div className="img-text flex-row shadow">
                        <div className="img-container">
                            <img className="small-images" src="https://bookatrekking.com/data/images/2020/07/tvbstubaitirol-andre-schoenherr-family1-lores__product.jpg"/>
                        </div>
                        <div className="info">
                            <h3 className="right">
                                <span>The world in world</span>
                                <span> USD $281</span>
                            </h3>
                            <p>
                            A more family-friendly alternative of the Stubaier Höhenweg. All the highlights, but just three days and two nights. 
                            </p>

                        </div>
                    </div>
                    <div className="img-text flex-row shadow">
                        <div className="img-container">
                            <img className="small-images" src="https://bookatrekking.com/data/images/2020/10/shutterstock-663957649__product.jpg"/>
                            <span className="product-label">Best Seller</span>
                        </div>
                        <div className="info">
                            <h3 className="right">
                                <span>
                                    The world in world
                                    </span>
                                <span> USD $281</span>
                            </h3>
                            <p>
                            A more family-friendly alternative of the Stubaier Höhenweg. All the highlights, but just three days and two nights. 
                            </p>

                        </div>
                    </div>
                    <div className="button">
                        <button> LOAD MORE </button>

                    </div>
                </div>

            </div>

            <div className="gallery">
                <h1>Our booking experts</h1>
                <div className="big-cards flex-row">
                    <div className="outer-div">
                        <div className="img-div">
                            <img src="https://bookatrekking.com/data/images/2019/09/img-20190510-wa0051__product.jpg"/>
                        </div>
                        <div className="text-div">
                            <h2>sarojina ka </h2>
                            <p>We are family family and where are you We are family family and where are you We are family family and where are you We are family family and where are you We are family family and where are you </p>
                        </div>
                    </div>
                    <div className="outer-div">
                        <div className="img-div">
                            <img src="https://bookatrekking.com/data/images/2022/10/annemiek-meulenbeld-bookatrekking1__product.jpg"/>
                        </div>
                        <div className="text-div">
                            <h2>sarojina ka </h2>
                            <p>We are family family and where are you We are family family and where are you We are family family and where are you We are family family and where are you We are family family and where are you </p>
                        </div>
                    </div>

                </div>
                <div className="button">
                    <button>Contact Us</button>

                </div>
            </div>
        </div>
        <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Pathway+Extreme:wght@200;400&display=swap');
            .image img{
                width: 100%;
            }
            .whole-div{
                font-family: 'Pathway Extreme', sans-serif;
                position: relative;
                padding: 20px;
                top: -70px;
                background-color: #F1F1F1;
                border-top-right-radius: 30px;
                border-top-left-radius: 30px;
                
            }
            @media only screen and (min-width: 900px){
                .whole-div {
                    flex-flow: row wrap;
    
                }

            }
            .card-portion{
                margin: 30px;
                background: white;
                width: 250px;
                height: 400px;
                padding:10px;
                border-radius: 20px;
            }
            .text-portion {
                margin: 30px;
            }
            select {
                padding: 10px;
                background: white;
                border-radius: 20px;
                border: solid 2px #ddd;
            }
            .shadow{
                box-shadow: 0px 20px 40px 0 rgba(0, 0, 0, 0.1);

            }
            .flex-grow {
                flex-grow: 1;
            }
            .flex-row {
                display: flex;
                justify-content: center;
                align-items: center;
                // flex-flow: row wrap;
                
            }
            .img-container {
                position: relative;
            }
            .img-container img {
                cursor: pointer;
                width: 250px;
                position: relative;
                top: -10px;
                left: -15px;
                height: 180px;
                border-radius: 30px;
                box-shadow: 0px 24px 24px -12px rgb(0 0 0 / 20%);

            }
            .right {
                display: flex;
                justify-content: space-between;
            }
            .info {
                padding: 15px;
            }
            .img-text {
                cursor: pointer;
                margin: 50px 0px;
                display: flex;
                background: white;
                border-radius: 20px;
                // flex-flow: row wrap;
            }
            @media only screen and (min-width: 900px){
                .product-label {
                    left: -6px;
                    top: 48px;
                }

            }
            .product-label {
                position: absolute;
                top: 100px;
                left: -22px;
                height: 20px;
                width: 80px;
                background: #282e6a;
                border-radius: 3px 6px 6px 0;
                padding: 5px;
                white-space: nowrap;
                color: #fff;
                // line-height: 39px;
                z-index: 5;
                font-weight: 200;
            }
            .product-label:after {
                content: "";
                position: absolute;
                bottom: -4px;
                left: 0;
                border-left: 5px solid transparent;
                border-right: 5px solid transparent;
                border-bottom: 5px solid #282e6a;
                height: 0;
                width: 0;
                transform: rotate(
            45deg);
                zoom: 1;
                filter: brightness(85%);
            }
            .button button {
                background: #282e6a;
                color: white;
                padding:10px 200px;
                border-radius: 30px;
                border: none;
                cursor: pointer;
                box-shadow: 0px 24px 24px -12px #282e6a;
            }
            .gallery {
                text-align: center;
            }
            .outer-div{
                width: 350px;
                padding: 15px;                
            }
            .img-div img {
                box-shadow: 0px 24px 24px -12px rgb(0 0 0 / 20%);
                height: 200px;
                width: 100%;
                border-radius: 20px;

            }
            @media only screen and (max-width: 900px){
                .flex-row {
                    flex-flow: row wrap;
                }
            }
            @media only screen and (max-width: 500px){
                .button button{
                     padding: 10px 10px;
                }
            }
        `}
        </style>
        </>
    )
}