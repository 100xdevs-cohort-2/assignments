import { ExternalLink } from 'lucide-react'

const Card = ({ user }) => {
  return (
    <div className="flex flex-col bg-[#003459] rounded-3xl border border-[#00A7E1] p-5 w-[28rem]">
      <img
        src="https://avatars.githubusercontent.com/u/51192422?v=4"
        className="inline-block h-[100px] w-[100px] rounded-3xl mb-4"
        alt="profile picture"
      />
      <div className="info mb-3">
        <h2 className="text-3xl font-bold mb-2 text-[#fcfafa]">{user.name}</h2>
        <p className="mb-0 text-[#00A7E1]">{user.bio}</p>
      </div>

      <div className="interests mb-4">
        <h5 className="text-sm font-semibold mb-2 text-[#fcfafa]">Interests</h5>
        <div className="flex gap-1">
          {user.interests.map((interest) => (
            <span
              key={interest}
              className="bg-[#00A7E1] text-[#fcfafa] rounded-full px-3 py-1 text-xs font-semibold"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>

      <div className="socials">
        <h5 className="text-sm font-semibold mb-2 text-[#fcfafa]">Socials</h5>
        <div className="flex gap-2">
          {user.socials.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="bg-[#00A7E1] text-[#fcfafa] hover:bg-[hsl(195,100%,50%)] ease-linear duration-200 rounded-2xl px-4 py-3 text-xs font-semibold"
            >
              <span className="flex items-center">{link.title} <ExternalLink className='h-3 w-3 ml-1' /></span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card
