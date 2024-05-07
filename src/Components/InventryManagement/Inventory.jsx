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
import 'swiper/css/pagination';
import img from "../InventryManagement/animatedImg.svg"
import locationIcon from "../InventryManagement/LocationIcon.svg"
import NamedSelectComponent from "../FilterSelect/NameSelectComponent";
import Navbar from "../Navbar/Navbar";
import { Autoplay } from 'swiper/modules';

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
            try {
                const response = await fetch('http://192.168.1.5:4040/api/inventoryManagement');
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
            <Navbar />
            <div className="section-padding"></div>
            <br />

            <section className="section-padding main-container-edit container">
                {/* <div className="open-overlay"></div> */}
                <div className="left-side-container">
                    <div className="pc-filter-btn">
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <Swiper
                                direction={'vertical'}

                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}
                                modules={[Autoplay]}
                                className="mySwiper"
                                loop={true}
                                style={{ height: "10vh", margin: "0px" }}
                            >
                                {imgMap.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <img src={item.img} alt="" style={{ width: "100%", height: "100%", backgroundColor: "white", borderRadius: "50%" }} />
                                    </SwiperSlide>
                                ))}

                            </Swiper>
                            <h6>Filters</h6>
                        </div>
                        <div className="small-slite-padding"></div>
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
                    <div className="slite-padding"></div>
                    <div className="mobile-filter-btn">
                        <button className="filter-button" onClick={toggleDrawer}>Filter <i class='bx bx-filter-alt'></i></button>
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
                                            {/* Populate uniqueNames with unique names */}
                                            {data && data.allInv.forEach((item, index) => {
                                                uniqueNames.add(item.typeOfMedia.name);
                                            })}
                                            {/* Render unique names with checkboxes */}
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
                                            {/* Populate uniqueAreaNames with unique names */}
                                            {data && data.allInv.forEach((item, index) => {
                                                if (item.locations && item.locations.Area) {
                                                    uniqueAreaNames.add(item.locations.Area);
                                                }
                                            })}
                                            {/* Render unique Area names with checkboxes */}
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
                    </div>
                </div>
                <div className="inventry-card-container ">
                    <div className="row w-100 m-auto">
                        {filteredData && filteredData.map(item => (
                            <div className="col-lg-4 col-md-6" style={{ padding: "12px" }} key={item.id}>
                                <Card>
                                    <div>
                                        <div className="card-img">
                                            <img src={item.img} alt="" style={{ width: "100%" }} />
                                        </div>
                                        <div className="small-slite-padding"></div>
                                        <div className="card-description">

                                            <h6>CodeNo: {item.CodeNo}</h6>
                                            <p><img src={locationIcon} alt="" style={{ color: "#FFED00" }} />
                                                <a
                                                    href="#"
                                                    onClick={() => handleLocationClick(item.lat, item.lng)}
                                                    style={{ marginLeft: "5px" }}
                                                >
                                                    {item.locations?.name}
                                                </a>
                                            </p>
                                            <div className="small-slite-padding"></div>
                                            <div className="small-slite-padding"></div>
                                            <div>
                                                <div className="card-dimentions">
                                                    <p>Dimensions (W X H) ft:</p>
                                                    <div style={{ display: "flex" }}>
                                                        <div>
                                                            {item.width}
                                                        </div>
                                                        *
                                                        <div>
                                                            {item.height}
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr style={{ margin: "10px 0px" }} />
                                                <div className="card-display">
                                                    <p>Display:</p>
                                                    <p>{item.display}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="small-slite-padding"></div>
                                    </div>
                                </Card>
                            </div>
                        ))}

                    </div>
                    {/* <div className="pagination-container">
                        <Pagination
                            current={currentPage}
                            pageSize={pageSize}
                            total={totalItems}
                            onChange={handlePaginationChange}
                            showSizeChanger
                            pageSizeOptions={['10', '20', '30', '40']}
                        />
                    </div> */}
                </div>
            </section>
        </>
    )
}

export default Inventory;
