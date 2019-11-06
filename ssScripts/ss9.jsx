
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
            pageNums="5"
            fileSize="8"/>
        </div>
    );
}

function BotSection(props) {
    return (
        <div>
            <DownloadButton color="orange" buttonColor="orange_bt" bg="navy_bg"/>
            <Toolkit currentStone={9}/>
            <Footer/>
        </div>
    );
}

ReactDOM.render(<TopSection/>,document.getElementById('toproot'));
ReactDOM.render(<BotSection/>,document.getElementById('botroot'));
