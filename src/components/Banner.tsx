'use client'

import Image from "next/image";

export default function Banner(){
    return (
        <div className="relative w-full h-[400px]">
            <Image
                src="/images/banner02.jpg"
                alt="banner"
                fill
                className={`object-fill`}
            />
        </div>
    )
}