import Link from "next/link"

const Notification = () => {
    return (
      <div className="pt-5 dashboard_profile">
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
            <div className="dashboard_content bg-white ps-[25px] col-span-12 md:col-span-9">
              <div className="dashboard_contentHeader">
                Notification
              </div>
            </div>
        </div>
      </div>
    )
  }
  
  export default Notification