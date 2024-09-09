import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useSpring, useTransform, MotionValue, Variants, useInView } from "framer-motion";
import useMediaQuery from  '../hooks/WindowSize'
import useScrollPosition from '../hooks/ScrollPosition'
import Form from '../components/Form'
import JsForm from '../components/JsForm'

import styles from '../../styles/Home.module.scss'

export default function Home() {

  const { scrollYProgress } = useScroll();

  // Class join function
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  // Scroll position hook
  const scrollPosition = useScrollPosition()

  // Media query hook
  const isBreakpoint = useMediaQuery(768);

  // Framer motion animations
  const textAnimate = {
    offscreen:{y:-300, opacity:0},
    onscreen:{
      y:0,
      opacity:1,
      transition: {
        type:"spring",
        bounce:0.3,
        duration:0.5
      }
    }
  }

  const imageAnimateRight = {
    offscreen:{x:3000, opacity:0},
    onscreen:{
      x:0,
      opacity:1,
      transition: {
        type:"spring",
        bounce:0.3,
        duration:1
      }
    }
  }

  const imageAnimateLeft = {
    offscreen:{x:-3000, opacity:0},
    onscreen:{
      x:0,
      opacity:1,
      transition: {
        type:"spring",
        bounce:0.3,
        duration:1
      }
    }
  }

  return (
    <>
    <Head>
      <title>FYIRO</title>
      <meta name="description" content="Fiat to crypto app" />
      <link rel="icon" href="favicon.ico" />
    </Head>
    <motion.div className={styles.progress} style={{ scaleX: scrollYProgress }} />
    <motion.nav
    className={classNames(
      scrollPosition > 0 ? styles.nav__Scroll : '',
      `${styles.nav}`,
    )}
    >
        <div className={styles.nav__Brand}>
          <Link href="/">
            <a title="Fyiro">
              <Image src="/images/Logo_white.png" width="222" height="65" alt="Fyiro" />
            </a>
          </Link>
        </div>
        <Link href='#Form'>
          <a>
            <button className={styles.nav__Cta}>Register Interest</button>
          </a>
        </Link>
      </motion.nav>
      <video className={styles.video} muted autoPlay loop width="1920" height="1080">
        <source src="/hero.mp4" />
      </video>
      <main className={styles.main}>
        {/* Hero */}
        <div className={styles.hero} >
          <div className={styles.hero__Overlay}></div>
          <div className={styles.hero__Content}>
            <div className={styles.hero__Content__Text}>
              <motion.h1
              initial={{ opacity: 0, x: -3000 }}
              transition={{ delay: 0.2, duration: 1 }}
              animate={{
                opacity: 1,
                x: 0
              }}>fiat <small>to</small><br />CRYPTO</motion.h1>
              <motion.p
              initial={{ opacity: 0, x: -3000 }}
              transition={{ delay: 0.4, duration: 1 }}
              animate={{
                opacity: 1,
                x: 0
              }}>Get paid the easy way</motion.p>
              <Link href='#Form'>
                <a>
                <motion.button className={styles.nav__Cta}
                initial={{ opacity: 0, x: -3000 }}
                transition={{ delay: 0.6, duration: 1 }}
                animate={{
                  opacity: 1,
                  x: 0
                }}>Register Interest</motion.button>
                </a>
              </Link>
            </div>
            <div className={styles.hero__Content__Assets}>
              <div className={styles.hero__Content__Assets_Inner}>
                {isBreakpoint ? (
                  <div className={styles.hero__Content__Assets_Mobile}>
                    <Image src="/images/Hero_Assets.png" priority layout="responsive" width={1000} height={891} alt="Phone" />
                  </div>
                ) : (
                  <>
                  <motion.div className={styles.hero__Content__Assets_Revenue}
                    initial={{ opacity: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    animate={{
                      opacity: 1,
                      scale: [1, 2, 2, 1, 1],
                      rotate: [0, 0, 270, 270, 0],
                    }}
                  >
                    <Image src="/images/Revenue.png" priority layout="fixed" width={300} height={258} alt="Revenue" />
                  </motion.div>
                  <motion.div className={styles.hero__Content__Assets_Payment}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    initial={{ opacity: 0, x: 3000 }}
                    animate={{opacity: 1, x: 0 }}
                  >
                    <Image src="/images/Payment.png" priority layout="fixed" width={280} height={105} alt="Payment" />
                  </motion.div>
                  <motion.div className={styles.hero__Content__Assets_Sales}
                    initial={{ opacity: 0, x: 3000, y:1000 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      y: 0,
                      scale: [1, 2, 2, 1, 1],
                      rotate: [360, 0, 360, 0],
                    }}
                  >
                    <Image src="/images/Sales.png" priority layout="fixed" width={400} height={280} alt="Sales" />
                  </motion.div>
                  <motion.div className={styles.hero__Content__Assets_Phone}
                    transition={{ delay: 0.3, duration: 0.5, default: { ease: "linear" } }}
                    initial={{ opacity: 0, y: -1000 }}
                    animate={{opacity: 1, y: 0 }}>
                    <Image src="/images/Phone.png" priority layout="fixed" width={474} height={800} alt="Phone" />
                  </motion.div>
                </>
                )}
              </div>
            </div>
          </div>
          <div className={styles.hero__Bottom}></div>
          <div className={styles.hero__Bottom_Strip}></div>
        </div>

        {/* Intro */}
        <div className={styles.intro}>
          <motion.div className={styles.intro__Content} initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{once:true, amount:0}}
                transition={{staggerChildren:0.5}}>
            <motion.div className={styles.intro__Title} variants={textAnimate}>
              <h2>Introducting</h2>
              <div className={styles.intro__Title_Logo}>
                <Image src="/images/Logo.png" layout="responsive" width={222} height={65} alt="Fyiro" />
              </div>
            </motion.div>
            <motion.p variants={textAnimate}>Hassle free payment gateway that gets you paid in the cryptocurrency of your choice.</motion.p>
            <motion.div className={styles.intro__Content_Cta} variants={textAnimate}>
              <Link href='#Form'>
                  <a>
                    <button className={styles.cta}>Register Interest</button>
                  </a>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div className={styles.intro__Background}>
            <motion.div
            initial={{opacity: 0}}
            whileInView={"onscreen"}
            viewport={{once:true, amount:0}}
            transition={{ delay: 0.5, duration: 1 }}
            animate={{ opacity: 1 }}
            >
              {isBreakpoint ? (
                <Image
                  src="/images/Coins_Mobile.png"
                  alt="Crypto Coins"
                  layout="responsive"
                  width={1017}
                  height={649} />
              ) : (
                  <Image
                  src="/images/Coins.png"
                  alt="Crypto Coins"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center" />
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* No More */}
        <div className={styles.noMore}>
          <div className={styles.noMore__middle_content}>
            <div className={styles.noMore__middle_content_inner}>
              <div className={styles.noMore__middle_content_image}>
                <Image
                  src="/images/Scissors.png"
                  alt="Scissors"
                  layout="responsive"
                  width={260}
                  height={200} />
              </div>
              <hr />
            </div>
          </div>
          <div className={styles.noMore__Container}>
            <div className={styles.noMore__Inner}>
              <div className={styles.noMore__top}>
                <h3>no more<br /><span>CARDS</span></h3>
                <div className={styles.noMore__top_image}>
                  <Image
                    src="/images/cards.png"
                    alt="No more Cards"
                    layout="responsive"
                    width={550}
                    height={550} />
                </div>
              </div>
              <div className={styles.noMore__middle}></div>
              <div className={styles.noMore__bottom}>
                <h3>no more<br /><span>BANKS</span></h3>
                <div className={styles.noMore__bottom_image}>
                  <Image
                    src="/images/banks.png"
                    alt="No more Banks"
                    layout="responsive"
                    width={550}
                    height={550} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className={styles.howItWorks}>
          <div className={styles.howItWorks__container}>
            <div className={styles.howItWorks__title}>
              <h3>How it<br /><span>WORKS</span></h3>
            </div>
            <div className={styles.howItWorks__content}>
              {/* One */}
              <div className={styles.howItWorks__content_one}>
                <motion.div className={styles.howItWorks__content_one_left}
                  initial={"offscreen"}
                  whileInView={"onscreen"}
                  viewport={{once:true, amount:0}}
                  transition={{staggerChildren:0.3}}
                >
                  <motion.div className={styles.howItWorks__content_number} variants={textAnimate}>
                    <span>1</span>
                  </motion.div>
                  <motion.h4 variants={textAnimate}>Open an account and sign in to your dashboard</motion.h4>
                </motion.div>
                <motion.div className={styles.howItWorks__content_one_right}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{once:true, amount:0}}>
                  <motion.div className={styles.howItWorks__content_one_right_image} variants={imageAnimateRight}>
                    <Image
                      src="/images/login.png"
                      alt="Create account and login"
                      layout="responsive"
                      width={960}
                      height={606} />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Two */}
          <div className={styles.triangleBg}>
            <div className={styles.triangleBg__shape}></div>
            <div className={styles.howItWorks__container}>
              <div className={styles.howItWorks__content_two}>
                <div className={styles.howItWorks__content_two_left}>
                  <motion.div className={styles.howItWorks__content_two_left_images}
                  initial={"offscreen"}
                  whileInView={"onscreen"}
                  viewport={{once:true, amount:0}}
                  transition={{staggerChildren:0.5}}>
                    <motion.div className={styles.howItWorks__content_two_left_image} variants={imageAnimateLeft}>
                      <div>
                        <Image
                          src="/images/phone2.png"
                          alt="Connect Crypto Wallet"
                          layout="responsive"
                          width={459}
                          height={795} />
                      </div>
                    </motion.div>
                    <motion.div className={styles.howItWorks__content_two_left_image} variants={imageAnimateLeft}>
                      <div>
                        <Image
                          src="/images/phone3.png"
                          alt="Connect Crypto Wallet"
                          layout="responsive"
                          width={413}
                          height={710} />
                        </div>
                    </motion.div>
                  </motion.div>
                </div>
                <motion.div className={styles.howItWorks__content_two_right}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{once:true, amount:0}}
                transition={{staggerChildren:0.5}}>
                  <motion.div className={styles.howItWorks__content_number} variants={textAnimate}>
                    <span>2</span>
                  </motion.div>
                  <motion.h4 variants={textAnimate}>Connect your cryptocurreny wallet of choice</motion.h4>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Three */}
          <div className={styles.paymentBg}>
            <div className={`${styles.paymentBg__image} ${styles.stripe}`}>
              <Image
                src="/images/Stripe.png"
                alt="Stripe"
                layout="responsive"
                width={1200}
                height={572} />
            </div>
            <div className={`${styles.paymentBg__image} ${styles.paypal}`}>
              <Image
                src="/images/PayPal.png"
                alt="PayPal"
                layout="responsive"
                width={1176}
                height={784} />
            </div>
            <div className={styles.howItWorks__container}>
              <div className={styles.howItWorks__content_three}>
                <motion.div className={styles.howItWorks__content_three_left}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{once:true, amount:0}}
                transition={{staggerChildren:0.3}}>
                  <motion.div className={styles.howItWorks__content_number} variants={textAnimate}>
                    <span>3</span>
                  </motion.div>
                  <motion.h4 variants={textAnimate}>Connect your site and sell.</motion.h4>
                  <motion.p variants={textAnimate}>Your clients will use any conventional payment methods.</motion.p>
                </motion.div>
                <motion.div className={styles.howItWorks__content_three_right}
                  initial={"offscreen"}
                  whileInView={"onscreen"}
                  viewport={{once:true, amount:0}}>
                  <motion.div className={styles.howItWorks__content_three_right_image} variants={imageAnimateRight}>
                    <Image
                      src="/images/Shop.png"
                      alt="Shop"
                      layout="responsive"
                      width={836}
                      height={753} />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Four */}
          <div className={styles.triangleBg}>
            <div className={styles.triangleBg__shape}></div>
            <div className={styles.howItWorks__container}>
              <div className={styles.howItWorks__content_four}>
                <motion.div className={styles.howItWorks__content_four_left}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{once:true, amount:0}}>
                  <motion.div className={styles.howItWorks__content_four_left_image} variants={imageAnimateLeft}>
                    <Image
                      src="/images/relax.png"
                      alt="We'll do the work"
                      layout="responsive"
                      width={1056}
                      height={703} />
                  </motion.div>
                </motion.div>
                <motion.div className={styles.howItWorks__content_four_right}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{once:true, amount:0}}
                transition={{staggerChildren:0.5}}>
                  <motion.div className={styles.howItWorks__content_number}>
                    <span>4</span>
                  </motion.div>
                  <motion.h4 variants={textAnimate}>Sit back, relax and get paid.</motion.h4>
                  <motion.p variants={textAnimate}>We&apos;ll do the rest.</motion.p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* About */}
        <div className={styles.About}>
          <div className={styles.About__container}>
            <div className={styles.About__content}>
              <motion.div className={styles.About__left}
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{once:true, amount:0}}
              transition={{staggerChildren:0.5}}>
                <motion.div  variants={textAnimate}>
                  <Image src="/images/Logo.png" width="222" height="65" alt="Fyiro" />
                </motion.div>
                <motion.h5  variants={textAnimate}>Payment solution for your online business</motion.h5>
                <Link href='#Form'>
                  <a>
                  <motion.button className={styles.cta}  variants={textAnimate}>Register Interest</motion.button>
                  </a>
                </Link>
              </motion.div>
              <motion.div className={styles.About__image}
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{once:true, amount:0}}>
                <motion.div className={styles.About__image_inner} variants={imageAnimateRight}>
                  <Image
                    src="/images/Dashboard.png"
                    alt="About Fyiro"
                    layout="responsive"
                    width={1240}
                    height={704} />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className={styles.form} id="Form">
          <div className={styles.form__container}>
            <div className={styles.howItWorks__title}>
              <h3>Register<br /><span>Interest</span></h3>
            </div>
            <div className={styles.form__inner}>
              <JsForm />
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footer__container}>
          <div className={styles.footer__top}>
            <Image src="/images/Logo.png" width="222" height="65" alt="Fyiro" />
            <div className={styles.footer__top_right}>
              <Form />
            </div>
          </div>
          <div className={styles.footer__middle}>
            <p><strong>Disclaimer:</strong> The information on this website is for general informational purposes only. Fyiro makes no representation or warranty, express or implied. Your use of the site is solely at your own risk. This site may contain links to third-party content, which we do not warrant, endorse, or assume liability for.</p>
          </div>
          <div className={styles.footer__bottom}>
            <ul>
              <li>FYIRO  ⓒ {new Date().getFullYear()}</li>
              <li>
                <Link href='/privacy'>
                  <a title="Privacy Policy">
                    Privacy Policy
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/Fyiro-services-agreement.pdf'>
                  <a title="terms" target="_blank">
                    Services Agreement
                  </a>
                </Link>
              </li>
              {/* <li>
                <Link href='/cookies'>
                  <a title="cookies">
                    Cookies
                  </a>
                </Link>
              </li> */}
              <li>
                <Link href='https://www.solution17.co.uk/' >
                  <a target='_blank' title="Solution17">
                    Website by: <strong>Solution17</strong>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}
