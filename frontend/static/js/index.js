const router = async ()=>{
    const routes = [
        {path: "/", view: ()=>{console.log("Viewing Dashboard")}},
        {path: "/posts", posts: ()=>{console.log("Viewing Posts")}},
        {path: "/settings", settings: ()=>{console.log("Viewing Settings")}}
    ]



    const potentialMatches = routes.map(route =>{
        return{
            route: route,
            isMatch: location.pathname === route.path  
        }
    })


    console.log(potentialMatches)

}


router()