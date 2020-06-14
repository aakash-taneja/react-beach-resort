import React from 'react';
import {useContext} from 'react';
import {RoomContext} from '../context';
import Title from '../components/Title';


const getUnique = (items,value)=>{
    return[...new Set(items.map(item=> item[value]))]
}


function RoomsFilter({rooms}) {
    const context = useContext(RoomContext);
    const {
        handelChange,type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets
    } = context;
    // get unique types
    let types=getUnique(rooms,'type');
    // add all
    types=['all',...types];
    //map to jsx
    types = types.map((item,index)=>{
        return <option value ={item} key ={index}>{item}</option>
    })
    let people = getUnique(rooms,'capacity');
    people=people.map((item,index)=>{
        return <option key = {index} value= {item} >{item}</option>
    })
    return (
        <section className="filter-container">
            <Title title="search rooms"/>
            <from className="filter-form">
            {/* select type */}
            <div className="form-group">
                <lable htmlFor="type">room type</lable>
                <select name="type" id ="type"value={type} className="form-control" onChange={handelChange} >
                    {types}
                </select>
            </div>
            {/* end of select type */}
            {/*  guests*/}
            <div className="form-group">
                <lable htmlFor="capacity">Guests</lable>
                <select name="capacity" id ="capacity"value={capacity} className="form-control" onChange={handelChange} >
                {people}
                </select>
            </div>
            {/* end of guests */}
            {/* room price */}
            <div className="form-group">
                <label htmlFor="price">
                    room price Rs. {price}/-
                </label>
                <input type ="range" name="price" min = {minPrice} max={maxPrice} id="price" value={price} onChange={handelChange} className="form-control"  />
            </div>
            {/* end room price */}

            {/* size */}
            <div className="form-group">
                <lable htmlFor="size">room size</lable>
                <div className="size-inputs">
                    <input type="number" name="minsize" id="size" value= {minSize} onChange={handelChange} className="size-input" />
                    <input type="number" name="maxsize" id="size" value= {maxSize} onChange={handelChange} className="size-input" />
                </div>
            </div>
            {/* end of size */}
            {/* extras */}
            <div className="form-group">
                <div className="single-extra">
                    <input type="checkbox" name="breakfast" id="breakfast"checked={breakfast} onChange={handelChange}  />
                    <label htmlFor="breakfast">breakfast</label>
                </div>
                <div className="single-extra">
                    <input type="checkbox" name="pets" id="pets"checked={pets} onChange={handelChange}  />
                    <label htmlFor="pets">pets</label>
                </div>
            </div>
            {/* end of extras */}
            </from>            
        </section>
    )
}

export default RoomsFilter
