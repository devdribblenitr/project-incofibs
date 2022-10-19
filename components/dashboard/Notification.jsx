import Link from "next/link"

const Notification = () => {
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
              <div className="dashboard_content_no_notification">
                You do not have any message from Team InCoFIBS currently
              </div>
            </div>
        </div>
      </div>
    )
  }
  
  export default Notification