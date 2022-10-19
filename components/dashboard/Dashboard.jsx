import Link from "next/link"

const Dashboard = () => {
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
          <div className="dashboard_content bg-white p-[25px] col-span-12 md:col-span-9">
            <div className="dashboard_content_firstrow grid gap-10 grid-cols-12">
              <div className="dashboard_image col-span-6 md:col-span-2">
                <img style={{width: "100%"}} src="https://lh3.googleusercontent.com/a/ALm5wu3S-LdqafqELArhHB0sjw2_5FsJUTVhRLpyfcY-lg=s96-c" className="dashboard_image_imgs" alt="user_image"/>
              </div>
              <div className="dashboard_image col-span-6 md:col-span-10">
                 <div className="mt-1 inside_dashboard grid gap-2 grid-cols-12">
                    <div className="inside_dashboard_span col-span-12 md:col-span-6">
                      <span className="">Name:</span>Mohammad Sahil
                    </div>
                    <div className="inside_dashboard_span col-span-12 md:col-span-6">
                    <span className="">Email:</span>sahilmejakhas@gmail.com
                    </div>
                    <div className="inside_dashboard_span col-span-12 md:col-span-6">
                    <span className="">ContactNo:</span>+91 7607861998
                    </div>
                    <div className="inside_dashboard_span col-span-12 md:col-span-6">
                    <span className="">Organization:</span>NIT Rourkela
                    </div>
                    <div className="inside_dashboard_span col-span-12 md:col-span-6">
                    <span className="">Gender:</span>Male
                    </div>
                    <div className="inside_dashboard_span col-span-12 md:col-span-6">
                    <span className="">Country:</span>India
                    </div>
                 </div>
              </div>
            </div>
            <div className="grid gap-2 grid-cols-12">
                <div className="mt-5 inside_dashboard_span col-span-6 md:col-span-4">
                      <span className="">Designation:</span>Student
                </div>
                <div className="mt-5 inside_dashboard_span col-span-12 md:col-span-8">
                      <span className="">Address:</span>Prayagraj, Uttar Pradesh, India, 211004
                </div>
                <div className="mt-5 inside_dashboard_span col-span-12 md:col-span-12">
                      <span className="">Are you submitting any paper for presentation:</span>Yes
                </div>
                <div className="mt-5 inside_dashboard_span col-span-12 md:col-span-12">
                      <span className="">Title of the Paper:</span>Severity of Allergic Contact Dermatitis: Significant or Insignificant
                </div>
                <div className="mt-5 inside_dashboard_span col-span-12 md:col-span-12">
                      <span className="">Details of Accompanying Person, if any:</span>Mohammad Sahil, 7607861998
                </div>
                <div className="mt-5 inside_dashboard_span col-span-12 md:col-span-12">
                      <span className="">Accommodation Required:</span>Yes
                </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Dashboard