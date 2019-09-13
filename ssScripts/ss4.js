
function TopSection(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(Header, {
            headImg: "4" }),
        React.createElement(IntroSection, {
            buttonColor: "purple_bt",
            headClass: "teal_bg",
            title: "Develop Our Research Plan",
            stoneNumber: "04",
            coverSrc: "assets/SSPages/SS4/ss4_cover_transparent.png",
            introPara: "It's time to design your research! In this stepping stone you will identify what you want to know about your issue and figure out the best way to collect that information.",
            pageNums: "24",
            fileSize: "1.4" })
    );
}

function BotSection(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(DownloadButton, { color: "purple", buttonColor: "purple_bt" }),
        React.createElement(Toolkit, { currentStone: 4 }),
        React.createElement(Footer, null)
    );
}

ReactDOM.render(React.createElement(TopSection, null), document.getElementById('toproot'));
ReactDOM.render(React.createElement(BotSection, null), document.getElementById('botroot'));

