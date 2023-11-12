import React from 'react'
import dataGlasses from './dataGlasses.json'
import GlassesItem from './GlassesItem'

export default function GlassesList() {
  return (
    <section id='glassesList' className='container-fluid pt-5 pb-5 bg-light text-dark'>
      <h1 className='text-center'>CHOOSE YOUR GLASSES</h1>
      <div className='row'>
        {/* model */}
        <div className='container model'>
          <img src="./img/model.jpg"/>
        </div>

        {/* glasses */}
        <div id='glassesItem' className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
          <div className="container">
            <GlassesItem />   
          </div>
        </div>
        <div id='glassesItem' className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
          <div className="container">
            <GlassesItem />   
          </div>
        </div>
        <div id='glassesItem' className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
          <div className="container">
            <GlassesItem />   
          </div>
        </div>
        <div id='glassesItem' className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
          <div className="container">
            <GlassesItem />   
          </div>
        </div>
        <div id='glassesItem' className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
          <div className="container">
            <GlassesItem />   
          </div>
        </div>
        <div id='glassesItem' className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
          <div className="container">
            <GlassesItem />   
          </div>
        </div>
        <div id='glassesItem' className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
          <div className="container">
            <GlassesItem />   
          </div>
        </div>
        <div id='glassesItem' className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
          <div className="container">
            <GlassesItem />   
          </div>
        </div>
        <div id='glassesItem' className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
          <div className="container">
            <GlassesItem />   
          </div>
        </div>
      </div>
    </section>
  )
}
