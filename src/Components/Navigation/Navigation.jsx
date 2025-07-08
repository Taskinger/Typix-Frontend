import React from 'react'
import { navLinks } from '../../assets/assets'

const Navigation = () => {
  return (
    <div>
      <nav>
        <ul>
            {navLinks.map((nav) => (
                <li key={nav.id} className="inline-block mr-6">
                    <a href={nav.link} className="text-white hover:text-gray-400 duration-500 font-jockey">
                        {nav.title}
                    </a>
                </li>
            ))}
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
