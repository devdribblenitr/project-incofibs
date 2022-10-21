import Link from 'next/link'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import CallRoundedIcon from '@mui/icons-material/CallRounded';

function Footer() {
  return (
    <footer>
      <div className="w-full">
        <ul className="flex justify-center flex-wrap pt-8  max-w-3xl mx-auto">
        <li className='w-36 text-center py-4 footer-link-color ease-in-out duration-200'><Link href={"/#register"}>REGISTER</Link></li>
          <li className='w-36 text-center py-4 footer-link-color ease-in-out duration-200'><Link href={"/#tracks"}>TRACKS</Link></li>
          <li className='w-36 text-center py-4 footer-link-color ease-in-out duration-200'><Link href={"/#conference_venue"}>VENUE</Link></li>
        <li className='w-36 text-center py-4 footer-link-color ease-in-out duration-200'><Link href={"/flyer.pdf"}>PROGRAMS</Link></li>
        </ul>
        <ul className="flex justify-center flex-wrap pb-8  max-w-4xl mx-auto" style={{borderBottom: "2px solid #01212a"}}>
        <li className='w-36 text-center py-4 footer-link-color ease-in-out duration-200'><Link href={"/events"}>EVENTS</Link></li>
          <li className='w-36 text-center py-4 footer-link-color ease-in-out duration-200'><Link href={"/gallery"}>GALLERY</Link></li>
          <li className='w-36 text-center py-4 footer-link-color ease-in-out duration-200'><Link href={"/about"}>ABOUT US</Link></li>
          <li className='w-36 text-center py-4 footer-link-color ease-in-out duration-200'><Link href={"/contact"}>CONTACT US</Link></li>
          <li className='w-36 text-center py-4 footer-link-color ease-in-out duration-200'><Link href={"/community"}>COMMUNITY</Link></li>
          <li className='w-36 text-center py-4 footer-link-color ease-in-out duration-200'><Link href={"https://nitrkl.ac.in/"}>NIT ROURKELA</Link></li>
        </ul>
        <div className="row">
          <div className=" space-x-40">
            <div className="grid xl:flex grid-cols-1 xl:grid-cols-2 gap-4  place-items-center content-evenly xl:w-fit xl:mx-auto 
              pt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="card">
                <h2 className="pt-6 pl-14">ABOUT InCoFIBS</h2>
                <p className="pt-10 pl-14">InCoFIBS-2023 will be held from 2nd to 4th February 2023, providing a platform for global experts and researchers to exchange ideas and recent advances in the various fields of Biological Sciences</p>
                <div >
                  <div >
                    <div className="grid grid-cols-5 gap-2 pl-14 pt-24 pr-14" >
                      <div className="social-links">
                        <Link href=""><TwitterIcon></TwitterIcon></Link>
                      </div>
                      <div className="social-links">
                        <Link href=""><LinkedInIcon></LinkedInIcon></Link>
                      </div>
                      <div className="social-links">
                        <Link href=""><FacebookIcon></FacebookIcon></Link>
                      </div>
                      <div className="social-links">
                        <Link href=""><InstagramIcon></InstagramIcon></Link>
                      </div>
                      <div className="social-links">
                        <Link href=""><CallRoundedIcon></CallRoundedIcon></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <h2 className="pt-6 pl-14">ABOUT NIT Rourkela</h2>
                <p className="pt-10 pl-14">NIT Rourkela is one of the country's premier national-level institutions for technical education, funded by the Government of India.Known for its technical education, its research is not far behind.</p>
                <div >
                  <div >
                    <div className="grid grid-cols-5 gap-2 pl-14 pt-24 pr-14">
                      <div className="social-links">
                        <Link href="https://twitter.com/nitrourkela"><TwitterIcon></TwitterIcon></Link>
                      </div>
                      <div className="social-links">
                        <Link href="https://www.linkedin.com/school/national-institute-of-technology-rourkela/"><LinkedInIcon></LinkedInIcon></Link>
                      </div>
                      <div className="social-links">
                        <Link href="https://www.facebook.com/nitrkl1"><FacebookIcon></FacebookIcon></Link>
                      </div>
                      <div className="social-links">
                        <Link href="https://www.instagram.com/nitraa_official"><InstagramIcon></InstagramIcon></Link>
                      </div>
                      <div className="social-links">
                        <Link href="tel:06612462020"><CallRoundedIcon></CallRoundedIcon></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <div className="card">
                <h1 className="pt-6">InCoFIBS 2k23 </h1>
                <h1 className="pt-7 pb-4">LIFE SCIENCE Dept</h1>
                <br />
                <div className="pl-12 pt-2"><hr align="center" width="85%" /></div>
                <div className="row">
                  <div className="grid grid-cols-3 gap-4 place-items-center content-evenly 
            pt-6 pr-6 pl-6">
                    <div className='border-r w-full border-white'>
                    <img src="footer_incofibs.png"/>
                    </div>
                    <div className='border-r border-white w-full'>
                    <img src="Rectangle1.png"/>
                    </div>
                    <div>
                    <img src="Rectangle2.png"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex space-y-40 w-full">
            <div className="base-box pt-5 place-items-center w-full">
              <h3><p>@2023 Made with &#129505; by Team InCoFIBS</p></h3>
            </div>
          </div>
        </div>
      </div>
    </footer >
  )
}

export default Footer