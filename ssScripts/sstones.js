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
                React.createElement("img", { className: "logo", src: "assets/Logos/CFCL_final_Logonocomma.png",
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

        var thumbnailTitles = [];
        var currStone = props.currentStone;
        var leftMost = Math.max(props.currentStone - 2, 1);
        if (leftMost > 5) {
            leftMost = 5;
        }
        _this.state = {
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
            if (window.innerWidth < 720) {
                if (this.state.currentLeftMost > 0) {
                    this.setState({ currentLeftMost: this.state.currentLeftMost - 1 });
                }
            } else if (this.state.currentLeftMost > 1) {
                this.setState({ currentLeftMost: this.state.currentLeftMost - 1 });
            }
        }
    }, {
        key: "shiftRight",
        value: function shiftRight() {
            if (window.innerWidth < 800) {
                if (this.state.currentLeftMost < 6) {
                    this.setState({ currentLeftMost: this.state.currentLeftMost + 1 });
                }
            } else if (this.state.currentLeftMost < 5) {
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
            var display_num = 5;
            var offset = 0;
            if (window.innerWidth < 720) {
                display_num = 3;
                offset = 1;
            }
            for (var i = 0; i < display_num; i++) {
                var hrefStr = "ss" + (i + this.state.currentLeftMost + offset) + ".html";
                var srcStr = void 0;
                if (window.innerWidth < 800) {
                    srcStr = "assets/SSPages/Mobile_Thumbnails/ss" + (i + this.state.currentLeftMost + offset) + "thumbnail.jpg";
                } else {
                    srcStr = "assets/OurApproach/thumbnails/CFCL Thumbnails-" + (i + this.state.currentLeftMost + offset) + ".png";
                }
                steps.push(React.createElement(
                    "div",
                    { className: "steps" },
                    React.createElement(
                        "a",
                        { href: hrefStr },
                        React.createElement("img", { src: srcStr })
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
                var stoneLinks = [];
                for (var _i = 0; _i < 9; _i++) {
                    var link = "ss" + (_i + 1) + ".html";
                    var stone = void 0;
                    if (window.innerWidth < 720) {
                        stone = "assets/SSPages/Mobile_Thumbnails/ss" + (_i + 1) + "thumbnail.jpg";
                    } else {
                        stone = "assets/OurApproach/thumbnails/CFCL Thumbnails-" + (_i + 1) + ".png";
                    }
                    stoneLinks.push(React.createElement(
                        "a",
                        { href: link },
                        React.createElement("img", { src: stone })
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
        React.createElement("img", { className: "logo", src: "assets/Logos/CFCL_final_Logo_whitenocomma.png",
            alt: "Community Futures, Community Lore Logo" }),
        React.createElement("img", { className: "davis_logo", src: "assets/Logos/ucdavis_logo_gold.png",
            alt: "UC Davis Logo" })
    );
}

let downloads = document.getElementsByClassName("download_button");
let downloads2 = document.getElementsByClassName("download_button_inverse");

var downloadFunc = function() {
    console.log("download clicked");
    gtag('event', 'view_item', {
        
    });  
};

for (let i=0; i<downloads.length; i++){
    downloads[i].addEventListener('click', downloadFunc, false);
}
for (let i=0; i<downloads2.length; i++){
    downloads2[i].addEventListener('click', downloadFunc, false);
}