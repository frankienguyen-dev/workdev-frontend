import { Dropdown } from 'flowbite-react';
import { useState } from 'react';

export default function NavHeader() {
  const [selectLanguage, setSelectLanguage] = useState<string>('English');

  const handleLanguage = (language: string) => {
    setSelectLanguage(language);
  };
  return (
    <>
      <div className='w-full h-[48px] bg-[#F1F2F4]'>
        <div className='container'>
          <div className='flex gap-10 items-center leading-[48px] justify-end'>
            <div className='flex items-center gap-2'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M14.9454 3.75C16.2169 4.09194 17.3761 4.76196 18.3071 5.69294C19.2381 6.62392 19.9081 7.78319 20.25 9.05462'
                  stroke='#18191C'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M14.1687 6.64849C14.9316 6.85366 15.6271 7.25567 16.1857 7.81426C16.7443 8.37285 17.1463 9.06841 17.3515 9.83127'
                  stroke='#18191C'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M8.66965 11.7014C9.44762 13.2919 10.7369 14.5753 12.3309 15.346C12.4475 15.4013 12.5765 15.4253 12.7052 15.4155C12.8339 15.4058 12.9579 15.3627 13.0648 15.2905L15.4119 13.7254C15.5157 13.6562 15.6352 13.614 15.7594 13.6026C15.8837 13.5911 16.0088 13.6109 16.1235 13.6601L20.5144 15.5419C20.6636 15.6053 20.7881 15.7154 20.8693 15.8557C20.9504 15.996 20.9838 16.1588 20.9643 16.3197C20.8255 17.4057 20.2956 18.4039 19.4739 19.1274C18.6521 19.8508 17.5948 20.2499 16.5 20.25C13.1185 20.25 9.87548 18.9067 7.48439 16.5156C5.0933 14.1245 3.75 10.8815 3.75 7.5C3.75006 6.40516 4.14918 5.34789 4.87264 4.52613C5.5961 3.70438 6.59428 3.17451 7.68028 3.03572C7.84117 3.01625 8.00403 3.04959 8.14432 3.13073C8.28461 3.21186 8.39473 3.33639 8.4581 3.48555L10.3416 7.88035C10.3903 7.99403 10.4101 8.11799 10.3994 8.24119C10.3886 8.3644 10.3475 8.48302 10.2798 8.5865L8.72011 10.9696C8.64912 11.0768 8.60716 11.2006 8.59831 11.3289C8.58947 11.4571 8.61405 11.5855 8.66965 11.7014V11.7014Z'
                  stroke='#18191C'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>

              <span className='text-[#18191C] font-medium text-[14px]'>+84-3-8700-6700</span>
            </div>

            <div className='w-[102px] text-[14px] font-medium text-[#18191C]'>
              <Dropdown
                className='w-[120px] text-[#18191C] text-[14px] font-medium'
                label={selectLanguage}
                inline
              >
                <Dropdown.Item onClick={() => handleLanguage('English')}>English</Dropdown.Item>
                <Dropdown.Item onClick={() => handleLanguage('Tiếng Việt')}>
                  Tiếng Việt
                </Dropdown.Item>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}