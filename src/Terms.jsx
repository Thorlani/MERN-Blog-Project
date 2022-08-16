import React from 'react'
import Footer from './components/footer'
import Navbar from './components/navBar'

const Terms = () => {
  return (
    <>
        <div className='px-[8%]  w-full bg-[#60d3c9]'>
            <Navbar active={"home"} />
        </div>
        <div className='px-[8%]  w-full'>
            <h1 className='text-lg font-extrabold my-4'>Terms</h1>
            <h2 className='mb-2'><strong>Terms of Use</strong></h2>
            <p className='mb-4'>Greeting from Belovedthorlani.com.ng. Belovedthorlani is a web application that provides information on legal matters. Belovedthorlani updates our users about different aspect of law varing from Contract Law, Administrative Law, Constitutional Law, Legal System and many more. These Terms of Use apply to our desktop and mobile websites and services that we provide to our user.</p>
            <p className='mb-4'>We care about our users that visit Belovedthorlani. We provide quality content so that users have the best time while using our site. So it is important that when a user visits our site they are aware of the legal rights. The terms of use in our site govern your use of our sites and its services. Please read the Terms of Use Properly before using Belovedthorlani.</p>
            <p className='mb-4'>Use of this site, Browsing the site through different devices or adding your own content to the site, you are agreeing to be surrounded by our Terms of Service.</p>
            <h2 className='mb-2'>Right to Privacy</h2>
            <p className='mb-4'>Client’s Privacy is the major factor that we care about. Any confidential information that is provided to us while using the site remains private. As per the Terms and Condition, such confidential data will never be shared with the third party and it will never be visible publicly without client permission.</p>
            <p className='mb-4'>Client data will only be used for sending them information that they have requested to be notified about.</p>
            <h2 className='mb-2'><strong>Intellectual Property</strong></h2>
            <p className='mb-4'>The content on the site is the sole Property of Belovedthorlani. These contents are protected. The site maintains Copyright and other intellectual property rights laws. If you have found any content that is breaking the law, help us by identifying such content. You can contact us with the detailed information about the content.</p>
            <h2 className='mb-2'><strong>Link to another website</strong></h2>
            <p className='mb4'>Belovedthorlani does contain links to other websites and various resource available throughout the Internet. Belovedthotlani has no control over the sites and takes no responsibility for the content of third party sites and their respective services.</p>
            <p className='mb4'>Belovedthorlani advises our clients and users to go throughout the Terms and Conditions and Privacy Policy of third party websites as you visit them through the link we posted.</p>
            <h2 className='mb-2 mt-[1.6em]'><strong>Changes to the Agreement</strong></h2>
            <p className='mb4'>Belovedthorlani.com.ng has the authority to make any changes in the Terms and Conditions. We update these terms when we make the necessary change in our site. Your visit to the site after the changes shows your formal acceptance.</p>
            <p className='mb-[150px]'>So we suggest our clients review the updated Agreement. If you do not agree to any of the changes we made in our Agreement, we request our client’s to not use or access the site.</p>
        </div>
        <Footer />
    </>
  )
}

export default Terms