import SocialCard from "./SocialCard";
import DiscordIcon from "../../assets/social/discord.svg?react";
import LinkedinIcon from "../../assets/social/linkedin.svg?react";
import GmailIcon from "../../assets/social/gmail.svg?react";
import GitHubIcon from "../../assets/social/github.svg?react";

export default function SocialMedia() {
  return (
    <div className="flex gap-6 text-black">
      <SocialCard path="https://www.linkedin.com/in/asmaeman/">
        <LinkedinIcon className="group-hover:fill-primary-white h-5 w-5 md:h-10 md:w-10" />
      </SocialCard>
      <SocialCard path="https://github.com/AsmaEman">
        <GitHubIcon className="group-hover:fill-primary-white h-5 w-5 md:h-10 md:w-10" />
      </SocialCard>
      <SocialCard path="https://discord.com/users/1132302115532963923">
        <DiscordIcon className="group-hover:fill-primary-white h-5 w-5 md:h-10 md:w-10" />
      </SocialCard>
      <SocialCard path="mailto:asmaeman9253939@gmail.com">
        <GmailIcon className="group-hover:fill-primary-white h-5 w-5 md:h-10 md:w-10" />
      </SocialCard>
    </div>
  );
}
