import React, { Component } from 'react';
import JumbotronFront from '../components/Jumbotron';
import Intro from '../components/intro';
import OurServices from '../components/OurServices';
class Home extends Component 
{
render()
{
return(
<div> 
<JumbotronFront />
 
<Intro />
<OurServices />
</div>  
);
}
}
export default Home;