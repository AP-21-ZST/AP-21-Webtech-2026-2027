function InfoBox() {
    return (
        <aside className="info-box" aria-labelledby="info-box-title">
            <div className="info-icon">i</div>
            <div>
                <p className="eyebrow">Wskazówka na dziś</p>
                <h2 id="info-box-title">Małe kroki dają duże projekty.</h2>
                <p>Po każdej sesji zapisz jedną rzecz, którą już rozumiesz. Regularność buduje pewność szybciej niż nauka wszystkiego naraz.</p>
                <p className="school-label">Profile szkoły</p>
                <ul className="school-list">
                    <li>technik programista</li>
                    <li>technik elektryk</li>
                    <li>technik informatyk</li>
                </ul>
            </div>
            <span className="info-decoration" aria-hidden="true">✦</span>
        </aside>
    );
}

export default InfoBox