import React from 'react';
import './App.css';

const data = [

  { id: '', title: 'A Deal', src: 'https://github.com/akempffer/drumkit/blob/master/public/Sounds/A%20deal.MOV?raw=true' },
  { id: '', title: 'Not Real', src: 'https://github.com/akempffer/drumkit/blob/master/public/Sounds/Australia%20is%20not%20real.mov?raw=true' },
  { id: '', title: 'Can YOU Do This', src: 'https://github.com/akempffer/drumkit/blob/master/public/Sounds/But%20Can%20You%20DO%20This.mov?raw=true' },
   { id: '', title: 'Crazy People', src: 'https://github.com/akempffer/drumkit/blob/master/public/Sounds/Crazy%20People.mov?raw=true' },
   { id: '', title: 'Feels Pretty Real', src: 'https://github.com/akempffer/drumkit/blob/master/public/Sounds/Feels%20Pretty%20Real.mov?raw=true' },
   { id: '', title: 'Honk Honk', src: 'https://github.com/akempffer/drumkit/blob/master/public/Sounds/Honk%20Honk.mov?raw=true' },
   { id: '', title: 'Can YOU Do This - Fail', src: 'https://github.com/akempffer/drumkit/blob/master/public/Sounds/Oh%20yeah,%20But%20can%20you%20do%20this.mov?raw=true' },
   { id: '', title: 'Phil Time - Low', src: 'https://github.com/akempffer/drumkit/blob/master/public/Sounds/Phil%20Time%20(Low).mov?raw=true' },
   { id: '', title: 'To The Ranch', src: 'https://github.com/akempffer/drumkit/blob/master/public/Sounds/To%20the%20Ranch.mov?raw=true' },
   { id: '', title: 'Whats Going on Guys', src: 'https://github.com/akempffer/drumkit/blob/master/public/Sounds/Whats%20Going%20On%20GUYS.mov?raw=true' },
   { id: '', title: 'Youve Never Played', src: 'https://github.com/akempffer/drumkit/blob/master/public/Sounds/What%20Youve%20never%20played%20tubersimulator.mov?raw=true' },
   { id: '', title: 'Tuber Music', src: 'https://github.com/akempffer/drumkit/blob/master/public/Sounds/Tuber%20Music.mov?raw=true' },
   { id: '', title: 'Go Gamers', src: 'https://github.com/akempffer/drumkit/blob/master/public/Sounds/Lets%20Go%20Gamers.mov?raw=true' },
   { id: '', title: 'Ahhh', src: 'https://github.com/akempffer/drumkit/blob/master/public/Sounds/Ahhhh.mov?raw=true' },
   { id: '', title: 'Anncmnt Time', src: 'https://github.com/akempffer/drumkit/blob/master/public/Sounds/Announcement%20Time.mov?raw=true' },
   { id: '', title: 'Crab Rave', src: 'https://github.com/akempffer/drumkit/blob/master/public/Sounds/Crab%20Rave.mov?raw=true' },
   { id: '', title: 'Fallen Gamer', src: 'https://github.com/akempffer/drumkit/blob/master/public/Sounds/Fallen%20Gamer.mov?raw=true' },
   { id: '', title: 'Meme Review', src: 'https://github.com/akempffer/drumkit/blob/master/public/Sounds/Meme%20Review.mov?raw=true' }, 
  { id: '', title: 'My Opinion', src: 'https://github.com/akempffer/drumkit/blob/master/public/Sounds/Not%20Supposed%20To%20Give%20My%20Opinion.mov?raw=true' },
   { id: '', title: 'Phil Time - High', src: 'https://github.com/akempffer/drumkit/blob/master/public/Sounds/Phil%20Time!%20-%20High.mov?raw=true' }

  ]

  class DrumPad extends React.Component {
 
    componentDidMount() {
      console.log(this.audio)
      document.addEventListener('keydown', this.handleKeydown)
      window.focus()
    }
    
   componentWillUnmount() {
     document.removeEventListener('keydown', this.handleKeydown)
   }
    
    handleKeydown = e => {
      if(e.keyCode === this.props.title.charCodeAt()) {
        this.audio.play()
        this.audio.currentTime = 0
        this.props.handleDisplay(this.props.id)
      }
    }
   
    handleClick = () => {
      this.audio.play()
      this.audio.currentTime = 0
      this.props.handleDisplay(this.props.id)
    }
    
    render() {
      return (
        <div 
            className='drum-pad' 
            id={this.props.id}
            onClick={this.handleClick}
        >
          <h1>{this.props.title}</h1>
          <audio id={this.props.title}
                 className='clip'
                 src={this.props.src}
                 ref={ref => this.audio = ref}
            ></audio>
        </div>
      )
    }
  }
  
  class App extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        display: ''
      }
    }
    
    handleDisplay = display => this.setState({ display })
    
    render(){
      return(
      <div id='drum-machine'>
          <div id='display'>{this.state.display}</div>
          
          <div id='drum-pads'>{data.map(d => (
            <DrumPad
              key={d.id}
              id={d.id}
              title={d.title}
              src={d.src}
              handleDisplay={this.handleDisplay}
            />   
           ))}</div>
      </div>
      )
    }
  }

export default App;
