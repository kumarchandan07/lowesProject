import '../Component/styles/design.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import 'bootstrap/dist/css/bootstrap.min.css';



const design = () =>{

    const photos=[
        {
            name:"photo1",
            url:"https://images3.alphacoders.com/823/thumb-1920-82317.jpg"
        },
        {
            name:"photo2",
            url:"https://wallpaperaccess.com/full/271965.jpg"
        },
        {
            name:"photo3",
            url:"https://image.shutterstock.com/image-photo/micro-peacock-feather-hd-imagebest-260nw-1127238599.jpg"
        }
    ];
    const settings={
        fade:true,
        infinite:true,
        slidesToShow:1,
        arrows:true,
        
        className:"slides"
    }
    
    return(
        <div className="main-Container">
            <div className="detailSection">
                <div className="headerSection">
                    <div className="logoSection">
                        <div className="logo">
                            <p className="logoValue">1</p>
                        </div>
                    </div>
                    <div className="titleSection">
                            <h2 className="title">(H2)Lay Out and Mark the Location of the Deck lorem ipsum dolor</h2>
                    </div>
                        <div className="content">
                            <ol>
                                <span className='numbers'>1.1</span>
                                <p className='text-content'> Use strings and stakes to outline the deck's layout, running the string around the entire deck perimeter.</p>
                                <span className='numbers'>1.2</span>
                                <p> Use strings and stakes to outline the deck's layout, running the string around the entire deck perimeter.</p>
                                <span className='numbers'>1.3</span>
                                <p> Use strings and stakes to outline the deck's layout, running the string around the entire deck perimeter.</p>
                                <span className='numbers'>1.4</span>
                                <p> Use strings and stakes to outline the deck's layout, running the string around the entire deck perimeter.</p>    
                            </ol>
                        </div>
                </div>
                <button className='btn btn-primary'>Shop-Now</button>
            </div>
            <div className="imageSection">
                <Slider {...settings}> 
                    {
                        photos.map((pho)=>{
                            return(
                                <div className='slick_Slidesow' key={pho.name}>
                                    <img width="90%" src={pho.url} className={pho.name} alt={pho.name}/>
                                </div>
                            )

                        })
                    }

                </Slider>
              
            </div>
    </div>
        
    );
};
export default design;
