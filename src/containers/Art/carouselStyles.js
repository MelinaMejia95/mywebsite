export const customStyles = {
  navButtonStyles: {
    backgroundColor: 'white',
    boxShadow: '0 1px 6px rgba(0, 0, 0, 0.18)',
    color: 'black',

    '&:hover, &:active': {
      backgroundColor: 'white',
      color: 'black',
      opacity: 1,
    },
    '&:active': {
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.14)',
      transform: 'scale(0.96)',
    }
  },
  view: {
    alignItems: 'center',
    display: 'flex ',
    height: 'calc(100vh - 54px)',
    justifyContent: 'center',
    '& > img': {
      maxHeight: 'calc(100vh - 94px)',
    }
  },
  container: {
    height: '100vh'
  }
}