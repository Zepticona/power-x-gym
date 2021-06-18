import Button from "../../Button/Button";

const HomeHero = (props) => (
    <article className="homeHero">
        <div className="homeHero__content">
            <h1>The best fitness studio in town</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis totam quibusdam doloremque aperiam enim, quisquam maxime deserunt. Pariatur sequi explicabo id unde sit tenetur, tempora eligendi. Eaque veniam doloribus voluptas voluptatem, libero consequatur earum error. Quidem, in adipisci. Doloremque, perspiciatis.</p>
            <Button btnClicked={props.btnClicked}>Join Us</Button>
        </div>
        <div className="homeHero__design">
            
        </div>
    </article>
)
export default HomeHero;