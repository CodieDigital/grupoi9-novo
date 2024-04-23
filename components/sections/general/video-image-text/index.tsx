import { Icon, Error, Container } from "codiedigital";

import { IVideoImageText } from "./interfaces";

import * as S from "./styles";

export function VideoImageText({
  data,
  noMask,
  hasAspectRatio,
}: IVideoImageText) {
  return (
    <Error name="Video Section">
      <S.VideoImageText
        $bgImage={data.image}
        $noMask={noMask}
        $hasAspectRatio={hasAspectRatio}
      >
        {data.video && (
          <video
            autoPlay
            loop
            muted
            playsInline
            src={data.video}
            className="back-video"
          ></video>
        )}

        {data && (
          <Container>
            <div className="box-text">
              <div className="box-title">
                {data.subtitle && (
                  <span
                    className="paragraph-2 uppercase subtitle"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    dangerouslySetInnerHTML={{ __html: data.subtitle }}
                  ></span>
                )}

                {data.title && (
                  <h2
                    className="title-2-avianoFlare uppercase title"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    {data.title}
                  </h2>
                )}

                {data.youtubeLink && data.youtubeTextButton && (
                  <a
                    href={data.youtubeLink}
                    target="_blank"
                    className="button-youtube link-1"
                  >
                    <Icon name="YouTubeIcon" />
                    {data.youtubeTextButton}
                  </a>
                )}
              </div>

              {data.description && (
                <div
                  className="paragraph-2 text"
                  dangerouslySetInnerHTML={{
                    __html: data.description,
                  }}
                  data-aos="fade-up"
                  data-aos-duration="1500"
                ></div>
              )}
            </div>
          </Container>
        )}
      </S.VideoImageText>
    </Error>
  );
}
