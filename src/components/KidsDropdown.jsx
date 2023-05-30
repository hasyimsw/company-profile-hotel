import { useContext } from 'react'
import { RoomContext } from '../context/RoomContext'
import { Menu } from '@headlessui/react'
import { BsChevronDown } from 'react-icons/bs'

const lis = [
    { name: '0 Kids' },
    { name: '1 Kid' },
    { name: '2 Kids' },
    { name: '3 Kids' },
    { name: '4 Kids' },
]

const KidsDropdown = () => {
    const { kids, setKids } = useContext(RoomContext)

    return (
        <Menu as='div' className='relative w-full h-full bg-white'>
            <Menu.Button className='flex items-center justify-between w-full h-full px-8'>
                {kids === '0 Kids' ? 'No kids' : kids}
                <BsChevronDown className='text-base text-accent-hover' />
            </Menu.Button>
            <Menu.Items as='ul' className='absolute z-40 flex flex-col w-full bg-white'>
                {lis.map((li, index) => {
                    return <Menu.Item onClick={() => setKids(li.name)} as='li' key={index} className='flex items-center justify-center w-full h-12 border-b cursor-pointer hover:bg-accent hover:text-white'>{li.name}</Menu.Item>
                })}
            </Menu.Items>
        </Menu>
    )
}

export default KidsDropdown