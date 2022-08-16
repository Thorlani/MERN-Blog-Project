import React from 'react'
import Footer from './components/footer'
import Navbar from './components/navBar'

const Policies = () => {
  return (
    <>
        <div className='px-[8%]  w-full bg-[#60d3c9]'>
            <Navbar active={"home"} />
        </div>
        <div className='px-[8%]  w-full '>
            <h1 className='text-lg font-extrabold mt-4'>Privacy</h1>
            <p className='mb-8 text-xs'>Updated on August 16th, 2022</p>
            <h2 className='mb-2'><strong>How we collect Information</strong></h2>
            <p className='mb-4'>Belovedthorlani collects information about client web browser and IP address to improve the user experience. When a client visits our site, its page content or any resource within our site, a cookie are downloaded to the device. A cookie is a file that stores client’s information. The information is only collected for the purpose of traffic analysis on our site. The cookie file does not contain any Personal Information about the user.</p>
            <p className='mb-4'>Belovedthorlani contains different social networking sites, traffic monitoring tools, advertisement and other tools for data analysis.</p>
            <h2 className='mb-2'><strong>Traffic Monitoring </strong></h2>
            <p className='mb-4'>Traffic Monitoring helps us identifying the exact number of traffic on our site. Monitoring traffic, we use Google Analytics tool. Google Analytics helps us to collect visitors data and analyze traffic on our site. All these activities are conducted in order to improve the user experience. Google doesn’t sell such information to any third parties for data mining or marketing purpose. You can check Google privacy policy visiting this link <a className='text-[#60d3c9]' href="https://policies.google.com/privacy" target='_blank'>https://www.google.com/policies/privacy/</a></p>
            <h2 className='mb-2'><strong>Advertisement</strong></h2>
            <p className='mb-4'>Belovedthorlani uses third-party ads for the purpose of advertisement. These third-party ads help to promote others products and services with the help of our site. These third-party ads collect visitor information to display appropriate ads. You may check their respective privacy policies through these links.</p>
            <p className='mb-4'><a className='text-[#60d3c9]' href="https://www.google.com/policies/privacy/">https://www.google.com/policies/privacy/</a></p>
            <h2 className='mb-2'><strong>Social Networks</strong></h2>
            <p className='mb-4'>Belovedthorlani uses various social media such as Facebook, Twitter, Instagram. These social media collects visitors information to support various social media features. You can check their respective privacy policies through these links below.</p>
            <p className='mb-4'><a className='text-[#60d3c9]' href="https://www.facebook.com/policy.php">https://www.facebook.com/policy.php</a></p>
            <p className='mb-4'><a className='text-[#60d3c9]' href="https://help.instagram.com/155833707900388">https://help.instagram.com/155833707900388</a></p>
            <p className='mb-4'><a className='text-[#60d3c9]' href="https://twitter.com/en/privacy">https://twitter.com/en/privacy</a></p>
            <h2 className='mb-2'><strong>General Data Protection Regulation</strong></h2>
            <p className='mb-4'>We comply with GDPR. We usually do not collect personal data from users. However, the names and emails from Contact Page will be used only to respond to you. We protect your privacy, ensure responsibility, and ensure consent. Our website does not use cookies, and it’s a good thing!</p>
            <p className='mb-4'>Complying with this regulation, users and viewers have right to:</p>
            <ol className='mb-4'>
                <li>You can correct your data if it is outdated.</li>
                <li>You have right to erase data or ask us to erase data of you.</li>
                <li>You have right to take all data out of the information.</li>
                <li>You are allowed to view how your data are stored here.</li>
            </ol>
            <p className='mb-[150px]'><strong>Note</strong>: If you own the rights to any of the images/contents and not to wish them to publish please contact us and they will be promptly removed!</p>
        </div>
        <Footer />
    </>
  )
}

export default Policies