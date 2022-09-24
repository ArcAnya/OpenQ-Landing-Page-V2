import { tw } from 'twind';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const [showCookieNotice, setShowCookieNotice] = useState(true);
  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("cookieNotice") === "accepted";
    if (cookiesAccepted) {
      setShowCookieNotice(false);
    }

  }, []);
  const handleCookieNotice = () => {
    setShowCookieNotice(false);
    localStorage.setItem("cookieNotice", "accepted");
  };
  return (
    <footer className={tw(`bg-white border-t border-gray-400 pt-14 pb-16`)}>
      {showCookieNotice && <div className={tw(`fixed z-50 bg-dark-mode text-primary p-2 flex flex-col content-center rounded-lg bottom-0 right-0 border-muted border text-sm m-8 w-60 md:w-72`)}>This website uses cookies to ensure you receive the best possible experience.{" "}
        <Link href={"/privacy"}>
          <a onClick={handleCookieNotice} className={tw(`whitespace-nowrap underline`)}>Learn More</a>
        </Link>
        <button onClick={handleCookieNotice} className={tw(`bg-gray-900 rounded-full border-muted border w-min whitespace-nowrap py-1.5 px-6 my-1.5 self-center`)}>Got it!</button>

      </div>}
      <div className={tw(`max-w-7xl mx-auto text-gray-400 px-8 xl:px-0 flex flex-wrap`)}>
        <div className={tw(`mb-14 flex items-center w-full`)}>
          <Image src='/logo.png' alt='OpenQ Logo' width='60%' height='60%' />
          <p className={tw(`text-4xl text-black font-bold pl-5`)}>OpenQ</p>
        </div>
        <div className={tw(`w-full lg:w-1/2`)}>
          <ul className={tw(`text-lg font-light flex flex-wrap w-full`)}>
            <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
              <div>
                <h4 className={tw(`text-gray-900 text-base font-bold mb-1`)}>Socials</h4>
                <ul>
                  <li className={tw(`text-gray-800 text-sm font-medium leading-6`)}>
                    <a target='_blank' rel='noopener noreferrer' href='https://twitter.com/openqlabs'>
                      Twitter
                    </a>
                  </li>
                  <li className={tw(`text-gray-800 text-sm font-medium leading-6`)}>
                    <a target='_blank' rel='noopener noreferrer' href='https://discord.gg/5HFZj6pUhf'>
                      Discord
                    </a>
                  </li>
                  <li className={tw(`text-gray-800 text-sm font-medium leading-6`)}>
                    <a target='_blank' rel='noopener noreferrer' href='https://medium.com/openqdev'>
                      Medium
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
              <div>
                <h4 className={tw(`text-gray-900 text-base font-bold mb-1`)}>Resources</h4>
                <ul>
                  <li className={tw(`text-gray-800 text-sm font-medium leading-6`)}>
                    <a target='_blank' rel='noopener noreferrer' href='https://github.com/OpenQDev/'>
                      Github
                    </a>
                  </li>
                  <li className={tw(`text-gray-800 text-sm font-medium leading-6`)}>
                    <a target='_blank' rel='noopener noreferrer' href='https://docs.openq.dev/welcome/master'>
                      Docs
                    </a>
                  </li>
                  <li className={tw(`text-gray-800 text-sm font-medium leading-6`)}>
                    <a target='_blank' rel='noopener noreferrer' href='https://app.openq.dev/'>
                      Launch App
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
              <div>
                <h4 className={tw(`text-gray-900 pt-5 lg:-pt-1 text-base font-bold mb-1`)}>About Us</h4>
                <ul>
                  <li className={tw(`text-gray-800 text-sm font-medium leading-6`)}>
                    <a href='/terms-of-service'>Terms of Service</a>
                  </li>
                  <li className={tw(`text-gray-800 text-sm font-medium leading-6`)}>
                    <a href='/privacy'>Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        {/*  <div className={tw(`w-full lg:w-1/2 mt-12 lg:mt-0`)}>
        <div className={tw(`border border-gray-400 rounded py-5 px-4`)}>
          <h4 className={tw(`font-mono text-sm uppercase text-gray-500 mb-3`)}>Subscribe our newsletter</h4>
          <div className={tw(`flex w-full`)}>
            <input
              aria-label="email address"
              type="text"
              className={tw(`border border-gray-300 bg-gray-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`)}
              placeholder="Enter your email"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div> */}
      </div>
    </footer>
  );
};

export default Footer;
