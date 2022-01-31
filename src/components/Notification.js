export default class Notification {
  constructor(notificationsSelector) {
    this._notifications = notificationsSelector;
    // this._notification = this._notifications.querySelector('.notification');
    // this._message = this._notification.querySelector('.notification__message');
  }

  _cloneNode() {
    this._notificationElement = document
      .querySelector('#notification')
      .content
      .querySelector('.notification')
      .cloneNode(true);
  }

  _createNotification(message) {
    this._cloneNode();
    this._notificationElement.querySelector('.notification__message').textContent = message;
    // this._notifications.prepend(this._notificationElement);
    return this._notificationElement;
  }

  popup(message) {
    const newPopUp = this._createNotification(message);
    this._notifications.append(newPopUp);
    const animatePopUp = (element) => {
      element.classList.remove('notification__message_hided');
      element.classList.add('notification__message_shown');
    };

    const animateHideOut = (element) => {
      setTimeout(() => {
        element.classList.remove('notification__message_shown');
      }, 1000);
      element.classList.add('notification__message_hided');
    };
    animatePopUp(newPopUp);
    setTimeout(() => animateHideOut(newPopUp), 5000);
  }
}
