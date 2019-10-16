
function TopSection(props) {
    return (
        <div>
        <Header
            headImg="3"/>
        <IntroSection
            buttonColor="coral_bt"
            headClass="orange_bg"
            title="Choosing a Focus:"
            subtitle="What do we want to change?"
            stoneNumber="03"
            coverSrc="assets/SSPages/SS3/ss3_cover_transparent.png"
            introPara="It's time to dive in and think critically about your community!"
            introPara2="In Stepping Stone 3, you will choose your project's focus after exploring past and current issues shaping your community as well as your own personal experiences."
            pageNums="24"
            fileSize="1.4"
            pdfPath="assets/SSPages/SS3/CFCL Stepping Stone 3.pdf"/>
        </div>
    );
}

function BotSection(props) {
    return (
        <div>
            <DownloadButton color="orange" buttonColor="orange_bt" pdfPath="assets/SSPages/SS3/CFCL Stepping Stone 3.pdf"/>
            <Toolkit currentStone={3}/>
            <Footer/>
        </div>
    );
}

ReactDOM.render(<TopSection/>,document.getElementById('toproot'));
ReactDOM.render(<BotSection/>,document.getElementById('botroot'));
