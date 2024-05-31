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
import images from '~/assets'
import useResponsive from '~/hooks/useResponsive'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const labels = ['17/05', '18/05', '19/05', '20/05', '21/05', '22/05', '23/05']

function RewardPointsChart() {
  const smDown = useResponsive('down', 'sm')

  return (
    <div className='xs:w-full sm:w-full md:w-1/3 xs:h-[281px] sm:h-[305px] xs:px-4 sm:px-[10px] xs:py-4 sm:py-5 flex flex-col justify-between xs:rounded-[10px] sm:rounded-xl bg-white/[44%] backdrop-blur-[40px] shadow-popover-custom-2'>
      <div className='w-full  flex items-start justify-between'>
        <div>
          <h6 className='xs:text-[16px] sm:text-[20px] font-customSemiBold xs:leading-[16.8px] sm:leading-[21px] capitalize mb-1'>
            reward points
          </h6>
          <p className='xs:text-[14px] sm:text-[16px] font-customSemiBold xs:leading-[14.7px] sm:leading-[16.8px] opacity-[.68] capitalize'>
            (USDT)
          </p>
        </div>
        <div className='flex items-center gap-1'>
          <img
            src={images.icons.platinum}
            alt='icon-platinum'
            className='xs:w-[17.78px] xs:h-[16px] sm:w-5 sm:h-[18px]'
          />
          <h5 className='xs:text-[26px] sm:text-[32px] text-blueMain font-customSemiBold xs:leading-[27.6px] sm:leading-[33.6px]'>
            690
          </h5>
        </div>
      </div>

      <div className='w-full xs:h-[190px] sm:h-[210px]'>
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
                      return `${tooltipItem.parsed.y} USDT`
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
              labels: smDown ? labels.slice(0, 6) : labels,
              datasets: [
                {
                  data: (smDown ? labels.slice(0, 6) : labels).map(() => Math.floor(Math.random() * 100)),
                  borderColor: 'rgb(172, 204, 255)',
                  backgroundColor: 'rgba(172, 204, 255, 0.5)',
                  hoverBackgroundColor: 'rgb(84, 149, 252)',
                  borderRadius: 3
                }
              ]
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default RewardPointsChart
