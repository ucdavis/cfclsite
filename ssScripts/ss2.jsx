
function TopSection(props) {
    return (
        <div>
        <Header
            headImg="2"/>
        <IntroSection
            title="Choosing a Focus:"
            subtitle="What do we want to change?"
            stoneNumber="02"
            coverSrc="assets/SSPages/SS3/ss3_cover_transparent.png"
            introPara="It's time to dive in and think critically about your community!"
            introPara2="In Stepping Stone 3, you will choose your project's focus after exploring past and current issues shaping your community as well as your own personal experiences."
            pageNums="24"
            fileSize="1.4"/>
        </div>
    );
}

function BotSection(props) {
    return (
        <div>
            <DownloadButton/>
            <Toolkit currentStone={2}/>
            <Footer/>
        </div>
    );
}

ReactDOM.render(<TopSection/>,document.getElementById('toproot'));
ReactDOM.render(<BotSection/>,document.getElementById('botroot'));
