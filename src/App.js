import React, { Component } from 'react';
import './App.css';
import { TwitterPicker } from 'react-color';

class App extends Component {

  constructor(){
    super();
    this.pstyliser = React.createRef();
    this.lsth = React.createRef();
  }

  state= {
    // va contenir le texte qui sera saisi
    txt: '',
    // va contenir la couleur choisie qui sera appliquée
    // par défaut le noir
    colortxt: '#000',
    // va contenir la taille de la police qui sera appliquée
    // par défaut 1em (H4)
    taille: '1em'
  }

  // affectation auto à txt du texte saisi dans la zone de texte
  taper = (e) => {
    this.setState({txt: e.target.value});
  }
  
  // affectation auto à txt la couleur choisie
  handleChangerColor = (color) => {
    this.setState ({colortxt: color.hex});
  }
  
  // affectation/désaffectation auto à txt les 
  // mises en forme gras italic...
  styliser = (s) => {
    switch(s) {
      case 'b':
      case 'i':
      case 'u':
        this.pstyliser.current.classList.toggle('appliq-'+s);
        break;
      case 'h':
        this.setState({taille: this.lsth.current.value })
        break;
      default:
        break;
    }
  }

  render() {
  return (
    // App container
    <div className="App container">
      {/* la zone de texte sur laquelle saisir */}
      <div>
        <label>Taper le texte à mettre en forme</label>
        <input onChange={this.taper} className="form-control" placeholder="Taper ici le texte à mettre en forme"></input>
      </div>

      {/* le texte tapé sera affiché ici */}
      <div className="div-text-tape">
        <p style={ {color: this.state.colortxt, fontSize: this.state.taille } } ref={this.pstyliser}>{this.state.txt}</p>
      </div>
      {/* .le texte tapé sera affiché ici */}

      <div>

        {/* boutons pour changer l'apparence du texte tapé, gras italic souligné */}
        <p>
          <button className="btn btn-warning" onClick={() => this.styliser('b')}><i className="fa fa-bold"></i></button>
          <button className="btn btn-primary" onClick={() => this.styliser('i')}><i className="fa fa-italic"></i></button>
          <button className="btn btn-success" onClick={() => this.styliser('u')}><i className="fa fa-underline"></i></button>
        </p>
        {/* .boutons pour changer l'apparence du texte tapé, gras italic souligné */}

        {/* pour changer la taille du texte */}
        <div className="form-row">
          <div className="col-md-2">
            <label><b>Taille du texte </b></label>
          </div>

          {/* liste des tailles */}
          <div className="col-md-10">
            <select ref={this.lsth} className="form-control" onChange={() => this.styliser('h')}>
              <option value="1em"></option>
              <option value="2em" style={ {fontSize:'2em'} }>H1</option>
              <option value="1.5em" style={ {fontSize:'1.5em'} }>H2</option>
              <option value="1.17em" style={ {fontSize:'1.17em'} }>H3</option>
              <option value="1em" style={ {fontSize:'1em'} }>H4</option>
              <option value=".83em" style={ {fontSize:'.83em'} }>H5</option>
              <option value=".68em" style={ {fontSize:'.68em'} }>H6</option>
            </select>
          </div>
        </div>
        {/* .pour changer la taille du texte */}


      {/* pour changer la couleur du texte */}
        <div className="form-row">
          <div className="col-md-2">
            <label><b>Choix de la couleur </b></label>
          </div>
          <div className="col-md-10">
            <TwitterPicker className="colorPick"
            color={ this.state.colortxt }
            onChangeComplete={ this.handleChangerColor }
            triangle='hide'
            />
          </div>
        </div>
      {/* .pour changer la couleur du texte */}

      </div>
    </div>
    // .App container
  );
  }
}

export default App;
