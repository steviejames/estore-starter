"use client"

import SectionTitle from "@/components/ui/section-title"
import { Eye, Filter, Grid, List } from "lucide-react"
import { useState } from "react"


const reportData = [
    { date: "21 July 2022", paidUnits: 500, freeUnits: 500, kenpRead: 500 },
    { date: "22 July 2022", paidUnits: 450, freeUnits: 550, kenpRead: 480 },
    { date: "23 July 2022", paidUnits: 600, freeUnits: 400, kenpRead: 520 },
    { date: "24 July 2022", paidUnits: 550, freeUnits: 450, kenpRead: 510 },
    { date: "25 July 2022", paidUnits: 700, freeUnits: 300, kenpRead: 550 },
  ]

  
const Reports = () => {
    
    const [activeReportTab, setActiveReportTab] = useState('summary')

    
    return (
    <div className="container mx-auto p-6">
      <SectionTitle title="Reports" />
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <div className="flex border-b border-gray-700">
          {['Summary', 'Reports', 'History Report', 'Payment Reports', 'KENP Read', 'Month-to-Date'].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 ${activeReportTab === tab.toLowerCase().replace(' ', '-') ? 'bg-gray-700 text-white' : 'text-gray-400'}`}
              onClick={() => setActiveReportTab(tab.toLowerCase().replace(' ', '-'))}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="p-4">
          {activeReportTab === 'history-report' && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <div className="flex space-x-2">
                  <button className="p-2 bg-gray-700 rounded-md">
                    <List className="w-5 h-5" />
                  </button>
                  <button className="p-2 bg-gray-700 rounded-md">
                    <Grid className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex space-x-2">
                  <input type="text" placeholder="Search" className="px-3 py-1 bg-gray-700 rounded-md" />
                  <select className="px-3 py-1 bg-gray-700 rounded-md">
                    <option>Latest</option>
                  </select>
                  <button className="p-2 bg-gray-700 rounded-md">
                    <Filter className="w-5 h-5" />
                  </button>
                  <button className="p-2 bg-gray-700 rounded-md">
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-700">
                    <th className="p-2 text-left">Date</th>
                    <th className="p-2 text-left">Paid Units Sold EBook</th>
                    <th className="p-2 text-left">Free Units Sold EBook</th>
                    <th className="p-2 text-left">KENP Read</th>
                  </tr>
                </thead>
                <tbody>
                  {reportData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-900'}>
                      <td className="p-2">{row.date}</td>
                      <td className="p-2">{row.paidUnits}</td>
                      <td className="p-2">{row.freeUnits}</td>
                      <td className="p-2">{row.kenpRead}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {activeReportTab !== 'history-report' && (
            <p className="text-gray-400">Content for {activeReportTab} tab</p>
          )}
        </div>
      </div>
    </div>
  )}

  export default Reports