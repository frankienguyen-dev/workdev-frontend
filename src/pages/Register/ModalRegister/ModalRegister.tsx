import { CustomFlowbiteTheme, Flowbite, Modal } from 'flowbite-react';
import { Link } from 'react-router-dom';
import React from 'react';

const custom: CustomFlowbiteTheme = {
  modal: {
    root: {
      base: 'fixed top-0 right-0 left-0 z-50 h-modal h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full',
      show: {
        on: 'flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80',
        off: 'hidden'
      },
      sizes: {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        '2xl': 'max-w-2xl',
        '3xl': 'max-w-3xl',
        '4xl': 'max-w-4xl',
        '5xl': 'max-w-5xl',
        '6xl': 'max-w-6xl',
        '7xl': 'max-w-7xl'
      },
      positions: {
        'top-left': 'items-start justify-start',
        'top-center': 'items-start justify-center',
        'top-right': 'items-start justify-end',
        'center-left': 'items-center justify-start',
        center: 'items-center justify-center',
        'center-right': 'items-center justify-end',
        'bottom-right': 'items-end justify-end',
        'bottom-center': 'items-end justify-center',
        'bottom-left': 'items-end justify-start'
      }
    },
    content: {
      base: 'relative h-full w-full p-4 md:h-auto',
      inner: 'relative rounded-lg bg-white shadow dark:bg-gray-700 flex flex-col max-h-[90vh]'
    },
    body: {
      base: 'p-6 flex-1 overflow-auto',
      popup: 'pt-0'
    },
    header: {
      base: 'flex items-start justify-between rounded-t dark:border-gray-600 border-b p-5',
      popup: 'p-2 border-b-0',
      title: 'text-xl font-medium text-gray-900 dark:text-white',
      close: {
        base: 'ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white',
        icon: 'h-5 w-5'
      }
    },
    footer: {
      base: 'flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600',
      popup: 'border-t'
    }
  }
};

interface Props {
  closeModal: () => void;
  heading: string;
  textButtonYes: string;
  textButtonNo: string;
  icon: React.ReactNode;
  redirectToNo: string;
  redirectToYes: string;
}

export default function ModalRegister({
  closeModal,
  heading,
  textButtonYes,
  textButtonNo,
  icon,
  redirectToNo,
  redirectToYes
}: Props) {
  return (
    <div className='flex items-center justify-center'>
      <Flowbite theme={{ theme: custom }}>
        <Modal show={true} size='5xl' position='center' onClose={closeModal} popup>
          <Modal.Header />
          <Modal.Body>
            <div className='text-center'>
              <div className='flex justify-center mb-[20px]'>
                {/*<svg*/}
                {/*  width='50'*/}
                {/*  height='50'*/}
                {/*  viewBox='0 0 24 24'*/}
                {/*  fill='none'*/}
                {/*  xmlns='http://www.w3.org/2000/svg'*/}
                {/*>*/}
                {/*  <path*/}
                {/*    d='M5.10571 18.8943C4.24283 18.0314 4.81514 16.2198 4.37595 15.1584C3.92066 14.058 2.25 13.1723 2.25 12C2.25 10.8276 3.92067 9.942 4.37595 8.84164C4.81515 7.78015 4.24283 5.96858 5.10571 5.10571C5.96858 4.24283 7.78016 4.81514 8.84165 4.37595C9.94203 3.92066 10.8277 2.25 12 2.25C13.1724 2.25 14.058 3.92067 15.1584 4.37595C16.2199 4.81515 18.0314 4.24283 18.8943 5.10571C19.7572 5.96858 19.1849 7.78016 19.6241 8.84165C20.0793 9.94203 21.75 10.8277 21.75 12C21.75 13.1724 20.0793 14.058 19.624 15.1584C19.1848 16.2199 19.7572 18.0314 18.8943 18.8943C18.0314 19.7572 16.2198 19.1849 15.1584 19.6241C14.058 20.0793 13.1723 21.75 12 21.75C10.8276 21.75 9.942 20.0793 8.84164 19.624C7.78015 19.1848 5.96858 19.7572 5.10571 18.8943Z'*/}
                {/*    stroke='#0d7490'*/}
                {/*    strokeWidth='1.5'*/}
                {/*    strokeLinecap='round'*/}
                {/*    strokeLinejoin='round'*/}
                {/*  />*/}
                {/*  <path*/}
                {/*    d='M16.125 9.75L10.625 15L7.875 12.375'*/}
                {/*    stroke='#0d7490'*/}
                {/*    strokeWidth='1.5'*/}
                {/*    strokeLinecap='round'*/}
                {/*    strokeLinejoin='round'*/}
                {/*  />*/}
                {/*</svg>*/}
                {icon}
              </div>
              <h3 className='mb-[50px] text-lg font-normal text-gray-500 dark:text-gray-400'>
                {heading}
              </h3>
              <div className='flex justify-center gap-4'>
                <Link
                  className='rounded-[6px] px-[12px] py-[5px] w-[150px] h-[50px] font-bold bg-[#0A65CC]
                flex items-center justify-center text-white hover:bg-[#0A65CC]/90'
                  color='failure'
                  onClick={closeModal}
                  to={redirectToYes}
                >
                  {textButtonYes}
                </Link>
                <Link
                  className='rounded-[6px] px-[12px] py-[5px] border-[#0A65CC] font-bold w-[150px] h-[50px]
                flex items-center justify-center border hover:bg-gray-100'
                  color='gray'
                  onClick={closeModal}
                  to={redirectToNo}
                >
                  {textButtonNo}
                </Link>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </Flowbite>
    </div>
  );
}
