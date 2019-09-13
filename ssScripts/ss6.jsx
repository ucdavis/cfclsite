
function TopSection(props) {
    return (
        <div>
        <Header
            headImg="6"/>
        <IntroSection
            buttonColor="teal_bt"
            headClass="coral_bg"
            title="Conduct Research"
            stoneNumber="06"
            coverSrc="assets/SSPages/SS6/ss6_cover_transparent.png"
            introPara="It's time to go out and do your research! In Stepping Stone 6 you will finalize your research plan and collect data."
            pageNums="24"
            fileSize="1.4"/>
        </div>
    );
}

function BotSection(props) {
    return (
        <div>
            <DownloadButton color="coral" buttonColor="coral_bt"/>
            <Toolkit currentStone={6}/>
            <Footer/>
        </div>
    );
}

ReactDOM.render(<TopSection/>,document.getElementById('toproot'));
ReactDOM.render(<BotSection/>,document.getElementById('botroot'));
