import React from 'react'
import { useState } from 'react'
import AccountIcon from './AccountIcon';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Logout, PaymentOutlined } from '@mui/icons-material';

function Account() {
    const [active, setActive] = useState(false);
    return(
        <div className='ml-auto bg-slate-200 rounded-md'>
            <div className='flex w-fit ease-in-out duration-200 justify-end'>
                {
                    active?
                    <div className='h-fit my-auto flex' style={{color: "#444"}}>
                        <div className='pl-2 pr-4 h-fit'>
                        <AccountCircleIcon></AccountCircleIcon>
                        </div>
                        <div className='h-fit pl-4 pr-6 text-lg'>Ayush Shaw
                        </div>
                    </div>
                    :""
                }
                <AccountIcon active = {active} toggle= {()=>{setActive(!active);}}></AccountIcon>
            </div>
            {active?
            <>
            <ul className='p-4 border-t border-t-neutral-400' style={{color: "#444"}}>
                <li className='py-3 flex'>
                    <PermIdentityIcon />
                    <div className='px-2'>Dashboard</div>
                </li>
                <li className='py-3 flex'>
                    <NotificationsNoneIcon />
                    <div className='px-2'>Notification</div>
                </li>
                <li className='pt-3 flex'>
                    <PaymentOutlined />
                <div className='px-2'>Payment</div>
                </li>
            </ul>
            <div className='py-3 flex border-t border-t-slate-400 px-4'>
                    <Logout />
                <div className='px-2'>Logout</div>
                </div>
            </>
            :""
            }
        </div>
    )
}

export default Account