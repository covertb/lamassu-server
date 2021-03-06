import typographyStyles from 'src/components/typography/styles'
import baseStyles from 'src/pages/Logs.styles'
import { zircon, primaryColor } from 'src/styling/variables'

const { label1 } = typographyStyles
const { titleWrapper, titleAndButtonsContainer } = baseStyles

export default {
  titleWrapper,
  titleAndButtonsContainer,
  row: {
    display: 'flex',
    flexFlow: 'row nowrap'
  },
  rowSpaceBetween: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  column: {
    display: 'flex',
    flexFlow: 'column nowrap',
    width: '100%',
    height: '100%',
    justifyContent: 'space-between'
  },
  textInput: {
    width: 144
  },
  p: {
    fontFamily: 'MuseoSans',
    fontSize: 14,
    fontWeight: 500,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.14,
    letterSpacing: 'normal',
    color: primaryColor
  },
  txId: {
    fontFamily: 'MuseoSans',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  txClassIconLeft: {
    marginRight: 11
  },
  txClassIconRight: {
    marginLeft: 11
  },
  headerLabels: {
    display: 'flex',
    flexDirection: 'row',
    '& div': {
      display: 'flex',
      alignItems: 'center'
    },
    '& > div:first-child': {
      marginRight: 24
    },
    '& span': {
      extend: label1,
      marginLeft: 6
    }
  },
  photo: {
    width: 92,
    height: 92,
    borderRadius: 8,
    backgroundColor: zircon,
    margin: [[0, 28, 0, 0]],
    padding: [[30]],
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  idDataCard: {
    width: 544,
    height: 240
  },
  phoneCard: {
    width: 253,
    height: 240
  },
  idCardPhotoCard: {
    width: 378,
    height: 240,
    margin: [[32, 0, 0, 0]]
  },
  field: {
    position: 'relative',
    width: 144,
    height: 46,
    padding: [[0, 4, 4, 0]],
    display: 'flex',
    flexDirection: 'column',
    '& > p:first-child': {
      height: 16,
      lineHeight: '16px',
      paddingLeft: 3,
      margin: [[0, 0, 5, 0]]
    },
    '& > p:last-child': {
      margin: 0,
      paddingLeft: 4
    }
  },
  customerName: {
    marginBottom: 32
  },
  fieldDisplay: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  idCardPhoto: {
    maxWidth: 171,
    maxHeight: 97
  }
}
