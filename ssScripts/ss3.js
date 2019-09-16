
function TopSection(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(Header, {
            headImg: "3" }),
        React.createElement(IntroSection, {
            buttonColor: "coral_bt",
            headClass: "orange_bg",
            title: "Choosing a Focus:",
            subtitle: "What do we want to change?",
            stoneNumber: "03",
            coverSrc: "assets/SSPages/SS3/ss3_cover_transparent.png",
            introPara: "It's time to dive in and think critically about your community!",
            introPara2: "In Stepping Stone 3, you will choose your project's focus after exploring past and current issues shaping your community as well as your own personal experiences.",
            pageNums: "24",
            fileSize: "1.4",
            pdfPath: "assets/SSPages/SS3/CFCLModule3OnePage.pdf" })
    );
}

function BotSection(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(DownloadButton, { color: "orange", buttonColor: "orange_bt", pdfPath: "assets/SSPages/SS3/CFCLModule3OnePage.pdf" }),
        React.createElement(Toolkit, { currentStone: 3 }),
        React.createElement(Footer, null)
    );
}

ReactDOM.render(React.createElement(TopSection, null), document.getElementById('toproot'));
ReactDOM.render(React.createElement(BotSection, null), document.getElementById('botroot'));

