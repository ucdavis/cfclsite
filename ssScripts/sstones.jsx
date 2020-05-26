'use strict';

/*function Header(props) {
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
}*/

/*function IntroSection(props) {
    let altText = "Cover image of Stepping Stone "+props.stoneNumber;
    let classes = "intro_section in_margin " + props.headClass;
    let downloadClass = "download_button "+props.buttonColor;
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
}*/

/*function DownloadButton(props) {
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
}*/

class Toolkit extends React.Component {
    constructor(props) {
        super(props);
        let thumbnailTitles = []
        let currStone = props.currentStone;
        let leftMost = Math.max(props.currentStone - 2, 1);
        if (leftMost > 5) {
            leftMost = 5;
        }
        this.state = {
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
        if (window.innerWidth < 720) {
            if (this.state.currentLeftMost > 0) {
                this.setState({currentLeftMost: this.state.currentLeftMost - 1});
            }
        } else if (this.state.currentLeftMost > 1) {
            this.setState({currentLeftMost: this.state.currentLeftMost - 1});
        }
    }

    shiftRight() {
        if (window.innerWidth < 800) {
            if (this.state.currentLeftMost < 6) {
                this.setState({currentLeftMost: this.state.currentLeftMost + 1});
            }
        } else if (this.state.currentLeftMost < 5) {
            this.setState({currentLeftMost: this.state.currentLeftMost + 1});
        }
    }
    
    render() {
        let steps = [<div className="arrow" onClick={this.shiftLeft}><p>&#x2039;</p></div>];
        let display_num = 5;
        let offset = 0;
        if (window.innerWidth < 720) {
            display_num = 3;
            offset = 1;
        }
        for (let i = 0; i < display_num; i++) {
            let hrefStr = "ss" + (i + this.state.currentLeftMost + offset) + ".html";
            let srcStr;
            if (window.innerWidth < 800) {
                srcStr = "assets/SSPages/Mobile_Thumbnails/ss"+ (i + this.state.currentLeftMost + offset) +"thumbnail.jpg";
            } else {
                srcStr = "assets/OurApproach/thumbnails/CFCL Thumbnails-"+ (i + this.state.currentLeftMost + offset) +".png";
            }
            steps.push( <div className="steps">
                            <a href={hrefStr}><img src={srcStr}/></a>
                        </div>);
        }
        steps.push(<div className="arrow" onClick={this.shiftRight}><p>&#x203A;</p></div>);
        let popup;
        if (this.state.displayPopUp) {
            let stoneLinks = [];
            for (let i = 0; i < 9; i ++) {
                let link = "ss" + (i+1) + ".html";
                let stone;
                if (window.innerWidth < 720) {
                    stone = "assets/SSPages/Mobile_Thumbnails/ss"+ (i + 1) +"thumbnail.jpg";
                } else {
                    stone = "assets/OurApproach/thumbnails/CFCL Thumbnails-"+ (i + 1) +".png";
                }
                stoneLinks.push(<a href={link}><img src={stone}/></a>)
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



/*function Footer() {
    return (
        <footer>
            <img className= "logo" src="assets/Logos/CFCL_final_Logo_whitenocomma.png"
                alt="Community Futures, Community Lore Logo"/>
            <img className= "davis_logo" src="assets/Logos/ucdavis_logo_gold.png"
                alt="UC Davis Logo"/>
        </footer>
    );
}*/
