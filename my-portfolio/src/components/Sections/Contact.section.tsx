import type { NextComponentType } from 'next'

import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
} from '../Misc/Icons.collection'

import { Icon } from '../Misc/icon.component'

const Contact: NextComponentType = () => {
  return (
    <div className="px-3 font-sen" id="contact">
      <p className="text-3xl font-bold text-white">Contact Me By...</p>

      <div className="my-8 flex flex-row justify-center gap-x-4">
        <Icon icon={<AiOutlineGithub />} url="https://github.com/krith-raju" />

        <Icon
          icon={<AiOutlineLinkedin />}
          url="https://www.linkedin.com/in/krithanjay-raju-55004b239/"
        />

        <Icon icon={<AiOutlineMail />} url="mailto:kraju30@gatech.edu" />
      </div>
    </div>
  )
}

export default Contact
