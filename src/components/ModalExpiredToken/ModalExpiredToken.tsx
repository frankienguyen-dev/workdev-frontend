import { CustomFlowbiteTheme, Flowbite, Modal } from 'flowbite-react';
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
  icon: React.ReactNode;
}

export default function ModalExpiredToken({ closeModal, heading, textButtonYes, icon }: Props) {
  return (
    <div className='flex items-center justify-center'>
      <Flowbite theme={{ theme: custom }}>
        <Modal show={true} size='5xl' position='center' onClose={closeModal} popup>
          <Modal.Header />
          <Modal.Body>
            <div className='text-center'>
              <div className='flex justify-center mb-[20px]'>{icon}</div>
              <h3 className='mb-[50px] text-lg font-normal text-gray-500 dark:text-gray-400'>
                {heading}
              </h3>
              <div className='flex justify-center gap-4'>
                <button
                  className='rounded-[6px] px-[12px] py-[5px] w-[150px] h-[50px] font-bold bg-[#0A65CC]
                flex items-center justify-center text-white hover:bg-[#0A65CC]/90'
                  color='failure'
                  onClick={closeModal}
                >
                  {textButtonYes}
                </button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </Flowbite>
    </div>
  );
}