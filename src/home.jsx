import Header from "./header.jsx"
import Slider from "./slider.jsx"
import Content from "./content.jsx"
import Footer from "./footer.jsx"
import Boxes from "./boxes.jsx"

function Main()
{
    return(
        <>
        <Header/>
        <Slider/>
        <Content/>
        <Footer/>

        <div className="main">

      
        <Boxes
        
        myimage="https://media.istockphoto.com/id/1169235498/photo/happy-woman-thinking-at-breakfast-on-vacation-stock-photo.jpg?s=2048x2048&w=is&k=20&c=j24S0xCCQiippPW6cqIS5asBiE3l2_wUj78jPJNCbhY="

        myheading={"hello world"}
        mycontent={"this is first content"}

        />
           <Boxes
        
        myimage="https://media.istockphoto.com/id/1335845017/photo/pink-blooming-lotus-close-up.jpg?s=2048x2048&w=is&k=20&c=zOc_R464oXkyu-nVcwaR22f6Ot7o2idIP74cFAPtN4A="

        myheading={"Nature images"} 
        mycontent={"this is second content"}

        />
           <Boxes
        
        myimage="https://media.istockphoto.com/id/1169235498/photo/happy-woman-thinking-at-breakfast-on-vacation-stock-photo.jpg?s=2048x2048&w=is&k=20&c=j24S0xCCQiippPW6cqIS5asBiE3l2_wUj78jPJNCbhY="

        myheading={"hello world"}
        mycontent={"this is first content"}

        />
        </div>
        
         <Boxes
        
        myimage="https://media.istockphoto.com/id/1169235498/photo/happy-woman-thinking-at-breakfast-on-vacation-stock-photo.jpg?s=2048x2048&w=is&k=20&c=j24S0xCCQiippPW6cqIS5asBiE3l2_wUj78jPJNCbhY="

        myheading={"hello world"}
        mycontent={"this is first content"}

        />
           

         <Boxes
        
        myimage="https://media.istockphoto.com/id/1169235498/photo/happy-woman-thinking-at-breakfast-on-vacation-stock-photo.jpg?s=2048x2048&w=is&k=20&c=j24S0xCCQiippPW6cqIS5asBiE3l2_wUj78jPJNCbhY="

        myheading={"hello world"}
        mycontent={"this is first content"}

        />
         <Boxes
        
        myimage="https://media.istockphoto.com/id/1169235498/photo/happy-woman-thinking-at-breakfast-on-vacation-stock-photo.jpg?s=2048x2048&w=is&k=20&c=j24S0xCCQiippPW6cqIS5asBiE3l2_wUj78jPJNCbhY="

        myheading={"hello world"}
        mycontent={"this is first content"}

        />
        
       
        </>
    )
}
export default Main