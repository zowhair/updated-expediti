import Link from "next/link"
import Head from "next/head"

export default function FirstPost() {
    return (
        <>
        <Head>
            <title>New</title>
        </Head>
            <Link href="#">

                <h1>This is first post</h1>
            </Link>
        </>

        )
}