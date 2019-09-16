
function TopSection(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(Header, {
            headImg: "5" }),
        React.createElement(IntroSection, {
            buttonColor: "coral_bt",
            headClass: "orange_bg",
            title: "Practice Research Skills",
            stoneNumber: "05",
            coverSrc: "assets/SSPages/SS5/ss5_cover_transparent.png",
            introPara: "It's time to develop the skills you'll need to do your research! Stepping Stone 5 includes activities that will build your skills in facilitation, note-taking, active listening, asking questions, understanding data, and mapping.",
            pageNums: "24",
            fileSize: "1.4" })
    );
}

function BotSection(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(DownloadButton, { color: "coral", buttonColor: "coral_bt" }),
        React.createElement(Toolkit, { currentStone: 5 }),
        React.createElement(Footer, null)
    );
}

ReactDOM.render(React.createElement(TopSection, null), document.getElementById('toproot'));
ReactDOM.render(React.createElement(BotSection, null), document.getElementById('botroot'));

