import React, { Component } from 'react'
import ExperienceList from './ExperienceList'
class Experience extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ExperienceList: ExperienceList
        }
    }
    render() {
        return (
            <div className="Experince">
                
                <div style={{ padding: '0 80px 0 80px' }}>{

                    this.state.ExperienceList.map((rowdata) =>
                        <React.Fragment key={rowdata.id}>
                            <p  >
                               <b><i>{rowdata.Roll}</i></b><br/>
                               <b><i>{rowdata.Company}</i></b> <br/>
                                <i>{rowdata.Descriprion}</i>
                            </p>


                            {
                                (typeof (rowdata.detail) == 'object') &&
                                    <React.Fragment>
                                        {rowdata.detail.map((subRowData) =>
                                            <React.Fragment key={subRowData.id}>
                                                <ul>

                                                    <li>{subRowData.detail1}</li>
                                                   
                                                </ul>
                                            </React.Fragment>
                                        )
                                        }
                                    </React.Fragment> 
                            }

                        </React.Fragment>
                    )
                }

            </div>
            </div>
                )
            }
            } 
export default Experience;