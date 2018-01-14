import React, { PropTypes } from 'react';
import * as NotificationStyled from 'template/components/Notification/NotificationStyled';

const Notification = ({ children, color }) => (
  <NotificationStyled.Component color={color}>
    <NotificationStyled.Text>
      {children}
    </NotificationStyled.Text>
  </NotificationStyled.Component>
);

Notification.propTypes = {
  children: PropTypes.shape().isRequired,
  color: PropTypes.string.isRequired,
};

export default Notification;
