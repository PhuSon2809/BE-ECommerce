/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react'
import Slider from 'react-slick'

import { Employee } from '~/@types/models'
import images from '~/assets'
import { TeamCard } from '~/components/teamCard'

const listEmployees: Employee[] = [
  {
    id: 1,
    position: 'CEO',
    name: 'James Aminoff',
    content: 'Head of the company, responsible for overall operations.',
    imageUrl: images.home.home_ceo
  },
  {
    id: 2,
    position: 'CCO',
    name: 'Martin Herwitz',
    content: 'Oversees the daily operations of the company.',
    imageUrl: images.home.home_cco
  },
  {
    id: 3,
    position: 'CFO',
    name: 'Kaiya Vaccaro',
    content: "Manages the company's finances and financial strategy.",
    imageUrl: images.home.home_cfo
  },
  {
    id: 4,
    position: 'CEO',
    name: 'James Aminoff',
    content: 'Head of the company, responsible for overall operations.',
    imageUrl: images.home.home_ceo
  },
  {
    id: 5,
    position: 'CCO',
    name: 'Martin Herwitz',
    content: 'Oversees the daily operations of the company.',
    imageUrl: images.home.home_cco
  },
  {
    id: 6,
    position: 'CFO',
    name: 'Kaiya Vaccaro',
    content: "Manages the company's finances and financial strategy.",
    imageUrl: images.home.home_cfo
  }
]

function OurTeamSection() {
  const sliderRef = useRef<Slider>(null)

  return (
    <section className='our-team-section xs:mt-[200px] sm:mt-[100px] pb-14 xs:px-4 sm:px-0 xs:bg-[#F6F6F7] sm:bg-transparent xs:pt-16 xs:py-20 sm:py-0 sm:pb-20'>
      <h1 className='xs:text-[32px] sm:text-[52px] font-customBold capitalize xs:leading-[40px] sm:leading-[64px] xs:mb-2 sm:mb-5 text-center'>
        Our Team
      </h1>
      <p className='xs:text-[16px] sm:text-[18px] font-customRegular opacity-[.64] xs:leading-6 sm:leading-7 text-center'>
        Our team consists of dedicated professionals with diverse expertise, working collaboratively to achieve
        excellence in every project.
      </p>

      <div className='xs:w-[358px] sm:w-[1200px] mt-10 xs:ml-0 sm:ml-[12.5%] relative'>
        <Slider
          ref={sliderRef}
          dots={true}
          arrows={false}
          infinite
          slidesToShow={3}
          slidesToScroll={1}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true
              }
            }
          ]}
        >
          {listEmployees.map((employee) => (
            <div key={employee.id} className='flex items-center justify-center'>
              <TeamCard employee={employee} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default OurTeamSection
