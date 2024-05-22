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

const labels = ['5h', '6h', '7h', '8h', '9h', '10h', '']

const listFilters: OptionSelect[] = [
  { value: '1d', label: '1D' },
  { value: '1w', label: '1W' },
  { value: '1m', label: '1M' },
  { value: '1y', label: '1Y' }
]

type PurchasesChartProps = {
  className?: string
}

function PurchasesChart({ className }: PurchasesChartProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>('1d')

  const gradient = document.createElement('canvas').getContext('2d')
  const linearGradientGreen = gradient?.createLinearGradient(0, 0, 0, 400)
  linearGradientGreen?.addColorStop(0, 'rgba(96, 236, 142)')
  linearGradientGreen?.addColorStop(1, 'rgba(255, 255, 255, 0)')

  return (
    <section
      className={`xs:w-[281px] sm:w-full h-[320px] xs:p-4 sm:p-5 xs:pr-0 sm:pr-0 bg-greyMain rounded-2xl  xs:rounded-tr-none xs:rounded-br-none ${className}`}
    >
      <div className='flex items-center justify-between gap-5 pr-5'>
        <p className='xs:text-[18px] sm:text-[20px] font-customSemiBold capitalize'>purchases</p>
        <div className='flex items-center gap-2'>
          {listFilters.map((filter) => (
            <div
              key={filter.value}
              onClick={() => setSelectedFilter(filter.value as string)}
              className={`xs:px-[8px] sm:px-[10px] xs:h-[22px] sm:h-[27px] flex items-center rounded cursor-pointer transition-colors duration-300 ease-linear ${selectedFilter === filter.value ? 'bg-blackMain' : 'bg-white'}`}
            >
              <p
                className={`xs:text-[14px] sm:text-[16px] font-customMedium leading-none ${selectedFilter === filter.value ? 'text-white' : 'text-blackMain'}`}
              >
                {filter.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='w-full h-[230px] mt-5'>
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
                    return `${selectedFilter === '1d' ? 'Tody' : tooltipItem.label}, ${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}    ${tooltipItem.parsed.y}`
                  }
                }
              }
            },
            scales: {
              x: {
                position: 'right',
                grid: { display: true }
              },
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
                pointHoverRadius: 4,
                pointStyle: 'circle',
                tension: 0.5
              }
            ]
          }}
        />
      </div>
    </section>
  )
}

export default PurchasesChart
