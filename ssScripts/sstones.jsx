'use strict';

function Header(props) {
    let titleClass = "title_container header" + props.headImg;
    let leftArrow = <a></a>;
    if (props.headImg != 1) {
        leftArrow = <a href={"ss"+ (parseInt(props.headImg)-1) +".html"}>&#x2039;</a>;
    }
    let rightArrow;
    if (props.headImg != 9) {
        rightArrow = <a href={"ss"+ (parseInt(props.headImg)+1) +".html"}>&#x203A;</a>;
    }
    return (
        <div className= {titleClass}>
            <div className="header">
                <a href="index.html">
                    <img className= "logo" src="assets/Logos/CFCL_final_Logonocomma.png"
                        alt="Community Futures, Community Lore Logo"/>
                </a>

                <nav>
                    <a className="current_page_link" href="OurApproach.html">Our Approach</a>
                    <a href="Stories.html">Stories</a>
                    <a href="FAQ.html">FAQ</a>
                    <a href="About.html">About</a>
                </nav>
            </div>
            <div className="top_step_nav in_margin">
                {leftArrow}
                {rightArrow}
            </div>
        </div>
    );
}

function IntroSection(props) {
    let altText = "Cover image of Stepping Stone "+props.stoneNumber;
    let classes = "intro_section in_margin " + props.headClass;
    let downloadClass= "download_button "+props.buttonColor;
    return (
        <div className={classes}>
            <p className="ss_num">{props.stoneNumber}</p>
            <h1>{props.title}</h1>
            <div className="split_section">
                <div className="intro_left">
                    <h4>{props.subtitle}</h4>
                    <br/><br/>
                    <p>{props.introPara}</p><br/>
                    <p>{props.introPara2}</p>
                    <br/>
                    <br/>
                    <div className="download_button_row">
                        <a className={downloadClass} href={props.pdfPath} download>
                            <img src="assets/SSPages/download.png"/>
                            <p>download</p>
                        </a>
                        <p>{props.pageNums} page PDF | {props.fileSize} MB</p>
                    </div>
                </div>
                <img className="coverImg intro_right" src={props.coverSrc} alt={altText}/>
            </div>
        </div>
    );
}
/*
function UpperRight(props) {

    let leftSide = props.leftInstr.map((instr) => <div><p>{instr}</p><br/></div>);
    let rightSide = props.rightInstr.map((instr) => <div><p>{instr}</p><br/></div>);
    return (
        <div className="up_right">
            <div className="top">
                <div><p className="bg_num">{props.index}.</p>
                <h4>{props.title}</h4></div>
                <img src={props.imgSrc} alt={props.imgAlt}/>
            </div>
            <div className="horizontal_line"></div>
            <div className="bot">
                <div>
                    <p className="purple">{props.leftTitle}</p>
                    <br/>
                    {leftSide}
                </div>

                <div>
                    <p className="purple">{props.rightTitle}</p>
                    <br/>
                    {rightSide}
                </div>
            </div>
        </div>
    );
}

function Right(props) {
    let instrElems = props.instrs.map((instr) => <div><p>{instr}</p><br/></div>);
    return (
        <div className="right">
            <div>
                <h4>{props.title}</h4>
                <div className="horizontal_line"></div>
                <br/>
                <div className="split">
                <p className="purple">{props.subtitle}</p>
                {instrElems}
                </div>
                <p className="bg_num">{props.index}.</p>
            </div>
            <img src={props.imgSrc} alt={props.imgAlt}/>
        </div>
    );
}

function Left(props) {
    let instrElems = props.instrs.map((instr) => <div><p>{instr}</p><br/></div>);
    return (
        <div className="right">
            <img src={props.imgSrc} alt={props.imgAlt}/>
            <div>
                <h4>{props.title}</h4>
                <div className="horizontal_line"></div>
                <br/>
                <div className="split">
                <p className="purple">{props.subtitle}</p>
                {instrElems}
                </div>
                <p className="bg_num">{props.index}.</p>
            </div>
        </div>
    );
}

function InstrTitle(props) {
    return (
        <div className="instr_title">
            <h2>What do I do in this Stepping Stone?</h2>
            <br/>
            <div><img src="assets/SSPages/time.png" /> <p className="bold">Time Commitment:</p><p> {props.timeCommit} sessions</p></div>
        </div>
    );
}

function LetsGo(props) {
    let leftSide = props.leftInstr.map((instr) => <div><p>{instr}</p><br/></div>);
    let rightSide = props.rightInstr.map((instr) => <div><p>{instr}</p><br/></div>);
    return (
        <div className="lets_go in_margin">
            <p className="bg_num">{props.index}.</p>
            <img src={props.imgSrc} alt={props.imgAlt}/>
            <h2>{props.title}</h2>
            <h4>{props.subtitle}</h4>
            <div className="horizontal_line"></div>
            <div className="split">
                <div className="split_half">
                    <p className="blue">{props.leftTitle}</p>
                    <br/>
                    {leftSide}
                </div>
                <div className="split_half">
                    <p className="blue">{props.rightTitle}</p>
                    <br/>
                    {rightSide}
                </div>
            </div>
        </div>
    );
}*/

function DownloadButton(props) {
    let buttonClasses = "download_button_inverse "+props.buttonColor+"_inv";
    let sectionClasses;
    if (props.bg) {
        sectionClasses="download_section " + props.bg;
    } else {
        sectionClasses="download_section neutral_bg";
    }
    return (
        <div className={sectionClasses}>
            <div>
                <h3 className={props.color}>Ready to get started?</h3>
                <a className={buttonClasses} href={props.pdfPath} download>
                    <img src="assets/SSPages/download.png" alt="Download Symbol"/>
                    <p>download</p>
                </a>
            </div>
        </div>
    );
}

class Toolkit extends React.Component {
    constructor(props) {
        super(props);
        let thumbnailSrcs = ["assets/OurApproach/thumbnails/CFCL Thumbnails-1.png",
                             "assets/OurApproach/thumbnails/CFCL Thumbnails-2.png",
                             "assets/OurApproach/thumbnails/CFCL Thumbnails-3.png",
                             "assets/OurApproach/thumbnails/CFCL Thumbnails-4.png",
                             "assets/OurApproach/thumbnails/CFCL Thumbnails-5.png",
                             "assets/OurApproach/thumbnails/CFCL Thumbnails-6.png",
                             "assets/OurApproach/thumbnails/CFCL Thumbnails-7.png",
                             "assets/OurApproach/thumbnails/CFCL Thumbnails-8.png",
                             "assets/OurApproach/thumbnails/CFCL Thumbnails-9.png"]
        let thumbnailTitles = []
        let currStone = props.currentStone;
        let leftMost = Math.max(props.currentStone - 2, 1);
        if (leftMost > 5) {
            leftMost = 5;
        }
        this.state = {
                        srcs: thumbnailSrcs,
                        titles: thumbnailTitles,
                        currentLeftMost: leftMost,
                        currentStone:currStone,
                        displayPopUp: false
                     }
        this.showPopUp = this.showPopUp.bind(this);
        this.hidePopUp = this.hidePopUp.bind(this);
        this.shiftLeft = this.shiftLeft.bind(this);
        this.shiftRight = this.shiftRight.bind(this);
    }

    showPopUp() {
        this.setState({displayPopUp: true});
    }

    hidePopUp() {
        this.setState({displayPopUp: false});
    }

    shiftLeft() {
        if (this.state.currentLeftMost > 1) {
            this.setState({currentLeftMost: this.state.currentLeftMost - 1});
        }
    }

    shiftRight() {
        if (this.state.currentLeftMost < 5) {
            this.setState({currentLeftMost: this.state.currentLeftMost + 1});
        }
    }

    render() {
        let steps = [<div className="arrow" onClick={this.shiftLeft}><p>&#x2039;</p></div>];
        for (let i = 0; i < 5; i++) {
            let hrefStr = "ss" + (i + this.state.currentLeftMost) + ".html";
            steps.push( <div className="steps">
                            <a href={hrefStr}><img src={this.state.srcs[i + this.state.currentLeftMost - 1]}/></a>
                        </div>);
        }
        steps.push(<div className="arrow" onClick={this.shiftRight}><p>&#x203A;</p></div>);
        let popup;
        if (this.state.displayPopUp) {
            let stones = this.state.srcs.map((src) => <img src={src}/>);
            let stoneLinks = [];
            for (let i = 0; i < 9; i ++) {
                let link = "ss" + (i+1) + ".html";
                stoneLinks.push(<a href={link}>{stones[i]}</a>)
            }
            popup= (<div className="popup">{stoneLinks}<p className="closePopUp" onClick={this.hidePopUp}>X</p></div>);
        }
        return(
            <div className="bot_step_nav">
                <h4 className="purple">The Toolkit</h4>
                <div className="sliding_menu">
                {steps}
                </div>
                <a onClick={this.showPopUp}>View all</a>
                {popup}
            </div>
        );
    }
}



function Footer() {
    return (
        <footer>
            <img className= "logo" src="assets/Logos/CFCL_final_Logo_whitenocomma.png"
                alt="Community Futures, Community Lore Logo"/>
            <img className= "davis_logo" src="assets/Logos/ucdavis_logo_gold.png"
                alt="UC Davis Logo"/>
        </footer>
    );
}
