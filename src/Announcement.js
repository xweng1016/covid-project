import React from 'react';

class Announcement extends React.Component {
    render() {
        return (<div>
            <div className="sidebar">
                <h3>DO THE FIVE</h3>
                <p>Help stop coronavirus</p>
                <h5>1 HANDS Wash them often</h5>
                <h5>2 ELBOW Cough into it</h5>
                <h5>3 FACE Don’t touch it</h5>
                <h5>4 SPACE Keep safe distance</h5>
                <h5>5 HOME Stay if you can</h5>
                <br />
            </div>
            <br />
            <div className="sidebar">
                <div className="imgtxts">
                    <div id="imgtxt1">
                        < img src="./icu.png" />
                        <p>ICU Beds</p >
                    </div>
                    <div id="imgtxt2">
                        < img src="./vented.png" />
                        <p>Vented Beds</p >
                    </div>
                    <div id="imgtxt3">
                        < img src="./acute.png" />
                        <p>Acute Beds</p >
                    </div>
                </div>
                <br />
                <div className="imgtxts">
                    <div id="imgtxt1">
                        < img src="./glove.png" />
                        <p>Gloves</p >
                    </div>
                    <div id="imgtxt2">
                        < img src="eye.png" />
                        <p>PPE Eyewear</p >
                    </div>
                    <div id="imgtxt3">
                        < img src="s_mask.png" />
                        <p>Surgical Masks</p >
                    </div>
                    <div id="imgtxt4">
                        < img src="n95.png" />
                        <p>N95 Masks</p >
                    </div>
                </div>
            </div>
            <br />
            <div className="sidebar">
                <h4>Lastest News</h4>
                <ul>
                    <li><a href="https://bc.ctvnews.ca/3-deaths-from-covid-19-in-b-c-since-tuesday-all-community-outbreaks-declared-over-1.5008204">3 deaths from COVID-19 in B.C. since Tuesday, all community outbreaks declared over</a></li>
                    <li><a href="https://winnipeg.ctvnews.ca/no-new-covid-19-cases-2-more-recoveries-reported-in-manitoba-on-thursday-1.5008479">No new COVID-19 cases, 2 more recoveries reported in Manitoba on Thursday</a></li>
                </ul>
            </div>
        </div>
        );
    }
}

export default Announcement;