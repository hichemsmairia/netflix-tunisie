import Stranger from '../images/device-pile.png'
import El from '../images/el.jpg'

const Download = () => {
    return (
        <section class="Download Section" >

            <div class="Container">

                <div class='Grid'>
                 
                 
                    <div class="Section-Text">
                        <h1> Téléchargez vos émissions pour les regarder hors ligne. </h1>
                        
                        <p>
                          Enregistrez facilement vos favoris et ayez toujours quelque chose à regarder.

                        </p>
                    </div>

                    <div class="Image-tv">
                        <img src={El} alt="Phone" />

                        <div class="Download-Field">

                            <div class="grid">

                                <div class="Download-Image">
                                    <img src={Stranger} alt="" />
                                </div>

                                <div class="Download-Text">
                                    
                                    <p>Stranger Things</p>

                                    <p id="downloading">Baixando...</p>

                                </div>

                                <div class="Download-Animation">
                                    
                                   <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" alt="" />

                                </div>

                            </div>

                        </div>

<div>
    <p class="more_text" >S’abonner à Netflix : un jeu d’enfant...
        Netflix joue la carte de la flexibité aussi bien sur 
        le choix des formules (trois forfaits sont proposés de 7,99€ à 13,99€)
         que sur le nombre d'écrans sur lesquels on peut avoir accès au service.
          Autre argument de taille, vous êtes libre de résilier à tout moment 
          et vous bénéficiez de 30 jours d’essai !

        </p>
</div>

                    </div>

                </div>
</div>
        </section>

    )
}

export default Download