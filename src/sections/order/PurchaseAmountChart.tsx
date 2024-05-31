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
import useResponsive from '~/hooks/useResponsive'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend)

const labels = ['14/05', '15/05', '16/05', '17/05', '18/05', '19/05', '20/05', '21/05', '22/05', '23/05']

function PurchaseAmountChart() {
  const smDown = useResponsive('down', 'sm')

  const gradient = document.createElement('canvas').getContext('2d')
  const linearGradientGreen = gradient?.createLinearGradient(0, 0, 0, 200)
  linearGradientGreen?.addColorStop(0, 'rgba(96, 236, 142)')
  linearGradientGreen?.addColorStop(1, 'rgba(255, 255, 255, 0)')

  return (
    <div className='xs:w-full sm:w-full md:w-2/3 xs:h-[229px] sm:h-[305px] xs:p-4 sm:p-5 px-[10px] flex flex-col justify-between xs:rounded-[10px] sm:rounded-xl bg-white/[44%] backdrop-blur-[40px] shadow-popover-custom-2'>
      <div className='w-full xs:px-[15px] sm:px-5 flex items-center justify-between'>
        <h6 className='xs:text-[16px] sm:text-[20px] font-customSemiBold xs:leading-[16.8px] sm:leading-[21px] capitalize'>
          Total Purchase amount
        </h6>
        <h5 className='xs:text-[20px] sm:text-[32px] text-greenLight font-customSemiBold leading-[21px]'>$5,930</h5>
      </div>

      <div className='w-full xs:h-[160px] sm:h-[210px]'>
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
                      return `$${tooltipItem.parsed.y}`
                    }
                  }
                }
              },
              scales: {
                y: { display: false }
              }
            }}
            data={{
              labels: smDown ? labels.slice(0, 6) : labels,
              datasets: [
                {
                  fill: true,
                  data: (smDown ? labels.slice(0, 6) : labels).map(() => Math.floor(Math.random() * 100)),
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
    </div>
  )
}

export default PurchaseAmountChart
