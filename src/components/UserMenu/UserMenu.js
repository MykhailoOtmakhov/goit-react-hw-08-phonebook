// import { useDispatch, useSelector } from 'react-redux';
import defaultAvatar from './default-avatar.png';
import React from 'react'
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth/index'

// import styles from './UserMenu.module.css'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};


const UserMenu = ({avatar, name, onLogaut}) => (
  // const dispatch = useDispatch();
//   const name = useSelector(authSelectors.getUsername);
//   const avatar = defaultAvatar;

  // return (
    <div style={styles.container}>
      <img src={avatar} alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>Добро пожаловать, {name}</span>
      <button type="button" onClick={onLogaut}>
        Выйти
      </button>
    </div>
  )

  const mapStateToProps = state => ({
    name: authSelectors.getUserName(state),
    avatar: defaultAvatar
  })  

  const mapDispatchToProps = {
    onLogaut: authOperations.logOut
  }

export default connect(mapStateToProps,mapDispatchToProps)(UserMenu)