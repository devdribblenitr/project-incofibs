
const PaymentDetails = () => {
  return (
    <>
        <div id="PaymentDetails" className="py-[3.5rem]">
            <div className="grid grid-cols-12 mx-auto">
            <div className="col-span-1 md:col-span-2 mx-auto"></div>
                <div className="col-span-10 md:col-span-8 mx-auto">
                    <div className="payment_details mx-auto">
                        <div className="heading aboutinco">
                        <h1 className="heading_title playfair text-center">Payment Details</h1>
                        </div>
                        <p className="mt-8 mb-6 text-center">Payment should be made through an Online transfer / Demand Draft in favour of <span>“Conference, NIT Rourkela”</span> payable at <span>SBI, NIT Branch Rourkela - 769008</span> and send to the following address. You may choose to pay the amount through <span>NEFT/RTGS</span> with following details. Registration fee includes accomodation that will be provided in Institute Guest House and Students will be accomodated in Hostels</p>
                        <div>
                            <p className="py-1">Branch Details : <span>State Bank of India (SBI), NIT CAMPUS, ROURKELA</span></p>
                            <p className="py-1">IFSC Code : <span>SBIN0002109</span></p>
                            <p className="py-1">Account Name : <span>CONFERENCE, NIT ROURKELA</span></p>
                            <p className="py-1">Account Number : <span>36734418111</span></p>
                        </div>
                    </div>
                </div>
            <div className="col-span-1 md:col-span-2 mx-auto"></div>
            </div>
        </div>
    </>
  )
}

export default PaymentDetails