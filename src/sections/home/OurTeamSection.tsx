/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react'
import Slider from 'react-slick'

import { Employee } from '~/@types/model'
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
    <section className='our-team-section mt-[100px] pb-14'>
      <h1 className='text-[52px] font-customBold capitalize leading-[64px] mb-5 text-center'>Our Team</h1>
      <p className='text-[18px] font-customRegular text-center'>
        Our team consists of dedicated professionals with diverse expertise, working collaboratively to achieve
        excellence in every project.
      </p>

      <div className='w-[1200px] mt-10 ml-[12.5%] relative'>
        <Slider ref={sliderRef} dots={true} arrows={false} infinite slidesToShow={3} slidesToScroll={1}>
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
