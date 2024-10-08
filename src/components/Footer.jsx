function Footer(){
    function scrollTop(){
        window.scrollTo({ top: 0, behavior:'smooth' });
    }
    return(
        <>
            <div className="footer">
                <p id="footer-name">@copy;All rights reserved.</p>
                <button id="scroll-btn" onClick={scrollTop}><i className="fa-solid fa-angles-up"></i></button>
            </div>
        </>
    )
}
export default Footer;