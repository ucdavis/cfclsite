
function TopSection(props) {
    return (
        <div>
        <Header
            headImg="8"/>
        <IntroSection
            buttonColor="orange_bt"
            headClass="coral_bg"
            title="Create & Share Final Product"
            stoneNumber="08"
            coverSrc="assets/SSPages/SS8/ss8_cover_transparent.png"
            introPara="It's time to go public with your findings and celebrate! In this stepping stone, you bring together everything you've been working on to create your final product and share your research findings and recommendations with key decision makers, project partners, media outlets and community members."
            pageNums="24"
            fileSize="1.4"/>
        </div>
    );
}

function BotSection(props) {
    return (
        <div>
            <DownloadButton color="white" buttonColor="white_bt" bg="coral_bg"/>
            <Toolkit currentStone={8}/>
            <Footer/>
        </div>
    );
}

ReactDOM.render(<TopSection/>,document.getElementById('toproot'));
ReactDOM.render(<BotSection/>,document.getElementById('botroot'));
