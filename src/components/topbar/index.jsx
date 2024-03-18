import React from 'react';
import modlogo from '../../assets/images/mod-logo.png'

const Topbar = () => {
    return (
        <header style={{ margin: '0px !important' }}>
            <div style={{paddingTop: '5px', display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <a href="index.aspx" className="logo">
                        <img src={modlogo} alt="" style={{ height: '76px', width: '120px', marginLeft: '15px' }} />
                    </a>
                </div>
                <div>
                    <div>
                        <h2 id="Heading1" style={{ color: 'black', marginTop: '10px', marginBottom: '10px', textAlign: 'center' }}>
                            <b>Nevigation Management Pvt. Ltd. </b>
                        </h2>
                        <div>
                            <h4 style={{ color: 'maroon', margin: '2px' }}><b>Visitor Management System Powered By ABCDE</b></h4>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={modlogo} alt="" style={{ height: '76px', width: '120px', float: 'right' }} />
                    </div>
                </div>
            </div>

            <div style={{ height: '20px', backgroundColor: '#17a2b8' }}>
                {/* <a style={{ paddingLeft: '15px', paddingRight: '15px', color: 'white' }} href="index.aspx">HOME</a>  */}
                {/* <a style={{ paddingRight: '15px', float: 'right', color: 'white' }} href="index.aspx" onClick={() => window.history.back()}>BACK</a> */}
            </div>
        </header>
    );
};

export default Topbar;
