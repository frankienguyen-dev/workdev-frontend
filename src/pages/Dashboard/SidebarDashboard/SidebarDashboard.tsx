import { Link } from 'react-router-dom';

export default function SidebarDashboard() {
  return (
    <div
      className='hidden lg:block flex flex-col justify-between
          border-r min-h-[100vh] border-r-[#e4e5e8] solid'
    >
      <div className='fixed w-[294px] min-h-[100vh] overflow-auto '>
        <div className='pt-[24px] px-[20px]'>
          <h1 className='text-[14px] font-medium leading-5 text-[#9199a3]'>CANDIDATE DASHBOARD</h1>
        </div>
        <div className='mt-[12px]'>
          <Link
            to=''
            className='flex items-center gap-[16px] pl-[20px] py-[16px] hover:bg-[#E7F0FA]
                hover: cursor-pointer text-[#9199a3] hover:text-[#0b65cc] hover:border-l-[3px]
                solid border-l-[#0b65cc]'
          >
            <div>
              <svg
                className='group group-hover:stroke-[#0b65cc]'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M3 16.5L12 21.75L21 16.5'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M3 12L12 17.25L21 12'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M3 7.5L12 12.75L21 7.5L12 2.25L3 7.5Z'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
            <div className='text-[16px] font-medium text-[currentTextColor]'>Overview</div>
          </Link>
          <Link
            to='company'
            className='flex items-center gap-[16px] pl-[20px] py-[16px] hover:bg-[#E7F0FA]
                hover:cursor-pointer text-[#9199a3] hover:text-[#0b65cc] hover:border-l-[3px]
                solid border-l-[#0b65cc]'
          >
            <div>
              <svg
                className='group group-hover:stroke-[#0b65cc]'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M20.2507 6.75H3.75073C3.33652 6.75 3.00073 7.08579 3.00073 7.5V19.5C3.00073 19.9142 3.33652 20.25 3.75073 20.25H20.2507C20.6649 20.25 21.0007 19.9142 21.0007 19.5V7.5C21.0007 7.08579 20.6649 6.75 20.2507 6.75Z'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M15.75 6.75V5.25C15.75 4.85218 15.592 4.47064 15.3107 4.18934C15.0294 3.90804 14.6478 3.75 14.25 3.75H9.75C9.35218 3.75 8.97064 3.90804 8.68934 4.18934C8.40804 4.47064 8.25 4.85218 8.25 5.25V6.75'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M21.0008 11.8418C18.2654 13.4243 15.1602 14.2553 12 14.2503C8.84038 14.2553 5.73564 13.4246 3.00061 11.8426'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M10.875 11.25H13.125'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
            <div className='text-[16px] font-medium text-[currentTextColor]'>Company</div>
          </Link>
          <div
            className='flex items-center gap-[16px] pl-[20px] py-[16px] hover:bg-[#E7F0FA]
                hover:cursor-pointer text-[#9199a3] hover:text-[#0b65cc] hover:border-l-[3px]
                solid border-l-[#0b65cc]'
          >
            <div>
              <svg
                className='group group-hover:stroke-[#0b65cc]'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M18 21L11.9993 17.25L6 21V4.5C6 4.30109 6.07902 4.11032 6.21967 3.96967C6.36032 3.82902 6.55109 3.75 6.75 3.75H17.25C17.4489 3.75 17.6397 3.82902 17.7803 3.96967C17.921 4.11032 18 4.30109 18 4.5V21Z'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
            <div className='text-[16px] font-medium text-[currentTextColor]'>Favorite Jobs</div>
          </div>
          <div
            className='flex px-[20px] py-[16px] items-center justify-between hover:bg-[#E7F0FA]
                hover:cursor-pointer text-[#9199a3] hover:text-[#0b65cc] hover:border-l-[3px]
                solid border-l-[#0b65cc] group '
          >
            <div className='items-center flex justify-center gap-[16px]'>
              <div>
                <svg
                  className='group-hover:stroke-[#0b65cc]'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M5.26904 10.5002C5.26657 9.61461 5.43885 8.73727 5.77603 7.91841C6.1132 7.09956 6.60864 6.35528 7.23394 5.72822C7.85925 5.10116 8.60214 4.60365 9.42006 4.26419C10.238 3.92474 11.1148 3.75 12.0004 3.75C12.8859 3.75 13.7628 3.92474 14.5807 4.26419C15.3986 4.60365 16.1415 5.10116 16.7668 5.72822C17.3921 6.35528 17.8876 7.09956 18.2247 7.91841C18.5619 8.73727 18.7342 9.61461 18.7317 10.5002V10.5002C18.7317 13.8579 19.4342 15.8063 20.0529 16.8712C20.1196 16.985 20.1551 17.1144 20.1558 17.2462C20.1565 17.3781 20.1224 17.5078 20.0569 17.6223C19.9915 17.7368 19.8971 17.832 19.7831 17.8984C19.6691 17.9647 19.5397 17.9998 19.4078 18.0002H4.59222C4.46034 17.9998 4.33087 17.9647 4.21689 17.8984C4.1029 17.832 4.00844 17.7368 3.94301 17.6223C3.87759 17.5077 3.84352 17.378 3.84425 17.2461C3.84498 17.1142 3.88048 16.9849 3.94716 16.8711C4.56622 15.8061 5.26904 13.8577 5.26904 10.5002H5.26904Z'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M9 18V18.75C9 19.5456 9.31607 20.3087 9.87868 20.8713C10.4413 21.4339 11.2044 21.75 12 21.75C12.7956 21.75 13.5587 21.4339 14.1213 20.8713C14.6839 20.3087 15 19.5456 15 18.75V18'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M17.1968 2.24902C18.7229 3.21245 19.9531 4.57885 20.7516 6.19736'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M3.24835 6.19736C4.04687 4.57885 5.27709 3.21245 6.80321 2.24902'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              <div className='text-[16px] font-medium text-[currentTextColor]'>Job Alerts</div>
            </div>
            <div
              className='py-[3px] px-[8px] rounded-[2px] bg-[#e7f0fa] w-[32px] h-[24px]
                flex items-center justify-center group-hover:bg-[#0b65cc]'
            >
              <div
                className='text-[#18191c] text-[12px] font-semibold
                    group-hover:text-white'
              >
                9
              </div>
            </div>
          </div>
          <div
            className='flex items-center gap-[16px] pl-[20px] py-[16px] hover:bg-[#E7F0FA]
                hover: cursor-pointer text-[#9199a3] hover:text-[#0b65cc] hover:border-l-[3px]
                solid border-l-[#0b65cc]'
          >
            <div>
              <svg
                className='group group-hover:stroke-[#0b65cc]'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M11.5192 4.13952L9.7502 2.81315C9.65529 2.74175 9.54476 2.69393 9.42774 2.67363C9.31071 2.65332 9.19054 2.66112 9.07712 2.69638C8.52924 2.86794 7.99769 3.08787 7.48875 3.35355C7.3834 3.40881 7.2927 3.48834 7.22413 3.58556C7.15557 3.68278 7.11111 3.79492 7.09442 3.91271L6.7817 6.10186C6.6625 6.20753 6.5458 6.31742 6.4316 6.43156C6.31743 6.54573 6.20751 6.66246 6.10182 6.78176L6.10177 6.78179L3.91301 7.09479C3.79541 7.11142 3.68344 7.15576 3.58633 7.22415C3.48923 7.29254 3.40976 7.38303 3.35449 7.48816C3.0884 7.99689 2.86805 8.52826 2.69604 9.076C2.66062 9.18957 2.65272 9.30994 2.67298 9.42717C2.69325 9.5444 2.7411 9.65513 2.8126 9.75022L4.13943 11.5193C4.12985 11.6783 4.12504 11.8385 4.125 12C4.125 12.1615 4.12981 12.3217 4.13944 12.4808L4.13943 12.4809L2.81306 14.2499C2.74166 14.3448 2.69384 14.4553 2.67353 14.5724C2.65323 14.6894 2.66103 14.8095 2.69628 14.923C2.86785 15.4708 3.08777 16.0024 3.35346 16.5113C3.40872 16.6167 3.48824 16.7074 3.58547 16.776C3.68269 16.8445 3.79483 16.889 3.91262 16.9057L6.10177 17.2184C6.20743 17.3376 6.31733 17.4543 6.43146 17.5685C6.54563 17.6827 6.66236 17.7926 6.78166 17.8983L6.7817 17.8983L7.0947 20.0871C7.11133 20.2047 7.15566 20.3167 7.22405 20.4138C7.29245 20.5109 7.38294 20.5903 7.48807 20.6456C7.99679 20.9117 8.52816 21.132 9.0759 21.304C9.18948 21.3395 9.30984 21.3474 9.42707 21.3271C9.5443 21.3068 9.65503 21.259 9.75012 21.1875L11.5192 19.8607C11.6782 19.8702 11.8384 19.875 11.9999 19.8751C12.1614 19.8751 12.3216 19.8703 12.4807 19.8607L12.4808 19.8607L14.2498 21.187C14.3447 21.2584 14.4552 21.3063 14.5723 21.3266C14.6893 21.3469 14.8095 21.3391 14.9229 21.3038C15.4708 21.1322 16.0023 20.9123 16.5112 20.6466C16.6166 20.5914 16.7073 20.5118 16.7759 20.4146C16.8444 20.3174 16.8889 20.2053 16.9056 20.0875L17.2183 17.8983C17.3375 17.7927 17.4542 17.6828 17.5684 17.5686C17.6826 17.4545 17.7925 17.3377 17.8982 17.2184L17.8982 17.2184L20.087 16.9054C20.2046 16.8888 20.3166 16.8444 20.4137 16.776C20.5108 16.7076 20.5902 16.6172 20.6455 16.512C20.9116 16.0033 21.1319 15.4719 21.304 14.9242C21.3394 14.8106 21.3473 14.6902 21.327 14.573C21.3067 14.4558 21.2589 14.3451 21.1874 14.25L19.8606 12.4809C19.8701 12.3219 19.875 12.1616 19.875 12.0002C19.875 11.8387 19.8702 11.6785 19.8606 11.5194L19.8606 11.5193L21.1869 9.75029C21.2583 9.65538 21.3062 9.54485 21.3265 9.42783C21.3468 9.31081 21.339 9.19063 21.3037 9.07721C21.1321 8.52933 20.9122 7.99779 20.6465 7.48885C20.5913 7.38349 20.5118 7.29279 20.4145 7.22422C20.3173 7.15566 20.2052 7.1112 20.0874 7.09452L17.8982 6.78179C17.7926 6.66259 17.6827 6.54589 17.5685 6.43169C17.4544 6.31752 17.3376 6.2076 17.2183 6.10191L17.2183 6.10186L16.9053 3.9131C16.8887 3.7955 16.8443 3.68353 16.7759 3.58642C16.7076 3.48932 16.6171 3.40986 16.5119 3.35459C16.0032 3.08849 15.4718 2.86814 14.9241 2.69613C14.8105 2.66071 14.6902 2.65281 14.5729 2.67307C14.4557 2.69334 14.345 2.7412 14.2499 2.81269L12.4808 4.13952C12.3218 4.12995 12.1615 4.12514 12.0001 4.12509C11.8386 4.12509 11.6784 4.1299 11.5193 4.13953L11.5192 4.13952Z'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
            <div className='text-[16px] font-medium text-[currentTextColor]'>Setting</div>
          </div>
        </div>
      </div>
    </div>
  );
}
