import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import { Container, Grid } from '@mui/material';
import { useInView } from "react-intersection-observer";
import styles from "../../styles/custom.module.css"
import packageStyles from "./packageStyle.module.css";
import { useAnimation, motion } from "framer-motion";
import { IconButtonClasses } from '@mui/joy';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import { Card, CardContent, CardCover } from '@mui/joy';


const squareVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 2 } },
    hidden: { opacity: 0, scale: 0 }
};



export default function PackageCards({packageProps}) {
    console.log({packageProps})
    const controls = useAnimation();
    const [ref, inView] = useInView();

    React.useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <Container maxWidth="lg" sx={{ mt: "120px", mb:"100px" }} className={`${packageStyles['text-center']}`}>
            <Box className={styles.textCenter} sx={{ display:'flex', justifyContent:"center", mb:"50px"  }}>
                <Typography variant="h1">
                    Our Family Packages
                </Typography>
                </Box>
            <Grid className={`${styles['cardsContainer']} ${packageStyles['cards-container']}`} container spacing={{ xs: 5, md: 5 }} columns={{ xs: 1, sm: 8, md: 12 }} direction="row"
                justifyContent="center"
                alignItems="center" >
                <Grid item 

                    className={` ${packageStyles['cards-container']}`}
                >
                    {packageProps ? packageProps.map((data) => (
                        <Card sx={{ minHeight: '280px', width: 320 }} className={`${packageStyles['main-card']}`}>
                            <CardCover>
                                <img
                                    src={`http://localhost:1337${data.background.data.attributes.url}`}
                                    srcSet={`http://localhost:1337${data.background.data.attributes.url}`}
                                    loading="lazy"
                                    alt=""
                                />
                            </CardCover>
                            <CardCover
                                sx={{
                                    background:
                                        'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                                }}
                            />
                            <CardContent sx={{ justifyContent: 'flex-end' }}>
                                <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
                                    {data.title}
                                </Typography>
                                <Typography
                                    // startDecorator={< />}
                                    textColor="neutral.300"
                                >
                                    {data.description}
                                </Typography>
                            </CardContent>
                        </Card>

                    )):""}
                </Grid>
            </Grid>
        </Container>
    );
}