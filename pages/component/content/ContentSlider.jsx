import React, {useEffect} from 'react';
import Styles from "./ContentSlider.module.scss";
import gsap from 'gsap';

import img1 from './media/img/1.jpeg';

function ContentSlider() {
    useEffect(() => {
        const divs = document.querySelectorAll(".testmonials")
        gsap.set(divs[1], {y:0, x:0, opacity:6});
        gsap
        .timeline({repeat: -2, defaults:{duration:1}})

        .add("one")
        .to(divs[0], {y:450, x:0, opacity:1},"one")
        .to(divs[1], {y:-100, x:0, opacity:0},"one")
        .to(divs[2], {y:-650, x:0, opacity:0},"one")

        .add("two")
        .to(divs[0], {y:450, x:0 , opacity:0},"two")
        .to(divs[1], {y:-100, x:0 , opacity:1},"two")
        .to(divs[2], {y:-650, x:0 , opacity:0},"two")

        .add("three")
        .to(divs[0], {y:450, x:0 , opacity:0},"three")
        .to(divs[1], {y:-100, x:0 , opacity:0},"three")
        .to(divs[2], {y:-650, x:0 , opacity:1},"three")

        // .add("for")
        // .to(divs[0], {y:0, x:0 , opacity:0.05},"for")
        // .to(divs[1], {y:0, x:100 , opacity:1},"for")
        // .to(divs[2], {y:0, x:0 , opacity:0.05},"for")
        // .to(divs[3], {y:0, x:0 , opacity:0.05},"for")

    })
  return (
    <div className={Styles.Content}>
        <div className='testmonials'>

            <div className={Styles.container}>
                <div>
                    <img className={Styles.img} alt='fotoSlider' src={img1}/>
                    <div className={Styles.imgBack}></div>
                    <img src="./media/img/1.jpeg" alt="foto 2" />
                </div>
                <div className={Styles.text}>
                    <h2>Jon Doel 1</h2>
                    <h3>CEO</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                         Nobis, sint. Mollitia aut quidem nulla nam, possimus,
                          explicabo tempore perferendis perspiciatis dolore, beatae enim ullam eius!
                           Facilis, dicta earum? Ab, tempore!
                    Culpa quidem eius quam! Nulla deleniti voluptate laudantium neque,
                     facere veritatis illo commodi natus itaque voluptatem unde doloremque necessitatibus repellat
                      nesciunt totam ducimus autem, id cum et a deserunt perspiciatis!
                      </p>
                </div>
            </div>

        </div>
         <div className='testmonials'>

            <div className={Styles.container}>
                <div>
                    <img className={Styles.img} alt='fotoSlider' src={img1}/>
                    <div className={Styles.imgBack}></div>
                    <img src="./media/img/1.jpeg" alt="foto 2" />
                </div>
                <div className={Styles.text}>
                    <h2>Jon Doel 2</h2>
                    <h3>CEO</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                         Nobis, sint. Mollitia aut quidem nulla nam, possimus,
                          explicabo tempore perferendis perspiciatis dolore, beatae enim ullam eius!
                           Facilis, dicta earum? Ab, tempore!
                    Culpa quidem eius quam! Nulla deleniti voluptate laudantium neque,
                     facere veritatis illo commodi natus itaque voluptatem unde doloremque necessitatibus repellat
                      nesciunt totam ducimus autem, id cum et a deserunt perspiciatis!
                      </p>
                </div>
            </div>

        </div>
       
        <div className='testmonials'>

<div className={Styles.container}>
    <div>
        <img className={Styles.img} alt='fotoSlider' src={img1}/>
        <div className={Styles.imgBack}></div>
        <img src="./media/img/1.jpeg" alt="foto 2" />
    </div>
    <div className={Styles.text}>
        <h2>Jon Doel 3</h2>
        <h3>CEO</h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Nobis, sint. Mollitia aut quidem nulla nam, possimus,
              explicabo tempore perferendis perspiciatis dolore, beatae enim ullam eius!
               Facilis, dicta earum? Ab, tempore!
        Culpa quidem eius quam! Nulla deleniti voluptate laudantium neque,
         facere veritatis illo commodi natus itaque voluptatem unde doloremque necessitatibus repellat
          nesciunt totam ducimus autem, id cum et a deserunt perspiciatis!
          </p>
    </div>
</div>

</div>

    </div>
  )
}

export default ContentSlider