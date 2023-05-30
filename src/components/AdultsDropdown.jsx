import { useContext } from 'react'
import { RoomContext } from '../context/RoomContext'
import { Menu } from '@headlessui/react'
import { BsChevronDown } from 'react-icons/bs'

const lis = [
    { name: '1 Adult' },
    { name: '2 Adults' },
    { name: '3 Adults' },
    { name: '4 Adults' },
]

const AdultsDropdown = () => {
    const { adults, setAdults } = useContext(RoomContext)

    return (
        <Menu as='div' className='relative w-full h-full bg-white'>
            <Menu.Button className='flex items-center justify-between w-full h-full px-8'>
                {adults}
                <BsChevronDown className='text-base text-accent-hover' />
            </Menu.Button>
            <Menu.Items as='ul' className='absolute z-40 flex flex-col w-full bg-white'>
                {lis.map((li, index) => {
                    return <Menu.Item onClick={() => setAdults(li.name)} as='li' key={index} className='flex items-center justify-center w-full h-12 border-b cursor-pointer hover:bg-accent hover:text-white'>{li.name}</Menu.Item>
                })}
            </Menu.Items>
        </Menu>
    )
}

export default AdultsDropdown