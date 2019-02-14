import React,{Component} from 'react'
import Particles from 'react-particles-js';

class Particle extends Component{

  render(){
    
    var particlesOpt = {
    particles: {
      enable: true,
      type: "inside",
      move: {
        radius: 10
      },
      draw: {
        stroke: {
          color: ('rgba(255, 255, 255, .1)')
        }
      }
  }
}
    return (
      <div>
      <Particles
      className='particles'
      params={particlesOpt}
      />
      </div>
    
    )
  }
}

export default Particle;