import { Button, TextField } from "@material-ui/core"
import Link from "next/link"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useState } from "react";
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// const FileUpload = require("react-mui-fileuploader");
import logoBranding from '../../public/logoBranding.png'

const Payment = () => {
  const [valueDate, setValueDate] = useState(dayjs());

  const handleDateChange = (newValue) => {
    setValueDate(newValue);
  };

  const handleFileUploadError = (error) => {
    // Do something...
  }
  
  const handleFilesChange = (files) => {
    // Do something...
  }
    return (
      <div className="py-[2.5rem] dashboard_profile">
        <div className="grid gap-5 grid-cols-12">
        <div className="dashboard_navbar bg-white py-[25px] col-span-12 md:col-span-3">
            <Link href='/dashboard'>
              <div className="dashboard_navLink p-[25px] text-left">
                  Profile
              </div>
            </Link>
            <Link href='/dashboard/payment'>
              <div className="dashboard_navLink p-[25px] text-left">
                  Payment
              </div>
            </Link>
            <Link href='/dashboard/notification'>
              <div className="dashboard_navLink p-[25px] text-left">
                  Notification
              </div>
            </Link>
            <div className="dashboard_navLink p-[25px] text-left">
                Sign out
            </div>
          </div>
          {/* amount: null,
            transactionId: null,
            paymentDate: null,
            bankAccountHolderName: null,
            paymentRecieptUrl: null, */}
            <div className="dashboard_content bg-white p-[35px] col-span-12 md:col-span-9">
              <div className="dashboard_contentHeader">
              <TextField fullWidth id="outlined-basic" label="Amount" variant="outlined" />
              <TextField style={{marginTop: "25px"}} fullWidth id="outlined-basic" label="Transaction Id" variant="outlined" />
              <TextField style={{marginTop: "25px"}} fullWidth id="outlined-basic" label="Name of Bank" variant="outlined" />
              <TextField style={{marginTop: "25px"}} fullWidth id="outlined-basic" label="Account Holder Name" variant="outlined" />
              <div style={{marginTop: "15px"}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                      variant="outlined"
                      id="outlined-basic"
                      fullWidth
                      label="Payment Date"
                      inputFormat="MM/DD/YYYY"
                      value={valueDate}
                      onChange={handleDateChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
              </div>
              {/* <div style={{marginTop: "15px"}}>
                <FileUpload
                    multiFile={true}
                    disabled={false}
                    title="Upload your payment reciept"
                    header="Drag and drop your file here or click to upload"
                    leftLabel=" "
                    rightLabel=" "
                    buttonLabel="click here"
                    buttonRemoveLabel="Remove all"
                    maxFileSize={10}
                    maxUploadFiles={0}
                    maxFilesContainerHeight={357}
                    errorSizeMessage={'fill it or move it to use the default error message'}
                    allowedExtensions={['jpg', 'jpeg', 'png']}
                    onFilesChange={handleFilesChange}
                    onError={handleFileUploadError}
                    imageSrc={logoBranding.src}
                    bannerProps={{ elevation: 0, variant: "outlined" }}
                    containerProps={{ elevation: 0, variant: "outlined" }}
                  />
              </div> */}
              <Button style={{marginTop: "25px",paddingTop: "10px", paddingBottom: "10px"}} fullWidth variant="outlined">Submit</Button>
              </div>
            </div>
        </div>
      </div>
    )
  }
  
  export default Payment