import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
  TooltipModel,
  TooltipItem
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { Button } from '~/components/button'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const labels = [
  '11:45',
  '11:46',
  '11:47',
  '11:48',
  '11:49',
  '11:50',
  '11:51',
  '11:52',
  '11:53',
  '11:54',
  '11:55',
  '11:56',
  'Now'
]

function PendingPaymentChart() {
  const gradient = document.createElement('canvas').getContext('2d')
  const linearGradientGreen = gradient?.createLinearGradient(0, 0, 0, 250)
  linearGradientGreen?.addColorStop(0, 'rgba(84, 149, 252)')
  linearGradientGreen?.addColorStop(1, 'rgba(255, 255, 255)')

  return (
    <div className='w-full h-[402px] p-5 space-y-5 bg-white/[76%] backdrop-blur-[80px] shadow-popover-custom-2 border-[1px] border-solid border-[#DADADA] rounded-[20px]'>
      <h6 className='text-[24px] font-customSemiBold leading-8 capitalize'>Pending Payments</h6>
      <div className='w-full h-[250px]'>
        <div className='w-full h-full'>
          <Bar
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false
                },
                tooltip: {
                  position: 'nearest',
                  displayColors: false,
                  backgroundColor: '#ffffff',
                  borderColor: 'rgba(190, 198, 213, 0.3)',
                  borderWidth: 2,
                  bodyColor: '#000',
                  padding: 10,
                  callbacks: {
                    title: function () {
                      return ''
                    },
                    label: function (this: TooltipModel<'bar'>, tooltipItem: TooltipItem<'bar'>) {
                      return `${tooltipItem.parsed.y} ID`
                    }
                  }
                }
              },
              scales: {
                x: {
                  grid: {
                    display: false
                  }
                },
                y: { display: false }
              }
            }}
            data={{
              labels,
              datasets: [
                {
                  data: labels.map(() => Math.floor(Math.random() * 100)),
                  backgroundColor: linearGradientGreen,
                  hoverBackgroundColor: linearGradientGreen,
                  borderRadius: 3
                }
              ]
            }}
          />
        </div>
      </div>
      <div className='flex justify-end'>
        <Button variant='blue' size='small' className='w-[145px]' classNameText='text-[16px] !uppercase'>
          see detail
        </Button>
      </div>
    </div>
  )
}

export default PendingPaymentChart
