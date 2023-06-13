import styles from "./Football3.module.css";

function Football3() {
    const shoot = (a) => {
        alert(a);
    }

    return (
        <button className='abc' onClick={() => shoot("Goal!")}>Take the shot!</button>
    );
}

export default Football3;