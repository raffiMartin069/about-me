export default function Introduction() {
    return (
        <div className='mx-auto text-center pt-5 px-5 pb-5 pb-sm-5 pb-md-5 pb-lg-5 pb-xl-5 pb-xxl-5' style={{maxWidth: '500px'}}>
            <ul id="intro">
                <li><h1 className="title-font">Hi my name is <abbr className="important-color">Rafael!</abbr></h1></li>
                <li><p className="text-font">I am an aspiring web and mobile developer</p></li>
            </ul>
            <div className="row align-items-start d-flex my-5">
                <div className="text-font col">Front-End</div>
                <div className="text-font col">Back-End</div>
            </div>
        </div>
    );
}
