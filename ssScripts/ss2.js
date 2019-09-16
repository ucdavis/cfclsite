
function TopSection(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(Header, {
            headImg: "2" }),
        React.createElement(IntroSection, {
            buttonColor: "coral_bt",
            headClass: "orange_bg",
            title: "Get to Know Our Project & Team",
            stoneNumber: "02",
            coverSrc: "assets/SSPages/SS2/ss2_cover.png",
            introPara: "It's time to meet your team! In Stepping Stone 2, you will start to build the relationships, guidelines and collective understanding you'll rely on throughout your entire project.",
            pageNums: "24",
            fileSize: "1.4" })
    );
}

function BotSection(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(DownloadButton, { color: "orange", buttonColor: "orange_bt" }),
        React.createElement(Toolkit, { currentStone: 2 }),
        React.createElement(Footer, null)
    );
}

ReactDOM.render(React.createElement(TopSection, null), document.getElementById('toproot'));
ReactDOM.render(React.createElement(BotSection, null), document.getElementById('botroot'));

