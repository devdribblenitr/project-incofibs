import Head from 'next/head'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css' 

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>InCoFIBS | NIT Rourkela</title>
        <meta name="description" content="InCoFIBS 2k23 International Conference" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h1 className='display-1'>Home Page</h1>
      </main>
    <footer>
        <div className="container">
          <div className="row">
          <div className="col-12 mx-auto">
          <div className="row">
          <div className="col-6 mx-auto">
            <div class="card"> 
                <h2>ABOUT US</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iusto laborum soluta. Numquam non dignissimos quasi dolor autem, delectus voluptate ea optio quae architecto aspernatur voluptatibus adipisci tempora consectetur voluptatum!</p>  
                <div className="row">
                  <div className="col-10 mx-auto">
                    <div className="row">
                      <div className="col-2 mx-auto">
                        <i class="fab fa-twitter social-links"></i>
                      </div>
                      <div className="col-2 mx-auto">
                        <i class="fab fa-linkedin-in social-links"></i>
                      </div>
                      <div className="col-2 mx-auto">
                        <i class="fab fa-facebook-f social-links"></i>
                      </div>
                      <div className="col-2 mx-auto">
                        <i class="fab fa-instagram social-links"></i>
                      </div>
                      <div className="col-2 mx-auto">
                        <i class="fab fa-whatsapp social-links"></i>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div className="col-6">
            <div class="card"> 
                <h2>ABOUT US</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iusto laborum soluta. Numquam non dignissimos quasi dolor autem, delectus voluptate ea optio quae architecto aspernatur voluptatibus adipisci tempora consectetur voluptatum!</p>  
                <div className="row">
                  <div className="col-10 mx-auto">
                    <div className="row">
                      <div className="col-2 mx-auto">
                        <i class="fab fa-twitter social-links"></i>
                      </div>
                      <div className="col-2 mx-auto">
                        <i class="fab fa-linkedin-in social-links"></i>
                      </div>
                      <div className="col-2 mx-auto">
                        <i class="fab fa-facebook-f social-links"></i>
                      </div>
                      <div className="col-2 mx-auto">
                        <i class="fab fa-instagram social-links"></i>
                      </div>
                      <div className="col-2 mx-auto">
                        <i class="fab fa-whatsapp social-links"></i>
                      </div>
                    </div>
                  </div>
                </div> 
            </div>
          </div>
        </div>
        </div>
        </div>
        </div>
    </footer>
    </div>
  )
}
