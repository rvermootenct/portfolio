import { FaFilePdf, FaGithub, FaLinkedin } from 'react-icons/fa'
import { GrDocumentMissing } from 'react-icons/gr'
import { MdEmail } from 'react-icons/md'

export const ICON_NAMES = ['linkedin', 'github', 'email', 'CV'] as const

export type IconName = 'linkedin' | 'github' | 'email' | 'CV';

const titleToIcon = ({ title, style }: {
  title: IconName,
  style?: {
    color?: string
    dark?: string
    size?: number
  }
}) => {
  const iconList = {
    linkedin: FaLinkedin,
    github: FaGithub,
    email: MdEmail,
    CV: FaFilePdf,
  }
  const Icon = iconList[title] || GrDocumentMissing
  return <Icon style={style} />
}

export default titleToIcon
