
import { Feature, OptForm } from '../components';
import { HeaderContainer } from '../containers/header'
import { JumbotronContainer } from "../containers/jumbotron";
import { FooterContainer } from "../containers/footer";
import { FaqsContainer } from "../containers/faqs";

const Home = () => {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
                    <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
                    <OptForm>
                        <OptForm.Input placeholder="Email address" />
                        <OptForm.Button>Try it now</OptForm.Button>
                        <OptForm.Break />
                        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    );
};

export default Home