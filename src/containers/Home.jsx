import React, { Component } from 'react';
import JumbotronFront from '../components/Jumbotron';
import Intro from '../components/intro';
import OurServices from '../components/OurServices';
import Subscribe from '../components/Subscribe';
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
</div>  
);
}
}
export default Home;