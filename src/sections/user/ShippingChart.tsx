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
import useResponsive from '~/hooks/useResponsive'

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
  const smDown = useResponsive('down', 'sm')

  const gradient = document.createElement('canvas').getContext('2d')
  const linearGradientGreen = gradient?.createLinearGradient(0, 0, 0, 300)
  linearGradientGreen?.addColorStop(0, 'rgba(96, 236, 142)')
  linearGradientGreen?.addColorStop(1, 'rgba(255, 255, 255, 0.1)')

  return (
    <div className='w-full xs:h-[314px] sm:h-[358px] md:h-[402px] p-5 xs:space-y-4 sm:space-y-5 bg-white/[76%] backdrop-blur-[80px] shadow-popover-custom-2 border-[1px] border-solid border-[#DADADA] xs:rounded-lg sm:rounded-[20px]'>
      <h6 className='xs:text-[16px] sm:text-[18px] md:text-[24px] font-customSemiBold xs:leading-[16.8px] sm:leading-[24px] md:leading-8 capitalize'>
        Shipping
      </h6>
      <div className='w-full xs:h-[185px] sm:h-[220px] md:h-[250px]'>
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
              labels: smDown ? labels.slice(0, 7) : labels,
              datasets: [
                {
                  fill: true,
                  data: (smDown ? labels.slice(0, 7) : labels).map(() => Math.floor(Math.random() * 100)),
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
        <Button
          variant='green'
          size='small'
          className='xs:w-[127px] xs:h-[38px] sm:w-[145px]'
          classNameText='xs:text-[14px] sm:text-[16px] !uppercase'
        >
          see detail
        </Button>
      </div>
    </div>
  )
}

export default ShippingChart
