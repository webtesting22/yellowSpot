import React, { useState, useEffect, useRef } from "react";
import "./Inventory.css";
import { Card } from 'antd';
import { Checkbox, Pagination } from 'antd';
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import { GrPowerReset } from "react-icons/gr";
const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
};
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import DynamicCreateShape from "../DynamicCreateShape/DynamicCreateShape";
import 'swiper/css/pagination';
import img from "../InventryManagement/animatedImg.svg"
import locationIcon from "../InventryManagement/LocationIcon.svg"
import NamedSelectComponent from "../FilterSelect/NameSelectComponent";
import { Row, Col, Image } from 'antd'
import Navbar from "../Navbar/Navbar";
import { Autoplay } from 'swiper/modules';
import { TypeAnimation } from 'react-type-animation';
import { Button, Modal } from 'antd';
import MagicHeading from "../MagicHeading/MagicHeading";
const Inventory = () => {
    const [showDrawer, setShowDrawer] = useState(false);
    const drawerRef = useRef(null);
    const [activeTab, setActiveTab] = useState('types');
    const [data, setData] = useState('')
    const [currentPage, setCurrentPage] = useState(1); // State to manage current page
    const [pageSize, setPageSize] = useState(10); // State to manage page size
    const [totalItems, setTotalItems] = useState(10); // Total number of items
    const [checkedTypes, setCheckedTypes] = useState([]);
    const [checkedArea, setCheckedArea] = useState([]);
    const [mediaTypes, setMediaTypes] = useState([]);
    const [selectedItemsOnType, setSelectedItemsOnType] = useState([]);
    const [areas, setAreas] = useState([]);
    const [selectedItemsOnArea, setSelectedItemsOnArea] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalItem, setModalItem] = useState(null);

    // Function to handle opening and closing of the modal
    const handleModal = () => {
        setIsModalOpen(!isModalOpen);
    }
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (drawerRef.current && !drawerRef.current.contains(event.target)) {
                setShowDrawer(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDrawer = () => {
        setShowDrawer(prevState => !prevState); // Toggle the drawer state
    };
    useEffect(() => {
        const fetchData = async () => {
            console.log("hello", import.meta.env)
            try {
                const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/inventoryManagement`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const jsonData = await response.json();
                const typeNames = Array.from(new Set(jsonData.allInv.map(item => item.typeOfMedia.name)));
                const areaNames = Array.from(new Set(jsonData.allInv.map(item => item.locations?.Area)));
                console.log('Area Names:', areaNames);
                setTotalItems(jsonData.totalItems);
                setMediaTypes(typeNames);
                setAreas(areaNames);
                setData(jsonData);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();

        // Cleanup function to cancel fetch request if component unmounts or if useEffect is called again
        return () => {
            // Any cleanup code here if needed
        };
    }, []);
    const handleLocationClick = (lat, lng) => {
        console.log("Latitude:", lat);
        console.log("Longitude:", lng);
        // Construct Google Maps URL with latitude and longitude
        const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
        // Open Google Maps in a new tab
        window.open(googleMapsUrl, '_blank');
    };
    // Filter the data based on selected checkboxes
    const filteredData = data && data.allInv.filter(item => {
        if (selectedItemsOnType.length > 0 && !selectedItemsOnType.includes(item.typeOfMedia.name)) {
            return false;
        }
        if (selectedItemsOnArea.length > 0 && !selectedItemsOnArea.includes(item.locations?.Area)) {
            return false;
        }
        return true;
    });
    const handlePaginationChange = (page, pageSize) => {
        setCurrentPage(page); // Update currentPage state
        setPageSize(pageSize); // Update pageSize state
    };
    // Empty dependency array means this effect will run once when the component mounts
    const uniqueNames = new Set();
    const uniqueAreaNames = new Set();
    const imgMap = [
        {
            img: img
        },
        {
            img: img
        },
        {
            img: img
        },

    ]
    return (
        <>

            <section className=" main-container-edit container p-0" id="InventoryFilters">
                <div className="left-side-container">
                    <div className="pc-filter-btn container">
                        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
                            <Swiper
                                direction={'vertical'}

                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}
                                modules={[Autoplay]}
                                className="mySwiper"
                                loop={true}
                                style={{ height: "10vh", width: "10vh", margin: "0px" }}
                            >
                                {imgMap.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <img src={item.img} alt="Yellow-Spot Logo" style={{ width: "100%", height: "100%", backgroundColor: "#FFED00", borderRadius: "50%" }} />
                                    </SwiperSlide>
                                ))}

                            </Swiper>
                            <div style={{ marginTop: "-30px", marginLeft: "30px" }}>
                                <MagicHeading text="Our Product" />
                            </div>
                        </div>
                        {/* <div className="small-slite-padding"></div> */}
                        <div className="filter-select">
                            <NamedSelectComponent
                                options={mediaTypes.map(type => ({ label: type, value: type }))}
                                title="Type"
                                selectedItems={selectedItemsOnType}
                                setSelectedItems={setSelectedItemsOnType}
                            />
                            <div className="small-slite-padding"></div>
                            <NamedSelectComponent
                                options={areas.map(area => ({ label: area, value: area }))}
                                title="Area"
                                selectedItems={selectedItemsOnArea}
                                setSelectedItems={setSelectedItemsOnArea}
                            />
                        </div>
                    </div>
                    {/* <div className="slite-padding"></div> */}
                    {/* <div className="mobile-filter-btn">
                        <button className="filter-button" onClick={toggleDrawer}>Filter <i className='bx bx-filter-alt'></i></button>
                        <div ref={drawerRef} className={`filter-drawer ${showDrawer ? 'visible' : ''}`}>

                            <div className="drawer-screen">

                                <div className="tabs-button">
                                    <button
                                        onClick={() => handleTabClick('types')}
                                        className={activeTab === 'types' ? 'active' : ''}
                                    >
                                        Types
                                    </button>
                                    <button
                                        onClick={() => handleTabClick('area')}
                                        className={activeTab === 'area' ? 'active' : ''}
                                    >
                                        Area
                                    </button>
                                </div>
                                <div className="drawer-container" style={{ padding: "10px 0px" }}>
                                    <button className="reset-btn"><i class='bx bx-reset' ></i></button>
                                    {activeTab === 'types' && (
                                        <div className="tab-content">
                                            Populate uniqueNames with unique names
                                            {data && data.allInv.forEach((item, index) => {
                                                uniqueNames.add(item.typeOfMedia.name);
                                            })}
                                            Render unique names with checkboxes
                                            {[...uniqueNames].map((name, index) => (
                                                <div key={index} className="container" style={{ margin: "5px 0px" }}>
                                                    <input
                                                        type="checkbox"
                                                        id={`nameCheckbox-${index}`}
                                                        checked={checkedTypes.includes(name)}
                                                        onChange={(e) => {
                                                            if (e.target.checked) {
                                                                setCheckedTypes([...checkedTypes, name]);
                                                            } else {
                                                                setCheckedTypes(checkedTypes.filter(item => item !== name));
                                                            }
                                                        }}
                                                    />
                                                    <label htmlFor={`nameCheckbox-${index}`}>{name}</label>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    {activeTab === 'area' && (
                                        <div className="tab-content">
                                            Populate uniqueAreaNames with unique names
                                            {data && data.allInv.forEach((item, index) => {
                                                if (item.locations && item.locations.Area) {
                                                    uniqueAreaNames.add(item.locations.Area);
                                                }
                                            })}
                                            Render unique Area names with checkboxes
                                            {[...uniqueAreaNames].map((name, index) => (
                                                <div key={index} className="container" style={{ margin: "5px 0px" }}>
                                                    <input
                                                        type="checkbox"
                                                        id={`areaCheckbox-${index}`}
                                                        checked={checkedArea.includes(name)}
                                                        onChange={(e) => {
                                                            if (e.target.checked) {
                                                                setCheckedArea([...checkedArea, name]);
                                                            } else {
                                                                setCheckedArea(checkedArea.filter(item => item !== name));
                                                            }
                                                        }}
                                                    />
                                                    <label htmlFor={`areaCheckbox-${index}`}>{name}</label>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>


                                <style>
                                    {`
                                        .tabs-button button {
                                            background-color: white;
                                            color: black;
                                            border: none;
                                            cursor: pointer;
                                            padding: 5px 20px;
                                        }

                                        .tabs-button button.active {
                                            background-color: black;
                                            color: #FFED00;
                                        }
                                        
                                    `}
                                </style>
                            </div>
                        </div>
                    </div> */}
                    <br />
                </div>

                <div className="inventry-card-restucture">
                    <Row style={{ display: "flex", justifyContent: "center" }}>
                        {filteredData && filteredData.slice(0, 8).map(item => (
                            <Col lg={6} key={item.id}>
                                <div className="complete-card-design">
                                    <div className="inside-card-data">
                                        <div className="card-image-container">
                                            <Image src={item.img} alt="" />
                                        </div>
                                    </div>
                                    <div className="location-details">
                                        <div style={{ width: "100%" }} className="location-content">
                                            <br />
                                            <a
                                                href="#"
                                                onClick={() => handleLocationClick(item.lat, item.lng)}
                                            >
                                                <p style={{ margin: "0px" }}>
                                                    <img src={locationIcon} alt="" style={{ color: "white" }} />
                                                    &nbsp;<span>{item.locations?.name}</span>
                                                </p>
                                            </a>
                                        </div>
                                        <hr style={{ margin: "3px 0px" }} />
                                        <div style={{
                                            display: "flex", justifyContent: "space-between",
                                            alignItems: "center"
                                        }}>
                                            <div>
                                                Dimensions
                                            </div>
                                            <div className="Content-info">
                                                <DynamicCreateShape width={item.width} height={item.height} />
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <p style={{ margin: "5px 0px" }}>
                                            Illumination: {item.Illu ?
                                                (item.Illu === "FL" ? "Front light" : (item.Illu === "BL" ? "Back light" : "No light"))
                                                : "No light"
                                            }
                                        </p>
                                </div>
                            </Col>
                        ))}

                        <Modal title="Image Details" width={1000} footer={null} visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>

                            <Row>
                                {filteredData && filteredData.map(item => (
                                    <Col lg={8} key={item.id}>
                                        <div className="complete-card-design">
                                            <div className="inside-card-data">
                                                <div className="card-image-container">
                                                    <Image src={item.img} alt="" />
                                                </div>
                                            </div>
                                            <div className="location-details">
                                            <br />
                                                <div style={{ width: "100%" }} className="location-content">
                                                   
                                                    <a
                                                        href="#"
                                                        onClick={() => handleLocationClick(item.lat, item.lng)}
                                                    >
                                                        <p style={{ margin: "0px" }}>
                                                            <img src={locationIcon} alt="" style={{ color: "white" }} />
                                                            &nbsp;<span style={{ color: "white" }}>{item.locations?.name}</span>
                                                        </p>
                                                    </a>
                                                </div>

                                                <div style={{
                                                    display: "flex", justifyContent: "space-between",
                                                    alignItems: "center"
                                                }}>
                                                    <div>
                                                        Dimensions
                                                    </div>
                                                    <div className="Content-info">
                                                        <DynamicCreateShape width={item.width} height={item.height} />
                                                    </div>
                                                </div>
                                                <p style={{ margin: "5px 0px" }}>
                                                        Illumination: {item.Illu ?
                                                            (item.Illu === "FL" ? "Front light" : (item.Illu === "BL" ? "Back light" : "No light"))
                                                            : "No light"
                                                        }
                                                    </p>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Modal>
                    </Row>
                    <div style={{ textAlign: "center", marginTop: "20px" }}>
                        <button onClick={handleModal} className="all-btn-stylings">Show all Inventories</button>
                    </div>


                </div>

            </section >
            <br /><br />
        </>
    )
}

export default Inventory;
