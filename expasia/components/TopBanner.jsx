import Image from "next/image"
import styles from "../styles/Home.module.css";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function TopBanner({bannerProps}) {

    return (
        <Box  >
            <div className={styles.whitetop}>
                <Link href="/" style={{textDecoration:'none'}}>
                    <Box className={styles.topleft}>
                        {
                        bannerProps?.logo?.data ? 
                            <img src={`http://localhost:1337${bannerProps?.logo?.data?.attributes?.url}`} width={100} height={100} />
                            : ""
                        }
                        {
                        bannerProps?.companyName ? 
                            <span className={styles.brandname}>{bannerProps?.companyName}</span>
                            :""
                        }

                    </Box>
                </Link>
                <Box className={styles.topright} sx={{ my: 2, mx: 5 }}>
                    {
                    bannerProps.rightText1 ?
                    <span>
                        {bannerProps?.rightText1}
                        <span className={styles.orange}></span>
                        {/* <span className={styles.green}>/7</span> */}
                    </span>
                    : ""    
                    }
                    <br />
                    {
                        bannerProps.rightText2 ? 
                        <a className={styles.number} href=" https://wa.me/+923004708813">{bannerProps.rightText2}</a>
                        : ""
                    }
                </Box>

            </div>

        </Box>
    )
}
