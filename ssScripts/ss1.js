function TopSection(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(Header, {
            headImg: "1" }),
        React.createElement(IntroSection, {
            buttonColor: "coral_bt",
            headClass: "purple_bg",
            title: "Get Ready for Our Project",
            stoneNumber: "01",
            coverSrc: "assets/SSPages/SS1/ss1_cover.png",
            introPara: "So you are thinking about doing a Youth-led Participatory action Research (YPAR) project in your community or organization. Are you ready? In this first stepping stone, you will learn more about Community Futures Community Lore's approach to YPAR, assess your community and organization's readiness to do a project, plan and prepare for your project, and recruit your team.",
            introPara2: "Ready? Set? Go!",
            pageNums: "24",
            fileSize: "1.4" })
    );
}

function BotSection(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(DownloadButton, { color: "purple", buttonColor: "orange_bt" }),
        React.createElement(Toolkit, { currentStone: 1 }),
        React.createElement(Footer, null)
    );
}

ReactDOM.render(React.createElement(TopSection, null), document.getElementById('toproot'));
ReactDOM.render(React.createElement(BotSection, null), document.getElementById('botroot'));

