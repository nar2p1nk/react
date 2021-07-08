import Cards from './components/Cards/Cards.jsx';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './App.css'
export const App = () => {
  return (
    <div className='main'>
      <NotInterestedIcon  className='decide' id='decide-left' fontSize='large'/>
      <Cards/>
      <FavoriteIcon className='decide' id='decide-right'fontSize='large'/>
    </div>
  )
}

export default App;