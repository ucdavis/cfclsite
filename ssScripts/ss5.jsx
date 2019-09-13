
function TopSection(props) {
    return (
        <div>
        <Header
            headImg="5"/>
        <IntroSection
            buttonColor="coral_bt"
            headClass="orange_bg"
            title="Practice Research Skills"
            stoneNumber="05"
            coverSrc="assets/SSPages/SS5/ss5_cover_transparent.png"
            introPara="It's time to develop the skills you'll need to do your research! Stepping Stone 5 includes activities that will build your skills in facilitation, note-taking, active listening, asking questions, understanding data, and mapping."
            pageNums="24"
            fileSize="1.4"/>
        </div>
    );
}

function BotSection(props) {
    return (
        <div>
            <DownloadButton color="coral" buttonColor="coral_bt"/>
            <Toolkit currentStone={5}/>
            <Footer/>
        </div>
    );
}

ReactDOM.render(<TopSection/>,document.getElementById('toproot'));
ReactDOM.render(<BotSection/>,document.getElementById('botroot'));
