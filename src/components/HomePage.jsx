import reactLogo from "../assets/beers.png";
function HomePage() {
    return (
        <div>
        <img src="{{ reactLogo }}" alt="react-logo"></img>
        <h1>All Beers</h1>
        <br/>
        <img src="https://images.unsplash.com/photo-1567696911980-2eed69a46042?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="random-beer" height="250" />

        <h1>Random Beers</h1>
        <br />
        <img src="https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmVlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="my-beer" height="250"/>
        <h1>My Beer</h1>
      </div>
    )
}

export default HomePage;