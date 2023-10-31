window.addEventListener("scroll",(ev)=>{
    let headertext = document.getElementById("header-text")
    let body = document.querySelector("body")
    let top = body.getBoundingClientRect().top
    headertext.style.marginLeft = (top/10)+"px"
})

let projects = [
    {name:"LearnJoy",image:"./assets/learnjoy.jpg",tools:"Typscript,Node,ExpressJS,MongoDB,Angular",
    description:
    "A quiz webapp that allows students to refresh their memory on topics taught in school, add knowledge to their already existing ones and have fun with it. It includes questions, acheivements, progress e.t.c. The quiz provides hints in the form of images to help students quickly remember the answers",
    link:"",githublink:"https://github.com/amethystcoder/learn.joy"},
    {name:"Jeji",image:"./assets/Jeji.jpg",tools:"VueJS,JavaScript,MongoDB,Node,ExpressJS",
    description:
    "A basic shopping webapp built just for fun. Might later add other features and improvements, but for now, its still in the process",
    link:"",githublink:"https://github.com/amethystcoder/jeji"},
    {name:"NLAdvice",image:"./assets/NLADVICE.jpg",tools:"C++,window.h",
    description:
    "I wrote this app for a specific reason. To reduce the stress related to writing legal advices. I'm working on a future version that uses AI to generate legal advices......",
    link:"",githublink:"https://github.com/amethystcoder/JejiNLAdvice"},
    {name:"Debby's dreams",image:"./assets/debbiesdreams.jpg",tools:"JavaScript,HTML,CSS,Node,ExpressJS,MongoDB",
    description:"A blog and personal website of a legal practitioner where issues like gender law, general law and other legal issues are discussed",
    link:"",githublink:"https://github.com/amethystcoder/"},
    {name:"Markt",image:"./assets/Markt.jpg",tools:"Angular,Typescript,Python,PHP,SQL",
    description:"A community-like shopping app that allows sellers and buyers transact with emphasis on security and convenience. It allows buyers to buy goods from sellers closest to them selling the products they want rather than having to wait a long while for it. It also removes the issue of not getting the product requested using strict security methods. Buyers can also request for products they want rather than having to search, and with low delivery prices too (emphasis on low)",
    link:"",githublink:"https://github.com/amethystcoder/markt_angular"},
    {name:"Pong game",image:"./assets/Ponggame.jpg",tools:"C++,SFML",
    description:"I made this game when I first stumbled upon SFML while checking graphic libraries online. I decided to get it and play around with it and then created this game with it. I have done a lot of other stuff with SFML but unfortunately none of them have been able to make it to remote repos",
    link:"",githublink:"https://github.com/amethystcoder/Pong-game-First-try-at-sfml"},
    {name:"Colesa",image:"./assets/Colesa.jpg",tools:"HTML,CSS,JavaScript,PHP",
    description:"A site for a medical center with online appointments, online checkups and other stuff",
    link:"",githublink:"https://github.com/amethystcoder/colesa"},
    {name:"Amethyste",image:"./assets/Amethyste.jpg",tools:"HTML,CSS,JavaScript",
    description:"That's this site lol",
    link:"",githublink:"https://github.com/amethystcoder/portfolio_project"},
    {name:"Ajijola-Jesu",image:"./assets/Ajijolajesu.jpg",tools:"VueJS,MongoDB,ExpressJS",
    description:"A website I volunteered to make for a christian organization and church. Added features that allow members around the world to interact and participate in services, view tenets, service roster, events, e.t.c",
    link:"",githublink:"https://github.com/amethystcoder/ajijola-jesu"},
    {name:"Committee for Greater Nigeria",image:"./assets/CGN.jpg",tools:"HTML,CSS,JavaScript",
    description:"A website I made for an NGO. Wasn't really designed as I would like but I added it here so my learning process can be seen",
    link:"",githublink:""},


    {name:"LearnJoy",image:"./assets/learnjoy.jpg",tools:"Typscript,Node,ExpressJS,MongoDB,Angular",
    description:
    "A quiz webapp that allows students to refresh their memory on topics taught in school, add knowledge to their already existing ones and have fun with it. It includes questions, acheivements, progress e.t.c. The quiz provides hints in the form of images to help students quickly remember the answers",
    link:"",githublink:"https://github.com/amethystcoder/learn.joy"},
    {name:"Jeji",image:"./assets/Jeji.jpg",tools:"VueJS,JavaScript,MongoDB,Node,ExpressJS",
    description:
    "A basic shopping webapp built just for fun. Might later add other features and improvements, but for now, its still in the process",
    link:"",githublink:"https://github.com/amethystcoder/jeji"},
    {name:"NLAdvice",image:"./assets/NLADVICE.jpg",tools:"C++,window.h",
    description:
    "I wrote this app for a specific reason. To reduce the stress related to writing legal advices. I'm working on a future version that uses AI to generate legal advices......",
    link:"",githublink:"https://github.com/amethystcoder/JejiNLAdvice"},
    {name:"Debby's dreams",image:"./assets/debbiesdreams.jpg",tools:"JavaScript,HTML,CSS,Node,ExpressJS,MongoDB",
    description:"A blog and personal website of a legal practitioner where issues like gender law, general law and other legal issues are discussed",
    link:"",githublink:"https://github.com/amethystcoder/"},
    {name:"Markt",image:"./assets/Markt.jpg",tools:"Angular,Typescript,Python,PHP,SQL",
    description:"A community-like shopping app that allows sellers and buyers transact with emphasis on security and convenience. It allows buyers to buy goods from sellers closest to them selling the products they want rather than having to wait a long while for it. It also removes the issue of not getting the product requested using strict security methods. Buyers can also request for products they want rather than having to search, and with low delivery prices too (emphasis on low)",
    link:"",githublink:"https://github.com/amethystcoder/markt_angular"},
    {name:"Pong game",image:"./assets/Ponggame.jpg",tools:"C++,SFML",
    description:"I made this game when I first stumbled upon SFML while checking graphic libraries online. I decided to get it and play around with it and then created this game with it. I have done a lot of other stuff with SFML but unfortunately none of them have been able to make it to remote repos",
    link:"",githublink:"https://github.com/amethystcoder/Pong-game-First-try-at-sfml"},
    {name:"Colesa",image:"./assets/Colesa.jpg",tools:"HTML,CSS,JavaScript,PHP",
    description:"A site for a medical center with online appointments, online checkups and other stuff",
    link:"",githublink:"https://github.com/amethystcoder/colesa"},
    {name:"Amethyste",image:"./assets/Amethyste.jpg",tools:"HTML,CSS,JavaScript",
    description:"That's this site lol",
    link:"",githublink:"https://github.com/amethystcoder/portfolio_project"},
    {name:"Ajijola-Jesu",image:"./assets/Ajijolajesu.jpg",tools:"VueJS,MongoDB,ExpressJS",
    description:"A website I volunteered to make for a christian organization and church. Added features that allow members around the world to interact and participate in services, view tenets, service roster, events, e.t.c",
    link:"",githublink:"https://github.com/amethystcoder/ajijola-jesu"},
    {name:"Committee for Greater Nigeria",image:"./assets/CGN.jpg",tools:"HTML,CSS,JavaScript",
    description:"A website I made for an NGO. Wasn't really designed as I would like but I added it here so my learning process can be seen",
    link:"",githublink:""}
]



window.addEventListener("load",(ev)=>{
   /*  let header = document.querySelector("header")
    setInterval(() => {
        for(i = 0; i < 6; i++){
            let star = document.createElement("span")
            star.classList.add("star")
            star.style.left = Math.floor(Math.random() * 100) + "px"
            star.style.right = Math.floor(Math.random() * 100) + "px"
            header.appendChild(star)
        }
    }, 1000); */

    let stackContainer = document.querySelector(".stack-container")
    let skill_list = [{name:'JS',color:'black',backgroundColor:'yellow'},
                        {name:'HTML',color:'white',backgroundColor:'#c74200'},
                        {name:'C++',color:'white',backgroundColor:'#0056ab'},
                        {name:'PHP',color:'white',backgroundColor:'#8a02d3'},
                        {name:'Py',color:'white',backgroundColor:'#03299b'},
                        {name:'Node',color:'white',backgroundColor:'#067200'},
                        {name:'Angular',color:'white',backgroundColor:'#721300'},
                        {name:'Git',color:'white',backgroundColor:'#b24100'}]
    const pushButton = document.querySelector("#push-button")
    const popButton = document.querySelector("#pop-button")

    let stackAddedNodes = []
    pushButton.addEventListener("click",(ev)=>{
        if((skill_list.length - stackAddedNodes.length)-1 >= 0){
            let element = document.createElement("div")
            element.innerHTML = skill_list[(skill_list.length - stackAddedNodes.length)-1].name
            element.classList.add("project-box")
            element.style.backgroundColor = skill_list[(skill_list.length - stackAddedNodes.length)-1].backgroundColor
            element.style.color = skill_list[(skill_list.length - stackAddedNodes.length)-1].color
            element.style.width = (parseInt(stackContainer.style.width) / skill_list.length) + "px"
            stackAddedNodes.push(element)
            stackContainer.appendChild(element)
        }
    })
    popButton.addEventListener("click",(ev)=>{
        if(stackAddedNodes.length > 0){
            stackContainer.removeChild(stackAddedNodes.pop())
        }
    })

    
    /* let orbit_size = 70
    let orbit_speed = 4
    skill_list.forEach((skill)=>{
        let orbit = document.createElement("div")
        let spec_skill = document.createElement("div")

        orbit.classList.add("orbit")
        orbit.style.width = orbit_size+"px"
        orbit.style.height = orbit_size+"px"
        orbit.style.animationDuration = orbit_speed+"s"
        spec_skill.classList.add("programming_planet")
        spec_skill.innerHTML = skill.name
        spec_skill.style.fontSize = 8+'px'
        orbit.appendChild(spec_skill)
        skillDisplay.appendChild(orbit)
        orbit_size += 40
        orbit_speed += 0.5
    }) */


    let work_slider = document.querySelector('.work-slider')
    projects.forEach((project)=>{
        let newproject = document.createElement('div')
        newproject.classList.add('project')
        newproject.style.backgroundImage = "url("+project.image+")"
        newproject.addEventListener("click",(ev)=>{
            let selectedWork = document.querySelector(".selected-work")
            selectedWork.style.display = "flex"

            let selectedWorkImage = document.querySelector(".selected-work-image")
            selectedWorkImage.style.backgroundImage = "url("+project.image+")"

            //let selectedWorkDetails = document.querySelector(".selected-work-details")

            let selectedWorkName = document.querySelector(".selected-work-name")
            selectedWorkName.innerHTML = project.name

            let selectedWorkDescription = document.querySelector(".selected-work-description")
            selectedWorkDescription.innerHTML = project.description

            let Toolsandlanguages = document.querySelector(".tools-and-languages")
            Toolsandlanguages.innerHTML = project.tools
            if(project.link){
                let selectedWorkSite = document.querySelector(".site-link")
                selectedWorkSite.href = project.link
            }

            let selectedWorkGithub = document.querySelector(".github-link")
            selectedWorkGithub.href = project.githublink
        })
        work_slider.appendChild(newproject)
    })
})