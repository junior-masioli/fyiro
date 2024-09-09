import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useSpring, useTransform, MotionValue, Variants, useInView } from "framer-motion";
import Form from '../components/Form'
import useScrollPosition from '../hooks/ScrollPosition'
import styles from '../../styles/Home.module.scss'

export default function Privacy() {
    const { scrollYProgress } = useScroll();

    // Class join function
    function classNames(...classes) {
      return classes.filter(Boolean).join(' ')
    }

    // Scroll position hook
    const scrollPosition = useScrollPosition()

    return (
        <>
        <Head>
          <title>Privacy Policy | FYIRO</title>
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
            <Link href='/#Form'>
              <a>
                <button className={styles.nav__Cta}>Register Interest</button>
              </a>
            </Link>
        </motion.nav>
        <main className={styles.main}>
        <section className={styles.page__HeroSection}>
            <div className={styles.page__HeroSection_Content}>
                <div className={styles.page__title}>
                    <h1>Privacy<br /><span>Policy</span></h1>
                </div>
            </div>
        </section>
            <div className={styles.page__Container}>
                <div className={styles.page__Content}>
                    <p>Solution17 values the trust our users and customers place in us when they give us access to their personal data. The Privacy Policy describes how we work to maintain that trust and protect that information.</p>
                    <p>In particular, this Privacy Policy details our collection, use and disclosure of personal and non-personal data you give when you access or use Solution17’s website.</p>
                    <p>When completing our contact form we may collect your name, telephone number, e-mail address and personal or business address. We may use this information to contact you and provide you with services and information. We will keep your information confidential and only use it within Solution17. The data you’ve submitted to us via our website’s contact form may also be stored on our server for processing purposes. It will not be shared with any other third parties.</p>
                    <h3>1. INTRODUCTION</h3>
                    <p>This privacy notice provides you with details of how we collect and process your personal data through your use of our site <strong>www.solution17.co.uk</strong></p>
                    <p>By providing us with your data, you warrant to us that you are over 13 years of age.</p>
                    <p><strong>Solution17 Ltd</strong> is the data controller and we are responsible for your personal data (referred to as “we”, “us” or “our” in this privacy notice).</p>
                    <p><strong>Contact Details</strong></p>
                    <p>Our full details are:</p>
                    <p>Full name of legal entity: <strong>Solution17 Ltd</strong></p>
                    <p>Email address: <strong>info@solution17.co.uk</strong></p>
                    <p>Postal address: <strong>St Augustine’s Art and Events Centre, Stanford Avenue BN1 6EA</strong></p>
                    <p>It is very important that the information we hold about you is accurate and up to date. Please let us know if at any time your personal information changes by emailing us at info@solution17.co.uk</p>
                    <h3> 2. WHAT DATA DO WE COLLECT ABOUT YOU, FOR WHAT PURPOSE AND ON WHAT GROUND WE PROCESS IT</h3>
                    <p>Personal data means any information capable of identifying an individual. It does not include anonymised data.</p>
                    <p>We may process the following categories of personal data about you:</p>
                    <ul>
                    <li>
                    <strong>Communication Data</strong> that includes any communication that you send to us whether that be through the contact form on our website, through email, text, social media messaging, social media posting or any other communication that you send us. We process this data for the purposes of communicating with you, for record keeping and for the establishment, pursuance or defence of legal claims. Our lawful ground for this processing is our legitimate interests which in this case are to reply to communications sent to us, to keep records and to establish, pursue or defend legal claims.</li>
                    <li><strong>Customer Data</strong> that includes data relating to any purchases of goods and/or services such as your name, title, billing address, delivery address email address, phone number, contact details, purchase details and your card details. We process this data to supply the goods and/or services you have purchased and to keep records of such transactions. Our lawful ground for this processing is the performance of a contract between you and us and/or taking steps at your request to enter into such a contract.</li>
                    <li><strong>Technical Data</strong> that includes data about your use of our website and online services such as your IP address, your login data, details about your browser, length of visit to pages on our website, page views and navigation paths, details about the number of times you use our website, time zone settings and other technology on the devices you use to access our website. The source of this data is from our analytics tracking system. We process this data to analyse your use of our website and other online services, to administer and protect our business and website, to deliver relevant website content and advertisements to you and to understand the effectiveness of our advertising. Our lawful ground for this processing is our legitimate interests which in this case are to enable us to properly administer our website and our business and to grow our business and to decide our marketing strategy.</li>
                    <li><strong>Marketing Data</strong> that includes data about your preferences in receiving marketing from us and our third parties and your communication preferences. We process this data to enable you to partake in our promotions such as competitions, prize draws and free give-aways, to deliver relevant website content and advertisements to you and measure or understand the effectiveness of this advertising. Our lawful ground for this processing is our legitimate interests which in this case are to study how customers use our products/services, to develop them, to grow our business and to decide our marketing strategy.</li>
                    <li>We may use Customer Data, Technical Data and Marketing Data to deliver relevant website content and advertisements to you (including Facebook adverts or other display advertisements) and to measure or understand the effectiveness of the advertising we serve you. Our lawful ground for this processing is legitimate interests which is to grow our business. We may also use such data to send other marketing communications to you. Our lawful ground for this processing is either consent or legitimate interests (namely to grow our business).</li>
                    </ul>
                    <p><strong>Sensitive Data</strong></p><p>We do not collect any Sensitive Data about you. Sensitive data refers to data that includes details about your race or ethnicity, religious or philosophical beliefs, sex life, sexual orientation, political opinions, trade union membership, information about your health and genetic and biometric data. We do not collect any information about criminal convictions and offences.</p>
                    <p>Where we are required to collect personal data by law, or under the terms of the contract between us and you do not provide us with that data when requested, we may not be able to perform the contract (for example, to deliver goods or services to you). If you don’t provide us with the requested data, we may have to cancel a product or service you have ordered but if we do, we will notify you at the time.</p>
                    <p>We will only use your personal data for a purpose it was collected for or a reasonably compatible purpose if necessary. For more information on this please email us at info@solution17.co.uk. In case we need to use your details for an unrelated new purpose we will let you know and explain the legal grounds for processing.</p>
                    <p>We may process your personal data without your knowledge or consent where this is required or permitted by law.</p><p>We do not carry out automated decision making or any type of automated profiling.</p>
                    <h3>3. HOW WE COLLECT YOUR PERSONAL DATA</h3>
                    <p>We may collect data about you by you providing the data directly to us (for example by filling in forms on our site or by sending us emails). We may automatically collect certain data from you as you use our website by using cookies and similar technologies. Please see our cookie policy for more details about this.</p>
                    <p>We may receive data from third parties such as analytics providers such as Google based outside the EU, advertising networks such as Facebook based outside the EU, such as search information providers such as Google based outside the EU, providers of technical, payment and delivery services, such as data brokers or aggregators.</p>
                    <h3>4. MARKETING COMMUNICATIONS</h3>
                    <p>Our lawful ground of processing your personal data to send you marketing communications is either your consent or our legitimate interests (namely to grow our business).</p>
                    <p>Under the Privacy and Electronic Communications Regulations, we may send you marketing communications from us if (i) you made a purchase or asked for information from us about our goods or services or (ii) you agreed to receive marketing communications and in each case you have not opted out of receiving such communications since. Under these regulations, if you are a limited company, we may send you marketing emails without your consent. However you can still opt out of receiving marketing emails from us at any time.</p>
                    <p>Before we share your personal data with any third party for their own marketing purposes we will get your express consent.</p>
                    <p>You can ask us or third parties to stop sending you marketing messages at any time by emailing us at info@solution17.co.uk.</p>
                    <p>If you opt out of receiving marketing communications this opt-out does not apply to personal data provided as a result of other transactions, such as purchases, warranty registrations etc.</p>
                    <h3>5. DISCLOSURES OF YOUR PERSONAL DATA</h3>
                    <p>We may have to share your personal data with the parties set out below:</p>
                    <ul>
                        <li>Service providers who provide IT and system administration services.</li>
                        <li>Professional advisers including lawyers, bankers, auditors and insurers</li>
                        <li>Government bodies that require us to report processing activities.</li>
                        <li>Third parties to whom we sell, transfer, or merge parts of our business or our assets.</li>
                    </ul>
                    <p>We require all third parties to whom we transfer your data to respect the security of your personal data and to treat it in accordance with the law. We only allow such third parties to process your personal data for specified purposes and in accordance with our instructions.</p>
                    <h3>6. INTERNATIONAL TRANSFERS</h3>
                    <p>Countries outside of the European Economic Area (EEA) do not always offer the same levels of protection to your personal data, so European law has prohibited transfers of personal data outside of the EEA unless the transfer meets certain criteria.</p>
                    <p>Whenever we transfer your personal data out of the EEA, we do our best to ensure a similar degree of security of data by ensuring at least one of the following safeguards is in place:</p>
                    <ul>
                        <li>We will only transfer your personal data to countries that the European Commission have approved as providing an adequate level of protection for personal data by; or</li>
                        <li>Where we use certain service providers, we may use specific contracts or codes of conduct or certification mechanisms approved by the European Commission which give personal data the same protection it has in Europe; or</li>
                        <li>If we use US-based providers that are part of EU-US Privacy Shield, we may transfer data to them, as they have equivalent safeguards in place.<br />
                If none of the above safeguards is available, we may request your explicit consent to the specific transfer. You will have the right to withdraw this consent at any time.</li>
                </ul>
                <h3>7. DATA SECURITY</h3>
                <p>We have put in place security measures to prevent your personal data from being accidentally lost, used, altered, disclosed, or accessed without authorisation. We also allow access to your personal data only to those employees and partners who have a business need to know such data. They will only process your personal data on our instructions and they must keep it confidential.</p>
                <p>We have procedures in place to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach if we are legally required to.</p>
                <h3>8. DATA RETENTION</h3>
                <p>We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.<br />
                When deciding what the correct time is to keep the data for we look at its amount, nature and sensitivity, potential risk of harm from unauthorised use or disclosure, the processing purposes, if these can be achieved by other means and legal requirements.</p><p>For tax purposes the law requires us to keep basic information about our customers (including Contact, Identity, Financial and Transaction Data) for six years after they stop being customers.</p><p>In some circumstances we may anonymise your personal data for research or statistical purposes in which case we may use this information indefinitely without further notice to you.</p>
                <h3>9. YOUR LEGAL RIGHTS</h3>
                <p>Under data protection laws you have rights in relation to your personal data that include the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.</p><p>You can see more about these rights at:</p><p>https://ico.org.uk/for-organisations/guide-to-the-general-data-protection-regulation-gdpr/individual-rights/</p><p>If you wish to exercise any of the rights set out above, please email us at info@solution17.co.uk.</p><p>You will not have to pay a fee to access your personal data (or to exercise any of the other rights). However, we may charge a reasonable fee if your request is clearly unfounded, repetitive or excessive or refuse to comply with your request in these circumstances.</p><p>We may need to request specific information from you to help us confirm your identity and ensure your right to access your personal data (or to exercise any of your other rights). This is a security measure to ensure that personal data is not disclosed to any person who has no right to receive it. We may also contact you to ask you for further information in relation to your request to speed up our response.</p><p>We try to respond to all legitimate requests within one month. Occasionally it may take us longer than a month if your request is particularly complex or you have made a number of requests. In this case, we will notify you.</p><p>If you are not happy with any aspect of how we collect and use your data, you have the right to complain to the Information Commissioner’s Office (ICO), the UK supervisory authority for data protection issues (www.ico.org.uk). We should be grateful if you would contact us first if you do have a complaint so that we can try to resolve it for you.</p>
                <h3>10. THIRD-PARTY LINKS</h3>
                <p>This website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy notice of every website you visit.</p><p><strong>Data Request Policy</strong></p><p>If you wish to remove or alter your individual data that we store, please contact info@solution17.co.uk and we’ll happily remove all details:</p><p><strong>Cookie Policy</strong></p><p>This Cookie policy helps to explain the occasions when and why cookies may be sent to visitors to our Site. “Cookies” are text-only pieces of information that a website transfers to an individual’s hard drive or other website-browsing equipment for record-keeping purposes. Cookies allow the site to remember important information that will make your use of the site more convenient. A cookie will typically contain the name of the domain from which the cookie has come, the “lifetime” of the cookie, and a randomly generated unique number or other value. Certain cookies will be used on the site regardless of whether you are logged in to your account or not.</p><p>Session Cookies are temporary cookies that remain in the cookie file of your browser until you leave the Site.</p><p>Persistent Cookies remain in the cookie file of your browser for much longer (though how long will depend on the lifetime of the specific cookie). When we use session cookies to track the total number of visitors to our Site, this is done on an anonymous aggregate basis (as cookies do not in themselves carry any personal data). We may also employ cookies so that we remember your computer when it is used to return to the site to help customize your web experience. We may associate personal information with a cookie file in those instances.</p><p>We will record the IP addresses of all visitors to our site to identify the location of users, to block disruptive use, and to establish the number of visits from different countries and locations. Our site uses Google Analytics cookies. You can always disable the cookies in your browser; the guides on how to do it are as follows: Google Chrome, Internet Explorer, Safari (Desktop)</p><p>If you have any questions, comments or concerns about Solution17’s privacy or Cookie policy, or to request a copy of your personal data, please contact info@solution17.co.uk</p><p></p>
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