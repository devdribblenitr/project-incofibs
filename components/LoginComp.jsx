import Link from "next/link";

const LoginComp = () => {
  return (
    <div className="py-[2.5rem] login_comp">
      <div className="grid gap-5 grid-cols-12 md:grid-cols-12">
        <div className="log_comp_first py-[25px] col-span-12 md:col-span-6">
          <Link href='/registration'>
            <div className="log_comp">
              <img src='https://www.nicepng.com/png/detail/280-2801903_click-the-register-now-button-on-the-account.png' alt='icon_login' />
              <div className='login_second_comp'>
                <h3>Registration</h3>
                {/* <p>Till December 31st, 2022</p> */}
                <p>Deadline soon to be announced</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="log_comp_second py-[25px] col-span-12 md:col-span-6">
          <Link href='/abstract'>
            <div className="log_comp">
              <img src='https://icons.veryicon.com/png/o/education-technology/big-data/submit-order.png' alt='icon_login' />
              <div className='login_second_comp'>
                <h3>Submit Your Abstract</h3>
                {/* <p>Till December 31st, 2022</p> */}
                <p>Deadline soon to be announced</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginComp