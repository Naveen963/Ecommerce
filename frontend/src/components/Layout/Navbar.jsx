import React from 'react'
import { styles } from '../../styles/styles'
import { navItems } from '../../static/data'
import { Link } from 'react-router-dom'

const Navbar = ({ active }) => {
    return (
        <div className={`${styles.normalFlex}`}>
            {
                navItems && navItems.map((val, idx) => (
                    <div className="flex" key={idx}>
                        <Link to={val.url} className={`${active === idx + 1 ? "text-[#17dd1f]" : "text-[#fff]"} font-[500] px-6 cursor-pointer`}>
                            {val.title}
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default Navbar