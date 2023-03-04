import Head from "next/head";
import Heading from "./Heading";

const ContactInfo = ({contact}) => {
    const {name, email, address} = contact || {};
    const {street, suite, city, zipcode} = address || {};

    if(!contact) {
        return (
            <Heading tag='h3' text='Empty contact'/>
        )
    }

    return (
        <>
            <Heading tag='h3' text={name}/>
            <div>
                <strong>EMAIL: {email}</strong>
            </div>
            <div>
                <strong>Address: {
                    `${street} ${suite} ${city} ${zipcode}`
                }</strong>
            </div>
        </>
    )
}

export default ContactInfo;