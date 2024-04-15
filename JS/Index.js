
/*
------------------------------------------------------------------------------------------------------------------
JavaScript file for My Portfolio Website

Making and assigning values to variables
------------------------------------------------------------------------------------------------------------------
*/

let TextHi = document.getElementsByClassName("TextHi");
let TextName = document.getElementsByClassName("TextName");
let TextSD = document.getElementsByClassName("TextSD");
let buttons = document.getElementsByClassName("MainMenuButtons");
let Slider = document.getElementsByClassName("Slider")
const SliderBackground = document.getElementById("SliderBackground");
let AboutMeImg1 = document.getElementById("AboutmeImg1");
let AboutMeImg2 = document.getElementById("AboutmeImg2");
const MainMenuBody = document.getElementById("MainMenu");
const AboutMeBody = document.getElementById("Aboutme");
let projectLangChecker = document.getElementById("ProjectsEnglish");
let SliderCheck = false;
let SliderOutBool = false;
let SliderInBool = true;
let movementout = 0;
let movementIn = 0;
let switchingImgBool = false;
let ImgCountABoutme = 0;
let AllPicturesAboutMe =[
    "IMG/AboutMeImgs/Picture1.png",
    "IMG/AboutMeImgs/Picture2.png",
    "IMG/AboutMeImgs/Picture3.png",
    "IMG/AboutMeImgs/Picture4.png",
    "IMG/AboutMeImgs/Picture5.png"
]


let ProjectsMoveDelay = false;
let ProjectsCurrentPic = 0;
let AllPicturesProjects = [
    "IMG/Mirrort.png",
    "IMG/GameJam.png",
    "IMG/Webshop.png",
    "IMG/PoolGame.png",
    "IMG/ProjectPlay.png",
]

let allTextProjects = [
    "Mirrort",
    "GameJam",
    "WebShop",
    "Pool Game",
    "Project Play",
]



/*amount of img used in aboutme -1*/
const MaxImgCount = 1;


/*
------------------------------------------------------------------------------------------------------------------
Items that play on load
------------------------------------------------------------------------------------------------------------------
*/


if(MainMenuBody != undefined){
    setTimeout(function(){
        ElementFadein(buttons, 300);
        ElementMoveIn(buttons, 180 , 1, true);
    } , 3500);
    
    setTimeout(function(){
        ElementFadein(TextHi, 100);
        ElementMoveIn(TextHi, 60 , 1, false);
    } , 500);
    
    
    setTimeout(function(){
        ElementFadein(TextName, 200);
        ElementMoveIn(TextName, 60 , 1, false);
    } , 1500);
    
    setTimeout(function(){
        ElementFadein(TextSD, 300);
        ElementMoveIn(TextSD, 60 , 1, false);
    } , 2500);
}


if(AboutMeBody != undefined){
    ImageSwitchABoutMe()
}








/*
------------------------------------------------------------------------------------------------------------------
Function 1 for fading in / out items
------------------------------------------------------------------------------------------------------------------
*/

function ElementFadein(elements, speed){

    let ColorAlpha = 0;
    let intervalopacity = null;

    clearInterval(intervalopacity);
    intervalopacity = setInterval(frameFadeIn, 2);

    function frameFadeIn(){
        if(ColorAlpha == speed){
            clearInterval(intervalopacity);
        } else {
            ColorAlpha++;
            if(elements.length > 0){
                for(let i = 0; i < elements.length; i++){
                    elements[i].style.opacity = ColorAlpha / speed
                }
            } else {
                elements.style.opacity = ColorAlpha / speed
            }
        }
    }
}

function ElementFadeout(elements, speed){

    let ColorAlpha = 0;
    let intervalopacity = null

    clearInterval(intervalopacity);
    intervalopacity = setInterval(frameFadeIn, 2);

    function frameFadeIn(){
        if(ColorAlpha == speed){
            clearInterval(intervalopacity);
        } else {
            ColorAlpha++;
            if(elements.length > 0){
                for(let i = 0; i < elements.length; i++){
                    elements[i].style.opacity = 1 - (ColorAlpha / speed)
                }
            } else {
                elements.style.opacity = 1 - (ColorAlpha / speed)
            }
        }
    }
}



/*
------------------------------------------------------------------------------------------------------------------
function for moving in elements
------------------------------------------------------------------------------------------------------------------
*/

function ElementMoveIn(elements, MaxMove, movespeed, DirectionUp){

    let movement = MaxMove;
    let intervalMovement = null

    clearInterval(intervalMovement);
    intervalMovement = setInterval(frameMoveIn, 2);

    function frameMoveIn(){
        if(movement < 2){
            clearInterval(intervalMovement);
        } else {
            movement/= (1 + movespeed/100)
            
            if(DirectionUp){
                for(let i = 0; i < elements.length; i++){
                    elements[i].style.marginTop = movement + "px" ;
                }
            } else if(!DirectionUp){
                for(let i = 0; i < elements.length; i++){
                    elements[i].style.marginLeft = movement + "px" ;
                }
            }
        }
    }
}

/*
------------------------------------------------------------------------------------------------------------------
function for sliding the slider out
------------------------------------------------------------------------------------------------------------------
*/

function SliderOut(){ 
    if(!SliderOutBool){
        SliderOutBool = true
        SliderInBool = false
        let intervalSlider = null; 
        movementout = 250 - movementIn;

        SliderBackground.style.display = "block"; 

        clearInterval(intervalSlider);
        intervalSlider = setInterval(frameSliderin, 2);
 
        function frameSliderin(){
            if(movementout < 2 || !SliderOutBool){
                clearInterval(intervalSlider);
            } else {
                movementout/= (1.01)
                for(let i = 0; i < Slider.length; i++){
                    Slider[i].style.marginLeft = (250 - movementout) + "px" ;
                }  
                
            }
        }
    }
}

/*
------------------------------------------------------------------------------------------------------------------
function for sliding the slider in 
------------------------------------------------------------------------------------------------------------------
*/

function SliderIn(){  
    if(!SliderInBool){
        SliderInBool = true;
        SliderOutBool = false;
        let intervalSlider = null;
        movementIn = 250 - movementout

        SliderBackground.style.display = "none";

        clearInterval(intervalSlider);
        intervalSlider = setInterval(frameSliderin, 2);

        function frameSliderin(){
            if(movementIn < 2 || !SliderInBool){
                clearInterval(intervalSlider);
            } else {
                movementIn/= (1.01)
                for(let i = 0; i < Slider.length; i++){
                    Slider[i].style.marginLeft = movementIn + "px" ;                   
                }  
            }
        }
    }
}

/*
------------------------------------------------------------------------------------------------------------------
Function for loading in a new page
------------------------------------------------------------------------------------------------------------------
*/

function NewPage(Page){
    window.location.href = Page
}

/*
------------------------------------------------------------------------------------------------------------------
Function for Switching Images
------------------------------------------------------------------------------------------------------------------
*/

function ImageSwitchABoutMe(){
    setTimeout(function(){
       
        ImageSwitchABoutMe();
        ElementFadeout(AboutmeImg1, 300)

        setTimeout(function(){
            let Img2 = AboutMeImg2.src
            
            if(ImgCountABoutme == AllPicturesAboutMe.length - 1)
            {
                ImgCountABoutme = 0
            } else{
                ImgCountABoutme++;
            }

            AboutMeImg1.src = Img2
            AboutMeImg1.style.opacity = 1;

            if(AllPicturesAboutMe.length == ImgCountABoutme){
                AboutMeImg2.src = AllPicturesAboutMe[0];
            } else {
                AboutMeImg2.src = AllPicturesAboutMe[ImgCountABoutme];
            }
        }, 1400)
    },5000)
}

/*
------------------------------------------------------------------------------------------------------------------
Image swap for projects page
------------------------------------------------------------------------------------------------------------------
*/

function MoveProjectsLeft(){
if(!ProjectsMoveDelay){
    let IntervalProjectsLeft = null;
    let movementProjects = 0;
    ProjectsMoveDelay = true
    

    let IMGleft = document.getElementById("ProjectsLeftIMG");
    let IMGRight = document.getElementById("ProjectsRightIMG");
    let IMGMid = document.getElementById("ProjectsMainIMG");
    let IMGBehind = document.getElementById("ProjectsBehindIMG");

    
    

    IMGRight.style.zIndex = 2;

    clearInterval(IntervalProjectsLeft);
    IntervalProjectsLeft = setInterval(projectsleft, 2)

    function projectsleft(){
        if (movementProjects == 120){
            clearInterval(IntervalProjectsLeft);
            
            function resetIMG(){
                IMGleft.style.width = 16 + "vw";
                IMGleft.style.left = 28 + "vw";
                IMGleft.style.height = 40 + "vh";
                IMGleft.style.top = 20 + "vh";
                
                IMGMid.style.width = 28 + "vw"; 
                IMGMid.style.left =  36 + "vw";
                IMGMid.style.height = 70 + "vh";
                IMGMid.style.top = 5 + "vh"; 
    
                IMGRight.style.width = 16 + "vw"; 
                IMGRight.style.left = 56 + "vw"; 
                IMGRight.style.height = 40  + "vh"; 
                IMGRight.style.top = 20 + "vh"; 
                
                IMGBehind.style.width = 0 + "vw";
                IMGBehind.style.left = 50 + "vw"; 
                IMGBehind.style.height = 0 + "vh";
                IMGBehind.style.top = 40 + "vh";

                IMGRight.style.zIndex = 0;
                ProjectsMoveDelay = false;

                ProjectsCurrentPic++;

                if(ProjectsCurrentPic > AllPicturesProjects.length - 1){
                    ProjectsCurrentPic = 0;
                }
                
                IMGMid.src = AllPicturesProjects[ProjectsCurrentPic];
                
                if(ProjectsCurrentPic == 0){
                    IMGleft.src = AllPicturesProjects[AllPicturesProjects.length - 1];
                } else{
                    IMGleft.src = AllPicturesProjects[ProjectsCurrentPic - 1];
                }

                if(ProjectsCurrentPic == AllPicturesProjects.length - 1){
                    IMGRight.src = AllPicturesProjects[0];
                } else{
                    IMGRight.src = AllPicturesProjects[ProjectsCurrentPic + 1];
                }
                
                if(ProjectsCurrentPic > AllPicturesProjects.length - 2){
                    IMGBehind.src = AllPicturesProjects[1];
                } else if(ProjectsCurrentPic == AllPicturesProjects.length - 2){
                    IMGBehind.src = AllPicturesProjects[0];
                } else {
                    IMGBehind.src = AllPicturesProjects[ProjectsCurrentPic + 2];
                }

                document.getElementById("nameofproject").innerText = allTextProjects[ProjectsCurrentPic];
                
            }
            


            resetIMG();


        }else{
            movementProjects++;
            
            IMGleft.style.width = 16 - (movementProjects / 7.5) + "vw";
            IMGleft.style.left = 28 + (movementProjects / 120 * 22) + "vw";
            IMGleft.style.height = 40  - (movementProjects / 3) + "vh";
            IMGleft.style.top = 20 + (movementProjects / 6) + "vh"
            
            IMGMid.style.width = 28 - (movementProjects / 10) + "vw";
            IMGMid.style.left =  36 - (movementProjects/120 * 8) + "vw";
            IMGMid.style.height = 70 - (movementProjects / 4) + "vh";
            IMGMid.style.top = 5 + (movementProjects/ 8) + "vh";

            IMGRight.style.width = 16 + (movementProjects / 10) + "vw";
            IMGRight.style.left = 56 - (movementProjects / 6) + "vw";
            IMGRight.style.height = 40 + (movementProjects / 4) + "vh";
            IMGRight.style.top = 20 - (movementProjects / 8) + "vh";
            
            IMGBehind.style.width = (movementProjects / 7.5) + "vw"
            IMGBehind.style.left = 50 + (movementProjects / 20) + "vw"
            IMGBehind.style.height = (movementProjects / 3) + "vh"
            IMGBehind.style.top = 40 - (movementProjects / 6) + "vh";
        }
    }
}


}

function changeSite(){
    if(projectLangChecker != null){
        window.location.href = "Project" + (ProjectsCurrentPic + 1) + ".html"
    } else{
        window.location.href = "Project" + (ProjectsCurrentPic + 1) + " 2.html"
    }
}

window.onscroll = function scroll(){
for(let i = 0; i < Slider.length; i++){
    Slider[i].style.marginTop = window.scrollY + "px" ;
} 
document.getElementById("SliderBackground").style.marginTop = window.scrollY + "px" ;
}
