import  {useState,useContext}from 'react';
import Navigation from './Navigation';
import classes from './MainHeader.module.css';
import AuthContext from '../../store/auth-context';

const MainHeader = (props) => {
  
  const ctxAuth = useContext(AuthContext)
console.log(ctxAuth);
  return (
    <header className={ctxAuth.isOpen ? classes.main : classes['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation  />
      <label className={classes.switch}>
        <input type="checkbox" onClick={ctxAuth.onToggle}/>
        <span className={classes.slider}></span>
      </label>
    </header>
  );
  // bul jerde jonokoi ele jsx jana navigation degen componentke propstan kelgen nerseni props arkyluu berip koiup jatabyz
};



export default MainHeader;