import React from 'react'
import './sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from './DataLayer';
function Sidebar() {
  const [{playlists}] = useDataLayerValue()
  return (
    <div className='sidebar'>
      <img className='sidebar__logo'
      src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt='' />
      <SidebarOption Icon={HomeIcon} title='Home' />
      <SidebarOption Icon={SearchIcon} title='Search' />
      <SidebarOption Icon={LibraryMusicIcon} title='Your libary' />
      <br/>
      <strong className='sidebar__title'>PLAYLIST</strong>
      <hr/>
      {playlists?.items?.map((playlist)=>(
        <SidebarOption key={playlist.id} title={playlist.name} />
       ))}
    </div>
  )
}

export default Sidebar
