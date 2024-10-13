"use client"
import { UserProfile } from '@clerk/clerk-react'
import { History } from 'lucide-react'
import React from 'react'


const ProfilePage = () => {
    return (
        <div className='flex justify-center items-center  mt-10'>
            <UserProfile>
                <UserProfile.Page url={"custom"} label='Histórico' labelIcon={<History className='h-4 w-4' />}>
                    <div>Histórico</div>
                </UserProfile.Page>
                <UserProfile.Page label="account" />
                <UserProfile.Page label="security" />
            </UserProfile>
        </div>
    )
}

export default ProfilePage