
function TopSection(props) {
    return (
        <div>
        <Header
            headImg="7"/>
        <IntroSection
            buttonColor="teal_bt"
            headClass="purple_bg"
            title="Analyzing Our Research Results"
            stoneNumber="07"
            coverSrc="assets/SSPages/SS7/ss7_cover_transparent.png"
            introPara="It's time to make meaning out of all the data you collected! Through careful analysis, you will reveal the stories found in your data and develop your project's findings and recommendations."
            pageNums="24"
            fileSize="1.4"/>
        </div>
    );
}

function BotSection(props) {
    return (
        <div>
            <DownloadButton color="teal" buttonColor="teal_bt"/>
            <Toolkit currentStone={7}/>
            <Footer/>
        </div>
    );
}

ReactDOM.render(<TopSection/>,document.getElementById('toproot'));
ReactDOM.render(<BotSection/>,document.getElementById('botroot'));
