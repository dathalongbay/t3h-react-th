import Car from "../components/w3s/Car";
import Football from "../components/w3s/4events/Football";
import Football2 from "../components/w3s/4events/Football2";
import Football3 from "../components/w3s/4events/Football3";

const myElement = <h1>I Love JSX!</h1>;

const Blogs = () => {
    return (<>
        <h1>Blog Articles</h1>
        {myElement}

        <div style={{border: '1px solid red', margin: '20px'}}>
            <Car />
        </div>

        <div style={{border: '1px solid red', margin: '20px'}}>
            <Football />
        </div>

        <div style={{border: '1px solid red', margin: '20px'}}>
            <Football2 />
        </div>

        <div style={{border: '1px solid red', margin: '20px'}}>
            <Football3 />
        </div>
    </>);
};

export default Blogs;