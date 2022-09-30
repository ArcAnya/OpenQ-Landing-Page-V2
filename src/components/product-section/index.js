// @ts-nocheck

import { useEffect, useState, useRef } from 'react';
import { tw } from 'twind';
import BountySectionOrgs from './BountySectionOrgs';
import BountySectionDevs from './BountySectionDevs';
import Add from '../svg/add';
import Link from 'next/link';
import CardGroup from '../card-group';
import MockContest from './MockContest';
import MockPr from './MockPr';
import OnScroll from '../utils/OnScroll';
/*
const listItems = [
  {
    title: `Permissionless Bounties`,
    description: `Pull requests are a much better mental model for decentralized communities. Our permissionless bounty system integrates directly with GitHub. Once a PR is closed, the developer automatically is eligable to withdraw the escrow.`,
  },
  {
    title: `Token Streams`,
    description: `Bounties are good for making initial connections and getting involved in projects. After that, you want to create stability. Streams enable decentralized payroll systems that are directly integrated into our accounting layer. .`,
  },
  {
    title: `Collaboration Pools`,
    description: `Building trust within a working group when it comes to fair distribution is difficult. Our decentralized escrow system creates trust and makes it possible to settle disputes via kleros courts.`,
  },
];
*/
const ProductSection = ({ internalMenu, prs, contest }) => {
  const [currentPrs, setCurrentPrs] = useState(prs);
  let observer = useRef();
  const lastElem = useRef();
  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }
    if (lastElem.current) {
      let options = {
        rootMargin: '200px',
        threshold: 0,
      };
      const callback = (entries) => {
        if (entries[0].isIntersecting) {
          setCurrentPrs([...currentPrs, ...prs]);
        }
      };
      observer.current = new IntersectionObserver(callback, options);
      observer.current.observe(lastElem.current);
    }
  }, [currentPrs]);
  const cardSectionData = [
    { title: 'Release Payment automatically after merging PR', SVG: Add, body: 'Lorme ipsum' },
    { title: 'Release Payment automatically after merging PR', SVG: Add, body: 'Lorme ipsum' },
    { title: 'Release Payment automatically after merging PR', SVG: Add, body: 'Lorme ipsum' },
  ];

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener(`scroll`, handleScroll);
    return () => {
      window.removeEventListener(`scroll`, handleScroll);
    };
  }, []);

  return (
    <div>
      <section className={tw(`font-montserrat pt-28`)}>
        <div className={tw(`bg-white`)}>
          {internalMenu === 'org' ? (
            <BountySectionOrgs scrollY={scrollY} internalMenu={internalMenu} contest={contest} />
          ) : (
            <BountySectionDevs scrollY={scrollY} internalMenu={internalMenu} contest={contest} />
          )}
          <OnScroll internalMenu={internalMenu} fade='animate-fadeIn' className='w-full'>
            {!contest && (
              <div className={tw(`flex-col flex items-center content-center`)}>
                <h2 className={tw(`py-8 lg:py-16 px-8 font-bold text-center text-xl lg:w-3/4 xl:w-2/5 text-gray-500 `)}>
                  <div className={tw(`flex flex-col items-center justify-center`)}>
                    {/* <div
                      className={tw(
                        `text-gray-100 text-sm border border-purple-800 bg-purple-400 rounded-md font-semibold p-2 w-max`
                      )}
                    >
                      New feature
                    </div> */}
                    <span className={tw(`pt-3 text-gray-900 text-3xl`)}>
                      {internalMenu === 'org'
                        ? 'Hackathons: Start your OpenQ Contests Series'
                        : 'Hackathons: Participate in OpenQ Contests'}
                    </span>
                    <p className={tw(`pt-2 text-gray-900 text-lg font-normal`)}>
                      {internalMenu === 'org'
                        ? ' Let others test your protocol, library or SDK via recurring contests that encourage developers to engage with your project'
                        : ' Test new protocols, libraries or SDKs via recurring contests, earn money with you submissions & bootstrap your project'}
                    </p>

                    <div className={tw(`pt-3`)}>
                      <Link href='/contests'>
                        <a>
                          <button
                            className={tw(
                              `text-gray-100 text-sm border border-purple-800 bg-purple-400 rounded-md font-semibold p-2 w-max`
                            )}
                          >
                            Learn more
                          </button>
                        </a>
                      </Link>
                    </div>
                  </div>
                </h2>
                <div className={tw(`w-5/6 md:w-2/3  rounded-2xl overflow-hidden `)}>
                  <MockContest
                    repo={'honey-labs/honey-frontend'}
                    title={'staking public goods as a service'}
                    budget={'$7000'}
                    avatarUrl={'https://avatars.githubusercontent.com/u/92924948?s=60&v=4'}
                    days={10}
                  />
                  <MockContest
                    repo={'openqdev/openq-frontend'}
                    title={'🌳 openq [dys/u]topia hackathon'}
                    budget={'$10,000'}
                    url={'https://github.com/openqdev/openq-frontend'}
                    avatarUrl={'https://avatars.githubusercontent.com/u/77402538?s=200&v=4'}
                    days={4}
                  />
                  <MockContest
                    repo={'snapshot-labs/snapshot'}
                    title={'open source interface hacking'}
                    budget={'$8000'}
                    url={'https://github.com/snapshot-labs/snapshot'}
                    avatarUrl={'https://avatars.githubusercontent.com/u/72904068?s=200&v=4'}
                    days={17}
                    noBorder={true}
                  />
                </div>
              </div>
            )}
          </OnScroll>

          <OnScroll internalMenu={internalMenu} fade='animate-fadeIn' className='w-full'>
            <div className={tw(`flex-col flex items-center content-center`)}>
              <h2 className={tw(`py-8 lg:py-16 pl-2 font-bold text-center text-xl lg:w-3/4 xl:w-2/5 text-gray-500`)}>
                <span className={tw(`text-gray-900 text-3xl`)}>Our Story: Explore PRs our community completed.</span>
                <p className={tw(`pt-2 text-gray-900 text-lg font-normal`)}>
                  Also visit our Discord to give us feedback and follow our journey.
                </p>
              </h2>

              <div className={tw(`w-5/6 border border-gray-700 rounded-2xl bg-transparent overflow-hidden`)}>
                <ul className={tw`max-h-128 overflow-y-scroll relative`}>
                  {currentPrs.map((pr, index) => {
                    return (
                      <li key={index} ref={index === currentPrs.length - 1 ? lastElem : null}>
                        <MockPr title={pr.title} description={pr.description} url={pr.url} />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </OnScroll>

          <div className={tw(`flex-col flex items-center content-center px-4 `)}>
            {/* <OnScroll internalMenu={internalMenu} fade='animate-fadeIn' className='w-full'>
              <h2 className={tw(`py-8 lg:py-16 pl-2 font-bold text-center w-full text-xl text-black`)}>
                "Under the hood"
              </h2>
            </OnScroll>

            <CardGroup internalMenu={internalMenu} data={cardSectionData} /> */}
          </div>
          {/* <ProductFooter scrollY={scrollY} /> */}
        </div>
      </section>
    </div>
  );
};

export default ProductSection;
