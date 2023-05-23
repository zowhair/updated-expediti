import { Container } from "@mui/material";
import Link from "next/link";
import styles from "./cardStyle.module.css"

const Card = ({cardData}) => {
    
    return (
        <Container maxWidth="lg" sx={{ mt: "120px", mb: "100px" }} >

            <div  className={styles['main-container']}>
                {cardData ? cardData.map((data) => (
                    <div className={styles['card-container']}>
                        <div className={styles['card-image']}>
                            <img src={`http://localhost:1337${data.background.data.attributes.url}`} />
                        </div>
                        <div>
                            <div className={styles['card-ratings']}>
                                <div className={styles['card-rating-days']}>
                                <h4>
                                    <i class="fa-regular fa-calendar"></i> 7 days <i class="fa-regular fa-user"></i> 2
                                </h4>
                                </div>
                                <div className={styles['card-rating-review']}>stars</div>
                            </div>
                            <div className={styles['info']} >
                                <p>
                                    <span>{data.description}</span>
                                </p>
                                <div className={styles['display-column']}>
                                <p>{data.title}</p>
                                <h2 className={styles['orange']}>{data.price.label} {data.price.price}</h2>
                                <p>{data.comparePrice.label} 
                                    <s>{data.comparePrice.price}</s>
                                </p>	
                                </div>
                                <hr />
                                
                                <div>
                                    <div>
                                        <Link href={data.CTA.link} data1="nameas">
                                            <button className={styles['btn']}>{data.CTA.text}</button>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        
                        </div>
                        

                    </div>
                ))
                    
                
                : ""}
            </div>
        </Container>
    )
}
export default Card;