import './Home.css';
export default function Home() {

  return (
    <>
      <div className="Home">
        <h1 className='title'>Hello! Welcome to Jess Bakes! </h1>
        <h2 className='thanks'>Thank you for visiting my page! Brought to you by popular demand! Please read through the following to better navigate the ordering process.</h2>
        <div id="accordion">
          <div className="card">
            <div className="card-header" id="headingOne">
              <h5 className="mb-0">
                <button className="btn " data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  About Jess &nbsp;☕
                </button>
              </h5>
            </div>

            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
              <div className="card-body">
                I am a Vet Tech turned Software Engineer! I graduate from my SEI bootcamp September 14th of 2022. After Graduation and during my job search, 
                I have the opportunity to immerse myself in my hobby of amateur baking. Growing up, I learned how to bake from my mother, who was a freelance wedding cake baker.
                I have carried on my passions for baking throughout my life and plan on only getting better! 
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h5 className="mb-0">
                <button className="btn collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  How to request an order &nbsp;🍮
                </button>
              </h5>
            </div>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
              <div className="card-body">
                1. Go to "New Order" 
                2. Add any amount baked goods of your choosing to your cart
                3. Fill out a note/customization card (A variety of nuts, chocolate chips, and candies are available as add-ons for no additional price! Simply request them 
                via note/customization card upon completion of an order request).
                3. Choose the date in which you are requesting your order to be ready on
                4. Click the "Request Order" button 
                5. Sit back and wait for email confirmation from the shop approving your order!
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingThree">
              <h5 className="mb-0">
                <button className="btn collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Do you deliver? &nbsp;🚚
                </button>
              </h5>
            </div>
            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
              <div className="card-body">
                No. Pick up from shop only. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src="https://media.discordapp.net/attachments/942081826011349012/1019298608450900078/IMG_8951.jpg?width=705&height=529" alt="..." className='img-thumbnail'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}