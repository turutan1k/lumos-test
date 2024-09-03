import React from "react"
import {
    AdvantagesCard,
    Button,
    InfoCard,
    Section,
    UsersBlock,
} from "./components"
import Link from "next/link"
import Image from "next/image"
import heroImage from "./assets/images/hero-image.png"
import {
    TrustedRight,
    Servers,
    TrustedLeft,
    Location,
    Eye,
    Rocket,
    CrossedMap,
    Lock,
} from "./assets/svgs"
import { getData } from "./utils"

const information = [
    {
        id: 1,
        count: 50,
        description: "Locations",
        logo: <Location />,
    },
    {
        id: 2,
        count: 1000,
        description: "Servers",
        logo: <Servers />,
    },
]

const advantages = [
    {
        id: 1,
        title: "Unlimited access to content",
        description:
            "Enjoy unlimited bandwidth to stay connected to the world's best shows, apps, and games!",
        logo: <Eye />,
    },
    {
        id: 2,
        title: "Flashing connecting speed",
        description:
            "VPN Lumos offers unlimited bandwidth for faster loading and no buffering!",
        logo: <Rocket />,
    },
    {
        id: 3,
        title: "Hide your location",
        description:
            "Get your own unique IP for added security and access to restricted sites, apps, and services!",
        logo: <CrossedMap />,
    },
    {
        id: 4,
        title: "Bypass blocked sites",
        description: "Access any website safely and anonymously!",
        logo: <Lock />,
    },
]

type Name = {
    first: string
    last: string
}

type User = {
    name?: Name
}

const Page = async () => {
    const data = await getData()
    const userNames = data.results.map((item: User, index: number) =>
        item.name
            ? { id: index, name: `${item.name.first} ${item.name.last}` }
            : ""
    )

    return (
        <>
            <Section>
                <div className='flex flex-col gap-[2.4rem]'>
                    <div className='flex flex-col items-center justify-center'>
                        <h1 className='w-[39.6rem] text-center'>
                            Access{" "}
                            <span className='h1 text-blue'>
                                everything
                                <br /> securely
                            </span>{" "}
                            with <br />
                            VPN
                        </h1>
                        <div className='relative isolate h-[20.9rem] w-[54rem] -top-[1.6rem] sm:w-[42.8rem]'>
                            <Image
                                fill
                                priority
                                sizes='(max-width: 480px) 100vw, 
                                (max-width: 768px) 75vw, 
                                (max-width: 1200px) 50vw, 
                                33vw'
                                src={heroImage}
                                alt='photo'
                                quality={70}
                                style={{
                                    objectFit: "contain",
                                }}
                            />
                        </div>
                        <Button
                            as={Link}
                            href={"#choose-your-name"}
                            variant='primary'
                            className='mt-[1.77rem] w-[39.6rem] flex items-center justify-center'>
                            Get VPN
                        </Button>
                    </div>
                    <div className='flex items-center justify-center gap-[0.8rem]'>
                        <TrustedLeft />
                        <div className='flex flex-col items-center justify-center'>
                            <span className='text-blue poppins text-[1.4rem] leading-[1.8rem] font-[400]'>
                                Trusted by
                            </span>
                            <span className='text-blue roboto text-[1.4rem] leading-[1.8rem] font-[600]'>
                                50M+ Users
                            </span>
                        </div>
                        <TrustedRight />
                    </div>
                    {information?.length > 0 && (
                        <div className='shadow-[0rem_0.209rem_1.106rem_0_rgba(0,0,0,0.25)] w-full py-[1.5rem] flex items-center justify-center rounded-[1.6rem]'>
                            <div className='info-cards w-[41.5rem] grid grid-cols-2'>
                                {information?.map((item) => (
                                    <InfoCard key={item?.id} data={item} />
                                ))}
                            </div>
                        </div>
                    )}
                    <p className='text-center'>
                        VPN-your <span className='text-blue p'>ultimate</span>{" "}
                        solution for a private and secure online experience!
                    </p>
                </div>
            </Section>
            {advantages?.length > 0 && (
                <Section>
                    <div className='advantages-cards flex flex-wrap gap-x-[3.2rem] gap-y-[0.8rem] items-stretch justify-center'>
                        {advantages?.map((item) => (
                            <AdvantagesCard key={item?.id} data={item} />
                        ))}
                    </div>
                </Section>
            )}
            <Section id='choose-your-name'>
                <h2 className='h3 text-blue text-center'>
                    Millions of people trust us!
                </h2>
                <div className='pt-[7.2rem] flex flex-col items-start justify-start gap-[1.6rem] sm:pt-[4rem]'>
                    <span className='h2'>
                        Choose <span className='h2 text-blue'>your Name</span>
                    </span>
                    <UsersBlock data={userNames} />
                </div>
            </Section>
        </>
    )
}

export default Page
