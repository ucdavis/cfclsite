
function TopSection(props) {
    return (
        <div>
        <Header
            headImg="4"/>
        <IntroSection
            buttonColor="purple_bt"
            headClass="teal_bg"
            title="Develop Our Research Plan"
            stoneNumber="04"
            coverSrc="assets/SSPages/SS4/ss4_cover_transparent.png"
            introPara="It's time to design your research! In this stepping stone you will identify what you want to know about your issue and figure out the best way to collect that information."
            pageNums="24"
            fileSize="1.4"/>
        </div>
    );
}

function BotSection(props) {
    return (
        <div>
            <DownloadButton color="purple" buttonColor="purple_bt"/>
            <Toolkit currentStone={4}/>
            <Footer/>
        </div>
    );
}

ReactDOM.render(<TopSection/>,document.getElementById('toproot'));
ReactDOM.render(<BotSection/>,document.getElementById('botroot'));
