import { PhoneCall } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
export default function Page(){

    const linkLists = [
        {name: "note1" , href: "link", description: "the one group"},
        {name: "group sfsf 2" , href: "link", description: "the one g sfsfsadfroup"},
        {name: "group f sdfsa 3" , href: "link", description: "the one dsfsdfas group"},
        {name: "group sfd 4" , href: "link", description: "the one  dfasfgroup asfasdfas"},
        {name: "group sfasfsfasfa 5" , href: "link", description: "the on sdfsae groupafasdfas fdasfasf"},
    ]

    return(
        <div className="flex flex-col  bg-gray-200 p-4">
            <div className="flex flex-col w-full lg:w-10/12 bg-white rounded-3xl md:rounded-2xl">
                <span className="flex font-bold text-5xl md:ml-10   p-4 rounded-bl-2xl">Mentorship <br/>Sessions</span>
            
                <div className="flex flex-col md:flex-row py-8 items-center">
                    <Image src='/Mentorship.svg'  width={200} height={200} className='w-[15rem] md:w-[20rem] lg:w-[35rem] mb-8'
                    alt='doubt solving page hero' />


                    <p className="font-medium text-xl sm:text-2xl px-10 md:px-8 ">
                    My classes will also help you find mentors that can act as personal guides 
                    that help you every setep of your way.<br/>
                    Discover a community where ambitious learners
                     meet seasoned professionals. <br/><br/>At My Classes Tripura,
                      we bridge the gap between knowledge seeking and expertise by providing
                       personalized mentorship in various fields.<br/><br/> Whether you&#39;re starting a new career,
                        scaling up in your current field, or exploring new interests,
                         our mentors are here to guide you every step of the way
                    

                    </p>
                </div>
            </div>

            
            

            

            
            
        </div>
    )
}