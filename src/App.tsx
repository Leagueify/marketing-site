import React from 'react';
import logo from './images/temp-logo.png';
import hockey from './images/hockey.jpg';

const features = [
  {
    name: 'Payment Processing',
    description:
      'Manage registration and team fees right from the dashboard. Give your players and their families convenience when getting setup',
  },
  {
    name: 'Roster Management',
    description:
      'Help your coaches manage their rosters with ease. Age bracketed divisions that make it simple to structure leagues from day one. ',
  },
  {
    name: 'Email notifications',
    description:
      'No more missed games or practices, quick and reliable email notifications make sure everyone is on the same page.',
  },
  // {
  //   name: 'Player Stats',
  //   description:
  //     'Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit veritatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum.',
  // },
];

function App() {
  return (
    <div className='App'>
      <div className='relative bg-white dark:bg-zinc-900'>
        <div className='mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8'>
          <div className='px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6'>
            <div className='mx-auto max-w-2xl lg:mx-0'>
              <img
                className='h-11'
                src={logo}
                alt='Your Company'
              />
              <div className='hidden sm:mt-32 sm:flex lg:mt-16'>
                <div className='relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 dark:text-neutral-100 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
                  Beta expected Summer 2024{' '}
                  {/* <a
                    href='/hockey.jpg'
                    className='whitespace-nowrap font-semibold text-indigo-600'
                  >
                    <span className='absolute inset-0' aria-hidden='true' />
                    Read more <span aria-hidden='true'>&rarr;</span>
                  </a> */}
                </div>
              </div>
              <h1 className='mt-24 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:mt-10 sm:text-6xl'>
                Run your league like a pro.
              </h1>
              <p className='mt-6 text-lg leading-8 text-gray-600 dark:text-neutral-100'>
                Leagueify is an upcoming league management software that allows
                you to develop competitive and fun leagues for teams of all
                ages.
              </p>
              <div className='mt-10 flex items-center gap-x-6'>
                <a
                  href='mailto:michael@leagueify.org'
                  className='rounded-md bg-orange-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600'
                >
                  Reach out
                </a>
                {/* <a
                  href='#'
                  className='text-sm font-semibold leading-6 text-gray-900'
                >
                  Learn more <span aria-hidden='true'>→</span>
                </a> */}
              </div>
            </div>
          </div>
          <div className='relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0'>
            <img
              className='aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full'
              src={hockey}
              alt=''
            />
          </div>
        </div>
      </div>
      <div className='bg-white dark:bg-zinc-900 py-12 sm:py-12'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:mx-0'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl'>
              Beta Planned Features
            </h2>
            {/* <p className='mt-6 text-lg leading-8 text-gray-600'>
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p> */}
          </div>
          <dl className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
            {features.map((feature) => (
              <div key={feature.name}>
                <dt className='font-semibold text-gray-900 dark:text-zinc-100'>{feature.name}</dt>
                <dd className='mt-1 text-gray-600 dark:text-neutral-200'>{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default App;
