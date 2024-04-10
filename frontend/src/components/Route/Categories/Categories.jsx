import React from "react";
import { styles } from "../../../styles/styles";
import { brandingData, categoriesData } from "../../../static/data";
import { useNavigate } from 'react-router-dom'
const Categories = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className={`${styles.section} hidden sm:block`}>
                <div
                    className={`branding my-12 flex justify-between w-full shadow-sm bg-white p-5 rounded-md`}
                >
                    {brandingData &&
                        brandingData.map((val, idx) => (
                            <div className="flex items-start" key={idx}>
                                {val.icon}
                                <div className="px-3">
                                    <h3 className="font-bold text-sm md:text-base">{val.title}</h3>
                                    <p className="text-xs md:text-sm">{val.Description}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            <div className={`${styles.section} bg-white p-6 rounded-lg mb-12`} id="categories">
                <div className="grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px]">
                    {
                        categoriesData && categoriesData.map((val, idx) => {
                            const handleSubmit = (val) => {
                                navigate(`/products?category=${val.title}`)
                            }
                            return (
                                <div key={val.id} className="w-full h-[100px] flex items-center justify-between cursor-pointer overflow-hidden px-3"
                                    onClick={() => handleSubmit(val)}>
                                    <h5 className={`text-[18px] leading-[1.3]`}>{val.title}</h5>
                                    <img src={val.image_Url} className="w-[120px] object-cover" alt="" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default Categories;
