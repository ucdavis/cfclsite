
function TopSection(props) {
    return (
        <div>
        <Header
            headImg="9"/>
        <IntroSection
            buttonColor="orange_bt"
            headClass="navy_bg"
            title="Take Action"
            stoneNumber="09"
            coverSrc="assets/SSPages/SS9/ss9_cover.png"
            introPara="It's time to make change happen in your community! In this stepping stone, you will create a strategic plan and continue to work with key stakeholders and decision-makers to turn your research results into action."
            introPara2="In Stepping Stone 3, you will choose your project's focus after exploring past and current issues shaping your community as well as your own personal experiences."
            pageNums="5"
            fileSize="8"/>
        </div>
    );
}

function BotSection(props) {
    return (
        <div>
            <DownloadButton color="white" buttonColor="white_bt" bg="navy_bg"/>
            <Toolkit currentStone={9}/>
            <Footer/>
        </div>
    );
}

ReactDOM.render(<TopSection/>,document.getElementById('toproot'));
ReactDOM.render(<BotSection/>,document.getElementById('botroot'));
