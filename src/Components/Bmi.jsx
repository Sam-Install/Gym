import React, { useState } from 'react'

const Bmi = () => {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmi, setBmi] = useState(null)
  const [status, setStatus] = useState('')

  const calculateBMI = () => {
    const w = parseFloat(weight)
    const h = parseFloat(height)
    if (!w || !h) {
      alert('Please enter both weight (kg) and height (cm).')
      return
    }
    const hMeters = h / 100
    const bmiValue = (w / (hMeters * hMeters)).toFixed(1)
    setBmi(bmiValue)

    let cat = ''
    const bmiNum = parseFloat(bmiValue)
    if (bmiNum < 18.5) cat = 'Underweight'
    else if (bmiNum < 25) cat = 'Normal'
    else if (bmiNum < 30) cat = 'Overweight'
    else cat = 'Obese'

    setStatus(cat)
  }

  const bmiCategories = [
    { range: 'Below 18.5', status: 'Underweight' },
    { range: '18.5 – 24.9', status: 'Normal' },
    { range: '25 – 29.9', status: 'Overweight' },
    { range: '30 and Above', status: 'Obese' },
  ]

  return (
    <div className="mt-8 md:mt-16 lg:mt-24 px-4">
      <div className="flex flex-col sm:flex-row gap-8">
        {/* Left: BMI input + result */}
        <div className="w-full sm:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Calculate Your BMI</h1>
          <div className="mb-4">
            <label className="block mb-2">Weight (kg):</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full border p-2 rounded"
              placeholder="Enter your weight in kg"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Height (cm):</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full border p-2 rounded"
              placeholder="Enter your height in cm"
            />
          </div>
          <button
            onClick={calculateBMI}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Calculate BMI
          </button>

          {bmi && (
            <div className="mt-4 p-4 bg-gray-100 rounded">
              <p>Your BMI: <strong>{bmi}</strong></p>
              <p>Status: <strong>{status}</strong></p>
            </div>
          )}
        </div>

        <div className="w-full sm:w-1/2 bg-orange-400 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">BMI Weight Status Table</h2>
          <table className="w-full table-auto border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 border">BMI Range</th>
                <th className="px-4 py-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {bmiCategories.map((c, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-2 border">{c.range}</td>
                  <td className="px-4 py-2 border">{c.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Bmi
