import React, { Component } from 'react'
import EdictionList from './EducationList'
class Education extends Component {
    constructor(props) {
        super(props)
        this.state = {
            EducationList: EdictionList
        }
    }
    render() {
        return (
            <div className="Education" style={{ padding: '0 83px 0 83px' }}>
                
                <div>
                    {
                        this.state.EducationList.map((datarow) =>
                            <React.Fragment key={datarow.id}>
                                <p>
                                   <b><i>{datarow.university}</i></b> <br />
                                    <i>{datarow.country}</i>
                                </p>
                                {
                                    (typeof (datarow.Description) == 'object') &&
                                    <div>
                                        {datarow.Description.map((subDatarow) =>
                                            <React.Fragment key={datarow.id}>
                                                <ul>

                                                    <li>{subDatarow.Description1}</li>

                                                </ul>
                                            </React.Fragment>
                                        )
                                        }
                                    </div> 
                                }
                            </React.Fragment>
                        )
                    }

                </div>


            </div>
        )
    }
} export default Education;
