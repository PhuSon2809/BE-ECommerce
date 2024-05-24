import { Employee } from '~/@types/models'

type TeamCardProps = { employee: Employee }

function TeamCard({ employee }: TeamCardProps) {
  return (
    <div className='xs:w-[298px] sm:w-[330px] xs:h-[279px] sm:h-[420px] relative xs:ml-6 sm:ml-0'>
      <img src={employee.imageUrl} alt={employee.name} className='xs:w-[175px] sm:w-[260px]' />
      <div className='flex flex-col gap-[5px] absolute xs:bottom-4 sm:bottom-0 xs:right-[0%] sm:right-[-10%]'>
        <p className='xs:text-[12px] sm:text-[18px] font-customMedium xs:leading-[18.75px] sm:leading-7'>
          {employee.position}
        </p>
        <h6 className='xs:text-[16px] sm:text-[24px] font-customSemiBold xs:leading-[18.75px] sm:leading-7'>
          {employee.name}
        </h6>
        <p className='xs:w-[191px] sm:w-[200px] xs:text-[12px] sm:text-[16px] font-customRegular opacity-[.64] xs:leading-[16.07px] sm:leading-6'>
          {employee.content}
        </p>
      </div>
    </div>
  )
}

export default TeamCard
