import { Modal, Table } from 'antd'
import React from 'react'

const WeatherModal = (props) => {

    const columns = [
        {
            title: 'Condition',
            key: 'key',
            render: payload => {
                return payload.current.condition.text;
            }
        },
        {
            align:'center',
            key: 'key',
            render: payload => {
                return (
                    <div 
                        className='weather-icon'
                        style={{'background':`url(${payload.current.condition.icon})`}}
                    >
                    </div>
                )
            }
        },
        {
            title: 'Temperature',
            key: 'key',
            render: payload => {
                return `${payload.current.temp_c} °C / ${payload.current.temp_f} °F`;
            }
        },
        {
            title: 'Pressure',
            key: 'key',
            render: payload => {
                return `${payload.current.pressure_in} inHg / ${payload.current.pressure_mb} mb`;
            }
        },
        {
            title: 'Preciparation',
            key: 'key',
            render: payload => {
                return `0`;
            }
        },
        {
            title: 'Humidity',
            key: 'key',
            render: payload => {
                return payload.current.humidity;
            }
        },
        {
            title: 'Wind',
            key: 'key',
            render: payload => {
                return `${payload.current.wind_kph} kph / ${payload.current.wind_mph} mph`;
            }
        }
    ];

  return (
    <div className='weather-Modal'>
        <Modal
            title = {'Weather Details'}
            open = {props.weatherModal}
            width = {950}
            footer = {null}
            onCancel = {props.handleWeatherModal}
        >
            <Table
                dataSource={props.details}
                columns={columns}
            />
        </Modal>
    </div>
  )
}

export default WeatherModal
