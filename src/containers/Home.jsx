import React, { Component } from 'react';
import JumbotronFront from '../components/Jumbotron';
import WhatWeDo from '../components/WhatWeDo';
class Home extends Component 
{
render()
{
return(
<div> 
<JumbotronFront />
<WhatWeDo />
</div>  
);
}
}
export default Home;