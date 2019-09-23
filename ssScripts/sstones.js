'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Header(props) {
    var titleClass = "title_container header" + props.headImg;
    var leftArrow = React.createElement("a", null);
    if (props.headImg != 1) {
        leftArrow = React.createElement(
            "a",
            { href: "ss" + (parseInt(props.headImg) - 1) + ".html" },
            "\u2039"
        );
    }
    var rightArrow = void 0;
    if (props.headImg != 9) {
        rightArrow = React.createElement(
            "a",
            { href: "ss" + (parseInt(props.headImg) + 1) + ".html" },
            "\u203A"
        );
    }
    return React.createElement(
        "div",
        { className: titleClass },
        React.createElement(
            "div",
            { className: "header" },
            React.createElement(
                "a",
                { href: "index.html" },
                React.createElement("img", { className: "logo", src: "assets/Logos/CFCL_final_Logo.png",
                    alt: "Community Futures, Community Lore Logo" })
            ),
            React.createElement(
                "nav",
                null,
                React.createElement(
                    "a",
                    { className: "current_page_link", href: "OurApproach.html" },
                    "Our Approach"
                ),
                React.createElement(
                    "a",
                    { href: "Stories.html" },
                    "Stories"
                ),
                React.createElement(
                    "a",
                    { href: "FAQ.html" },
                    "FAQ"
                ),
                React.createElement(
                    "a",
                    { href: "About.html" },
                    "About"
                )
            )
        ),
        React.createElement(
            "div",
            { className: "top_step_nav in_margin" },
            leftArrow,
            rightArrow
        )
    );
}

function IntroSection(props) {
    var altText = "Cover image of Stepping Stone " + props.stoneNumber;
    var classes = "intro_section in_margin " + props.headClass;
    var downloadClass = "download_button " + props.buttonColor;
    return React.createElement(
        "div",
        { className: classes },
        React.createElement(
            "p",
            { className: "ss_num" },
            props.stoneNumber
        ),
        React.createElement(
            "h1",
            null,
            props.title
        ),
        React.createElement(
            "div",
            { className: "split_section" },
            React.createElement(
                "div",
                { className: "intro_left" },
                React.createElement(
                    "h4",
                    null,
                    props.subtitle
                ),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(
                    "p",
                    null,
                    props.introPara
                ),
                React.createElement("br", null),
                React.createElement(
                    "p",
                    null,
                    props.introPara2
                ),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(
                    "div",
                    { className: "download_button_row" },
                    React.createElement(
                        "a",
                        { className: downloadClass, href: props.pdfPath, download: true },
                        React.createElement("img", { src: "assets/SSPages/download.png" }),
                        React.createElement(
                            "p",
                            null,
                            "download"
                        )
                    ),
                    React.createElement(
                        "p",
                        null,
                        props.pageNums,
                        " page PDF | ",
                        props.fileSize,
                        " MB"
                    )
                )
            ),
            React.createElement("img", { className: "coverImg intro_right", src: props.coverSrc, alt: altText })
        )
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
    var buttonClasses = "download_button_inverse " + props.buttonColor + "_inv";
    var sectionClasses = void 0;
    if (props.bg) {
        sectionClasses = "download_section " + props.bg;
    } else {
        sectionClasses = "download_section neutral_bg";
    }
    return React.createElement(
        "div",
        { className: sectionClasses },
        React.createElement(
            "div",
            null,
            React.createElement(
                "h3",
                { className: props.color },
                "Ready to get started?"
            ),
            React.createElement(
                "a",
                { className: buttonClasses, href: props.pdfPath, download: true },
                React.createElement("img", { src: "assets/SSPages/download.png", alt: "Download Symbol" }),
                React.createElement(
                    "p",
                    null,
                    "download"
                )
            )
        )
    );
}

var Toolkit = function (_React$Component) {
    _inherits(Toolkit, _React$Component);

    function Toolkit(props) {
        _classCallCheck(this, Toolkit);

        var _this = _possibleConstructorReturn(this, (Toolkit.__proto__ || Object.getPrototypeOf(Toolkit)).call(this, props));

        var thumbnailSrcs = ["assets/OurApproach/thumbnails/CFCL Thumbnails-1.png", "assets/OurApproach/thumbnails/CFCL Thumbnails-2.png", "assets/OurApproach/thumbnails/CFCL Thumbnails-3.png", "assets/OurApproach/thumbnails/CFCL Thumbnails-4.png", "assets/OurApproach/thumbnails/CFCL Thumbnails-5.png", "assets/OurApproach/thumbnails/CFCL Thumbnails-6.png", "assets/OurApproach/thumbnails/CFCL Thumbnails-7.png", "assets/OurApproach/thumbnails/CFCL Thumbnails-8.png", "assets/OurApproach/thumbnails/CFCL Thumbnails-9.png"];
        var thumbnailTitles = [];
        var currStone = props.currentStone;
        var leftMost = Math.max(props.currentStone - 2, 1);
        if (leftMost > 5) {
            leftMost = 5;
        }
        _this.state = {
            srcs: thumbnailSrcs,
            titles: thumbnailTitles,
            currentLeftMost: leftMost,
            currentStone: currStone,
            displayPopUp: false
        };
        _this.showPopUp = _this.showPopUp.bind(_this);
        _this.hidePopUp = _this.hidePopUp.bind(_this);
        _this.shiftLeft = _this.shiftLeft.bind(_this);
        _this.shiftRight = _this.shiftRight.bind(_this);
        return _this;
    }

    _createClass(Toolkit, [{
        key: "showPopUp",
        value: function showPopUp() {
            this.setState({ displayPopUp: true });
        }
    }, {
        key: "hidePopUp",
        value: function hidePopUp() {
            this.setState({ displayPopUp: false });
        }
    }, {
        key: "shiftLeft",
        value: function shiftLeft() {
            if (this.state.currentLeftMost > 1) {
                this.setState({ currentLeftMost: this.state.currentLeftMost - 1 });
            }
        }
    }, {
        key: "shiftRight",
        value: function shiftRight() {
            if (this.state.currentLeftMost < 5) {
                this.setState({ currentLeftMost: this.state.currentLeftMost + 1 });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var steps = [React.createElement(
                "div",
                { className: "arrow", onClick: this.shiftLeft },
                React.createElement(
                    "p",
                    null,
                    "\u2039"
                )
            )];
            for (var i = 0; i < 5; i++) {
                var hrefStr = "ss" + (i + this.state.currentLeftMost) + ".html";
                steps.push(React.createElement(
                    "div",
                    { className: "steps" },
                    React.createElement(
                        "a",
                        { href: hrefStr },
                        React.createElement("img", { src: this.state.srcs[i + this.state.currentLeftMost - 1] })
                    )
                ));
            }
            steps.push(React.createElement(
                "div",
                { className: "arrow", onClick: this.shiftRight },
                React.createElement(
                    "p",
                    null,
                    "\u203A"
                )
            ));
            var popup = void 0;
            if (this.state.displayPopUp) {
                var stones = this.state.srcs.map(function (src) {
                    return React.createElement("img", { src: src });
                });
                var stoneLinks = [];
                for (var _i = 0; _i < 9; _i++) {
                    var link = "ss" + (_i + 1) + ".html";
                    stoneLinks.push(React.createElement(
                        "a",
                        { href: link },
                        stones[_i]
                    ));
                }
                popup = React.createElement(
                    "div",
                    { className: "popup" },
                    stoneLinks,
                    React.createElement(
                        "p",
                        { className: "closePopUp", onClick: this.hidePopUp },
                        "X"
                    )
                );
            }
            return React.createElement(
                "div",
                { className: "bot_step_nav" },
                React.createElement(
                    "h4",
                    { className: "purple" },
                    "The Toolkit"
                ),
                React.createElement(
                    "div",
                    { className: "sliding_menu" },
                    steps
                ),
                React.createElement(
                    "a",
                    { onClick: this.showPopUp },
                    "View all"
                ),
                popup
            );
        }
    }]);

    return Toolkit;
}(React.Component);

function Footer() {
    return React.createElement(
        "footer",
        null,
        React.createElement("img", { className: "logo", src: "assets/Logos/CFCL_final_Logo_white.png",
            alt: "Community Futures, Community Lore Logo" }),
        React.createElement("img", { className: "davis_logo", src: "assets/Logos/ucdavis_logo_gold.png",
            alt: "UC Davis Logo" })
    );
}

