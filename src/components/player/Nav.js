import React from 'react';
import PropTypes from 'prop-types';
import PauseIcon from '../../assets/images/pause.svg';
import PlayerIcon from '../../assets/images/play.svg';
import './Nav.css';

const Nav = ({ togglePlay, playing }) => {
  return (
    <div className="container-nav">
      {playing ? (
        <div onClick={togglePlay}>
          <img className="icon" alt="pause icon" src={PauseIcon} />
        </div>
      ) : (
        <div onClick={togglePlay}>
          <img className="icon" src={PlayerIcon} alt="play icon" />
        </div>
      )}
    </div>
  );
};

Nav.propTypes = {
  togglePlay: PropTypes.func.isRequired,
  playing: PropTypes.bool,
};

export default Nav;
