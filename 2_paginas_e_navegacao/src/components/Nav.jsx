"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Nav = () => {
  const pathName = usePathname()
  return (
    <nav>
      <ul>
        <li>
          <Link className={`link ${pathName === "/" ? "active" : ""}`} href="/">Home</Link>
        </li>

        <li>
          <Link className={`link ${pathName === "/sobre" ? "active" : ""}`} href="/sobre">Sobre</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
