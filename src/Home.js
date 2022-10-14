import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    //const [name, setName] = useState("Anuja");

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id)
    //     setBlogs(newBlogs);
    // }

    const {data: blogs , ispending , error} = useFetch('http://localhost:8000/blogs');

    return (  
        <div className="home">
            {error && <div>{error}</div>}
            {/* Props as a parameter */}
            { ispending && <div>Loading...!</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs.!"/>}     
            {/* <button onClick={() => setName("Ameya")}>Change Name</button> */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === "Ameya")} title="Ameya's Blogs.!" /> */}
        </div>
    );
}

//let name = "Ameya";
// const [name,setName] = useState('Manasi');
// const [age,setAge] = useState(30);
    
// const handleClick = () => {
//     setName("Ameya");
//     setAge(20);
// }

{/* <p>{name} is {age} years old.</p>
<button onClick={handleClick}>Click Me</button> */}
//////////////////////////////////////////////
// const handleClickAgain = (name,e) => {
//     console.log("Hello " + name , e.target);
// }

{/* <button onClick={(e) => handleClickAgain("Ameya",e)}>Clicke Me Again</button> */}

// { title: "My new website", body:"lorem ipsum...", author:"Ameya", id: 1},
//         { title: "My Food blog", body:"lorem ipsum...", author:"Atharva", id: 2},
//         { title: "My Supermarket experience", body:"lorem ipsum...", author:"Pratik", id: 3},
//         { title: "My Political opinion", body:"lorem ipsum...", author:"Ameya", id: 4}

export default Home;