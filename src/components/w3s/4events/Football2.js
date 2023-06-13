function Football2() {
    const shoot = (a) => {
        alert(a);
    }

    return (
        <button className="abc" onClick={() => shoot("Goal!")}>Take the shot!</button>
    );
}

export default Football2;