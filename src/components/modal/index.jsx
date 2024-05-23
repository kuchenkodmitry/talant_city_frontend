import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../redux/slices/modal';
import { Input } from '@mui/material';
import 'animate.css'
import TextField from '@mui/material/TextField';
// import MenuItem from '@mui/material/MenuItem';
import Buttons from '../button/index';
import { useForm, SubmitHandler } from "react-hook-form"
import { useRef } from 'react';
import axios from 'axios';
import s from "./style.module.css"
import { generatedСomment } from '../../redux/slices/generatedcomment';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import classNames from 'classnames';
// import {useRef} from 'react'

const style = {
  // position: 'absolute',
  // top: '50%',
  // left: '50%',
  // transform: 'translate(-50%, -50%)',
  // width: 400,
  bgcolor: 'background.paper',
  border: '0px solid #000',
  boxShadow: 24,
  p: 4,

};

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function BasicModal() {
  const [dialogMessage, setDialogMessage] = React.useState('')
  const [open, setOpen] = React.useState(false);
  const [courseName, setCourseName] = React.useState(0)
  const refSelection = React.useRef(null)
  const inputFileRef = React.useRef(null)
  const dispatch = useDispatch()
  const { modal } = useSelector(state => state.modal)
  const { curses } = useSelector(state => state.courses)
  const { message } = useSelector(state => state.generatedСomment)
  
  const refModalWindow = React.useRef(null)
  
  const handleClose = () => {
    refModalWindow.current.classList.add('animate__backOutRight')
    setTimeout(() => {
      dispatch(closeModal())
    }, 1000)
  }
  


  const handleClickOpen = () => {
    setOpen(true);
    setTimeout(() => {
      handleCls()
    }, 3000)
  };

  const handleCls = () => {
    setOpen(false)
  };



  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  function onChangeCourse(event, value) {
    //  let nameCourse = curses.items.find((e) => {
    //     return e.id == value
    //   }).title
    console.log(value);
    // setCourse(nameCourse.title)
  }

  React.useEffect(() => {
    // let nameCourse = curses.items.find((e) => {
    //   return e.id == value
    // })
    setCourseName('sadasd')
    console.log(refSelection.current);
  }, [])

  const onSubmit = async (data) => {
    const { userName, phoneNumber, Email, course } = data


    console.log(data)
    try {
      await axios.post("https://talentcity.ru/request/curses/sign-up-for-a-course/", {
        "name": userName,
        "phone_number": Number(phoneNumber),
        "email": Email,
        "curse": message.headerBtn ? Number(course) : null,
        "customer_comment": message.headerBtn == 'courseBtn' ? ('Пользователь выбрал курс ' + courseName) : (message.headerBtn ? message.courseName : ("Пользователь хочет записаться на курс: " + message.courseName + ' в городе: ' + message.city + ", который состоится: " + message.data + " в " + message.time))
      }).then((data) => {
        if (data.status == 200) {
          // alert("заявка успешно создана!")
          setDialogMessage("заявка успешно создана!")
          handleClose()
          handleClickOpen()
        }
      })
    }
    catch {
      // alert('Что-то пошло не так, проверьте правильность введенной информации или попробуйте чуть позже!')
      setDialogMessage("Что-то пошло не так, проверьте правильность введенной информации или попробуйте чуть позже!")
      // handleClose()
      handleClickOpen()
    }

  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Поздравляем!
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {dialogMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCls}>Закрыть</Button>
        </DialogActions>
      </Dialog>
      <Modal
        sx={{
          // position: 'relative'
        }}
        open={modal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div ref={refModalWindow} className={classNames(s.modalPosition,"animate__animated", "animate__backInLeft")}>
          <Box sx={style} className={s.modal}>
            <p onClick={handleClose} className={s.closeBtn}>  X</p>
            <form style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: "20px"
            }} onSubmit={handleSubmit(onSubmit)}>
              <Typography sx={{
                fontFamily: 'InterBold',
                fontSize: 26
              }}>Записаться на Курс</Typography>
              <Typography sx={{
                fontFamily: "InterRegular",
                fontSize: "18px"
              }}>Оставьте свои контакты и мы свяжемся с вами в ближайшее время</Typography>
              <TextField id="outlined-basic" label="Имя Фамилия" variant="outlined" {...register("userName")} />
              <TextField type='number' id="outlined-basic" label="Номер телефона" variant="outlined" {...register("phoneNumber")} />
              <TextField type='email' id="outlined-basic" label="Email" variant="outlined" {...register("Email")} />
              <TextField
                ref={refSelection}
                disabled={message.headerBtn ? false : true}
                id="outlined-select-currency-native"
                select
                label={message.headerBtn ? "Пожалуйста, выберите курс" : "Вы выбрали"}
                defaultValue={message.defaultCourse}
                SelectProps={{
                  native: true,
                }}
                helperText={message.headerBtn ? "Пожалуйста, выберите курс" : "Выбранный курс"}
                {...register("course")}
              >
                {

                  curses.items.map((option) => (
                    <option onClick={() => {
                      setCourseName(option.title)
                    }} key={option.title} value={option.id}>
                      {message.headerBtn ? option.title : message.defaultCourse != null ? option.title : "Конкурс Супер Память"}
                    </option>
                  ))
                }
              </TextField>
              <div onClick={() => inputFileRef.current.click()}>
                <Buttons IsActive={"true"} details={'Отправить заявку!'} />
              </div>
              <input ref={inputFileRef} type="submit" hidden />
            </form>
          </Box>
        </div>
      </Modal>
    </div>
  );
}