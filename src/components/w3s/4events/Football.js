function Football() {
    const shoot = () => {
        alert("Great Shot!");
    }

    return (
        <button className="abc" onClick={shoot}>Take the shot!</button>
    );
}

export default Football;