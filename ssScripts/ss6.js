
function TopSection(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(Header, {
            headImg: "6" }),
        React.createElement(IntroSection, {
            buttonColor: "teal_bt",
            headClass: "coral_bg",
            title: "Conduct Research",
            stoneNumber: "06",
            coverSrc: "assets/SSPages/SS6/ss6_cover_transparent.png",
            introPara: "It's time to go out and do your research! In Stepping Stone 6 you will finalize your research plan and collect data.",
            pageNums: "24",
            fileSize: "1.4" })
    );
}

function BotSection(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(DownloadButton, { color: "coral", buttonColor: "coral_bt" }),
        React.createElement(Toolkit, { currentStone: 6 }),
        React.createElement(Footer, null)
    );
}

ReactDOM.render(React.createElement(TopSection, null), document.getElementById('toproot'));
ReactDOM.render(React.createElement(BotSection, null), document.getElementById('botroot'));

