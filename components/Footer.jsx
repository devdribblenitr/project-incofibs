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
          <li className='w-36 text-center py-4 footer-link-color ease-in-out duration-200'>EVENTS</li>
          <li className='w-36 text-center py-4 footer-link-color ease-in-out duration-200'>GALLERY</li>
          <li className='w-36 text-center py-4 footer-link-color ease-in-out duration-200'>ABOUT US</li>
          <li className='w-36 text-center py-4 footer-link-color ease-in-out duration-200'>Contact US</li>
        </ul>
        <ul className="flex justify-center flex-wrap pb-8  max-w-4xl mx-auto" style={{borderBottom: "2px solid #01212a"}}>
          <li className='w-36 text-center py-4 footer-link-color ease-in-out duration-200'>EVENTS</li>
          <li className='w-36 text-center py-4 footer-link-color ease-in-out duration-200'>GALLERY</li>
          <li className='w-36 text-center py-4 footer-link-color ease-in-out duration-200'>ABOUT US</li>
          <li className='w-36 text-center py-4 footer-link-color ease-in-out duration-200'>Contact US</li>
          <li className='w-36 text-center py-4 footer-link-color ease-in-out duration-200'>ABOUT US</li>
          <li className='w-36 text-center py-4 footer-link-color ease-in-out duration-200'>Contact US</li>
        </ul>
        <div className="row">
          <div className=" space-x-40">
            <div className="grid xl:flex grid-cols-1 xl:grid-cols-2 gap-4  place-items-center content-evenly xl:w-fit xl:mx-auto 
              pt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="card">
                <h2 className="pt-6 pl-14">ABOUT US</h2>
                <p className="pt-10 pl-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iusto laborum soluta. Numquam non dignissimos quasi dolor autem, delectus voluptate ea optio quae architecto aspernatur voluptatibus adipisci tempora consectetur voluptatum!</p>
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
                <h2 className="pt-6 pl-14">ABOUT US</h2>
                <p className="pt-10 pl-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iusto laborum soluta. Numquam non dignissimos quasi dolor autem, delectus voluptate ea optio quae architecto aspernatur voluptatibus adipisci tempora consectetur voluptatum!</p>
                <div >
                  <div >
                    <div className="grid grid-cols-5 gap-2 pl-14 pt-24 pr-14">
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
                    <img src="Rectangle1.png"/>
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
              <h3><p>@2023 Made with &#129505; by ABC Tech Team</p></h3>
            </div>
          </div>
        </div>
      </div>
    </footer >
  )
}

export default Footer