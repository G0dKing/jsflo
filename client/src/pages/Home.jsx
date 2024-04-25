import { } from 'react'
import Logo from '@comp/Logo'
import NeonSign from '@comp/NeonSign'
import CutoutText from '@comp/CutoutText'
import '@style/App.css'
import '@style/Home.css'


const Home = () => {
    return (
      <>
        <section className="header"></section>
        <section className="main">
          <div className="hero">
            <Logo />
            <div className="hero-text">
              <NeonSign />
            </div>
            <CutoutText />
          </div>
        </section>
      </>
    );
}

export default Home