import { Button, Modal, Spin, Table } from 'antd'
import React, { useState } from 'react'
import CityModal from './CityModal';

const CountryList = (props) => {

    const [cityModal , setCityModal] = useState(false);
    const [key, setKey] = useState(0);

    const data = props.details?.map((item,index)=>({
        key: index,
        ...item
    }));

    const handleCityModal = (key) => {
        if(!cityModal) {
            setKey(key);
        }
        setCityModal(!cityModal);
    }

    const columns = [
        {
            title: 'Id',
            key:'key',
            dataIndex: 'key'
        },
        {
            title: 'Country',
            key:'key',
            render: payload => {
                return payload.location.country
            }
        },
        {
            title: 'Time Zone',
            key:'key',
            render: payload => {
                return payload.location.tz_id
            }
        },{
            title: 'Capital Details',
            key: 'key',
            render: payload => {
                return <Button onClick={()=>(handleCityModal(payload.key))}>View</Button>
            }
        }
    ];

  return (
    <div className='country-List'>
        <Modal
            title = {'Weather ForeCast'}
            open = {true}
            
            width = {1000}
            footer = {null}
        >
        {props.details.length > 0 ?
            <Table
                title={()=>('Country List')}
                dataSource={data}
                columns={columns}
            />
            :
            <div className='spin-Container'>
                <Spin
                    size='large'
                />
            </div>
        }
        </Modal>
        {cityModal &&
            <CityModal
                details = {data.filter((item)=>(item?.key === key))}
                key = {key}
                cityModal = {cityModal}
                handleCityModal = {handleCityModal}
            />
        }
    </div>
  )
}

export default CountryList
