// deps
import styled from 'styled-components/native';

// assets
import { farmTruckBanner } from './assets';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const Banner = styled.Image.attrs({
  source: farmTruckBanner,
  resizeMode: 'cover',
})`
  height: 300px;
  width: 100%;

  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
`;
