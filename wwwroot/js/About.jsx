class About extends React.Component {
    render() {
        const imgSrc = "../public/read.JPG";
        return (
            <div>
                <div style={{ float: "left", width: "60%", paddingLeft: "10%", height: "80vh" }}>
                    <img src={imgSrc} alt="smart1" style={{ height: "90vh", width: "80%" }} /><br />
                </div>
                <div style={{ float: "right", textAlign: "justify", width: "40%", fontSize: "18px", height: "80vh" }}>
                    For the purpose of implementing the smart cities project,<br />
                    <b>Dehradun Smart City Limited (DSCL),</b> a Special Purpose<br /> Vehicle (SPV) for Dehradun Smart City Project has been<br /> incorporated, under the Indian Companies Act, 2013. <br /> <br /> The <b>focus is on sustainable and inclusive development</b>            and<br /> the idea is to look at compact areas, create a replicable model<br /> which will act like a light house to other aspiring cities. <br /> <br /> The <b>Dehradun Smart City Mission of the Government is a<br />
            bold, new initiative.</b> It is meant to set examples that can be<br /> replicated both within and outside the Smart City, catalysing the<br /> creation of similar Smart Cities in various regions and parts of<br /> the country. <br />
                    <br />
                    <a href="http://smartcitydehradun.uk.gov.in/" target="_blank"><input className="btn text-light btn-success" style={{ backgroundColor: "green", fontSize: "18px" }} type="button" value="READ MORE" /></a>
                </div>
            </div>
        );
    }
}


ReactDOM.render(
    <div>
        <About />
    </div>,
    document.getElementById('content')
);  