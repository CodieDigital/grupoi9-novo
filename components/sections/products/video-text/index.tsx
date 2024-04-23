import { Container, Error } from 'components/data';

import * as S from './styles';

export function VideoText({ data }: { data: { title: string; text: string } }) {
  return (
    <Error name={'Video Text'}>
      <S.VideoText $hasText={!!data.title && !!data.text}>
        <Container>
          {data && data.title && data.text && (
            <h2 className="title-3-avianoFlare show-mobile">{data.title}</h2>
          )}

          <video
            controls
            src={'/videos/video-products-new.mp4'}
            className="video"
          ></video>

          {data && data.title && data.text && (
            <div className="box-text">
              <h2 className="title-3-avianoFlare hide-mobile">{data.title}</h2>

              <div
                className="paragraph-2 description"
                dangerouslySetInnerHTML={{
                  __html: data.text,
                }}
              ></div>
            </div>
          )}
        </Container>
      </S.VideoText>
    </Error>
  );
}
