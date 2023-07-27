import Link from "next/link"
import { useSession, getProviders, signOut, signIn, ClientSafeProvider, LiteralUnion } from 'next-auth/react';
import { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const SponsorshipCategory = () => {
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
                                <h1 className="heading_title playfair text-center">Sponsorship Category</h1>
                            </div>
                            {/* <p className="mt-8 mb-6 text-center">You will be asked to submit an abstract so kindly keep it handy prior to starting the registration process. Followings are the Abstract Submission Guidelines</p> */}


                            <TableContainer component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell><b>Categories</b></TableCell>
                                            <TableCell><b>Charges (INR)</b></TableCell>
                                            <TableCell><b>Benefits</b></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Platinum</TableCell>
                                            <TableCell>1,00,000</TableCell>
                                            <TableCell>Back cover page Ad + Stall</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Diamond</TableCell>
                                            <TableCell>80,000</TableCell>
                                            <TableCell>Ad in front leaflets</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Gold</TableCell>
                                            <TableCell>50,000</TableCell>
                                            <TableCell>Ad in Back leaflets (1/2 page)</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Silver</TableCell>
                                            <TableCell>35,000</TableCell>
                                            <TableCell>Ad in middle page (1/2)</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Bronze</TableCell>
                                            <TableCell>25,000</TableCell>
                                            <TableCell>Logo Advertisement</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Stall Ad</TableCell>
                                            <TableCell>50,000</TableCell>
                                            <TableCell>Stall space will be provided</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>


                            <div className="flex justify-center">
                                {/* <button style={{ color: "#E84C3D", borderRadius: "40px", padding: "12px 35px", border: "2px solid #E84C3D", marginBottom: "15px" }} className="button_cards mt-6" onClick={() => signIn(providers.google.id, { callbackUrl: '/login' })}>Register or Submit an Abstract Now</button> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-2 mx-auto"></div>
                </div>
            </div>
        </>
    )
}

export default SponsorshipCategory