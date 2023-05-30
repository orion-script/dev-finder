import React from 'react';
import { User } from '../types/UserTypes';
import Optionalinfo from './Optionalinfo';

export const infoList = ['location', 'blog', 'twitter', 'company'] as const;

type Props = {
  user: User;
};

const OptionalInfoList: React.FC<Props> = ({ user }) => (
  <ul className="grid  grid-cols-2 gap-y-2">
    {infoList.map((info) => (
      <Optionalinfo user={user} info={info} key={info} />
    ))}
  </ul>
);

export default OptionalInfoList;