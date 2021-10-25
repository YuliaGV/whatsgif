import React,{useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import Logo from './components/img/logo.png'

export const WhatsGif = () => {

    const [categories, setCategories] = useState(['Squid Game']);


    return (
        <div className="container whats-gif">
            <>
             <img src={Logo} alt="logo" className="logo"/>
             <p className="animate__animated animate__fadeInDown">Los gifs favoritos de tus tías y mucho más</p>
            </>
            <AddCategory setCategories={setCategories} />
            <hr/>

            <ol>
                {
                    categories.map( (category, index) => (
                        <GifGrid
                            key={index}
                            category={category}
                        />
                    ))
                }
            </ol>
            
        </div>

    );


}

export default WhatsGif;


        
          
        


