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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const labels = ['17/05', '18/05', '19/05', '20/05', '21/05', '22/05', '23/05']

function RewardPointsChart() {
  return (
    <div className='w-1/3 h-[305px] p-[10px] py-5 flex flex-col justify-between rounded-xl bg-white/[44%] backdrop-blur-[40px] shadow-popover-custom-2'>
      <div className='w-full  flex items-start justify-between'>
        <div>
          <h6 className='text-[20px] font-customSemiBold leading-[21px] capitalize mb-1'>reward points</h6>
          <p className='font-customSemiBold leading-[16.8px] opacity-[.68] capitalize'>(USDT)</p>
        </div>
        <div className='flex items-center gap-1'>
          <img src={images.icons.platinum} alt='icon-platinum' />
          <h5 className='text-[32px] text-blueMain font-customSemiBold leading-[33.6px]'>690</h5>
        </div>
      </div>

      <div className='w-full h-[210px]'>
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
              labels,
              datasets: [
                {
                  data: labels.map(() => Math.floor(Math.random() * 100)),
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
