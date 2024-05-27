import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardCourses from '../cards/courses';
import style from './style.module.css'
import { useSelector } from 'react-redux';
import SuperMemory from '../superMemory';
import VideoCard from '../cards/videos';
import BooksCard from '../cards/books';
import classNames from 'classnames';
import Schedule from '../cards/schedule'
import 'animate.css';
import { useDispatch } from 'react-redux';
import { changeTabId } from '../../redux/slices/tab_id'

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const dispatch = useDispatch()
  const { tab_id } = useSelector(state => state.tabs)
  const [value, setValue] = React.useState(0);
  const { curses } = useSelector(state => state.courses)
  const { books } = useSelector(state => state.books)
  const { schedule } = useSelector(state => state.schedule)
  const { videos } = useSelector(state => state.videos)
  const isLoaded = curses.status == 'loaded'

  // console.log();

  const handleChange = (event, newValue) => {
    // setValue(newValue);
    dispatch(changeTabId(newValue))
    console.log(tab_id);
    // console.log(newValue);
  };

  const styles = {
    margin: "15px 15px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "fit-content",
    padding: "12px 30px 14px 30px",
    borderRadius: "12px",
    boxShadow: "0px 15px 30px 0px rgba(220, 232, 243, 0.25)",
    borderRadius: "12px",
    boxShadow: " 0px 5px 10px 0px rgba(0, 0, 0, 0.05)",
    background: "rgb(255, 255, 255)",
    fontFamily: "InterRegular",
    fontSize: "18px",
    fontWeight: "500",
    lineHeight: "120%",
    letterSpacing: "0%",
    cursor: "pointer",
    '&.Mui-selected': {
      background: "linear-gradient(225.00deg, rgb(0, 185, 182) 0%, rgb(0, 205, 172) 100%)",
      boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.05)",
      color: "rgb(255, 255, 255)",
      outline: 'none',
    },
    '@media (max-width: 379px)': {
      margin: "5px 5px",
    }


  }

  return (
    <Box id="schedule" className="animate__animated animate__bounceInUp">

      {/* <p className={style.tabTitle}>Выберите интересующий вас раздел</p> */}
      <Box >
        <Tabs sx={{
          "& .MuiTabs-indicator": { display: "none" }, display: 'block',
          "& .MuiTabs-flexContainer": { display: 'flex', justifyContent: 'center' }, '@media (max-width: 1024px)': {
            "& .MuiTabs-flexContainer": {display: 'flex', flexWrap: "wrap" },
            '@media (max-width: 624px)': {
              "& .MuiTabs-flexContainer": {
                display: 'flex', flexWrap: "wrap", gap: '0px', margin: 0
              }
            }
          }
        }} value={tab_id} onChange={handleChange} aria-label="basic tabs example">
          <Tab sx={styles} label="Курсы" {...a11yProps(0)} />
          <Tab sx={styles} label="Расписание" {...a11yProps(1)} />
          <Tab sx={styles} label="Книги" {...a11yProps(2)} />
          <Tab sx={styles} label="Видео" {...a11yProps(3)} />
          <Tab sx={styles} label="Конкурс суперпамять" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={tab_id} index={0}>
        <div className={style.cardsPositon}>
          {
            isLoaded ? (curses.items.map((el, index) => {
              return (<CardCourses data={el} key={index} />)
            })) : ([...Array(6)].map((e, i) => {
              return (<div></div>)
            }))
          }
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={tab_id} index={1}>
        <div style={{
          // flexDirection: 'column',
          gap: '30px'
        }} className={style.schedulePosition}>
          {
            isLoaded ? (schedule.items.map((el, index) => {
              return (<Schedule data={el} key={index} />)
            })) : ([...Array(6)].map((e, i) => {
              return (<div></div>)
            }))
          }
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={tab_id} index={2}>
        <div className={style.cardsPositon}>
          {isLoaded ? (books.items.map((el, index) => {
            return (<BooksCard data={el} key={index} />)
          })) : ([...Array(6)].map((e, i) => {
            return (<div></div>)
          }))}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={tab_id} index={3}>
        <div className={style.videosPositon}>
          {isLoaded ? videos.items.map((e, i) => {
            return (<VideoCard data={e} key={i} />)
          }) : ''}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={tab_id} index={4}>
        <div className={style.blockPostion}>
          {<SuperMemory />}
        </div>
      </CustomTabPanel>
      <div className={style.videoBlock}>
        <div className={style.videoBackground}>

          <p className={classNames(style.tabTitle, style.titleVideo)}>Что такое ваша память?</p>
          <iframe className={style.agressivAds} src="https://www.youtube.com/embed/xFFRh_2bp7w?si=F41ctTFzg5-PmRbx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </div>
      </div>
    </Box>
  );
}