import React,{useState,useEffect} from 'react';
import './slider.scss';
import SliderItem from './SliderItem.js'
import i1 from '../Pics/iphones.jpg'
import i2 from '../Pics/huaweis.jpg'
import i3 from '../Pics/xiaomis.jpg'


const Slider = () => {

    let arr = [<SliderItem src={i1}/>,<SliderItem src={i2}/>,<SliderItem src={i3}/>];
    const [x,setX] = useState(0);

    const goLeft = () => {
       x === 0 ? setX(-100 * (arr.length -1)) : setX(x+100); 
    }

    const goRight = () => {
        x === -100 *(arr.length -1) ? setX(0) : setX(x - 100);
    }


    useEffect(()=>{
        function temporizador() {
            setTimeout(function(){ 
                goRight(); 
            }, 3000);
        }

        temporizador()
    },[x])

    return ( 
        <div className="slider">
            {arr.map((item,index)=>{
                return(
                    <div key={index} className="slide" style={{transform:`translateX(${x}%)`}}>
                        {item}
                    </div>
                )
            })}
            <button id="goLeft" onClick={goLeft}><i className="fas fa-chevron-left"></i></button>
            <button id="goRight" onClick={goRight}><i className="fas fa-chevron-right"></i></button>
        </div>
     );
}
 
export default Slider;