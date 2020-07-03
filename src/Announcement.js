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
            <h4>Hospital Capacity</h4>
                <div className="imgtxts">
                    <div id="imgtxt1">
                        < img src="./icu.png" />
                        <h5>59.3%</h5>
                        <p>ICU Beds</p >
                    </div>
                    <div id="imgtxt2">
                        < img src="./vented.png" />
                        <h5>21.9%</h5>
                        <p>Vented Beds</p >
                    </div>
                    <div id="imgtxt3">
                        < img src="./acute.png" />
                        <h5>91.3%</h5>
                        <p>Acute Beds</p >
                    </div>
                </div>
                <h4>Estimated number of days of PPE available</h4>
                <div className="imgtxts">
                    <div id="imgtxt1">
                        < img src="./glove.png" />
                        <h5>447.8</h5>
                        <p>Gloves</p >
                    </div>
                    <div id="imgtxt2">
                        < img src="eye.png" />
                        <h5>169.5</h5>
                        <p>PPE Eyewear</p >
                    </div>
                    <div id="imgtxt3">
                        < img src="s_mask.png" />
                        <h5>332.9</h5>
                        <p>Surgical Masks</p >
                    </div>
                    <div id="imgtxt4">
                        < img src="n95.png" />
                        <h5>866.1</h5>
                        <p>N95 Masks</p >
                    </div>
                </div>
            </div>
            <br />
        </div>
        );
    }
}

export default Announcement;