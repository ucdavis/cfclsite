
function TopSection(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(Header, {
            headImg: "7" }),
        React.createElement(IntroSection, {
            buttonColor: "teal_bt",
            headClass: "purple_bg",
            title: "Analyzing Our Research Results",
            stoneNumber: "07",
            coverSrc: "assets/SSPages/SS7/ss7_cover_transparent.png",
            introPara: "It's time to make meaning out of all the data you collected! Through careful analysis, you will reveal the stories found in your data and develop your project's findings and recommendations.",
            pageNums: "24",
            fileSize: "1.4" })
    );
}

function BotSection(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(DownloadButton, { color: "teal", buttonColor: "teal_bt" }),
        React.createElement(Toolkit, { currentStone: 7 }),
        React.createElement(Footer, null)
    );
}

ReactDOM.render(React.createElement(TopSection, null), document.getElementById('toproot'));
ReactDOM.render(React.createElement(BotSection, null), document.getElementById('botroot'));

