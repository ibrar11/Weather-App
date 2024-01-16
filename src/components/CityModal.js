import { Button, Modal, Table } from 'antd'
import React, {useState} from 'react'
import WeatherModal from './WeatherModal';

const CityModal = (props) => {

    const [weatherModal , setWeatherModal] = useState(false);

    const handleWeatherModal = () => {
        setWeatherModal(!weatherModal);
    }

    const columns = [
        {
            title: 'City',
            key: 'key',
            render: payload => {
                return payload.location.name
            }
        },
        {
            title: 'Region',
            key: 'key',
            render: payload => {
                return payload.location.name
            }
        },
        {
            title: 'Co-oridnates',
            key: 'key',
            render: payload => {
                return `Lat:${payload.location.lat} || Lon:${payload.location.lon}`
            }
        },
        {
            title: 'Local Time',
            key: 'key',
            render: payload => {
                return payload.location.localtime
            }
        },
        {
            title: 'Weather Details',
            key: 'key',
            render: payload => {
                return <Button onClick={handleWeatherModal}>View Details</Button>
            }
        }
    ];

  return (
    <div className='city-Modal'>
      <Modal
        title = {`Capital of ${props.details[0].location.country}`}
        open = {props.cityModal}
        width = {900}
        footer = {null}
        onCancel = {props.handleCityModal}
      >
        <Table
            dataSource={props.details}
            columns={columns}
        />
      </Modal>
      {weatherModal &&
        <WeatherModal
            details = {props.details}
            weatherModal = {weatherModal}
            handleWeatherModal = {handleWeatherModal}
        />
      }
    </div>
  )
}

export default CityModal
