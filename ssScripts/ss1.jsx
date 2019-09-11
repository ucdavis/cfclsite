function TopSection(props) {
    return (
        <div>
        <Header
            headImg="1"/>
        <IntroSection
            title="Get Ready for Our Project"
            stoneNumber="01"
            coverSrc="assets/SSPages/SS1/ss1_cover.png"
            introPara="So you are thinking about doing a Youth-led Participatory action Research (YPAR) project in your community or organization. Are you ready? In this first stepping stone, you will learn more about Community Futures Community Lore's approach to YPAR, assess your community and organization's readiness to do a project, plan and prepare for your project, and recruit your team."
            introPara2="Ready? Set? Go!"
            pageNums="24"
            fileSize="1.4"/>
        </div>
    );
}

function BotSection(props) {
    return (
        <div>
            <DownloadButton/>
            <Toolkit currentStone={1}/>
            <Footer/>
        </div>
    );
}

ReactDOM.render(<TopSection/>,document.getElementById('toproot'));
ReactDOM.render(<BotSection/>,document.getElementById('botroot'));
