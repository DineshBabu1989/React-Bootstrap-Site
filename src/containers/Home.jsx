import React, { Component } from 'react';
import JumbotronFront from '../components/Jumbotron';
import Intro from '../components/intro';
class Home extends Component 
{
render()
{
return(
<div> 
<JumbotronFront />
 
<Intro />

</div>  
);
}
}
export default Home;