import { Link } from 'react-router-dom';
import logo from 'src/assets/images/tiktok.png';

export default function AppliedJob() {
  return (
    <div className='mt-[48px]'>
      <div className='text-[18px] leading-7 font-medium text-[#18191c] flex items-center gap-[8px]'>
        Applied Job
        <div className='text-[18px] leading-7 font-medium text-[#9199a3]'>(100)</div>
      </div>
      <div className='mt-[20px]'>
        <div className='grid grid-cols-12 bg-[#f1f2f4] px-[20px] py-[10px] rounded-[4px]'>
          <div className='col-span-5 text-center text-[12px] text-[#535860]'>Job</div>
          <div className='col-span-3 text-center text-[12px] text-[#535860]'>Date Applied</div>
          <div className='col-span-2 text-center text-[12px] text-[#535860]'>Status</div>
          <div className='col-span-2 text-center text-[12px] text-[#535860]'>Action</div>
        </div>
        <div className='mt-[8px]'>
          {/* Item 1*/}
          <div
            className='grid grid-cols-12 p-[20px] items-center border-b border-b-[#e4e5e8]
           solid hover:cursor-pointer hover:outline outline-[#0b65cc] rounded-[8px]'
          >
            <div className='col-span-5'>
              <div className='flex gap-[16px] items-center'>
                <img src={logo} alt='' className='w-[56px] h-[56px] object-cover rounded-[4px]' />
                <div>
                  <h3 className='text-[16px] text-[#18191c] font-medium leading-6'>
                    Junior Graphic Designer
                  </h3>
                  <div className='flex items-center gap-[16px] mt-[10px]'>
                    <div className='flex items-center gap-[6px]'>
                      <div>
                        <svg
                          width='20'
                          height='20'
                          viewBox='0 0 20 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M17.5 8.33398C17.5 14.1673 10 19.1673 10 19.1673C10 19.1673 2.5 14.1673 2.5 8.33398C2.5 6.34486 3.29018 4.43721 4.6967 3.03068C6.10322 1.62416 8.01088 0.833984 10 0.833984C11.9891 0.833984 13.8968 1.62416 15.3033 3.03068C16.7098 4.43721 17.5 6.34486 17.5 8.33398Z'
                            stroke='#C8CCD1'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M10 10.834C11.3807 10.834 12.5 9.7147 12.5 8.33398C12.5 6.95327 11.3807 5.83398 10 5.83398C8.61929 5.83398 7.5 6.95327 7.5 8.33398C7.5 9.7147 8.61929 10.834 10 10.834Z'
                            stroke='#C8CCD1'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                      <div className='text-[14px] leading-5 text-[#5e6670]'>London</div>
                    </div>
                    <div className='flex items-center gap-[6px]'>
                      <div>
                        <svg
                          width='20'
                          height='20'
                          viewBox='0 0 20 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <g clipPath='url(#clip0_144_11271)'>
                            <path
                              d='M10 1.875V18.125'
                              stroke='#C8CCD1'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M14.375 6.875C14.375 6.46462 14.2942 6.05826 14.1371 5.67911C13.9801 5.29997 13.7499 4.95547 13.4597 4.66529C13.1695 4.37511 12.825 4.14492 12.4459 3.98788C12.0667 3.83083 11.6604 3.75 11.25 3.75H8.4375C7.6087 3.75 6.81384 4.07924 6.22779 4.66529C5.64174 5.25134 5.3125 6.0462 5.3125 6.875C5.3125 7.7038 5.64174 8.49866 6.22779 9.08471C6.81384 9.67076 7.6087 10 8.4375 10H11.875C12.7038 10 13.4987 10.3292 14.0847 10.9153C14.6708 11.5013 15 12.2962 15 13.125C15 13.9538 14.6708 14.7487 14.0847 15.3347C13.4987 15.9208 12.7038 16.25 11.875 16.25H8.125C7.2962 16.25 6.50134 15.9208 5.91529 15.3347C5.32924 14.7487 5 13.9538 5 13.125'
                              stroke='#C8CCD1'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </g>
                          <defs>
                            <clipPath id='clip0_144_11271'>
                              <rect width='20' height='20' fill='white' />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className='text-[14px] leading-5 text-[#5e6670]'>$50k-80k/month</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-span-3'>
              <div className='text-center text-[14px] text-[#5e6670]'>Jan 2, 2024 19:28</div>
            </div>
            <div className='col-span-2'>
              <div className='text-center text-[14px] text-[#07a02b]'>Active</div>
            </div>
            <div className='col-span-2 text-center'>
              <Link
                className='min-w-[145px] bg-[#f1f2f4] rounded-[3px] py-[12px] px-[24px]
                 text-[16px] font-semibold text-[#0b65cc] leading-6 hover:bg-[#0b65cc]
                 hover:text-white'
                to='/'
              >
                View Details
              </Link>
            </div>
          </div>
          {/* Item 2*/}
          <div
            className='grid grid-cols-12 p-[20px] items-center border-b border-b-[#e4e5e8]
           solid hover:cursor-pointer hover:outline outline-[#0b65cc] rounded-[8px]'
          >
            <div className='col-span-5'>
              <div className='flex gap-[16px] items-center'>
                <img src={logo} alt='' className='w-[56px] h-[56px] object-cover rounded-[4px]' />
                <div>
                  <h3 className='text-[16px] text-[#18191c] font-medium leading-6'>
                    Junior Graphic Designer
                  </h3>
                  <div className='flex items-center gap-[16px] mt-[10px]'>
                    <div className='flex items-center gap-[6px]'>
                      <div>
                        <svg
                          width='20'
                          height='20'
                          viewBox='0 0 20 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M17.5 8.33398C17.5 14.1673 10 19.1673 10 19.1673C10 19.1673 2.5 14.1673 2.5 8.33398C2.5 6.34486 3.29018 4.43721 4.6967 3.03068C6.10322 1.62416 8.01088 0.833984 10 0.833984C11.9891 0.833984 13.8968 1.62416 15.3033 3.03068C16.7098 4.43721 17.5 6.34486 17.5 8.33398Z'
                            stroke='#C8CCD1'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M10 10.834C11.3807 10.834 12.5 9.7147 12.5 8.33398C12.5 6.95327 11.3807 5.83398 10 5.83398C8.61929 5.83398 7.5 6.95327 7.5 8.33398C7.5 9.7147 8.61929 10.834 10 10.834Z'
                            stroke='#C8CCD1'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                      <div className='text-[14px] leading-5 text-[#5e6670]'>London</div>
                    </div>
                    <div className='flex items-center gap-[6px]'>
                      <div>
                        <svg
                          width='20'
                          height='20'
                          viewBox='0 0 20 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <g clipPath='url(#clip0_144_11271)'>
                            <path
                              d='M10 1.875V18.125'
                              stroke='#C8CCD1'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M14.375 6.875C14.375 6.46462 14.2942 6.05826 14.1371 5.67911C13.9801 5.29997 13.7499 4.95547 13.4597 4.66529C13.1695 4.37511 12.825 4.14492 12.4459 3.98788C12.0667 3.83083 11.6604 3.75 11.25 3.75H8.4375C7.6087 3.75 6.81384 4.07924 6.22779 4.66529C5.64174 5.25134 5.3125 6.0462 5.3125 6.875C5.3125 7.7038 5.64174 8.49866 6.22779 9.08471C6.81384 9.67076 7.6087 10 8.4375 10H11.875C12.7038 10 13.4987 10.3292 14.0847 10.9153C14.6708 11.5013 15 12.2962 15 13.125C15 13.9538 14.6708 14.7487 14.0847 15.3347C13.4987 15.9208 12.7038 16.25 11.875 16.25H8.125C7.2962 16.25 6.50134 15.9208 5.91529 15.3347C5.32924 14.7487 5 13.9538 5 13.125'
                              stroke='#C8CCD1'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </g>
                          <defs>
                            <clipPath id='clip0_144_11271'>
                              <rect width='20' height='20' fill='white' />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className='text-[14px] leading-5 text-[#5e6670]'>$50k-80k/month</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-span-3'>
              <div className='text-center text-[14px] text-[#5e6670]'>Jan 2, 2024 19:28</div>
            </div>
            <div className='col-span-2'>
              <div className='text-center text-[14px] text-[#07a02b]'>Active</div>
            </div>
            <div className='col-span-2 text-center'>
              <Link
                className='min-w-[145px] bg-[#f1f2f4] rounded-[3px] py-[12px] px-[24px]
                 text-[16px] font-semibold text-[#0b65cc] leading-6 hover:bg-[#0b65cc]
                 hover:text-white'
                to='/'
              >
                View Details
              </Link>
            </div>
          </div>
          {/* Item 3*/}
          <div
            className='grid grid-cols-12 p-[20px] items-center border-b border-b-[#e4e5e8]
           solid hover:cursor-pointer hover:outline outline-[#0b65cc] rounded-[8px]'
          >
            <div className='col-span-5'>
              <div className='flex gap-[16px] items-center'>
                <img src={logo} alt='' className='w-[56px] h-[56px] object-cover rounded-[4px]' />
                <div>
                  <h3 className='text-[16px] text-[#18191c] font-medium leading-6'>
                    Junior Graphic Designer
                  </h3>
                  <div className='flex items-center gap-[16px] mt-[10px]'>
                    <div className='flex items-center gap-[6px]'>
                      <div>
                        <svg
                          width='20'
                          height='20'
                          viewBox='0 0 20 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M17.5 8.33398C17.5 14.1673 10 19.1673 10 19.1673C10 19.1673 2.5 14.1673 2.5 8.33398C2.5 6.34486 3.29018 4.43721 4.6967 3.03068C6.10322 1.62416 8.01088 0.833984 10 0.833984C11.9891 0.833984 13.8968 1.62416 15.3033 3.03068C16.7098 4.43721 17.5 6.34486 17.5 8.33398Z'
                            stroke='#C8CCD1'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M10 10.834C11.3807 10.834 12.5 9.7147 12.5 8.33398C12.5 6.95327 11.3807 5.83398 10 5.83398C8.61929 5.83398 7.5 6.95327 7.5 8.33398C7.5 9.7147 8.61929 10.834 10 10.834Z'
                            stroke='#C8CCD1'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                      <div className='text-[14px] leading-5 text-[#5e6670]'>London</div>
                    </div>
                    <div className='flex items-center gap-[6px]'>
                      <div>
                        <svg
                          width='20'
                          height='20'
                          viewBox='0 0 20 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <g clipPath='url(#clip0_144_11271)'>
                            <path
                              d='M10 1.875V18.125'
                              stroke='#C8CCD1'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M14.375 6.875C14.375 6.46462 14.2942 6.05826 14.1371 5.67911C13.9801 5.29997 13.7499 4.95547 13.4597 4.66529C13.1695 4.37511 12.825 4.14492 12.4459 3.98788C12.0667 3.83083 11.6604 3.75 11.25 3.75H8.4375C7.6087 3.75 6.81384 4.07924 6.22779 4.66529C5.64174 5.25134 5.3125 6.0462 5.3125 6.875C5.3125 7.7038 5.64174 8.49866 6.22779 9.08471C6.81384 9.67076 7.6087 10 8.4375 10H11.875C12.7038 10 13.4987 10.3292 14.0847 10.9153C14.6708 11.5013 15 12.2962 15 13.125C15 13.9538 14.6708 14.7487 14.0847 15.3347C13.4987 15.9208 12.7038 16.25 11.875 16.25H8.125C7.2962 16.25 6.50134 15.9208 5.91529 15.3347C5.32924 14.7487 5 13.9538 5 13.125'
                              stroke='#C8CCD1'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </g>
                          <defs>
                            <clipPath id='clip0_144_11271'>
                              <rect width='20' height='20' fill='white' />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className='text-[14px] leading-5 text-[#5e6670]'>$50k-80k/month</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-span-3'>
              <div className='text-center text-[14px] text-[#5e6670]'>Jan 2, 2024 19:28</div>
            </div>
            <div className='col-span-2'>
              <div className='text-center text-[14px] text-[#07a02b]'>Active</div>
            </div>
            <div className='col-span-2 text-center'>
              <Link
                className='min-w-[145px] bg-[#f1f2f4] rounded-[3px] py-[12px] px-[24px]
                 text-[16px] font-semibold text-[#0b65cc] leading-6 hover:bg-[#0b65cc]
                 hover:text-white'
                to='/'
              >
                View Details
              </Link>
            </div>
          </div>
          {/* Item 4*/}
          <div
            className='grid grid-cols-12 p-[20px] items-center border-b border-b-[#e4e5e8]
           solid hover:cursor-pointer hover:outline outline-[#0b65cc] rounded-[8px]'
          >
            <div className='col-span-5'>
              <div className='flex gap-[16px] items-center'>
                <img src={logo} alt='' className='w-[56px] h-[56px] object-cover rounded-[4px]' />
                <div>
                  <h3 className='text-[16px] text-[#18191c] font-medium leading-6'>
                    Junior Graphic Designer
                  </h3>
                  <div className='flex items-center gap-[16px] mt-[10px]'>
                    <div className='flex items-center gap-[6px]'>
                      <div>
                        <svg
                          width='20'
                          height='20'
                          viewBox='0 0 20 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M17.5 8.33398C17.5 14.1673 10 19.1673 10 19.1673C10 19.1673 2.5 14.1673 2.5 8.33398C2.5 6.34486 3.29018 4.43721 4.6967 3.03068C6.10322 1.62416 8.01088 0.833984 10 0.833984C11.9891 0.833984 13.8968 1.62416 15.3033 3.03068C16.7098 4.43721 17.5 6.34486 17.5 8.33398Z'
                            stroke='#C8CCD1'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M10 10.834C11.3807 10.834 12.5 9.7147 12.5 8.33398C12.5 6.95327 11.3807 5.83398 10 5.83398C8.61929 5.83398 7.5 6.95327 7.5 8.33398C7.5 9.7147 8.61929 10.834 10 10.834Z'
                            stroke='#C8CCD1'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                      <div className='text-[14px] leading-5 text-[#5e6670]'>London</div>
                    </div>
                    <div className='flex items-center gap-[6px]'>
                      <div>
                        <svg
                          width='20'
                          height='20'
                          viewBox='0 0 20 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <g clipPath='url(#clip0_144_11271)'>
                            <path
                              d='M10 1.875V18.125'
                              stroke='#C8CCD1'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M14.375 6.875C14.375 6.46462 14.2942 6.05826 14.1371 5.67911C13.9801 5.29997 13.7499 4.95547 13.4597 4.66529C13.1695 4.37511 12.825 4.14492 12.4459 3.98788C12.0667 3.83083 11.6604 3.75 11.25 3.75H8.4375C7.6087 3.75 6.81384 4.07924 6.22779 4.66529C5.64174 5.25134 5.3125 6.0462 5.3125 6.875C5.3125 7.7038 5.64174 8.49866 6.22779 9.08471C6.81384 9.67076 7.6087 10 8.4375 10H11.875C12.7038 10 13.4987 10.3292 14.0847 10.9153C14.6708 11.5013 15 12.2962 15 13.125C15 13.9538 14.6708 14.7487 14.0847 15.3347C13.4987 15.9208 12.7038 16.25 11.875 16.25H8.125C7.2962 16.25 6.50134 15.9208 5.91529 15.3347C5.32924 14.7487 5 13.9538 5 13.125'
                              stroke='#C8CCD1'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </g>
                          <defs>
                            <clipPath id='clip0_144_11271'>
                              <rect width='20' height='20' fill='white' />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className='text-[14px] leading-5 text-[#5e6670]'>$50k-80k/month</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-span-3'>
              <div className='text-center text-[14px] text-[#5e6670]'>Jan 2, 2024 19:28</div>
            </div>
            <div className='col-span-2'>
              <div className='text-center text-[14px] text-[#07a02b]'>Active</div>
            </div>
            <div className='col-span-2 text-center'>
              <Link
                className='min-w-[145px] bg-[#f1f2f4] rounded-[3px] py-[12px] px-[24px]
                 text-[16px] font-semibold text-[#0b65cc] leading-6 hover:bg-[#0b65cc]
                 hover:text-white'
                to='/'
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
