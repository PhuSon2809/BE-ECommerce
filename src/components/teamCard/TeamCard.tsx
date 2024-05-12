import { Employee } from '~/@types/model'

type TeamCardProps = { employee: Employee }

function TeamCard({ employee }: TeamCardProps) {
  return (
    <div className='w-[330px] h-[420px] relative'>
      <img src={employee.imageUrl} alt={employee.name} className='w-[260px]' />
      <div className='flex flex-col gap-[5px] absolute bottom-0 right-[-10%]'>
        <p className='text-[18px] font-customMedium leading-7'>{employee.position}</p>
        <h6 className='text-[24px] font-customSemiBold leading-7'>{employee.name}</h6>
        <p className='w-[200px] font-customRegular leading-6'>{employee.content}</p>
      </div>
    </div>
  )
}

export default TeamCard
