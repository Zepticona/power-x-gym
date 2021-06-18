const FullWidthBg = (props) => {
    let otherPage = true;
    const backgroundImageStyles = {
        backgroundImage: 'url(/hero.jpg)'
    }
    if(otherPage) {
        backgroundImageStyles.backgroundPosition = '0px -230px'
    }
    return <div style={backgroundImageStyles} className="full-width-bg">{props.children}</div>;
}

export default FullWidthBg;