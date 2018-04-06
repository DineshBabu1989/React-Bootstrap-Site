import React, { Component } from 'react';
import JumbotronFront from '../components/Jumbotron';
import Intro from '../components/intro';
import OurServices from '../components/OurServices';
import Subscribe from '../components/Subscribe';
import EmbeddedServices from '../components/EmbeddedServices';
import OurEmbeddedServices from '../components/OurEmbeddedServices';
import Tech from '../components/tech';
import Clients from '../components/Clients';
import Footer from '../components/Footer';
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