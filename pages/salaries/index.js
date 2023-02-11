import { useSelector } from "react-redux";

import { Navbar, SalaryInput, Title } from "components";
import BarChart from "../../utils/barchart";
import { useEffect, useState } from "react";

export default function Salaries() {
    const isDark = useSelector(state => state.darkMode.value)
    const [loading, setLoading] = useState(false)
    const [salaryInput, setSalaryInput] = useState({
        jobTitle: '',
        location: '',
        radius: ''
    })
    const [salaryData, setSalaryData] = useState([])

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };

    const fetchData = async () => {
        setLoading(true)
        await fetch('https://jsearch.p.rapidapi.com/estimated-salary?job_title=NodeJS%20Developer&location=New-York%2C%20NY%2C%20USA&radius=100', options)
            .then(response => response.json())
            .then(response => {
                console.log(response.data)
                setSalaryData(response.data)
            })
            .catch(err => console.error(err));
        setLoading(false)
    }

    const handleSearch = () => {
        if (salaryInput.jobTitle === '' || salaryInput.location === '' || salaryInput.radius === '') {
            alert('Please fill all the fields')
            return
        }
        fetch(`https://jsearch.p.rapidapi.com/estimated-salary?job_title=${salaryInput.jobTitle}&location=${salaryInput.location}&radius=${salaryInput.radius}`, options)
            .then(response => response.json())
            .then(response => {
                console.log(response.data)
                setSalaryData(response.data)
            })
            .catch(err => console.error(err));
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <main>
            <div className={`${!isDark ? 'bg-[#FAFAFB]' : 'bg-[#13131A]'}  h-full md:h-screen py-20 md:flex md:gap-20 md:px-20 px-6`}>
                <div className="md:flex-col md:w-[50%]">
                    <div className="mt-6">
                        <Title title="Estimated Salaries" />
                    </div>
                    <div className="mt-8">
                        <SalaryInput title='Job Title' salaryInput={salaryInput} setSalaryInput={setSalaryInput} field='jobTitle' />
                        <div className="md:flex gap-14">
                            <SalaryInput title='Location' salaryInput={salaryInput} setSalaryInput={setSalaryInput} field='location' />
                            <SalaryInput title='Radius' salaryInput={salaryInput} setSalaryInput={setSalaryInput} field='radius' />
                        </div>
                        <button className='bg-[#0BAB7C] w-full text-white py-4 rounded-lg md:px-8 mt-8' onClick={handleSearch}>Search</button>
                    </div>
                </div>
                <div className="md:w-[50%] md:flex md:pt-12 max-h-96 mt-8 md:mt-16">
                    {loading ? <div>Loading...</div> : <BarChart salaryData={salaryData} salaryInput={salaryInput} />}
                </div>
            </div>

        </main>
    )
}