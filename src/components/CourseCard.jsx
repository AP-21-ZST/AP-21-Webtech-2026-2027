function CourseCard() {
    const obiekt = {
        name: "Jan",
        teacher: "Promista",
        hours: 132,
        completed: true
    };

    return (
        <section className="course-card" aria-labelledby="course-title">
            <div className="course-card__topline">
                <span className="course-card__icon">⌘</span>
                <span className="course-card__status">{obiekt.completed ? 'UKOŃCZONY' : 'W TOKU'}</span>
            </div>
            <h2 id="course-title">{obiekt.name} Web Development</h2>
            <p className="course-card__teacher">Prowadzący: <strong>{obiekt.teacher}</strong></p>
            <div className="course-card__progress">
                <div className="course-card__progress-label"><span>Postęp kursu</span><strong>{obiekt.completed ? '100%' : '0%'}</strong></div>
                <div className="course-card__progress-track"><span style={{ width: obiekt.completed ? '100%' : '0%' }} /></div>
            </div>
            <div className="course-card__details">
                <div><span>Godziny</span><strong>{obiekt.hours}</strong></div>
                <div><span>Minuty</span><strong>{obiekt.hours * 60}</strong></div>
                <div><span>Status</span><strong>{obiekt.completed ? 'Gotowy' : 'Aktywny'}</strong></div>
            </div>
        </section>
    );
}

export default CourseCard