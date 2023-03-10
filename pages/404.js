import Heading from "@/components/Heading";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const Error = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000)
    }, [router]);

    return (
        <>
        <Head>
                <title>Error</title>
            </Head>
        <   Heading text="Error Page 404" tag="h2"/>
            <p>Error</p>
        </>
    )
}

export default Error;