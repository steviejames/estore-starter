import { Billboard as BillboardType } from "@/types";

interface BillboardProps {
    data: BillboardType
    textColor?: string
}


import React from 'react'

const Billboard: React.FC<BillboardProps> = ({ data, textColor = "text-black shadow-xl bg-green-500/80 p-4 " }) => {
    return (
        <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
            <div
                className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
                style={{
                    backgroundImage: `url(${data?.imageUrl})`,
                }}>
                <div className={`h-full w-full flex flex-col justify-center items-center text-center gap-y-8`}>
                    <div className={`font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs  ${textColor}`}>
                        {data?.label}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Billboard