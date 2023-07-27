import { List, ListItem, Paper } from '@mui/material';

const CommunityDetails = () => {
  const listStyle = {
    columnCount: 2,
    listStyle: 'none',
    padding: '20px',
  };
  const paperStyle = {
    boxShadow: 'none',
  };


  return (
    <>
      <div id="PaymentDetails" className="pb-[3.5rem]">
        <div className="grid grid-cols-12 mx-auto">
          <div className="col-span-1 md:col-span-2 mx-auto"></div>
          <div className="col-span-12 md:col-span-12 mx-auto">
            <div className="payment_details mx-auto">
              <div className="heading aboutinco">
                <h1 className="heading_title playfair text-center">Patron</h1>
              </div>
              {/* <p className="mt-8 mb-6 text-center">Payment should be made through an Online transfer / Demand Draft in favour of <span>“Conference, NIT Rourkela”</span> payable at <span>SBI, NIT Branch Rourkela - 769008</span> and send to the following address. You may choose to pay the amount through <span>NEFT/RTGS</span> with following details. Registration fee includes accomodation that will be provided in Institute Guest House and Students will be accomodated in Hostels</p>
              <div>
                <p className="py-1">Branch Details : <span>State Bank of India (SBI), NIT CAMPUS, ROURKELA</span></p>
                <p className="py-1">IFSC Code : <span>SBIN0002109</span></p>
                <p className="py-1">Account Name : <span>CONFERENCE, NIT ROURKELA</span></p>
                <p className="py-1">Account Number : <span>36734418111</span></p>
              </div> */}
              <p style={{ textAlign: "center", marginTop: "30px", fontSize: "25px" }}>Prof. K. Umamaheshwar Rao, Director, NIT Rourkela</p>
            </div>
            <div className="payment_details mx-auto">
              <div className="heading aboutinco">
                <h1 className="heading_title playfair text-center">organizing committee</h1>
              </div>
              {/* <p className="mt-8 mb-6 text-center">Payment should be made through an Online transfer / Demand Draft in favour of <span>“Conference, NIT Rourkela”</span> payable at <span>SBI, NIT Branch Rourkela - 769008</span> and send to the following address. You may choose to pay the amount through <span>NEFT/RTGS</span> with following details. Registration fee includes accomodation that will be provided in Institute Guest House and Students will be accomodated in Hostels</p>
              <div>
                <p className="py-1">Branch Details : <span>State Bank of India (SBI), NIT CAMPUS, ROURKELA</span></p>
                <p className="py-1">IFSC Code : <span>SBIN0002109</span></p>
                <p className="py-1">Account Name : <span>CONFERENCE, NIT ROURKELA</span></p>
                <p className="py-1">Account Number : <span>36734418111</span></p>
              </div> */}
              <Paper elevation={0} style={paperStyle}>
                <List style={listStyle}>
                  <ListItem>Dr. Bismita Nayak, LS, NITRKL, Chairman & Convenor </ListItem>
                  <ListItem>Dr. Binod Bihari Sahu, LS, NITRKL, Co-Convenor</ListItem>
                  <ListItem>Dr. M. Srinivasan, LS, NITRKL, Co-convenor</ListItem>
                  <ListItem>Dr. Santosh Kumar, LS, NITRKL, Treasurer</ListItem>
                  <ListItem>Dr. Samir K. Patra, LS, NITRKL, Member</ListItem>
                  <ListItem>Dr. Surajit Das, LS, NITRKL, Member</ListItem>
                  <ListItem>Dr. Sujit K. Bhutia, LS, NITRKL, Member</ListItem>
                  <ListItem>Dr. Rohan Dhiman, LS, NITRKL, Member</ListItem>
                  <ListItem>Dr. Bibekanand Mallick, LS, NITRKL, Member</ListItem>
                  <ListItem>Dr. Suman Jha, LS, NITRKL, Member</ListItem>
                  <ListItem>Dr. Monalisa Mishra, LS, NITRKL, Member</ListItem>
                  <ListItem>Dr. Bijesh K. Biswal, LS, NITRKL, Member</ListItem>
                  <ListItem>Dr. Gajanan B. Kendre, LS, NITRKL, Member</ListItem>

                  {/* Add more list items as needed */}
                </List>
              </Paper>
            </div>
            <div className="payment_details mx-auto">
              <div className="heading aboutinco">
                <h1 className="heading_title playfair text-center">Scientific Advisory Committee</h1>
              </div>
              {/* <p className="mt-8 mb-6 text-center">Payment should be made through an Online transfer / Demand Draft in favour of <span>“Conference, NIT Rourkela”</span> payable at <span>SBI, NIT Branch Rourkela - 769008</span> and send to the following address. You may choose to pay the amount through <span>NEFT/RTGS</span> with following details. Registration fee includes accomodation that will be provided in Institute Guest House and Students will be accomodated in Hostels</p>
              <div>
                <p className="py-1">Branch Details : <span>State Bank of India (SBI), NIT CAMPUS, ROURKELA</span></p>
                <p className="py-1">IFSC Code : <span>SBIN0002109</span></p>
                <p className="py-1">Account Name : <span>CONFERENCE, NIT ROURKELA</span></p>
                <p className="py-1">Account Number : <span>36734418111</span></p>
              </div> */}
              <Paper elevation={0} style={paperStyle}>
                <List style={listStyle}>
                  <ListItem>Dr. Moshe Szyf, McGill University, Montreal, Canada </ListItem>
                  <ListItem>Dr. Trygve Tollefsbol, University of Alabama at Birmingham</ListItem>
                  <ListItem>Dr. François Spitz, University of Chicago</ListItem>
                  <ListItem>Dr. Robert J. Keenan,Gordon Center for Integrative Science University of Chicago</ListItem>
                  <ListItem>Dr. Carole Ober, University of Chicago</ListItem>
                  <ListItem>Dr. Xiaolin Zi, Urological Research, University of California, Irvine</ListItem>
                  <ListItem>Dr. Thomas Efferth, Director, Institute Johannes Gutenberg University Mainz, Germany</ListItem>
                  <ListItem>Dr. Daniela Zisterer,Trinity Biomedical Sciences Institute Dublin, Ireland</ListItem>
                  <ListItem>Dr. George N. DeMartino,University of Texas, Southwestern Medical Center at Dallas, Texas </ListItem>
                  <ListItem>Dr. Victor Benno Meyer-Rochow, Agriculture and Technology Research Institute, Andong, Republic of Korea </ListItem>
                  <ListItem>Dr. Solomon Owumi, Cancer Research and Molecular Research Lab, University of Ibadan</ListItem>
                  <ListItem>Prof. Alok Ray, Indian Institute of Technology Delhi and AIIMS New Delhi</ListItem>
                  <ListItem>Prof. Pratima Ray. Jamia Hamdard University</ListItem>
                  <ListItem>Prof Amyluya K. Panda, Former director, National Institute of Immunology</ListItem>
                  <ListItem>Dr. Taru Sharma, Director, NIAB, Hyderabad </ListItem>
                  <ListItem>Prof. Dipankar Chatterji, IISc Banglore</ListItem>
                  <ListItem>Prof Ratan Kumar Dey, Central University of Jharkhand</ListItem>
                  <ListItem>Dr. Bhabani K Satapathy, IIT Delhi </ListItem>
                  <ListItem>Dr. Alok Prasad Das, Ramadevi Women&apos;s University </ListItem>

                  {/* Add more list items as needed */}
                </List>
              </Paper>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 mx-auto"></div>
        </div>
      </div>
    </>
  )
}

export default CommunityDetails