import { range } from 'lodash';

export default function ProfileSetting() {
  return (
    <div className='mt-8'>
      <form>
        <div className='grid grid-cols-2 gap-[18px]'>
          <div className='grid-cols-1'>
            <div className='text-[14px] leading-5 text-[#18191c] mb-2'>Email</div>
            <input
              type='text'
              className='w-full mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
                      leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0 '
            />
          </div>
          <div className='grid-cols-1'>
            <div className='text-[14px]  leading-5 text-[#18191c] mb-2'>Address</div>
            <input
              type='text'
              className='w-full mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
                      leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0 '
            />
          </div>
        </div>
        <div className='grid grid-cols-2 gap-[18px] mt-5'>
          <div className='grid-cols-1'>
            <div className='text-[14px] leading-5 text-[#18191c] mb-2'>Gender</div>
            <select
              id='gender'
              name=' gender'
              defaultValue='Select...'
              className='w-full mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
                      leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0
                       hover:cursor-pointer'
            >
              <option value='Select...' disabled>
                Select...
              </option>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
              <option value='others'>Others</option>
            </select>
          </div>
          <div className='grid-cols-1'>
            <div className='text-[14px] leading-5 text-[#18191c] mb-2'>Age</div>
            <select
              id='age'
              name='age'
              defaultValue='Select...'
              className='w-full mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
                      leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0
                       hover:cursor-pointer'
            >
              <option value='Select...' disabled>
                Select...
              </option>
              {range(1, 100).map((age) => (
                <option key={age} value='{age}'>
                  {age}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-[18px] mt-5'>
          <div className='grid-cols-1'>
            <div className='text-[14px] leading-5 text-[#18191c] mb-2'>Phone Number</div>
            <input
              type='text'
              className='w-full mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
                      leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0 '
            />
          </div>
          <div className='grid-cols-1'>
            <div className='text-[14px] leading-5 text-[#18191c] mb-2'>Companies</div>
            <select
              id='companies'
              name='companies'
              defaultValue='Select...'
              className='w-full mt-2 h-[48px] rounded-[5px] border-[2px] border-[#e4e5e8] text-[16px]
                      leading-6 text-[#111827] focus:outline-none focus:border-[#9099a3] focus:ring-0
                       hover:cursor-pointer'
            >
              <option value='Select...' disabled>
                Select...
              </option>
              <option value='company 1'>Company 1</option>
              <option value='company 2'>Company 2</option>
              <option value='company 3'>Company 3</option>
            </select>
          </div>
        </div>
        <div className='grid grid-cols-1 mt-[34px]'>
          <button
            className='w-[175px] h-[56px] bg-[#0b65cc] rounded-[4px] text-white text-[16px]
                    leading-6 font-semibold'
            type='submit'
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
