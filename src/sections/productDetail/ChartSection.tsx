import { useState } from 'react'
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

import { OptionSelect } from '~/@types/common'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend)

const labels = [
  'Nov 18',
  'Nov 19',
  'Nov 20',
  'Nov 21',
  'Nov 22',
  'Nov 23',
  'Nov 24',
  'Nov 25',
  'Nov 26',
  'Nov 27',
  'Nov 28',
  'Nov 28',
  'Nov 28',
  'Nov 28',
  'Nov 28',
  'Nov 28',
  'Nov 28',
  'Nov 28',
  'Nov 28',
  'Nov 28'
]

const FILTER_DAY: OptionSelect[] = [
  { value: '1d', label: '1D' },
  { value: '5d', label: '1W' },
  { value: '1w', label: '1W' },
  { value: '1m', label: '1M' },
  { value: '6m', label: '6M' },
  { value: '1y', label: '1Y' },
  { value: 'all', label: 'All' }
]

function ChartSection() {
  const [filterDay, setFilterDay] = useState<string>('1w')

  const gradient = document.createElement('canvas').getContext('2d')
  const linearGradient = gradient?.createLinearGradient(0, 0, 0, 400)
  linearGradient?.addColorStop(0, 'rgba(96, 236, 142)')
  linearGradient?.addColorStop(1, 'rgba(255, 255, 255, 0)')

  return (
    <section className='px-4 pt-[100px] flex flex-col items-center relative'>
      <div className='z-[100] mx-auto'>
        <h1 className='text-[56px] font-semibold capitalize leading-[72px] mb-[50px]'>Product Price Trend</h1>

        <div className='w-[1203px] h-[552px] bg-white/[.88] backdrop-blur-2xl rounded-3xl shadow-4xl'>
          <div className='flex items-center gap-4 p-10'>
            {FILTER_DAY.map((option) => (
              <button
                key={option.value}
                onClick={() => setFilterDay(option.value)}
                className={`h-[29px] flex items-center justify-center ${option.value === filterDay ? 'bg-black text-white hover:backdrop-blur-2xl' : 'bg-greyLight hover:bg-gray-300'} rounded px-4 py-2 transition-all ease-in-out duration-300`}
              >
                <p className='text-[18px] font-medium leading-none pt-1'>{option.label}</p>
              </button>
            ))}
          </div>

          <div className='w-full h-[420px] px-10'>
            <div className='ư-full h-full'>
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
                          const date = new Date()
                          return `${tooltipItem.label}, ${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}    +${tooltipItem.parsed.y}%`
                        }
                      }
                    }
                  },
                  scales: {
                    x: {
                      position: 'right',
                      grid: {
                        display: false
                      }
                    },
                    y: {
                      position: 'right',
                      min: 0,
                      max: 100,
                      ticks: {
                        stepSize: 20,
                        callback: function (value) {
                          return `+${value}%`
                        }
                      }
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
                      backgroundColor: linearGradient,
                      pointRadius: 2
                    }
                  ]
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className='w-[1400px] px-4 absolute bottom-[-10%] z-10'>
        <div className='w-full h-[398px] bg-gradient-to-t text-gray-400 from-[#F2F3F5] to-[#F2F3F5]/[.0] rounded-bl-[60px] rounded-br-[60px]'></div>
      </div>
    </section>
  )
}

export default ChartSection
