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


    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch)

    if(!match){
        match = {
            route: routes[0],
            isMatch: true
        }
    }

    console.log(match)
    console.log(potentialMatches)

}


router()