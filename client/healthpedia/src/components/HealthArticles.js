
import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { addSubjectData } from '../redux/index'
import RelatedItem from "./RelatedItem";
import './healthpedia.css'



const HealthInfo = () => {

    const subjectData =  useSelector(state => state.subjectInfo);
    // console.log("Resource", subjectData);

    useEffect(() => {

        //*componentDidUnmount - clean up function
        //   return () => {
        //     effect
        //   };
    })//componenentDidMount

    return <>
        
        <div style={{height: "100vh"}} className="d-flex flex-column align-items-center">
        <br />
        <h1 className="text-white">Welcome to Healthpedia Information </h1>
        <br />

        <h5 className="text-info align-items-center">You can read more about the Topics or Categories you selected. You can also 'Click' on a link to read more about a specific subject of interest</h5>
        <br />

        <div>
                {subjectData.Result.Resources.Resource[0].Sections.section.map((section, index) => {
                return<>

                    <RelatedItem id={index} title={section.Title} content={section.Content}/>
                            {/* index, title, and content are props */}
                </>
            })}
        </div>
        
        </div>

    </>
}

export default HealthInfo;