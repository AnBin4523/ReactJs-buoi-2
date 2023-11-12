import React from 'react'
import dataGlasses from './dataGlasses.json'
import Header from './Header'
import GlassesList from './GlassesList'
import "./GlassesShop.css";

export default function GlassesShop() {
  return (
    <div>
        <Header />
        <GlassesList />
    </div>
  )
}
