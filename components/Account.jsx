import React from 'react'
import { useState } from 'react'
import AccountIcon from './AccountIcon';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Logout, PaymentOutlined } from '@mui/icons-material';
import Link from "next/link";

function Account({active, name, email, image, logOut}) {

    return(
        active && <div className={`${'account_userprofile ml-auto bg-slate-200 rounded-md'}`}>
        <div className='flex w-fit ease-in-out duration-200 justify-end'>
            {
                active?
                <div className='h-fit my-auto flex' style={{color: "#444"}}>
                    <div className='pl-2 pr-2 h-fit'>
                    {/* <AccountCircleIcon></AccountCircleIcon> */}
                    <img src={image} alt="user_image" className='h-10 w-10 rounded-full'></img>
                    </div>
                    <div className='mt-1 h-fit pr-6 text-lg'>{name}
                    </div>
                </div>
                :""
            }
            {/* <AccountIcon active={active} toggle={()=>{setActive(!active);}}></AccountIcon> */}
        </div>
        {active?
        <>
        <div className='px-2 text-center py-2 text-white' style={{backgroundColor: "#E84C3D"}}>
            {email}
        </div>
        <ul className='p-4 border-t-neutral-400' style={{color: "#444"}}>
            <li>
                <Link href='/dashboard'>
                    <div className='account_userprofile_list pb-3 flex'>
                        <PermIdentityIcon />
                        <div className='px-2'>Dashboard</div>
                    </div>
                </Link>
            </li>
            <li>
                <Link href='/dashboard/notification'>
                <div className='account_userprofile_list py-3 flex'>
                    <NotificationsNoneIcon />
                    <div className='px-2'>Notification</div>
                </div>
                </Link>
            </li>
            <li>
                <Link href='/dashboard/payment'>
                    <div className='account_userprofile_list pt-3 flex'>
                        <PaymentOutlined />
                        <div className='px-2'>Payment</div>
                    </div>
                </Link>
            </li>
        </ul>
        <div onClick={() => logOut()} className='account_userprofile_logout py-3 flex border-t border-t-slate-400 px-4'>
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