import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, Title as ChartTitle, Legend, Tooltip, BarElement } from 'chart.js'
import { useEffect, useState } from 'react'

ChartJS.register(CategoryScale, LinearScale, ChartTitle, Legend, Tooltip, BarElement)

const BarChart = () => {
    const [chartData, setChartData] = useState({
        datasets: [],
    })
    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ['Salary.com', 'ZipRecruiter', 'Talent.com'],
            datasets: [
                {
                    label: 'Minimum Salary',
                    data: [97000, 104000, 107000,],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: '#FDDD8C',
                },
                {
                    label: 'Maximum Salary',
                    data: [121000, 123000, 122000,],
                    borderColor: 'rgb(50,50,50)',
                    backgroundColor: 'rgba(11, 171, 124, 0.7',
                },
                {
                    label: 'Median Salary',
                    data: [112000, 117000, 115000,],
                    borderColor: 'rgb(50,50,50)',
                    backgroundColor: '#FFBBD7',
                },
            ],
        })
        setChartOptions({
            plugins: {
                title: {
                    display: true,
                    text: 'Estimated Salary for NodeJS Developer in New York',
                },
            },
            maintainAspectRatio: false,
            responsive: true,
        })
    }, [])

    return (
        <>
            <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
                <Bar data={chartData} options={chartOptions} />
            </div>
        </>
    )
}

export default BarChart