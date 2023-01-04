import Link from "next/link"
import { useSession, getProviders, signOut, signIn, ClientSafeProvider, LiteralUnion } from 'next-auth/react';
import { useState, useEffect } from "react";

const AbstractDetails = () => {
    const [providers, setproviders] = useState();
    const { data: session, status } = useSession();
    console.log("session", session);
    console.log("status", status);
    useEffect(() => {
        const setTheProviders = async () => {
            const setupProviders = await getProviders();
            setproviders(setupProviders);
        };
        setTheProviders();
    }, []);
    return (
        <>
            <div className="py-[3.5rem] bg-[#eee]">
                <div className="grid grid-cols-12 mx-auto">
                    <div className="col-span-1 md:col-span-2 mx-auto"></div>
                    <div className="col-span-10 md:col-span-8 mx-auto">
                        <div className="payment_details mx-auto">
                            <div className="heading aboutinco">
                                <h1 className="heading_title playfair text-center">Abstract Submission Guidelines</h1>
                            </div>
                            <p className="mt-8 mb-6 text-center">You will be asked to submit an abstract so kindly keep it handy prior to starting the registration process. Followings are the Abstract Submission Guidelines</p>
                            <ul className="list-disc">
                                <li className="py-2">Interested registered participants are invited to submit their Abstracts
                                    {/* by December 31st, 2022 (extended) */}
                                </li>
                                <li className="py-2">Abstracts not exceeding 350 words (excluding title, author/s affiliation/s) should be typed in English in the given text box and structured into sections: Introduction, Methodology, Results and Conclusion only. No figures or tables should be included.</li>
                                <li className="py-2">Abstracts should be submitted only in the ONLINE mode on the conference portal and should NOT be sent via email or post.</li>
                                <li className="py-2">Registration to conference is mandatory for submitting an abstract.</li>
                                <li className="py-2">All abstracts should be submitted only after obtaining consent from the co-authors.</li>
                                <li className="py-2">The decision of the Committee shall be final.</li>
                                {/* <li className="py-2">gdgdfgd</li> */}
                            </ul>
                            <p className="text-center pt-8 pb-3">Click here to <Link href={'/abstract_format_InCoFIBS.pdf'}><a className="abstract_temp">View the Template for Abstract</a></Link> and click on the button below to Register or Submit an Abstract</p>
                            <div className="flex justify-center">
                                <button style={{ color: "#E84C3D", borderRadius: "40px", padding: "12px 35px", border: "2px solid #E84C3D", marginBottom: "15px" }} className="button_cards mt-6" onClick={() => signIn(providers.google.id, { callbackUrl: '/login' })}>Register or Submit an Abstract Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-2 mx-auto"></div>
                </div>
            </div>
        </>
    )
}

export default AbstractDetails