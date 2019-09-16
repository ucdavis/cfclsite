
function TopSection(props) {
    return (
        <div>
        <Header
            headImg="2"/>
        <IntroSection
            buttonColor="coral_bt"
            headClass="orange_bg"
            title="Get to Know Our Project & Team"
            stoneNumber="02"
            coverSrc="assets/SSPages/SS3/ss3_cover_transparent.png"
            introPara="It's time to meet your team! In Stepping Stone 2, you will start to build the relationships, guidelines and collective understanding you'll rely on throughout your entire project."
            pageNums="24"
            fileSize="1.4"/>
        </div>
    );
}

function BotSection(props) {
    return (
        <div>
            <DownloadButton color="orange" buttonColor="orange_bt"/>
            <Toolkit currentStone={2}/>
            <Footer/>
        </div>
    );
}

ReactDOM.render(<TopSection/>,document.getElementById('toproot'));
ReactDOM.render(<BotSection/>,document.getElementById('botroot'));
