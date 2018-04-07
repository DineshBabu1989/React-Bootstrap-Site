import React, { Component } from 'react';
import JumbotronFront from '../components/Jumbotron/Jumbotron';
import Intro from '../components/Intro/Intro';
import OurServices from '../components/Services/OurServices';
import Subscribe from '../components/Subscribe/Subscribe';
import OurEmbeddedServices from '../components/Services/OurEmbeddedServices';
import Tech from '../components/Technologies/Tech';
import Clients from '../components/Clients/Clients';
import Footer from '../components/Footer/Footer';
import './Home.css';

class Home extends Component 
{
render()
{
return(
<div className ="HomePage"> 
<JumbotronFront />
<Intro />
<OurServices />
<Subscribe/>
<OurEmbeddedServices />
<Tech /> 
<Clients />
<Footer />
</div>  
);
}
}
export default Home;