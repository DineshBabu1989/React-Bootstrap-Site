import React, { Component } from 'react';
import JumbotronFront from '../components/Jumbotron';
import Intro from '../components/intro';
import OurServices from '../components/OurServices';
import Subscribe from '../components/Subscribe';
import EmbeddedServices from '../components/EmbeddedServices';
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
<EmbeddedServices/>
</div>  
);
}
}
export default Home;