import './Main.css';


function UseActionState(){
    return(
        <div className="Main">
            <h2>useActionState</h2>
            <p>Call useActionState at the top level of your component to create component state that is updated when a form action is invoked. You pass useActionState an existing form action function as well as an initial state, and it returns a new action that you use in your form, along with the latest form state and whether the Action is still pending. The latest form state is also passed to the function that you provided.
            </p>
        </div>
    );
}

export default UseActionState;