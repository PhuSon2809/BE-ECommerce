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
import images from '~/assets'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend)

const labels = [
  '10/05',
  '11/05',
  '12/05',
  '13/05',
  '14/05',
  '15/05',
  '16/05',
  '17/05',
  '18/05',
  '19/05',
  '20/05',
  '21/05',
  '22/05',
  '23/05',
  '24/05'
]

function TotalPurchasesChart() {
  const gradient = document.createElement('canvas').getContext('2d')
  const linearGradientGreen = gradient?.createLinearGradient(0, 0, 0, 250)
  linearGradientGreen?.addColorStop(0, 'rgba(96, 236, 142)')
  linearGradientGreen?.addColorStop(1, 'rgba(255, 255, 255, 0)')

  return (
    <section className='total-purchases h-[810px] px-5 py-[60px] flex flex-col items-center justify-between'>
      <div className='w-2/3 h-[430px] p-5 px-[10px] flex flex-col justify-between rounded-xl bg-gradient-to-br from-white/[.44] to-white/[.0968] backdrop-blur-[80px] shadow-7xl'>
        <div className='w-full px-5 flex items-center justify-between'>
          <h6 className='text-[28px] font-customSemiBold leading-[32px] capitalize text-white'>Total Purchases</h6>
          <h5 className='text-[36px] font-customSemiBold leading-[32px] bg-gradient-to-r from-greenMain to-blueMain text-transparent bg-clip-text'>
            3.657.893
          </h5>
        </div>

        <div className='w-full h-[340px]'>
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
                    backgroundColor: 'rgba(13, 13, 13, 0.3)',
                    borderColor: 'rgba(190, 198, 213, 0.3)',
                    borderWidth: 2,
                    bodyColor: '#fff',
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
                  x: {
                    ticks: {
                      color: 'white'
                    },
                    border: { color: 'white' },
                    grid: {
                      color: 'rgba(255, 255, 255, 0.4)'
                    }
                  },
                  y: {
                    display: false
                  }
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
      </div>

      <div className='w-full flex gap-5'>
        <div className='w-full h-[220px] p-[36px] flex flex-col justify-end bg-gradient-to-br from-white/[.44] to-white/[.0968] rounded-3xl shadow-7xl relative overflow-hidden backdrop-blur-[80px]'>
          <div className='size-[243px] absolute top-[-25%] right-5'>
            <img
              src={images.user.bg_user_tracking_visitor}
              alt='bg-number-visitors'
              className='size-full object-cover object-center'
            />
          </div>
          <h1 className='w-fit text-[48px] font-customSemiBold leading-[48px] text-transparent bg-gradient-to-r from-white to-[#C0FF7C] bg-clip-text'>
            2.850.339
          </h1>
          <p className='text-[20px] text-white font-customMedium leading-7'>The number of website visitors</p>
        </div>
        <div className='w-full h-[220px] p-[36px] flex flex-col justify-end bg-gradient-to-br from-white/[.44] to-white/[.0968] rounded-3xl shadow-7xl relative overflow-hidden backdrop-blur-[80px]'>
          <img
            src={images.user.bg_user_tracking_review}
            alt='bg-number-review'
            className='absolute top-[-25%] right-5'
          />
          <h1 className='w-fit text-[48px] font-customSemiBold leading-[48px] text-transparent bg-gradient-to-r from-white to-[#60EC8E] bg-clip-text'>
            20.000+
          </h1>
          <p className='text-[20px] text-white font-customMedium leading-7'>The number of product reviews & FAQ</p>
        </div>
        <div className='w-full h-[220px] p-[36px] flex flex-col justify-end bg-gradient-to-br from-white/[.44] to-white/[.0968] rounded-3xl shadow-7xl relative overflow-hidden backdrop-blur-[80px]'>
          <img src={images.user.bg_user_tracking_share} alt='bg-number-share' className='absolute top-[-25%] right-5' />
          <h1 className='w-fit text-[48px] font-customSemiBold leading-[48px] text-transparent bg-gradient-to-r from-white to-[#60ECEC] bg-clip-text'>
            33.000+
          </h1>
          <p className='text-[20px] text-white font-customMedium leading-7'>The number of product shares</p>
        </div>
      </div>
    </section>
  )
}

export default TotalPurchasesChart
