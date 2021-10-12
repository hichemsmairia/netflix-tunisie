import AnywhereImg from '../images/device-pile.png'
const Anywhere = () => {
    return (
        <section class="Devaice-Pile Section">

            <div class="Container">

                <div class='Grid'>

                    <div class="Section-Text">
                        <h1>
                             Regardez partout.
                             </h1>
                        
                        <p>
                          Diffusez des films et des émissions de télévision en illimité sur votre téléphone, tablette, ordinateur portable et téléviseur sans payer plus.
</p>
                       
                    </div>

                    <div class="Image-tv">
                        <img src={AnywhereImg} alt="TV" />
                    
                        <div class="Video-tv"> 
                            <video  autoplay playsinline muted loop>

                                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4" />

                            </video>
                        </div>
                    </div>
<div>
    <p class="more_text">
        Il suffit de vous connecter au portail d'accueil sur votre TV avec les applications 
        
        disponibles et de sélectionner Netflix. Une fois votre compte activé,
        vous aurez accès à tout le catalogue de films et séries. Bonus, si vous
         profitez de la Bbox 4K, vous aurez la possibilité de visionner les programmes en 4K
    </p>
</div>
                </div>

            </div>

        </section>
    )
}

export default Anywhere