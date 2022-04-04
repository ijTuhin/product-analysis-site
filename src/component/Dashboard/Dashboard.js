import React from 'react';
import MyAreaChart from '../Chart/MyAreaChart';
import MyLineChart from '../Chart/MyLineChart';
import './Dashboard.css';
const Dashboard = () => {
    return (
        <div>
            <div className='chart-container'>
                <MyLineChart></MyLineChart>
                <MyAreaChart></MyAreaChart>
            </div>
        </div>
    );
};

export default Dashboard;