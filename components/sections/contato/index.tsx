import { useSocialLinks } from "codiedigital/dist";
import Link from "next/link";

export function Contact() {
  const socialMedias = useSocialLinks();

  const { email, facebook, instagram, linkedin, maps } = socialMedias;

  const listMedias = [email, facebook, instagram, linkedin, maps];

  return (
    <>
      {listMedias.map((socialItem) => {
        return <Link href={socialItem.url}>{socialItem.label}</Link>;
      })}
    </>
  );
}
