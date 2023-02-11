import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, Title as ChartTitle, Legend, Tooltip, BarElement } from 'chart.js'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

ChartJS.register(CategoryScale, LinearScale, ChartTitle, Legend, Tooltip, BarElement)

const BarChart = ({ salaryData, salaryInput }) => {
    const isDark = useSelector(state => state.darkMode.value)
    const [chartData, setChartData] = useState({
        datasets: [],
    })
    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: [salaryData[0]?.publisher_name, salaryData[1]?.publisher_name, salaryData[2]?.publisher_name],
            datasets: [
                {
                    label: 'Minimum Salary',
                    data: [salaryData[0]?.min_salary, salaryData[1]?.min_salary, salaryData[2]?.min_salary],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: '#FDDD8C',
                },
                {
                    label: 'Maximum Salary',
                    data: [salaryData[0]?.max_salary, salaryData[1]?.max_salary, salaryData[2]?.max_salary,],
                    borderColor: 'rgb(50,50,50)',
                    backgroundColor: 'rgba(11, 171, 124, 0.7',
                },
                {
                    label: 'Median Salary',
                    data: [salaryData[0]?.median_salary, salaryData[1]?.median_salary, salaryData[2]?.median_salary,],
                    borderColor: 'rgb(50,50,50)',
                    backgroundColor: '#FFBBD7',
                },
            ],
        })
        setChartOptions({
            plugins: {
                title: {
                    display: true,
                    text: `Estimated Salary for ${salaryInput.jobTitle || 'Node JS Developer'} in ${salaryInput.location || 'New York'}`,
                },
            },
            maintainAspectRatio: false,
            responsive: true,
        })
    }, [salaryData])

    return (
        <>
            <div className={`w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 rounded-lg ${isDark ? 'bg-[#1C1C24]' : 'bg-white'}`}>
                <Bar data={chartData} options={chartOptions} />
            </div>
        </>
    )
}

export default BarChart