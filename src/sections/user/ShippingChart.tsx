import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  TooltipItem,
  TooltipModel
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { Button } from '~/components/button'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend)

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

function ShippingChart() {
  const gradient = document.createElement('canvas').getContext('2d')
  const linearGradientGreen = gradient?.createLinearGradient(0, 0, 0, 300)
  linearGradientGreen?.addColorStop(0, 'rgba(96, 236, 142)')
  linearGradientGreen?.addColorStop(1, 'rgba(255, 255, 255, 0.1)')

  return (
    <div className='w-full h-[402px] p-5 space-y-5 bg-white/[76%] backdrop-blur-[80px] shadow-popover-custom-2 border-[1px] border-solid border-[#DADADA] rounded-[20px]'>
      <h6 className='text-[24px] font-customSemiBold leading-8 capitalize'>Shipping</h6>
      <div className='w-full h-[250px]'>
        <div className='w-full h-full'>
          <Line
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false
                },
                tooltip: {
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
                    label: function (this: TooltipModel<'line'>, tooltipItem: TooltipItem<'line'>) {
                      return `${tooltipItem.parsed.y} ID`
                    }
                  }
                }
              },
              scales: {
                y: { display: false }
              }
            }}
            data={{
              labels,
              datasets: [
                {
                  fill: true,
                  data: labels.map(() => Math.floor(Math.random() * 100)),
                  borderColor: 'rgb(96, 236, 142)',
                  backgroundColor: linearGradientGreen,
                  pointRadius: 2,
                  pointHoverRadius: 4
                }
              ]
            }}
          />
        </div>
      </div>
      <div className='flex justify-end'>
        <Button variant='green' size='small' className='w-[145px]' classNameText='text-[16px] !uppercase'>
          see detail
        </Button>
      </div>
    </div>
  )
}

export default ShippingChart
